// Közös PvPoke-adatkezelés a tools/ scripteknek: letöltés, nevek, Mega formák,
// és egy faj leírása (Pokédex-szám, típus, buddy km, fejlődés, GL/UL helyezés normál és Shadow formára).

export const DATA_URL = 'https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data';
export const LEAGUES = { greatLeague: 1500, ultraLeague: 2500 };
// E helyezés fölött csak a helyezést adjuk vissza, a szett és a párharcok ott már nem érdekesek.
export const DETAIL_RANK_LIMIT = 100;
const MATCHUP_COUNT = 3;
const REGIONAL_FORMS = ['Alolan', 'Galarian', 'Hisuian', 'Paldean'];
// Legendás, mitikus és Ultra Beast: mindig marad (a kártyán arany név).
const LEGENDARY_TAGS = ['legendary', 'mythical', 'ultrabeast'];

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
function describeLeague(rankingEntry, data, detailRankLimit) {
  if (!rankingEntry) return undefined;
  const { moves } = data;
  const league = { rank: rankingEntry.rank };
  if (rankingEntry.rank > detailRankLimit) return league;

  // A PvPoke-szett: az első a gyors (Fast), a többi a töltött (Charged) mozdulat.
  const [fastMove, ...chargedMoves] = rankingEntry.moveset.map((moveId) => moves.get(moveId) || moveId);
  league.moveset = { fast: [fastMove], charged: chargedMoves };
  league.beats = rankingEntry.matchups.slice(0, MATCHUP_COUNT).map((m) => speciesRef(m.opponent, data));
  league.losesTo = rankingEntry.counters.slice(0, MATCHUP_COUNT).map((m) => speciesRef(m.opponent, data));
  return league;
}

// Egy faj legjobb GL/UL helyezése a normál vagy a Shadow formájával (Infinity, ha nincs rangsorolva).
function bestRankOf(speciesId, data) {
  return Math.min(...data.leagueRankings.flatMap(([, ranking]) =>
    [ranking.get(speciesId)?.rank, ranking.get(`${speciesId}_shadow`)?.rank].filter(Boolean)));
}

// Hivatkozás egy másik fajra (fejlődési ág, párharcok): az azonosító a kártyára mutat (a Shadow
// formáé is az alapfajéra), a név a megjelenítéshez, a legjobb helyezés és a legendás jelző a színhez.
function speciesRef(speciesId, data) {
  const id = speciesId.replace(/_shadow$/, '');
  const species = data.speciesById.get(id);
  const rank = bestRankOf(id, data);
  return {
    id,
    name: data.names.get(speciesId) || speciesId,
    ...(Number.isFinite(rank) ? { rank } : {}),
    ...((species?.tags || []).some((tag) => LEGENDARY_TAGS.includes(tag)) ? { legendary: true } : {}),
  };
}

// A csak Elite TM-mel vagy eseményen (pl. Community Day) megszerezhető mozdulatok neve.
function specialMovesOf(species, moves) {
  return [...(species.eliteMoves || []), ...(species.legacyMoves || [])].map((moveId) => moves.get(moveId) || moveId);
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
    moveTypes: new Map(gamemaster.moves.map((move) => [move.name, move.type])),
    names: new Map(gamemaster.pokemon.map((species) => [species.speciesId, displayName(species.speciesName)])),
    leagueRankings: Object.keys(LEAGUES).map((key, i) => [key, rankIndex(rankings[i])]),
  };
}

