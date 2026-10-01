// A Pokédex kártyái: formaváltó, módfülek, mozdulatok és a faj általános adatai.

const TIER_LABELS = {
  legendary: 'Legendás: meta és ritka, marad',
  meta: 'Meta: ez a tuti',
  collect: 'Gyűjtendő: tartsd meg',
  alternative: 'Alternatíva: átmenetileg jó, de van jobb',
  trash: 'Kuka: mehet cukorért',
};
const RATING_LABELS = { good: 'Erős', ok: 'Közepes', bad: 'Gyenge' };
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

function renderModePanel(mode, species, isSelected) {
  const detail = mode.detail ? `<p class="mode-detail">${escapeHtml(mode.detail)}</p>` : '';
  const note = mode.note ? `<p>${escapeHtml(mode.note)}</p>` : '';
  const facts = [
    renderFact('Fejleszd', mode.upgradeLabels.join(', ')),
    renderMoves(mode, species),
    renderFact('Jól megy ellene', mode.beats && mode.beats.join(', ')),
    renderFact('Nehéz ellenfél', mode.losesTo && mode.losesTo.join(', ')),
    renderFact('IV', mode.iv),
  ].join('');
  return `
    <div class="mode-panel" data-mode="${mode.key}" ${isSelected ? '' : 'hidden'}>
      ${detail}${note}
      ${facts ? `<dl class="mon-facts">${facts}</dl>` : ''}
      ${renderList('mon-notes', mode.tips)}
    </div>`;
}

// A faj neve a ritkaság színével (arany, lila, kék, zöld, szürke); koppintásra a buborék kiírja a jelentését.
function renderSpeciesName(species) {
  const tier = speciesTier(species);
  return `<span class="mon-tier tier-${tier}" data-tooltip="${TIER_LABELS[tier]}">${escapeHtml(species.name)}</span>`;
}

// A módválasztó sor és alatta a kiválasztott mód leírása (az értékelést a fül színe mutatja).
function renderGameModes(modes, species) {
  if (modes.length === 0) return '';
  const selected = defaultModeIndex(modes);
  return `
    <div class="modes">
      <div class="mode-tabs">${modes.map((mode, i) => renderModeTab(mode, i === selected)).join('')}</div>
      ${modes.map((mode, i) => renderModePanel(mode, species, i === selected)).join('')}
    </div>`;
}

function renderFormPanel(species, form, isSelected) {
  return `
    <div class="form-panel" data-form="${form.key}" ${isSelected ? '' : 'hidden'}>
      ${renderDefense(form.types)}
      ${renderGameModes(gameModesOf(species, form), species)}
      ${renderList('mon-notes', form.overrides.notes)}
    </div>`;
}

// Formaváltó a kártya tetején; csak akkor, ha több forma van.
function renderForms(species) {
  const forms = speciesForms(species);
  const panels = forms.map((form, i) => renderFormPanel(species, form, i === 0)).join('');
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

// Egy faj az ágban; az első fok kivételével előtte a nyíl, amire koppintva látszik az ár.
function renderEvolutionStage(stage, isFirst) {
  const name = stage.current ? `<b>${escapeHtml(stage.name)}</b>` : escapeHtml(stage.name);
  if (isFirst) return `<span class="evo-name">${name}</span>`;
  const cost = escapeHtml(evolutionCostText(stage));
  return `<span class="evo-name"><button type="button" class="evo-arrow" data-tooltip="${cost}" aria-label="${cost}">→</button> ${name}</span>`;
}

// A név alatti sor: a faj fejlődési ága (pl. Charmander → Charmeleon → Charizard), elágazásnál
// a fokon „/” választja el a lehetőségeket. Ha a faj nem fejlődik, a származása (origin) látszik.
function renderEvolution(species) {
  const stages = species.stats.evolution;
  if (!stages) return `<p class="mon-origin">${escapeHtml(species.origin)}</p>`;
  const html = stages
    .map((options, i) => options.map((stage) => renderEvolutionStage(stage, i === 0)).join('<span class="evo-or">/</span>'))
    .join('');
  return `<p class="mon-origin mon-evolution">${html}</p>`;
}

function evolutionNames(species) {
  return (species.stats.evolution || []).flat().map((stage) => stage.name);
}

function renderPokemonCard(species) {
  const typeNames = species.types.map((type) => TYPES[type].name).join(' ');
  const searchText = normalizeForSearch(`${species.name} ${species.origin} ${evolutionNames(species).join(' ')} ${typeNames}`);
  const dex = species.dex ? `<span class="mon-dex">#${species.dex}</span>` : '';
  const warning = species.warning ? `<div class="warn">${escapeHtml(species.warning)}</div>` : '';
  const general = renderFact('Buddy', species.stats.buddyKm && `${species.stats.buddyKm} km / cukor`);

  // A fejlécben a kiválasztott forma típusa (a Mega típusa eltérhet); formaváltáskor cserélődik.
  const headTypes = speciesForms(species).map((form, i) => `
    <span class="mon-types" data-form="${form.key}" ${i === 0 ? '' : 'hidden'}>${renderTypeBadges(form.types)}</span>`);

  return `
    <article class="mon" data-search="${escapeHtml(searchText)}" data-dex="${species.dex ?? ''}">
      <div class="mon-head">
        <h3 class="mon-name">${renderSpeciesName(species)} ${dex}</h3>
        ${headTypes.join('')}
      </div>
      ${renderEvolution(species)}
      ${warning}
      ${renderForms(species)}
      ${general ? `<dl class="mon-facts">${general}</dl>` : ''}
      ${renderList('mon-notes', species.notes)}
    </article>`;
}

function renderPokedex(pokemon) {
  const cards = [...pokemon].sort(byDexNumber).map(renderPokemonCard).join('');
  return `${cards}<p class="sub" id="dex-empty" hidden>Nincs ilyen faj a listán. Kérdezz rá, és felvesszük.</p>`;
}
