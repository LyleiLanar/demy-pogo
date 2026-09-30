// Egy faj minden gépi adata a Pokédex kitöltéséhez: azonosító, típus, címkék, Megák, Dynamax /
// Gigantamax, fejlődési sor, Elite mozdulatok, és a GL/UL helyezés szettel a normál és a Shadow formára.
// Források: PvPoke (GitHub) és a játék kibányászott game mastere (PokeMiners, GitHub).
//
// Futtatás a repó gyökeréből: node tools/pvpoke-lookup.mjs <név vagy azonosító>
// Példa: node tools/pvpoke-lookup.mjs decidueye

import { describeSpecies, displayName, loadMaxForms, loadPvpokeData, maxFormsOf } from './pvpoke-common.mjs';

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

function evolutionLine(species, data) {
  const family = species.family || {};
  const parent = family.parent && data.speciesById.get(family.parent);
  const children = (family.evolutions || []).map((id) => data.speciesById.get(id)).filter(Boolean);
  const parts = [];
  if (parent) parts.push(`előző: ${displayName(parent.speciesName)}`);
  if (children.length) parts.push(`következő: ${children.map((child) => displayName(child.speciesName)).join(', ')}`);
  return parts.join(' · ') || 'nem fejlődik';
}

function printSpecies(species, data, maxForms) {
  const entry = describeSpecies(species.speciesId, data, Infinity);
  const tags = (species.tags || []).filter((tag) => RELEVANT_TAGS.includes(tag));
  const eliteMoves = [...(species.eliteMoves || []), ...(species.legacyMoves || [])].map((id) => data.moves.get(id) || id);

  console.log(`\n#${species.dex} ${displayName(species.speciesName)}  (id: ${species.speciesId})`);
  console.log(`  típus:        ${entry.types.join(' / ')}`);
  console.log(`  címkék:       ${tags.join(', ') || '-'}`);
  console.log(`  fejlődés:     ${evolutionLine(species, data)}`);
  console.log(`  buddy:        ${entry.buddyKm ?? '-'} km / cukor`);
  console.log(`  Elite / esemény mozdulat: ${eliteMoves.join(', ') || '-'}`);
  console.log(`  Mega:         ${(entry.megaForms || []).map((mega) => `${mega.name} (${mega.types.join('/')})`).join(', ') || 'nincs'}`);
  console.log(`  Max Battle:   ${maxFormsOf(species.speciesId, maxForms).join(', ') || 'nincs Dynamax / Gigantamax forma'}`);
  const forms = [['Normál', entry], ['Shadow', entry.shadow]];
  for (const [formName, form] of forms) {
    if (!form) continue;
    for (const [key, label] of [['greatLeague', 'GL'], ['ultraLeague', 'UL']]) {
      const league = form[key];
      if (!league) continue;
      const moveset = league.moveset ? `  szett: ${league.moveset.join(' · ')}` : '';
      console.log(`  ${formName.padEnd(6)} ${label}: ${String(league.rank).padStart(4)}. hely${moveset}`);
    }
  }
  if (!entry.shadow) console.log('  Shadow:       nincs rangsorolva (valószínűleg nincs Shadow változat)');
}

async function main() {
  const query = process.argv.slice(2).join(' ');
  if (!query) {
    console.error('Használat: node tools/pvpoke-lookup.mjs <név vagy azonosító>');
    process.exit(1);
  }
  const [data, maxForms] = await Promise.all([loadPvpokeData(), loadMaxForms()]);
  const matches = findSpecies(query, data);
  if (matches.length === 0) {
    console.log(`Nincs találat erre: ${query}`);
    return;
  }
  matches.forEach((species) => printSpecies(species, data, maxForms));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