// Egy faj leírása a pvpoke.js formátumában; undefined, ha a faj nincs a PvPoke-adatban.
// A gameMaster (loadGameMaster eredménye) opcionális: ha megvan, a Dynamax / Gigantamax és a
// fejlődési ág (cukorárral) is bekerül.
export function describeSpecies(id, data, detailRankLimit = DETAIL_RANK_LIMIT, gameMaster = undefined) {
  const species = data.speciesById.get(id);
  if (!species) return undefined;
  const entry = { dex: species.dex, types: species.types.filter((type) => type !== 'none') };
  if ((species.tags || []).some((tag) => LEGENDARY_TAGS.includes(tag))) entry.legendary = true;
  const megaForms = megaFormsOf(id, data.gamemaster);
  if (megaForms.length) entry.megaForms = megaForms;
  const speciesMaxForms = gameMaster ? maxFormsOf(id, gameMaster) : [];
  if (speciesMaxForms.length) entry.maxForms = speciesMaxForms;
  const evolution = gameMaster && evolutionBranchOf(id, data, gameMaster);
  if (evolution) entry.evolution = evolution;
  if (species.buddyDistance) entry.buddyKm = species.buddyDistance;
  const specialMoves = specialMovesOf(species, data.moves);
  if (specialMoves.length) entry.specialMoves = specialMoves;

  const shadowId = `${id}_shadow`;
  const shadow = {};
  for (const [key, ranking] of data.leagueRankings) {
    // A legjobb IV a Shadow formánál is ugyanaz (ugyanazok az alapstatok).
    const bestIv = gameMaster && bestLeagueIv(species.baseStats, LEAGUES[key], gameMaster.cpMultipliers);
    const league = describeLeague(ranking.get(id), data, detailRankLimit);
    if (league) entry[key] = bestIv ? { ...league, bestIv } : league;
    const shadowLeague = describeLeague(ranking.get(shadowId), data, detailRankLimit);
    if (shadowLeague) shadow[key] = bestIv ? { ...shadowLeague, bestIv } : shadowLeague;
  }
  if (Object.keys(shadow).length) entry.shadow = shadow;
  return entry;
}

// ---------- Legjobb IV egy ligára ----------

const MAX_LEVEL = 50;

// Szintenkénti CP-szorzók 1-től MAX_LEVEL-ig, félszintekkel (a félszint a két szomszéd négyzetes közepe).
function levelMultipliers(cpMultipliers) {
  const levels = [];
  for (let level = 1; level <= MAX_LEVEL; level += 1) {
    const multiplier = cpMultipliers[level - 1];
    levels.push(multiplier);
    if (level < MAX_LEVEL) levels.push(Math.sqrt((multiplier ** 2 + cpMultipliers[level] ** 2) / 2));
  }
  return levels;
}

// A liga CP-határa alatt a legnagyobb stat productot (Attack × Defense × HP) adó IV, és a CP-je azon a
// szinten, ameddig fel lehet húzni. Ez a PvP rank 1 (a Poke Genie is ehhez méri a 100%-ot).
function bestLeagueIv(baseStats, cpLimit, cpMultipliers) {
  const levels = levelMultipliers(cpMultipliers);
  let best = null;
  for (let attack = 0; attack <= 15; attack += 1) {
    for (let defense = 0; defense <= 15; defense += 1) {
      for (let hp = 0; hp <= 15; hp += 1) {
        const atk = baseStats.atk + attack;
        const def = baseStats.def + defense;
        const sta = baseStats.hp + hp;
        let candidate = null;
        for (const multiplier of levels) {
          const cp = Math.max(10, Math.floor((atk * Math.sqrt(def) * Math.sqrt(sta) * multiplier ** 2) / 10));
          if (cp > cpLimit) break;
          const statProduct = atk * multiplier * def * multiplier * Math.floor(sta * multiplier);
          candidate = { statProduct, cp };
        }
        // Holtversenynél (azonos stat product) a később jövő, magasabb IV nyer.
        if (candidate && (!best || candidate.statProduct >= best.statProduct)) {
          best = { ...candidate, iv: `${attack}/${defense}/${hp}` };
        }
      }
    }
  }
  return best && { iv: best.iv, cp: best.cp };
}

// ---------- A játék game mastere: Dynamax / Gigantamax, fejlődés ----------

