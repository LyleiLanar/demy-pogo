// Közös PvPoke-adatkezelés a tools/ scripteknek: letöltés, nevek, Mega formák,
// és egy faj leírása (típus, buddy km, GL/UL helyezés normál és Shadow formára).

export const DATA_URL = 'https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data';
export const LEAGUES = { greatLeague: 1500, ultraLeague: 2500 };
// E helyezés fölött csak a helyezést adjuk vissza, a szett és a párharcok ott már nem érdekesek.
export const DETAIL_RANK_LIMIT = 100;
const MATCHUP_COUNT = 3;
const REGIONAL_FORMS = ['Alolan', 'Galarian', 'Hisuian', 'Paldean'];

export async function fetchJson(path) {
  const response = await fetch(`${DATA_URL}/${path}`);
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  return response.json();
}

// „Ninetales (Shadow)” → „Shadow Ninetales”, „Corsola (Galarian)” → „Galarian Corsola”
export function displayName(speciesName) {
  const match = /^(.+) \((.+)\)$/.exec(speciesName);
  if (!match) return speciesName;
  const [, name, form] = match;
  return form === 'Shadow' || REGIONAL_FORMS.includes(form) ? `${form} ${name}` : speciesName;
}

// A faj Mega formái (Mega, Mega X, Mega Y) a típusukkal. Shadow nem evolválhat Megává.
function megaFormsOf(id, gamemaster) {
  if (id.endsWith('_shadow')) return [];
  return gamemaster.pokemon
    .filter((species) => /^_mega(_[xy])?$/.test(species.speciesId.slice(id.length)) && species.speciesId.startsWith(id))
    .filter((species) => species.released !== false)
    .map((species) => ({
      name: /\((Mega(?: [XY])?)\)$/.exec(species.speciesName)[1],
      types: species.types.filter((type) => type !== 'none'),
    }));
}

function rankIndex(rankings) {
  return new Map(rankings.map((entry, index) => [entry.speciesId, { ...entry, rank: index + 1 }]));
}

// Egy forma (normál vagy Shadow) helyezése egy ligában; top 100-ban a szett és a párharcok is.
function describeLeague(rankingEntry, species, data, detailRankLimit) {
  if (!rankingEntry) return undefined;
  const { moves, names } = data;
  const league = { rank: rankingEntry.rank };
  if (rankingEntry.rank > detailRankLimit) return league;

  const specialMoves = new Set([...(species.eliteMoves || []), ...(species.legacyMoves || [])]);
  league.moveset = rankingEntry.moveset.map((moveId) => {
    const name = moves.get(moveId) || moveId;
    return specialMoves.has(moveId) ? `${name} *` : name;
  });
  league.beats = rankingEntry.matchups.slice(0, MATCHUP_COUNT).map((m) => names.get(m.opponent));
  league.losesTo = rankingEntry.counters.slice(0, MATCHUP_COUNT).map((m) => names.get(m.opponent));
  return league;
}

// A gamemaster és a ligák rangsorai, kereshető formában.
export async function loadPvpokeData() {
  const [gamemaster, ...rankings] = await Promise.all([
    fetchJson('gamemaster.json'),
    ...Object.values(LEAGUES).map((cp) => fetchJson(`rankings/all/overall/rankings-${cp}.json`)),
  ]);
  return {
    gamemaster,
    speciesById: new Map(gamemaster.pokemon.map((species) => [species.speciesId, species])),
    moves: new Map(gamemaster.moves.map((move) => [move.moveId, move.name])),
    names: new Map(gamemaster.pokemon.map((species) => [species.speciesId, displayName(species.speciesName)])),
    leagueRankings: Object.keys(LEAGUES).map((key, i) => [key, rankIndex(rankings[i])]),
  };
}

// Egy faj leírása a pvpoke.js formátumában; undefined, ha a faj nincs a PvPoke-adatban.
export function describeSpecies(id, data, detailRankLimit = DETAIL_RANK_LIMIT) {
  const species = data.speciesById.get(id);
  if (!species) return undefined;
  const entry = { types: species.types.filter((type) => type !== 'none') };
  const megaForms = megaFormsOf(id, data.gamemaster);
  if (megaForms.length) entry.megaForms = megaForms;
  if (species.buddyDistance) entry.buddyKm = species.buddyDistance;

  const shadowId = `${id}_shadow`;
  const shadowSpecies = data.speciesById.get(shadowId) || species;
  const shadow = {};
  for (const [key, ranking] of data.leagueRankings) {
    const league = describeLeague(ranking.get(id), species, data, detailRankLimit);
    if (league) entry[key] = league;
    const shadowLeague = describeLeague(ranking.get(shadowId), shadowSpecies, data, detailRankLimit);
    if (shadowLeague) shadow[key] = shadowLeague;
  }
  if (Object.keys(shadow).length) entry.shadow = shadow;
  return entry;
}

// ---------- Dynamax / Gigantamax a játék game masteréből ----------

// A játék kibányászott game mastere (PokeMiners). A PvPoke nem tartja nyilván a Dynamaxot, ez igen:
// a faj EXTENDED sablonjában a breadOverrides mező BREAD_MODE (Dynamax) és
// BREAD_DOUGH_MODE (Gigantamax) bejegyzése jelzi, hogy van-e ilyen formája.
// Figyelem: a bányászott adat néha előre tartalmaz még meg nem jelent formát.
const GAME_MASTER_URL = 'https://raw.githubusercontent.com/PokeMiners/game_masters/master/latest/latest.json';
const MAX_MODES = { BREAD_MODE: 'Dynamax', BREAD_DOUGH_MODE: 'Gigantamax' };
const GO_FORM_NAMES = { alolan: 'ALOLA' };

export async function loadMaxForms() {
  const response = await fetch(GAME_MASTER_URL);
  if (!response.ok) throw new Error(`game master: HTTP ${response.status}`);
  const templates = await response.json();
  const maxForms = new Map();
  for (const template of templates) {
    const match = /^EXTENDED_V\d{4}_POKEMON_(.+)$/.exec(template.templateId);
    if (!match) continue;
    const modes = new Set(JSON.stringify(template).match(/"breadMode":"BREAD_[A-Z_]+"/g) || []);
    const forms = [...modes].map((mode) => MAX_MODES[mode.split(':')[1].replace(/"/g, '')]).filter(Boolean);
    if (forms.length) maxForms.set(match[1], [...new Set(forms)].sort());
  }
  return maxForms;
}

// PvPoke-azonosító → a game master fajneve, pl. ninetales_alolan → NINETALES_ALOLA.
function goSpeciesName(id) {
  return id.split('_').map((part) => GO_FORM_NAMES[part] || part.toUpperCase()).join('_');
}

// A faj Dynamax / Gigantamax formái; üres tömb, ha nincs.
export function maxFormsOf(id, maxForms) {
  return maxForms.get(goSpeciesName(id)) || [];
}
