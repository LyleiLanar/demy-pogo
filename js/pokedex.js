// A Pokédex kártyái: formaváltó, módfülek, mozdulatok és a faj általános adatai.

const TIER_LABELS = {
  legendary: 'Legendás: meta, és még ritka is',
  meta: 'Meta: ez a tuti (legalább egy módban)',
  collect: 'Gyűjtendő: érdemes megtartani, építeni',
  alternative: 'Alternatíva: átmenetileg jó, de van jobb',
  trash: 'Kuka: mehet cukorért',
};
const RATING_LABELS = { meta: 'Meta', collect: 'Gyűjtendő', alternative: 'Alternatíva', trash: 'Kuka' };
const SPECIAL_MOVE_TEXT = 'Speciális mozdulat: csak Elite TM-mel vagy eseményen (pl. Community Day) szerezhető meg.';
const EVOLUTION_TIME_LABELS = { day: 'csak nappal', night: 'csak éjjel', dusk: 'csak alkonyatkor', fullMoon: 'csak teliholdkor' };
const EVOLUTION_GENDER_LABELS = { male: 'csak hím', female: 'csak nőstény' };

function renderModeTab(mode, isSelected) {
  return `
    <button type="button" class="mode-tab rating-${mode.rating}" aria-pressed="${isSelected}"
      aria-label="${mode.title}: ${RATING_LABELS[mode.rating]}" data-mode="${mode.key}">${mode.label}</button>`;
}

// Egy ajánlott mozdulat a típusa ikonjával. Ha csak Elite TM-mel vagy eseményen szerezhető meg,
// ⚠️ gomb jelzi, amire koppintva a buborék ezt kiírja.
function renderMove(name, species) {
  const type = PVPOKE_MOVE_TYPES[name];
  const typeBadge = type ? renderTypeBadge(type) : '';
  const isSpecial = (species.stats.specialMoves || []).includes(name);
  const warning = isSpecial
    ? `<button type="button" class="move-warning" data-tooltip="${SPECIAL_MOVE_TEXT}" aria-label="${SPECIAL_MOVE_TEXT}">⚠️</button>`
    : '';
  return `<span class="move">${typeBadge}${escapeHtml(name)}${warning}</span>`;
}

function renderMoveFact(label, names, species) {
  if (!names || names.length === 0) return '';
  return `<dt>${label}</dt><dd class="moves">${names.map((name) => renderMove(name, species)).join('')}</dd>`;
}

// A kézzel írt ajánlás (moves) elsőbbséget kap, különben a PvPoke-szett (moveset) látszik.
function renderMoves(mode, species) {
  const moves = mode.moves || mode.moveset;
  if (!moves) return '';
  return renderMoveFact('Fast Attack', moves.fast, species)
    + renderMoveFact('Charged Attack', moves.charged, species)
    + renderFact('', moves.note);
}

// A PvPoke legfontosabb párharcai két oszlopban: balra akiket megver, jobbra akik ellen kikap.
// A nevek színezett linkek, mint a fejlődési ágban.
function renderMatchupList(label, opponents, tiers) {
  const links = (opponents || []).map((opponent) => `<li>${renderSpeciesLink(opponent, tiers)}</li>`).join('');
  return `
    <div class="mon-matchup-col">
      <span class="mon-defense-label">${label}</span>
      <ul class="mon-matchup-list">${links || '<li class="mon-defense-none">–</li>'}</ul>
    </div>`;
}

function renderMatchups(mode, tiers) {
  if (!mode.beats && !mode.losesTo) return '';
  return `
    <div class="mon-matchups">
      ${renderMatchupList('Jól megy ellene', mode.beats, tiers)}
      ${renderMatchupList('Nehéz ellenfél', mode.losesTo, tiers)}
    </div>`;
}

const MAX_ROLE_LABELS = { attacker: 'Támadó', tank: 'Tank', healer: 'Gyógyító' };

