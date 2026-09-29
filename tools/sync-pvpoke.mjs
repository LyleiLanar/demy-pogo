// Legenerálja a pvpoke.js-t a PvPoke GitHubon lévő adataiból:
// típusok, Mega formák, buddy km, Great és Ultra League helyezés, ajánlott mozdulatok és párharcok.
// Csak a pokemon.js-ben szereplő fajokat veszi fel.
//
// Futtatás a repó gyökeréből: node tools/sync-pvpoke.mjs

import { readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';
import { describeSpecies, loadPvpokeData } from './pvpoke-common.mjs';

async function loadPokemonIds() {
  const source = await readFile('pokemon.js', 'utf8');
  const context = {};
  vm.runInNewContext(`${source}\nthis.POKEMON = POKEMON;`, context);
  return context.POKEMON.map((species) => species.id);
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
  const [ids, data] = await Promise.all([loadPokemonIds(), loadPvpokeData()]);

  const result = {};
  const missing = [];
  for (const id of ids) {
    const entry = describeSpecies(id, data);
    if (entry) result[id] = entry;
    else missing.push(id);
  }

  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '. ') + '.';
  const output = `// GENERÁLT FÁJL, ne szerkeszd kézzel. Frissítés: node tools/sync-pvpoke.mjs
// Forrás: github.com/pvpoke/pvpoke (gamemaster és rankings-1500/2500).
// megaForms: a faj Mega formái a típusukkal (csak raidben számítanak)
// shadow: a Shadow változat Great és Ultra League adatai
// moveset: az ajánlott szett, * = Elite TM vagy eseményes mozdulat
// beats / losesTo: a legfontosabb nyert és vesztett párharcok

const PVPOKE_DATE = '${date}';

const PVPOKE = ${toJs(result)};
`;
  await writeFile('pvpoke.js', output);
  console.log(`pvpoke.js: ${Object.keys(result).length} faj`);
  if (missing.length) console.warn(`Nincs a PvPoke-adatban: ${missing.join(', ')}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
