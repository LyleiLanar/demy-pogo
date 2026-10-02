// A Pokédex adatai: a kézzel írt tanácsok (POKEMON) és a PvPoke-adatok (PVPOKE) összefésülése,
// a fajok formái és a formákhoz tartozó módok (Raid, GL, UL, Max).

// Az értékelés Diablo-szerű ritkaság, a legjobbtól: lila (meta), kék (gyűjtendő), zöld (alternatíva),
// szürke (kuka). A ligáké a PvPoke teljes rangsorában elért helyezésből jön.
const RATING_ORDER = ['meta', 'collect', 'alternative', 'trash'];
const LEAGUE_RATING_LIMITS = { meta: 20, collect: 50, alternative: 100 };
// A raidé a számolt raid-helyezésből jön: hányadik a legjobb támadó típusában (Shadow és Mega formákkal együtt).
const RAID_RATING_LIMITS = { meta: 10, collect: 25, alternative: 50 };
// Max Battle: a támadó a Max mozdulata típusán belül (típusonként 10–50 faj), a tank és a gyógyító az
// összes Dynamax / Gigantamax formájú faj között (kb. 160) rangsorolva.
const MAX_ATTACKER_RATING_LIMITS = { meta: 3, collect: 6, alternative: 12 };
// …és a típus legjobbjához mért erő (0–1) is kell hozzá, mert némelyik típusban csak pár támadó van.
const MAX_ATTACKER_STRENGTH_LIMITS = { meta: 0.9, collect: 0.8, alternative: 0.65 };
const MAX_SUPPORT_RATING_LIMITS = { meta: 10, collect: 25, alternative: 50 };
const GAME_MODES = [
  { key: 'raid', label: 'Raid', title: 'Raid', ratingLimits: RAID_RATING_LIMITS },
  { key: 'greatLeague', label: 'GL', title: 'Great League', isLeague: true, ratingLimits: LEAGUE_RATING_LIMITS },
  { key: 'ultraLeague', label: 'UL', title: 'Ultra League', isLeague: true, ratingLimits: LEAGUE_RATING_LIMITS },
];
// Formák: a Megának csak raidje van.
const SHADOW_MODE_KEYS = ['raid', 'greatLeague', 'ultraLeague'];
const MEGA_MODE_KEYS = ['raid'];
const MEGA_FORM_KEYS = { Mega: 'mega', 'Mega X': 'megaX', 'Mega Y': 'megaY' };
// Melyik Max mozdulatot érdemes fejleszteni (maxBattle.upgrade); Gigantamaxnál a Max Attack helyén a G-Max mozdulat van.
const MAX_MOVE_LABELS = { attack: '⚔️ Max Attack', guard: '🛡️ Max Guard', spirit: '💚 Max Spirit' };
const GIGANTAMAX_MOVE_LABELS = { ...MAX_MOVE_LABELS, attack: '⚔️ G-Max mozdulat' };
// A Max forma fülei: a Dynamax és a Gigantamax külön példány, külön értékeléssel.
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
      // A név a PvPoke-adatból jön; a pokemon.js name mezője csak felülírja.
      name: species.name || stats.name || species.id,
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

// Helyezésből értékelés a megadott határokkal (liga vagy raid).
function rankRating(rank, limits) {
  const rating = Object.keys(limits).find((key) => rank <= limits[key]);
  return rating || 'trash';
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
    forms.push({ key, name: mega.name, types: mega.types, modeKeys: MEGA_MODE_KEYS, leagues: { raid: mega.raid }, overrides: overrides[key] || {} });
  });
  // Max: a Dynamax és a Gigantamax példányok, ha van róluk értékelés.
  if (maxModesOf(species).length) {
    forms.push({ key: 'max', name: 'Max', types: species.types, modeKeys: [], leagues: {}, overrides: {} });
  }
  return forms;
}

// Egy mód adatai egy formában: az alap tanács, a forma felülírása és a számolt adat (liga: PvPoke,
// raid: a game masterből számolt helyezés). Ha van számolt helyezés, az adja az értékelést.
function modeData(species, form, mode) {
  const curated = { ...species[mode.key], ...form.overrides[mode.key] };
  const computed = form.leagues[mode.key];
  if (computed && mode.ratingLimits) return { ...curated, ...computed, rating: rankRating(computed.rank, mode.ratingLimits) };
  if (mode.isLeague) return undefined;
  return curated.rating ? curated : undefined;
}

