// Új faj(ok) felvétele a data/pokemon.js-be: id vagy (angol) név alapján megkeresi a PvPoke-adatban,
// és id szerinti helyre beszúr egy { id: '...' } sort. A gépi adatot utána a sync-pvpoke.mjs adja.
// Ha valamelyik nem található vagy nem egyértelmű, semmit nem ír, és hibával kilép.
//
// Futtatás: node tools/add-pokemon.mjs glaceon "Galarian Stunfisk" "mr. mime"
//           (vesszővel elválasztva is jó: node tools/add-pokemon.mjs "glaceon, lapras")

import { readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';
import { displayName, loadPvpokeData } from './pvpoke-common.mjs';

const POKEMON_FILE = new URL('../data/pokemon.js', import.meta.url);
// A Shadow és a Mega nem külön bejegyzés, a faj kártyáján formaként jelenik meg.
const FORM_SUFFIXES = ['_shadow', '_mega', '_mega_x', '_mega_y'];
const SUGGESTION_COUNT = 8;

// „Mr. Mime” → „mrmime”, „Flabébé” → „flabebe”
function normalize(text) {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function candidatesOf(gamemaster) {
  return gamemaster.pokemon
    .filter(({ speciesId }) => !FORM_SUFFIXES.some((suffix) => speciesId.endsWith(suffix)))
    .map(({ speciesId, speciesName }) => ({
      id: speciesId,
      name: displayName(speciesName),
      keys: new Set([speciesId, speciesName, displayName(speciesName)].map(normalize)),
    }));
}

// A pontos egyezés nyer; ha nincs, az egyetlen, a keresett szöveggel kezdődő faj.
function findSpecies(query, candidates) {
  const key = normalize(query);
  if (!key) return { error: 'üres név' };
  const exact = candidates.filter((candidate) => candidate.keys.has(key));
  if (exact.length === 1) return { species: exact[0] };
  const partial = exact.length ? exact : candidates.filter((candidate) => [...candidate.keys].some((k) => k.startsWith(key)));
  if (partial.length === 1) return { species: partial[0] };
  if (!partial.length) return { error: 'nincs ilyen Pokémon a PvPoke-adatban' };
  const list = partial.slice(0, SUGGESTION_COUNT).map(({ id, name }) => `${name} (${id})`).join(', ');
  return { error: `több is illik rá, add meg pontosabban: ${list}${partial.length > SUGGESTION_COUNT ? ', …' : ''}` };
}

// Az egyes bejegyzések kezdősora és id-je: „  { id: 'x' … }” vagy „  {” + „    id: 'x',”.
function entryStarts(lines) {
  const starts = [];
  lines.forEach((line, index) => {
    const inline = /^ {2}\{ id: '([^']+)'/.exec(line);
    if (inline) starts.push({ index, id: inline[1] });
    else if (line === '  {') {
      const block = /^ {4}id: '([^']+)'/.exec(lines[index + 1] || '');
      if (block) starts.push({ index, id: block[1] });
    }
  });
  return starts;
}

function insertEntry(source, id) {
  const lines = source.split('\n');
  const next = entryStarts(lines).find((entry) => entry.id > id);
  const index = next ? next.index : lines.findIndex((line) => line === '];');
  lines.splice(index, 0, `  { id: '${id}' },`);
  return lines.join('\n');
}

async function main() {
  const queries = process.argv.slice(2).flatMap((arg) => arg.split(',')).map((query) => query.trim()).filter(Boolean);
  if (!queries.length) throw new Error('Adj meg legalább egy Pokémont (id vagy angol név).');

  const source = await readFile(POKEMON_FILE, 'utf8');
  const context = {};
  vm.runInNewContext(`${source}\nthis.POKEMON = POKEMON;`, context);
  const existing = new Set(context.POKEMON.map(({ id }) => id));
  const { gamemaster } = await loadPvpokeData();
  const candidates = candidatesOf(gamemaster);

  const added = [];
  const errors = [];
  for (const query of queries) {
    const { species, error } = findSpecies(query, candidates);
    if (error) errors.push(`„${query}”: ${error}`);
    else if (existing.has(species.id) || added.some(({ id }) => id === species.id)) console.log(`Már szerepel: ${species.name} (${species.id})`);
    else added.push(species);
  }
  if (errors.length) throw new Error(errors.join('\n'));
  if (!added.length) return;

  const updated = added.reduce((text, { id }) => insertEntry(text, id), source);
  await writeFile(POKEMON_FILE, updated);
  for (const { id, name } of added) console.log(`Felvéve: ${name} (${id})`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