// Max Battle szerep: a helyezés a szerep színével; a támadónál a Max mozdulat, a típusa és (Dynamaxnál)
// a Fast mozdulat, amitől a típusa jön.
function renderRoleFact(role) {
  const attack = role.key === 'attacker'
    ? `${role.move}${role.fast ? ` (${role.fast})` : ''}: ${TYPES[role.type].name} ` : '';
  return `<dt>${MAX_ROLE_LABELS[role.key]}</dt><dd class="tier-${role.rating}">${escapeHtml(`${attack}${role.rank}. hely`)}</dd>`;
}

function renderModePanel(mode, species, isSelected, tiers) {
  const detail = mode.detail ? `<p class="mode-detail">${escapeHtml(mode.detail)}</p>` : '';
  const note = mode.note ? `<p>${escapeHtml(mode.note)}</p>` : '';
  const facts = [
    ...(mode.roles || []).map((role) => renderRoleFact(role)),
    renderFact('Fejleszd', mode.upgradeLabels.join(', ')),
    renderFact('Legjobb IV', mode.bestIv && `${mode.bestIv.iv} ${mode.bestIv.cp}CP`),
    renderMoves(mode, species),
    renderFact('IV', mode.iv),
  ].join('');
  return `
    <div class="mode-panel" data-mode="${mode.key}" ${isSelected ? '' : 'hidden'}>
      ${detail}${note}
      ${facts ? `<dl class="mon-facts">${facts}</dl>` : ''}
      ${renderMatchups(mode, tiers)}
      ${renderList('mon-notes', mode.tips)}
    </div>`;
}

// A faj neve a ritkaság színével (arany, lila, kék, zöld, szürke); koppintásra a buborék kiírja a jelentését.
function renderSpeciesName(species, tier) {
  return `<span class="mon-tier tier-${tier}" data-tooltip="${TIER_LABELS[tier]}">${escapeHtml(species.name)}</span>`;
}

// A módválasztó sor és alatta a kiválasztott mód leírása (az értékelést a fül színe mutatja).
function renderGameModes(modes, species, tiers) {
  if (modes.length === 0) return '';
  const selected = defaultModeIndex(modes);
  return `
    <div class="modes">
      <div class="mode-tabs">${modes.map((mode, i) => renderModeTab(mode, i === selected)).join('')}</div>
      ${modes.map((mode, i) => renderModePanel(mode, species, i === selected, tiers)).join('')}
    </div>`;
}

function renderFormPanel(species, form, isSelected, tiers) {
  return `
    <div class="form-panel" data-form="${form.key}" ${isSelected ? '' : 'hidden'}>
      ${renderDefense(form.types)}
      ${renderGameModes(gameModesOf(species, form), species, tiers)}
      ${renderList('mon-notes', form.overrides.notes)}
    </div>`;
}

// Formaváltó a kártya tetején; csak akkor, ha több forma van.
function renderForms(species, tiers) {
  const forms = speciesForms(species);
  const panels = forms.map((form, i) => renderFormPanel(species, form, i === 0, tiers)).join('');
  if (forms.length === 1) return `<div class="forms">${panels}</div>`;
  const tabs = forms.map((form, i) => `
    <button type="button" class="form-tab" aria-pressed="${i === 0}" data-form="${form.key}">${escapeHtml(form.name)}</button>`);
  return `
    <div class="forms">
      <div class="form-tabs" role="group" aria-label="Forma">${tabs.join('')}</div>
      ${panels}
    </div>`;
}

// ---------- Fejlődési ág ----------

// A fejlődés ára és feltételei a nyíl buborékjába, pl. „🍬 100 cukor · + Sinnoh Stone · csak hím”.
function evolutionCostText(stage) {
  return [
    `🍬 ${stage.candy ?? '?'} cukor`,
    stage.item && `+ ${stage.item}`,
    stage.tradeFree && 'cserével ingyen',
    stage.buddyKm && `buddyként ${stage.buddyKm} km séta`,
    EVOLUTION_GENDER_LABELS[stage.gender],
    EVOLUTION_TIME_LABELS[stage.time],
    stage.quest && 'külön feladat',
  ].filter(Boolean).join(' · ');
}

