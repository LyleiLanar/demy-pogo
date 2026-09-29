// Egy faj minden PvPoke-adata a Pokédex kitöltéséhez: azonosító, típus, címkék, Megák,
// fejlődési sor, Elite mozdulatok, és a GL/UL helyezés szettel a normál és a Shadow formára.
//
// Futtatás a repó gyökeréből: node tools/pvpoke-lookup.mjs <név vagy azonosító>
// Példa: node tools/pvpoke-lookup.mjs decidueye

import { describeSpecies, displayName, loadPvpokeData } from './pvpoke-common.mjs';

const MAX_MATCHES = 10;
const RELEVANT_TAGS = ['legendary', 'mythical', 'ultrabeast', 'shadoweligible', 'starter'];

function normalize(text) {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

// A keresett fajok: az azonosító vagy a név tartalmazza a kifejezést; Shadow és Mega bejegyzések nélkül,
// mert azok az alapfaj leírásában szerepelnek.
function findSpecies(query, data) {
  const needle = normalize(query);
  return data.gamemaster.pokemon
    .filter((species) => !/_shadow$|_mega(_[xy])?$/.test(species.speciesId))
    .filter((species) => normalize(species.speciesId).includes(needle) || normalize(species.speciesName).includes(needle))
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

function printSpecies(species, data) {
  const entry = describeSpecies(species.speciesId, data, Infinity);
  const tags = (species.tags || []).filter((tag) => RELEVANT_TAGS.includes(tag));
  const eliteMoves = [...(species.eliteMoves || []), ...(species.legacyMoves || [])].map((id) => data.moves.get(id) || id);

  console.log(`\n${displayName(species.speciesName)}  (id: ${species.speciesId})`);
  console.log(`  típus:        ${entry.types.join(' / ')}`);
  console.log(`  címkék:       ${tags.join(', ') || '-'}`);
  console.log(`  fejlődés:     ${evolutionLine(species, data)}`);
  console.log(`  buddy:        ${entry.buddyKm ?? '-'} km / cukor`);
  console.log(`  Elite / esemény mozdulat: ${eliteMoves.join(', ') || '-'}`);
  console.log(`  Mega:         ${(entry.megaForms || []).map((mega) => `${mega.name} (${mega.types.join('/')})`).join(', ') || 'nincs'}`);
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
  const data = await loadPvpokeData();
  const matches = findSpecies(query, data);
  if (matches.length === 0) {
    console.log(`Nincs találat erre: ${query}`);
    return;
  }
  matches.forEach((species) => printSpecies(species, data));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
