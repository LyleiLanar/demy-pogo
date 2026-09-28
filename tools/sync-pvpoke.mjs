// Legenerálja a pvpoke.js-t a PvPoke GitHubon lévő adataiból:
// típusok, buddy km, Great és Ultra League helyezés, ajánlott mozdulatok és párharcok.
// Csak a pokemon.js-ben szereplő fajokat veszi fel.
//
// Futtatás a repó gyökeréből: node tools/sync-pvpoke.mjs

import { readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';

const DATA_URL = 'https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data';
const LEAGUES = { greatLeague: 1500, ultraLeague: 2500 };
// E helyezés fölött csak a helyezést tároljuk, a szett és a párharcok ott már nem érdekesek.
const DETAIL_RANK_LIMIT = 100;
const MATCHUP_COUNT = 3;
const REGIONAL_FORMS = ['Alolan', 'Galarian', 'Hisuian', 'Paldean'];

async function fetchJson(path) {
  const response = await fetch(`${DATA_URL}/${path}`);
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  return response.json();
}

async function loadPokemonIds() {
  const source = await readFile('pokemon.js', 'utf8');
  const context = {};
  vm.runInNewContext(`${source}\nthis.POKEMON = POKEMON;`, context);
  return context.POKEMON.map((species) => species.id);
}

// „Ninetales (Shadow)” → „Shadow Ninetales”, „Corsola (Galarian)” → „Galarian Corsola”
function displayName(speciesName) {
  const match = /^(.+) \((.+)\)$/.exec(speciesName);
  if (!match) return speciesName;
  const [, name, form] = match;
  return form === 'Shadow' || REGIONAL_FORMS.includes(form) ? `${form} ${name}` : speciesName;
}

function rankIndex(rankings) {
  return new Map(rankings.map((entry, index) => [entry.speciesId, { ...entry, rank: index + 1 }]));
}

function describeLeague(id, ranking, species, moves, names) {
  const own = ranking.get(id);
  const shadow = id.endsWith('_shadow') ? undefined : ranking.get(`${id}_shadow`);
  if (!own && !shadow) return undefined;

  const league = {};
  if (own) league.rank = own.rank;
  if (shadow) league.shadowRank = shadow.rank;

  const best = [own, shadow].filter(Boolean).sort((a, b) => a.rank - b.rank)[0];
  if (best.rank > DETAIL_RANK_LIMIT) return league;

  const specialMoves = new Set([...(species.eliteMoves || []), ...(species.legacyMoves || [])]);
  league.moveset = best.moveset.map((moveId) => {
    const name = moves.get(moveId) || moveId;
    return specialMoves.has(moveId) ? `${name} *` : name;
  });
  league.beats = best.matchups.slice(0, MATCHUP_COUNT).map((m) => names.get(m.opponent));
  league.losesTo = best.counters.slice(0, MATCHUP_COUNT).map((m) => names.get(m.opponent));
  return league;
}

function toJs(value, indent = 0) {
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
  if (typeof value !== 'object') return String(value);
  const pad = '  '.repeat(indent + 1);
  const end = '  '.repeat(indent);
  if (Array.isArray(value)) return `[${value.map((item) => toJs(item, indent + 1)).join(', ')}]`;
  const parts = Object.entries(value).map(([key, item]) => `${pad}${/^\w+$/.test(key) ? key : toJs(key)}: ${toJs(item, indent + 1)},`);
  return `{\n${parts.join('\n')}\n${end}}`;
}

async function main() {
  const [ids, gamemaster, ...rankings] = await Promise.all([
    loadPokemonIds(),
    fetchJson('gamemaster.json'),
    ...Object.values(LEAGUES).map((cp) => fetchJson(`rankings/all/overall/rankings-${cp}.json`)),
  ]);

  const speciesById = new Map(gamemaster.pokemon.map((species) => [species.speciesId, species]));
  const moves = new Map(gamemaster.moves.map((move) => [move.moveId, move.name]));
  const names = new Map(gamemaster.pokemon.map((species) => [species.speciesId, displayName(species.speciesName)]));
  const leagueRankings = Object.keys(LEAGUES).map((key, i) => [key, rankIndex(rankings[i])]);

  const result = {};
  const missing = [];
  for (const id of ids) {
    const species = speciesById.get(id);
    if (!species) {
      missing.push(id);
      continue;
    }
    const entry = { types: species.types.filter((type) => type !== 'none') };
    if (species.buddyDistance) entry.buddyKm = species.buddyDistance;
    for (const [key, ranking] of leagueRankings) {
      const league = describeLeague(id, ranking, species, moves, names);
      if (league) entry[key] = league;
    }
    result[id] = entry;
  }

  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '. ') + '.';
  const output = `// GENERÁLT FÁJL, ne szerkeszd kézzel. Frissítés: node tools/sync-pvpoke.mjs
// Forrás: github.com/pvpoke/pvpoke (gamemaster és rankings-1500/2500).
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