// Egy faj (ági fok, ellenfél) színe a saját harci erejéből: ha a Pokédexben van, a kártyája szerint (tiers), különben
// a legjobb GL/UL és raid-helyezéséből (Max-adat nélkül), legendásnál arany.
function stageTier(stage, tiers) {
  if (tiers.has(stage.id)) return tiers.get(stage.id);
  if (stage.legendary) return 'legendary';
  const ratings = [];
  if (stage.rank) ratings.push(rankRating(stage.rank, LEAGUE_RATING_LIMITS));
  if (stage.raidRank) ratings.push(rankRating(stage.raidRank, RAID_RATING_LIMITS));
  return bestRating(ratings);
}

// Egy másik faj neve a színével (fejlődési ág, párharcok); koppintásra a Pokédex csak azt a fajt mutatja
// (setupNavigation).
function renderSpeciesLink(ref, tiers, extraClass = '') {
  return `<button type="button" class="species-link tier-${stageTier(ref, tiers)}${extraClass}"
    data-species="${ref.id}" data-name="${escapeHtml(ref.name)}">${escapeHtml(ref.name)}</button>`;
}

// Egy faj az ágban; az első fok kivételével előtte a nyíl, amire koppintva látszik a fejlődés ára.
function renderEvolutionStage(stage, isFirst, tiers) {
  const name = renderSpeciesLink(stage, tiers, stage.current ? ' evo-current' : '');
  if (isFirst) return `<span class="evo-name">${name}</span>`;
  const cost = escapeHtml(evolutionCostText(stage));
  return `<span class="evo-name"><button type="button" class="evo-arrow" data-tooltip="${cost}" aria-label="${cost}">→</button> ${name}</span>`;
}

// A név alatti sor: a faj fejlődési ága (pl. Charmander → Charmeleon → Charizard), elágazásnál
// a fokon „/” választja el a lehetőségeket. Ha a faj nem fejlődik, a származása (origin) látszik.
function renderEvolution(species, tiers) {
  const stages = species.stats.evolution;
  if (!stages) return `<p class="mon-origin">${escapeHtml(species.origin)}</p>`;
  const html = stages
    .map((options, i) => options.map((stage) => renderEvolutionStage(stage, i === 0, tiers)).join('<span class="evo-or">/</span>'))
    .join('');
  return `<p class="mon-origin mon-evolution">${html}</p>`;
}

function evolutionNames(species) {
  return (species.stats.evolution || []).flat().map((stage) => stage.name);
}

function renderPokemonCard(species, tiers) {
  const typeNames = species.types.map((type) => TYPES[type].name).join(' ');
  const searchText = normalizeForSearch(`${species.name} ${species.origin} ${evolutionNames(species).join(' ')} ${typeNames}`);
  const dex = species.dex ? `<span class="mon-dex">#${species.dex}</span>` : '';
  const warning = species.warning ? `<div class="warn">${escapeHtml(species.warning)}</div>` : '';
  const general = renderFact('Buddy', species.stats.buddyKm && `${species.stats.buddyKm} km / cukor`);

  // A fejlécben a kiválasztott forma típusa (a Mega típusa eltérhet); formaváltáskor cserélődik.
  const headTypes = speciesForms(species).map((form, i) => `
    <span class="mon-types" data-form="${form.key}" ${i === 0 ? '' : 'hidden'}>${renderTypeBadges(form.types)}</span>`);

  return `
    <article class="mon" data-id="${species.id}" data-search="${escapeHtml(searchText)}" data-dex="${species.dex ?? ''}">
      <div class="mon-head">
        <h3 class="mon-name">${renderSpeciesName(species, tiers.get(species.id))} ${dex}</h3>
        ${headTypes.join('')}
      </div>
      ${renderEvolution(species, tiers)}
      ${warning}
      ${renderForms(species, tiers)}
      ${general ? `<dl class="mon-facts">${general}</dl>` : ''}
      ${renderList('mon-notes', species.notes)}
    </article>`;
}

function renderPokedex(pokemon) {
  const tiers = new Map(pokemon.map((species) => [species.id, speciesTier(species)]));
  const cards = [...pokemon].sort(byDexNumber).map((species) => renderPokemonCard(species, tiers)).join('');
  return `${cards}<p class="sub" id="dex-empty" hidden></p>`;
}
