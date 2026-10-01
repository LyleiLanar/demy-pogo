// A Pokédex adatai: a kézzel írt tanácsok (POKEMON) és a PvPoke-adatok (PVPOKE) összefésülése,
// a fajok formái és a formákhoz tartozó módok (Raid, GL, UL, Gym, Max).

// A ligák értékelése a helyezésből jön.
const LEAGUE_RATING_LIMITS = { good: 50, ok: 100 };
// A név színe (Diablo-szerű ritkaság): lila = meta, ha valamelyik formája top 20-as GL/UL-ben, vagy
// valamelyik módban erős; zöld = alternatíva, ha top 100-as vagy valahol közepes; különben szürke.
const TIER_META_RANK_LIMIT = 20;
const TIER_ALTERNATIVE_RANK_LIMIT = 100;
const GAME_MODES = [
  { key: 'raid', label: 'Raid', title: 'Raid' },
  { key: 'greatLeague', label: 'GL', title: 'Great League', isLeague: true },
  { key: 'ultraLeague', label: 'UL', title: 'Ultra League', isLeague: true },
  { key: 'gym', label: 'Gym', title: 'Gym' },
];
const RATING_ORDER = ['good', 'ok', 'bad'];
// Formák: a Shadow-nak nincs gymje, a Megának csak raidje van.
const SHADOW_MODE_KEYS = ['raid', 'greatLeague', 'ultraLeague'];
const MEGA_MODE_KEYS = ['raid'];
const MEGA_FORM_KEYS = { Mega: 'mega', 'Mega X': 'megaX', 'Mega Y': 'megaY' };
// Melyik Max mozdulatot érdemes fejleszteni (maxBattle.upgrade); Gigantamaxnál a Max Attack helyén a G-Max mozdulat van.
const MAX_MOVE_LABELS = { attack: '⚔️ Max Attack', guard: '🛡️ Max Guard', spirit: '💚 Max Spirit' };
const GIGANTAMAX_MOVE_LABELS = { ...MAX_MOVE_LABELS, attack: '⚔️ G-Max mozdulat' };
// A Max forma fülei: a Dynamax és a Gigantamax külön példány, külön értékeléssel.
// Dynamax = a faj maxBattle mezője, Gigantamax = forms.gigantamax.maxBattle.
const MAX_MODES = [
  { key: 'dynamax', label: 'Dynamax', title: 'Dynamax', moveLabels: MAX_MOVE_LABELS },
  { key: 'gigantamax', label: 'Gigantamax', title: 'Gigantamax', moveLabels: GIGANTAMAX_MOVE_LABELS },
];

// A kézzel írt tanácsok (POKEMON) és a generált PvPoke-adatok (PVPOKE) összefésülése.
function combineSpeciesData(pokemon, pvpoke) {
  return pokemon.map((species) => {
    const stats = pvpoke[species.id] || {};
    return {
      ...species,
      stats,
      types: stats.types || [],
      dex: stats.dex,
      greatLeagueRanks: { rank: stats.greatLeague?.rank, shadowRank: stats.shadow?.greatLeague?.rank },
    };
  });
}

// Pokédex-sorrend: szám szerint, azonos számon belül (pl. regionális forma) név szerint.
function byDexNumber(a, b) {
  return (a.dex ?? Infinity) - (b.dex ?? Infinity) || a.name.localeCompare(b.name, 'hu');
}

function leagueRating(league) {
  if (league.rank <= LEAGUE_RATING_LIMITS.good) return 'good';
  if (league.rank <= LEAGUE_RATING_LIMITS.ok) return 'ok';
  return 'bad';
}