// A játék kibányászott game mastere (PokeMiners). A PvPoke nem tartja nyilván a Dynamaxot és a
// fejlődés árát, ez igen:
// - a faj EXTENDED sablonjában a breadOverrides mező BREAD_MODE (Dynamax) és
//   BREAD_DOUGH_MODE (Gigantamax) bejegyzése jelzi, hogy van-e ilyen formája;
// - a faj sablonjának evolutionBranch mezője a fejlődés cukorára és feltételei.
// Figyelem: a bányászott adat néha előre tartalmaz még meg nem jelent formát.
const GAME_MASTER_URL = 'https://raw.githubusercontent.com/PokeMiners/game_masters/master/latest/latest.json';
const MAX_MODES = { BREAD_MODE: 'Dynamax', BREAD_DOUGH_MODE: 'Gigantamax' };
const GO_FORM_NAMES = { alolan: 'ALOLA', paldean: 'PALDEA' };
const EVOLUTION_ITEMS = {
  ITEM_SUN_STONE: 'Sun Stone',
  ITEM_KINGS_ROCK: "King's Rock",
  ITEM_METAL_COAT: 'Metal Coat',
  ITEM_DRAGON_SCALE: 'Dragon Scale',
  ITEM_UP_GRADE: 'Up-Grade',
  ITEM_GEN4_EVOLUTION_STONE: 'Sinnoh Stone',
  ITEM_GEN5_EVOLUTION_STONE: 'Unova Stone',
  ITEM_TROY_DISK_MAGNETIC: 'Magnetic Lure',
  ITEM_TROY_DISK_MOSSY: 'Mossy Lure',
  ITEM_TROY_DISK_GLACIAL: 'Glacial Lure',
  ITEM_TROY_DISK_RAINY: 'Rainy Lure',
};
const UNKNOWN_ITEM = 'különleges tárgy';

// A game master név a forma nélküli „_NORMAL” végződés nélkül: CHARMELEON_NORMAL → CHARMELEON.
const goKey = (name) => name.replace(/_NORMAL$/, '');

// Egy fejlődés ára és feltételei, a kártyán használt mezőnevekkel.
function evolutionCost(branch) {
  const cost = { candy: branch.candyCost || 0 };
  const item = branch.evolutionItemRequirement || branch.lureItemRequirement;
  if (item) cost.item = EVOLUTION_ITEMS[item] || UNKNOWN_ITEM;
  if (branch.noCandyCostViaTrade) cost.tradeFree = true;
  if (branch.kmBuddyDistanceRequirement) cost.buddyKm = branch.kmBuddyDistanceRequirement;
  if (branch.genderRequirement) cost.gender = branch.genderRequirement.toLowerCase();
  if (branch.onlyDaytime) cost.time = 'day';
  if (branch.onlyNighttime) cost.time = 'night';
  if (branch.onlyDuskPeriod) cost.time = 'dusk';
  if (branch.onlyFullMoon) cost.time = 'fullMoon';
  if (branch.questDisplay) cost.quest = true;
  return cost;
}