function modeDetail(mode, data) {
  if (mode.isLeague) return `${data.rank}. hely`;
  if (data.type && data.rank) return `${TYPES[data.type].name} támadóként ${data.rank}. hely`;
  return '';
}

// A Max forma fülei: Dynamax (a faj maxBattle mezője) és Gigantamax (forms.gigantamax.maxBattle,
// csak ha a game master szerint a fajnak van Gigantamax formája).
// A Max forma fülei: Dynamax és Gigantamax. Mindkettőnél három szerep számolt helyezéssel (pvpoke.js
// maxBattle): támadó (a Max mozdulat típusán belül), tank és gyógyító (az összes Max-képes faj között).
// A fül színe a legjobb szerepé; a Fejleszd sor a kék vagy lila szerepek mozdulata (ha nincs ilyen,
// semmit nem érdemes fejleszteni). A kézi maxBattle / forms.gigantamax.maxBattle mezőből a megjegyzés és a tippek jönnek;
// értékelést csak ott ad, ahol nincs számolt adat.
// A támadó színe a helyezésből és a típus legjobbjához mért erőből; a kettő közül a gyengébb.
function maxAttackerRating(attacker) {
  const byRank = rankRating(attacker.rank, MAX_ATTACKER_RATING_LIMITS);
  const byStrength = Object.keys(MAX_ATTACKER_STRENGTH_LIMITS).find((key) => attacker.strength >= MAX_ATTACKER_STRENGTH_LIMITS[key]) || 'trash';
  return RATING_ORDER[Math.max(RATING_ORDER.indexOf(byRank), RATING_ORDER.indexOf(byStrength))];
}

function maxModesOf(species) {
  const computed = species.stats.maxBattle;
  const curated = { dynamax: species.maxBattle, gigantamax: species.forms?.gigantamax?.maxBattle };
  const forms = species.stats.maxForms || [];
  return MAX_MODES.map((mode) => {
    if (!computed || !forms.includes(mode.title)) {
      const data = curated[mode.key];
      return data?.rating ? { ...mode, ...data, detail: '', roles: [], upgradeLabels: upgradeLabelsOf(data.upgrade, mode.moveLabels) } : null;
    }
    // A támadó szerep hiányzik, ha a Max mozdulat Normal típusú lenne (az nem számít).
    const attacker = computed[mode.key];
    const roles = [
      ...(attacker ? [{ key: 'attacker', upgrade: 'attack', ...attacker, rating: maxAttackerRating(attacker) }] : []),
      { key: 'tank', upgrade: 'guard', rank: computed.tankRank, rating: rankRating(computed.tankRank, MAX_SUPPORT_RATING_LIMITS) },
      { key: 'healer', upgrade: 'spirit', rank: computed.healerRank, rating: rankRating(computed.healerRank, MAX_SUPPORT_RATING_LIMITS) },
    ];
    const rating = bestRating(roles.map((role) => role.rating));
    const strong = roles.filter((role) => role.rating === 'meta' || role.rating === 'collect');
    return {
      ...mode, ...curated[mode.key], rating, roles, detail: '',
      upgradeLabels: upgradeLabelsOf(strong.map((role) => role.upgrade), mode.moveLabels),
    };
  }).filter(Boolean);
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
      detail: modeDetail(mode, data),
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

// A legjobb értékelés a felsoroltak közül (RATING_ORDER szerint).
function bestRating(ratings) {
  return RATING_ORDER.find((rating) => ratings.includes(rating)) || 'trash';
}

// A név színe: legendásnál arany, különben a faj legjobb módja bármelyik formában (Raid, GL, UL, Max).
// A kézi tier (pl. 'collect') alsó határ: a név legalább ilyen színű.
function speciesTier(species) {
  if (species.stats.legendary) return 'legendary';
  const ratings = speciesForms(species).flatMap((form) => gameModesOf(species, form).map((mode) => mode.rating));
  if (species.tier) ratings.push(species.tier);
  return bestRating(ratings);
}
