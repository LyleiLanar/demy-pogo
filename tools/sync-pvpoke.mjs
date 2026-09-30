// Legenerálja a data/pvpoke.js-t a PvPoke GitHubon lévő adataiból és a játék game masteréből:
// típusok, Mega formák, buddy km, Great és Ultra League helyezés, ajánlott mozdulatok és párharcok,
// valamint az ajánlott (PvPoke- és kézzel írt) mozdulatok típusa.
// Csak a data/pokemon.js-ben szereplő fajokat veszi fel.
//
// Futtatás: node tools/sync-pvpoke.mjs

import { readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';
import { DETAIL_RANK_LIMIT, describeSpecies, loadMaxForms, loadPvpokeData } from './pvpoke-common.mjs';

const POKEMON_FILE = new URL('../data/pokemon.js', import.meta.url);
const OUTPUT_FILE = new URL('../data/pvpoke.js', import.meta.url);

async function loadPokemon() {
  const source = await readFile(POKEMON_FILE, 'utf8');
  const context = {};
  vm.runInNewContext(`${source}\nthis.POKEMON = POKEMON;`, context);
  return context.POKEMON;
}

// Minden mozdulatnév egy objektumfában: a { fast: [...], charged: [...] } listák elemei.
function collectMoveNames(value, names = new Set()) {
  if (Array.isArray(value)) value.forEach((item) => collectMoveNames(item, names));
  else if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) {
      if ((key === 'fast' || key === 'charged') && Array.isArray(item)) item.forEach((name) => names.add(name));
      else collectMoveNames(item, names);
    }
  }
  return names;
}

const INLINE_MAX_LENGTH = 100;

function isPrimitive(value) {
  return typeof value !== 'object' || (Array.isArray(value) && value.every((item) => typeof item !== 'object'));
}

// JS-literál kiírása: rövid, egyszerű értékek egy sorban, a többi tagolva.
function toJs(value, indent = 0) {
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
  if (typeof value !== 'object') return String(value);
  const pad = '  '.repeat(indent + 1);
  const end = '  '.repeat(indent);
  if (Array.isArray(value)) {
    if (value.every(isPrimitive)) return `[${value.map((item) => toJs(item)).join(', ')}]`;
    return `[\n${value.map((item) => `${pad}${toJs(item, indent + 1)},`).join('\n')}\n${end}]`;
  }
  const entries = Object.entries(value).map(([key, item]) => [/^\w+$/.test(key) ? key : toJs(key), item]);
  const inline = `{ ${entries.map(([key, item]) => `${key}: ${toJs(item)}`).join(', ')} }`;
  if (Object.values(value).every(isPrimitive) && inline.length <= INLINE_MAX_LENGTH) return inline;
  return `{\n${entries.map(([key, item]) => `${pad}${key}: ${toJs(item, indent + 1)},`).join('\n')}\n${end}}`;
}

async function main() {
  const [pokemon, data, maxForms] = await Promise.all([loadPokemon(), loadPvpokeData(), loadMaxForms()]);

  const result = {};
  const missing = [];
  for (const { id } of pokemon) {
    const entry = describeSpecies(id, data, DETAIL_RANK_LIMIT, maxForms);
    if (entry) result[id] = entry;
    else missing.push(id);
  }

  const moveNames = [...collectMoveNames([result, pokemon])].sort();
  const knownMoves = moveNames.filter((name) => data.moveTypes.has(name));
  const moveTypes = Object.fromEntries(knownMoves.map((name) => [name, data.moveTypes.get(name)]));
  const unknownMoves = moveNames.filter((name) => !data.moveTypes.has(name));

  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '. ') + '.';
  const output = `// GENERÁLT FÁJL, ne szerkeszd kézzel. Frissítés: node tools/sync-pvpoke.mjs
// Forrás: github.com/pvpoke/pvpoke (gamemaster és rankings-1500/2500).
// dex: a Pokédex-szám (a regionális formáknak ugyanaz, mint az alapfajnak)
// megaForms: a faj Mega formái a típusukkal (csak raidben számítanak)
// maxForms: Dynamax / Gigantamax formák (a játék game masteréből, PokeMiners)
// shadow: a Shadow változat Great és Ultra League adatai
// specialMoves: csak Elite TM-mel vagy eseményen megszerezhető mozdulatok
// moveset: az ajánlott szett ({ fast, charged })
// beats / losesTo: a legfontosabb nyert és vesztett párharcok
// PVPOKE_MOVE_TYPES: az ajánlott mozdulatok típusa (a PvPoke-szettekből és a pokemon.js-ből)

const PVPOKE_DATE = '${date}';

const PVPOKE = ${toJs(result)};

const PVPOKE_MOVE_TYPES = ${toJs(moveTypes)};
`;
  await writeFile(OUTPUT_FILE, output);
  console.log(`data/pvpoke.js: ${Object.keys(result).length} faj`);
  if (missing.length) console.warn(`Nincs a PvPoke-adatban: ${missing.join(', ')}`);
  if (unknownMoves.length) console.warn(`Ismeretlen mozdulatnév (elírás?): ${unknownMoves.join(', ')}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