// Letölti a game mastert, és kigyűjti belőle a Max formákat és a fejlődéseket.
// maxForms: game master név → ['Dynamax', 'Gigantamax'];
// evolutions: szülő game master neve → (gyerek game master neve → ár és feltételek).
export async function loadGameMaster() {
  const response = await fetch(GAME_MASTER_URL);
  if (!response.ok) throw new Error(`game master: HTTP ${response.status}`);
  const templates = await response.json();
  const maxForms = new Map();
  const evolutions = new Map();
  for (const template of templates) {
    const extended = /^EXTENDED_V\d{4}_POKEMON_(.+)$/.exec(template.templateId);
    if (extended) {
      const modes = new Set(JSON.stringify(template).match(/"breadMode":"BREAD_[A-Z_]+"/g) || []);
      const forms = [...modes].map((mode) => MAX_MODES[mode.split(':')[1].replace(/"/g, '')]).filter(Boolean);
      if (forms.length) maxForms.set(extended[1], [...new Set(forms)].sort());
      continue;
    }
    const settings = template.data?.pokemonSettings;
    const branches = (settings?.evolutionBranch || []).filter((branch) => branch.evolution);
    if (!branches.length) continue;
    const parentKey = goKey(settings.form || settings.pokemonId);
    if (evolutions.has(parentKey)) continue;
    evolutions.set(parentKey, new Map(branches.map((branch) => [goKey(branch.form || branch.evolution), evolutionCost(branch)])));
  }
  const levelSettings = templates.find((template) => template.templateId === 'PLAYER_LEVEL_SETTINGS');
  return { maxForms, evolutions, cpMultipliers: levelSettings.data.playerLevel.cpMultiplier };
}

// PvPoke-azonosító → a game master fajneve, pl. ninetales_alolan → NINETALES_ALOLA.
function goSpeciesName(id) {
  return id.split('_').map((part) => GO_FORM_NAMES[part] || part.toUpperCase()).join('_');
}

// A faj Dynamax / Gigantamax formái; üres tömb, ha nincs.
export function maxFormsOf(id, gameMaster) {
  return gameMaster.maxForms.get(goSpeciesName(id)) || [];
}

// A szülőből a gyerekbe fejlődés ára; üres, ha a game master nem ismeri.
function evolutionCostOf(parentId, childId, gameMaster) {
  const branches = gameMaster.evolutions.get(goSpeciesName(parentId));
  if (!branches) return {};
  const childName = goSpeciesName(childId);
  const exact = branches.get(childName);
  if (exact) return exact;
  // Formanév-eltérés (pl. a PvPoke a forma nélküli nevet használja): a fajnév eleje dönt.
  const match = [...branches].find(([name]) => childName.startsWith(name) || name.startsWith(childName));
  return match ? match[1] : {};
}

const isPlayableForm = (species) => species && species.released !== false && !/_shadow$|_mega(_[xy])?$/.test(species.speciesId);

// A faj fejlődési ága: az ősei, saját maga és a leszármazottai. Fokozatonként egy lista, mert
// elágazásnál (pl. Kirlia → Gardevoir vagy Gallade) egy fokon több faj is lehet; a másik ágon lévő
// rokonok (a Gardevoirnál a Gallade) nem kerülnek bele. Minden faj mellett a fejlődés ára (az előző
// fokról). undefined, ha a faj nem fejlődik és nem is fejlődésből jön.
function evolutionBranchOf(id, data, gameMaster) {
  const byId = (speciesId) => data.speciesById.get(speciesId);
  // A fok színéhez a speciesRef adja a helyezést és a legendás jelzőt (a Pokédexben lévő fajoknál
  // a kártya a saját értékelését használja).
  const stage = (species, parentId, current = false) => ({
    ...speciesRef(species.speciesId, data),
    ...(current ? { current: true } : {}),
    ...(parentId ? evolutionCostOf(parentId, species.speciesId, gameMaster) : {}),
  });

  const self = byId(id);
  const stages = [[stage(self, self.family?.parent, true)]];
  for (let parent = byId(self.family?.parent); isPlayableForm(parent); parent = byId(parent.family?.parent)) {
    stages.unshift([stage(parent, parent.family?.parent)]);
  }
  // A PvPoke-adatból néha hiányzik a fejlődés (pl. Galarian Corsola → Cursola): ilyenkor a game master dönt.
  const childrenOf = (species) => {
    if (species.family?.evolutions) return species.family.evolutions.map(byId).filter(isPlayableForm);
    const branches = gameMaster.evolutions.get(goSpeciesName(species.speciesId));
    if (!branches) return [];
    return [...branches.keys()]
      .map((name) => data.gamemaster.pokemon.find((candidate) => goSpeciesName(candidate.speciesId) === name))
      .filter(isPlayableForm);
  };
  let children = childrenOf(self);
  let parentId = id;
  while (children.length) {
    const currentParent = parentId;
    stages.push(children.map((child) => stage(child, currentParent)));
    if (children.length > 1) break;
    parentId = children[0].speciesId;
    children = childrenOf(children[0]);
  }
  return stages.length > 1 ? stages : undefined;
}
