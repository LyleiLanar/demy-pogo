// Egy faj minden gépi adata a Pokédex kitöltéséhez: azonosító, típus, címkék, Megák, Dynamax /
// Gigantamax, fejlődési sor, Elite mozdulatok, és a GL/UL helyezés szettel a normál és a Shadow formára.
// Források: PvPoke (GitHub) és a játék kibányászott game mastere (PokeMiners, GitHub).
//
// Futtatás: node tools/pvpoke-lookup.mjs [--json] <név vagy azonosító>
// Példa: node tools/pvpoke-lookup.mjs decidueye
// A --json a data/pvpoke.js-be kerülő teljes bejegyzést írja ki (minden helyezés részletesen).

import { describeSpecies, displayName, loadGameMaster, loadPvpokeData } from './pvpoke-common.mjs';

const MAX_MATCHES = 10;
const RELEVANT_TAGS = ['legendary', 'mythical', 'ultrabeast', 'shadoweligible', 'starter'];

function normalize(text) {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

// A keresett fajok: a kifejezés minden szava szerepel az azonosítóban vagy a névben, bármilyen sorrendben
// („alolan ninetales” = „Ninetales (Alolan)”). Shadow és Mega bejegyzések nélkül, mert azok az alapfaj
// leírásában szerepelnek.
function findSpecies(query, data) {
  const words = query.split(/\s+/).map(normalize).filter(Boolean);
  return data.gamemaster.pokemon
    .filter((species) => !/_shadow$|_mega(_[xy])?$/.test(species.speciesId))
    .filter((species) => {
      const haystack = normalize(species.speciesId) + normalize(species.speciesName);
      return words.every((word) => haystack.includes(word));
    })
    .slice(0, MAX_MATCHES);
}

// „Charmander → Charmeleon (25 cukor) → [Charizard] (100 cukor)”; elágazásnál a fokon „/” választja el.
function describeCost(stage) {
  if (stage.candy === undefined) return '';
  const details = [`${stage.candy} cukor`, stage.item, stage.tradeFree && 'cserével ingyen',
    stage.buddyKm && `buddyként ${stage.buddyKm} km`, stage.gender, stage.time, stage.quest && 'feladat'];
  return ` (${details.filter(Boolean).join(', ')})`;
}

function evolutionLine(entry) {
  if (!entry.evolution) return 'nem fejlődik';
  return entry.evolution
    .map((stages) => stages.map((stage) => `${stage.current ? `[${stage.name}]` : stage.name}${describeCost(stage)}`).join(' / '))
    .join(' → ');
}

function printSpecies(species, data, gameMaster, asJson) {
  const entry = describeSpecies(species.speciesId, data, Infinity, gameMaster);
  if (asJson) {
    console.log(JSON.stringify({ id: species.speciesId, name: displayName(species.speciesName), ...entry }, null, 2));
    return;
  }
  const tags = (species.tags || []).filter((tag) => RELEVANT_TAGS.includes(tag));

  console.log(`\n#${species.dex} ${displayName(species.speciesName)}  (id: ${species.speciesId})`);
  console.log(`  típus:        ${entry.types.join(' / ')}`);
  console.log(`  címkék:       ${tags.join(', ') || '-'}`);
  console.log(`  fejlődés:     ${evolutionLine(entry)}`);
  console.log(`  buddy:        ${entry.buddyKm ?? '-'} km / cukor`);
  console.log(`  Elite / esemény mozdulat: ${(entry.specialMoves || []).join(', ') || '-'}`);
  console.log(`  Mega:         ${(entry.megaForms || []).map((mega) => `${mega.name} (${mega.types.join('/')})`).join(', ') || 'nincs'}`);
  console.log(`  Max Battle:   ${(entry.maxForms || []).join(', ') || 'nincs Dynamax / Gigantamax forma'}`);
  const forms = [['Normál', entry], ['Shadow', entry.shadow]];
  for (const [formName, form] of forms) {
    if (!form) continue;
    for (const [key, label] of [['greatLeague', 'GL'], ['ultraLeague', 'UL']]) {
      const league = form[key];
      if (!league) continue;
      const moveset = league.moveset
        ? `  Fast: ${league.moveset.fast.join(', ')} · Charged: ${league.moveset.charged.join(', ')}` : '';
      console.log(`  ${formName.padEnd(6)} ${label}: ${String(league.rank).padStart(4)}. hely${moveset}`);
    }
  }
  if (!entry.shadow) console.log('  Shadow:       nincs rangsorolva (valószínűleg nincs Shadow változat)');
}

async function main() {
  const args = process.argv.slice(2);
  const asJson = args.includes('--json');
  const query = args.filter((arg) => arg !== '--json').join(' ');
  if (!query) {
    console.error('Használat: node tools/pvpoke-lookup.mjs [--json] <név vagy azonosító>');
    process.exit(1);
  }
  const [data, gameMaster] = await Promise.all([loadPvpokeData(), loadGameMaster()]);
  const matches = findSpecies(query, data);
  if (matches.length === 0) {
    console.log(`Nincs találat erre: ${query}`);
    return;
  }
  matches.forEach((species) => printSpecies(species, data, gameMaster, asJson));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