// A faj formái: Normál, Shadow (ha van PvPoke-adata) és a Megák.
// Mindegyik a saját típusával, a hozzá tartozó módokkal és a formára szabott tanácsokkal.
function speciesForms(species) {
  const overrides = species.forms || {};
  const forms = [{
    key: 'normal', name: 'Normál', types: species.types,
    modeKeys: GAME_MODES.map((mode) => mode.key), leagues: species.stats, overrides: {},
  }];
  if (species.stats.shadow) {
    forms.push({
      key: 'shadow', name: 'Shadow', types: species.types,
      modeKeys: SHADOW_MODE_KEYS, leagues: species.stats.shadow, overrides: overrides.shadow || {},
    });
  }
  (species.stats.megaForms || []).forEach((mega) => {
    const key = MEGA_FORM_KEYS[mega.name];
    forms.push({ key, name: mega.name, types: mega.types, modeKeys: MEGA_MODE_KEYS, leagues: {}, overrides: overrides[key] || {} });
  });
  // Max: a Dynamax és a Gigantamax példányok, ha van róluk értékelés.
  if (maxModesOf(species).length) {
    forms.push({ key: 'max', name: 'Max', types: species.types, modeKeys: [], leagues: {}, overrides: {} });
  }
  return forms;
}

// Egy mód adatai egy formában: az alap tanács, a forma felülírása és (ligáknál) a PvPoke-adat.
function modeData(species, form, mode) {
  const curated = { ...species[mode.key], ...form.overrides[mode.key] };
  if (mode.isLeague) {
    const league = form.leagues[mode.key];
    return league ? { ...curated, ...league, rating: leagueRating(league) } : undefined;
  }
  return curated.rating ? curated : undefined;
}

// A Max forma fülei: Dynamax (a faj maxBattle mezője) és Gigantamax (forms.gigantamax.maxBattle,
// csak ha a game master szerint a fajnak van Gigantamax formája).
function maxModesOf(species) {
  const hasGigantamax = (species.stats.maxForms || []).includes('Gigantamax');
  const data = {
    dynamax: species.maxBattle,
    gigantamax: hasGigantamax ? species.forms?.gigantamax?.maxBattle : undefined,
  };
  return MAX_MODES
    .filter((mode) => data[mode.key]?.rating)
    .map((mode) => ({ ...mode, ...data[mode.key], detail: '', upgradeLabels: upgradeLabelsOf(data[mode.key].upgrade, mode.moveLabels) }));
}

// A kártya fülei: csak azok a módok, amelyek a formához tartoznak és van róluk adat.
function gameModesOf(species, form) {
  if (form.key === 'max') return maxModesOf(species);
  return GAME_MODES
    .filter((mode) => form.modeKeys.includes(mode.key))
    .map((mode) => ({ ...mode, data: modeData(species, form, mode) }))
    .filter((mode) => mode.data)
    .map(({ data, ...mode }) => ({
      ...mode,
      ...data,
      detail: mode.isLeague ? `${data.rank}. hely` : '',
      upgradeLabels: [],
    }));
}

function upgradeLabelsOf(upgrade, labels) {
  return (upgrade || []).map((move) => labels[move]).filter(Boolean);
}

// Alapból a legjobb értékelésű mód nyílik meg.
function defaultModeIndex(modes) {
  const ratingIndex = (mode) => RATING_ORDER.indexOf(mode.rating);
  const best = Math.min(...modes.map(ratingIndex));
  return modes.findIndex((mode) => ratingIndex(mode) === best);
}

// A faj ritkasága a név színéhez: 'legendary', a kézi felülírás (species.tier, pl. 'collect'), vagy a
// formák és módok értékeléséből számolva 'meta' / 'alternative' / 'trash'.
function speciesTier(species) {
  if (species.stats.legendary) return 'legendary';
  if (species.tier) return species.tier;
  let bestRank = Infinity;
  const ratings = [];
  for (const form of speciesForms(species)) {
    for (const mode of gameModesOf(species, form)) {
      if (mode.isLeague) bestRank = Math.min(bestRank, mode.rank);
      else ratings.push(mode.rating);
    }
  }
  if (bestRank <= TIER_META_RANK_LIMIT || ratings.includes('good')) return 'meta';
  if (bestRank <= TIER_ALTERNATIVE_RANK_LIMIT || ratings.includes('ok')) return 'alternative';
  return 'trash';
}
