// A puska megjelenítése: listák felépítése a DATA, POKEMON, PVPOKE és TYPES adatokból,
// fülek, Pokédex-keresés és másolás gomb.

const TAB_STORAGE_KEY = 'tab';
const COPY_FEEDBACK_MS = 1500;
const TOP_RANK_LIMIT = 50;
const RANKING_GROUPS = [
  { title: '1–10', maxRank: 10 },
  { title: '11–30', maxRank: 30 },
  { title: '31–50', maxRank: 50 },
];
const VERDICT_LABELS = { keep: 'Marad', scan: 'Szkenneld', transfer: 'Cukorért' };
const RATING_LABELS = { good: 'Erős', ok: 'Közepes', bad: 'Gyenge' };
// A ligák értékelése a helyezésből jön.
const LEAGUE_RATING_LIMITS = { good: 50, ok: 100 };
const GAME_MODES = [
  { key: 'raid', label: 'Raid', title: 'Raid' },
  { key: 'greatLeague', label: 'GL', title: 'Great League', isLeague: true },
  { key: 'ultraLeague', label: 'UL', title: 'Ultra League', isLeague: true },
  { key: 'maxBattle', label: 'Max', title: 'Max Battle' },
  { key: 'gym', label: 'Gym', title: 'Gym' },
];
const RATING_ORDER = ['good', 'ok', 'bad'];
// Formák: a Shadow-nak nincs Max Battle-je (és gymje), a Megának csak raidje van.
const SHADOW_MODE_KEYS = ['raid', 'greatLeague', 'ultraLeague'];
const MEGA_MODE_KEYS = ['raid'];
const MEGA_FORM_KEYS = { Mega: 'mega', 'Mega X': 'megaX', 'Mega Y': 'megaY' };
const SPECIAL_MOVE_TEXT = 'Speciális mozdulat: csak Elite TM-mel vagy eseményen (pl. Community Day) szerezhető meg.';

// ---------- Segédfüggvények ----------

function escapeHtml(text) {
  const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
  return String(text).replace(/[&<>"]/g, (char) => entities[char]);
}

function renderInto(elementId, html) {
  document.getElementById(elementId).innerHTML = html;
}

function renderGroups(groups, renderBody) {
  return groups
    .map((group) => `<h2>${escapeHtml(group.title)}</h2>${renderBody(group)}`)
    .join('');
}

function stripProtocol(url) {
  return url.replace(/^https?:\/\//, '');
}

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

// Kis- és nagybetű, valamint ékezet nélkül hasonlít (pl. „flabebe” = „Flabébé”).
function normalizeForSearch(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// ---------- Keresők ----------

function renderSearch(search) {
  return `
    <div class="q">
      <span class="lbl">${escapeHtml(search.label)}</span>
      <div class="code"><code>${escapeHtml(search.query)}</code></div>
    </div>`;
}

function renderSearchGroup(group) {
  const warning = group.warning ? `<div class="warn">${escapeHtml(group.warning)}</div>` : '';
  return warning + group.searches.map(renderSearch).join('');
}

// ---------- GL Top 50 ----------

function bestRank(ranks) {
  return Math.min(ranks.rank ?? Infinity, ranks.shadowRank ?? Infinity);
}

function isTopRank(rank) {
  return rank !== undefined && rank <= TOP_RANK_LIMIT;
}

function topPokemon(pokemon) {
  return pokemon
    .filter((species) => bestRank(species.greatLeagueRanks) <= TOP_RANK_LIMIT)
    .sort((a, b) => bestRank(a.greatLeagueRanks) - bestRank(b.greatLeagueRanks));
}

function renderRankingEntry(species) {
  const { rank, shadowRank } = species.greatLeagueRanks;
  const shadowBadge = isTopRank(rank) && isTopRank(shadowRank) ? '<span class="s">S</span>' : '';
  const details = [escapeHtml(species.origin)];
  if (!isTopRank(rank)) details.push('csak a Shadow változat van a top 50-ben');
  if (species.warning) details.push(`<b>${escapeHtml(species.warning)}</b>`);

  return `
    <li>
      <span class="n">${bestRank(species.greatLeagueRanks)}</span>
      <a class="f" href="#dex" data-pokemon="${escapeHtml(species.name)}">${escapeHtml(species.name)}${shadowBadge}</a>
      <span class="w">${details.join(' · ')}</span>
    </li>`;
}

function renderRankings(pokemon) {
  let minRank = 1;
  return RANKING_GROUPS.map((group) => {
    const entries = pokemon.filter((species) => {
      const rank = bestRank(species.greatLeagueRanks);
      return rank >= minRank && rank <= group.maxRank;
    });
    minRank = group.maxRank + 1;
    return `<h2>${group.title}</h2><ol class="rank">${entries.map(renderRankingEntry).join('')}</ol>`;
  }).join('');
}

// ---------- Típusok ----------

function typeStyle(type) {
  return `--type-color:${type.color}`;
}

// Csak az ikon látszik; koppintásra buborékban jelenik meg a név (setupTooltip).
// A multipleLabel a többszörös hatás leírása: ilyenkor felkiáltójel kerül az ikon mellé.
function renderTypeBadge(typeKey, multipleLabel = '') {
  const type = TYPES[typeKey];
  const label = multipleLabel ? `${type.name} (${multipleLabel})` : type.name;
  const marker = multipleLabel ? '<span class="type-multiple" aria-hidden="true">❗</span>' : '';
  return `<button type="button" class="type" style="${typeStyle(type)}" data-tooltip="${label}" aria-label="${label}">`
    + `<span aria-hidden="true">${type.icon}</span>${marker}</button>`;
}

// A típustáblázat soraiban az ikon mellett a név is látszik, hogy az ikonok megtanulhatók legyenek.
function renderTypeLabel(typeKey) {
  const type = TYPES[typeKey];
  return `<span class="type type-label" style="${typeStyle(type)}"><span aria-hidden="true">${type.icon}</span> ${type.name}</span>`;
}

function renderTypeBadges(typeKeys) {
  return typeKeys.map((typeKey) => renderTypeBadge(typeKey)).join(' ');
}

// Mennyit sebez egy támadó típus a megadott típusú védekezőn (a típusok szorzata).
function damageMultiplier(attackType, defenseTypes) {
  return defenseTypes.reduce((multiplier, defenseType) => {
    const traits = TYPES[defenseType];
    if (traits.weakTo.includes(attackType)) return multiplier * TYPE_MULTIPLIERS.weak;
    if (traits.resists.includes(attackType)) return multiplier * TYPE_MULTIPLIERS.resist;
    if (traits.immuneTo.includes(attackType)) return multiplier * TYPE_MULTIPLIERS.immune;
    return multiplier;
  }, 1);
}

function renderMatchupRow(label, matchups, isMultiple, multipleLabel) {
  if (matchups.length === 0) return '';
  const badges = matchups
    .map(({ attackType, multiplier }) => renderTypeBadge(attackType, isMultiple(multiplier) ? multipleLabel : ''))
    .join(' ');
  return `<p class="mon-weak"><span class="mon-weak-label">${label}</span> ${badges}</p>`;
}

// Mire érzékeny és minek ellenálló a faj; a többszöröset előre véve.
function renderDefense(defenseTypes) {
  if (defenseTypes.length === 0) return '';
  const matchups = Object.keys(TYPES)
    .map((attackType) => ({ attackType, multiplier: damageMultiplier(attackType, defenseTypes) }));
  const weaknesses = matchups.filter(({ multiplier }) => multiplier > 1).sort((a, b) => b.multiplier - a.multiplier);
  const resistances = matchups.filter(({ multiplier }) => multiplier < 1).sort((a, b) => a.multiplier - b.multiplier);
  return renderMatchupRow('Érzékeny:', weaknesses, (m) => m > TYPE_MULTIPLIERS.weak, 'duplán érzékeny')
    + renderMatchupRow('Ellenálló:', resistances, (m) => m < TYPE_MULTIPLIERS.resist, 'duplán ellenálló');
}

function attackingTraits(attackType) {
  const defenders = Object.keys(TYPES);
  return {
    strongAgainst: defenders.filter((defender) => TYPES[defender].weakTo.includes(attackType)),
    weakAgainst: defenders.filter((defender) => TYPES[defender].resists.includes(attackType)),
    noEffectOn: defenders.filter((defender) => TYPES[defender].immuneTo.includes(attackType)),
  };
}

function renderTypeFact(label, typeKeys) {
  return typeKeys.length ? `<dt>${label}</dt><dd>${renderTypeBadges(typeKeys)}</dd>` : '';
}

function renderTypeRow(typeKey) {
  const attack = attackingTraits(typeKey);
  const defense = TYPES[typeKey];
  return `
    <div class="type-row">
      <div class="type-row-head">${renderTypeLabel(typeKey)}</div>
      <dl class="type-facts">
        ${renderTypeFact('Támadva erős', attack.strongAgainst)}
        ${renderTypeFact('Támadva gyenge', attack.weakAgainst)}
        ${renderTypeFact('Szinte hatástalan', attack.noEffectOn)}
        ${renderTypeFact('Érzékeny', defense.weakTo)}
        ${renderTypeFact('Ellenálló', [...defense.resists, ...defense.immuneTo])}
      </dl>
    </div>`;
}

function renderTypeChart() {
  return Object.keys(TYPES).map(renderTypeRow).join('');
}

// ---------- Pokédex ----------

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

// A kártya fülei: csak azok a módok, amelyek a formához tartoznak és van róluk adat.
function gameModesOf(species, form) {
  return GAME_MODES
    .filter((mode) => form.modeKeys.includes(mode.key))
    .map((mode) => ({ ...mode, data: modeData(species, form, mode) }))
    .filter((mode) => mode.data)
    .map(({ data, ...mode }) => ({ ...mode, ...data, detail: mode.isLeague ? `${data.rank}. hely` : '' }));
}

// Alapból a legjobb értékelésű mód nyílik meg.
function defaultModeIndex(modes) {
  const ratingIndex = (mode) => RATING_ORDER.indexOf(mode.rating);
  const best = Math.min(...modes.map(ratingIndex));
  return modes.findIndex((mode) => ratingIndex(mode) === best);
}

function renderModeTab(mode, isSelected) {
  return `
    <button type="button" class="mode-tab rating-${mode.rating}" aria-pressed="${isSelected}"
      data-mode="${mode.key}">${mode.label}</button>`;
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
    renderMoves(mode, species),
    renderFact('Jól megy ellene', mode.beats && mode.beats.join(', ')),
    renderFact('Nehéz ellenfél', mode.losesTo && mode.losesTo.join(', ')),
    renderFact('IV', mode.iv),
  ].join('');
  return `
    <div class="mode-panel" data-mode="${mode.key}" ${isSelected ? '' : 'hidden'}>
      <p class="mode-title">${mode.title}: <b class="rating-text-${mode.rating}">${RATING_LABELS[mode.rating]}</b></p>
      ${detail}${note}
      ${facts ? `<dl class="mon-facts">${facts}</dl>` : ''}
      ${renderList('mon-notes', mode.tips)}
    </div>`;
}

function renderVerdict(species) {
  return `<span class="verdict verdict-${species.verdict}">${VERDICT_LABELS[species.verdict]}</span>`;
}

// A módválasztó sor; a döntés (Marad / Szkenneld / Cukorért) a sor jobb szélén.
function renderGameModes(modes, species) {
  const selected = modes.length ? defaultModeIndex(modes) : -1;
  return `
    <div class="modes">
      <div class="mode-tabs">${modes.map((mode, i) => renderModeTab(mode, i === selected)).join('')}${renderVerdict(species)}</div>
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

function renderFact(label, value) {
  return value ? `<dt>${label}</dt><dd>${escapeHtml(value)}</dd>` : '';
}

function renderList(className, items) {
  return items ? `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : '';
}

function renderPokemonCard(species) {
  const typeNames = species.types.map((type) => TYPES[type].name).join(' ');
  const searchText = normalizeForSearch(`${species.name} ${species.origin} ${typeNames}`);
  const dex = species.dex ? `<span class="mon-dex">#${species.dex}</span>` : '';
  const warning = species.warning ? `<div class="warn">${escapeHtml(species.warning)}</div>` : '';
  const general = renderFact('Fejlődés', species.evolution)
    + renderFact('Buddy', species.stats.buddyKm && `${species.stats.buddyKm} km / cukor`);

  // A fejlécben a kiválasztott forma típusa (a Mega típusa eltérhet); formaváltáskor cserélődik.
  const headTypes = speciesForms(species).map((form, i) => `
    <span class="mon-types" data-form="${form.key}" ${i === 0 ? '' : 'hidden'}>${renderTypeBadges(form.types)}</span>`);

  return `
    <article class="mon" data-search="${escapeHtml(searchText)}" data-dex="${species.dex ?? ''}">
      <div class="mon-head">
        <h3 class="mon-name">${escapeHtml(species.name)} ${dex}</h3>
        ${headTypes.join('')}
      </div>
      <p class="mon-origin">${escapeHtml(species.origin)}</p>
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

// ---------- Linkek ----------

function renderLink(link) {
  const badge = link.badge ? `<span class="star">${escapeHtml(link.badge)}</span>` : '';
  return `
    <li>
      <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener">
        <span class="t"><span>${escapeHtml(link.name)}${badge}</span></span>
        <span class="u">${escapeHtml(stripProtocol(link.url))}</span>
        <span class="d">${escapeHtml(link.description)}</span>
      </a>
    </li>`;
}

function renderLinkGroup(group) {
  return `<ul class="links">${group.links.map(renderLink).join('')}</ul>`;
}

function renderContent(data, pokemon, rankingsDate) {
  const top = topPokemon(pokemon);
  renderInto('type-chart', renderTypeChart());
  renderInto('search-list', renderGroups(data.searchGroups, renderSearchGroup));
  renderInto('rankings-date', escapeHtml(rankingsDate));
  renderInto('top-species-count', top.length);
  renderInto('top-list', renderRankings(top));
  renderInto('dex-list', renderPokedex(pokemon));
  renderInto('link-list', renderGroups(data.linkGroups, renderLinkGroup));
}

// ---------- Fülek ----------

function saveTab(tabId) {
  try {
    localStorage.setItem(TAB_STORAGE_KEY, tabId);
  } catch (error) {
    // Privát módban a tárhely nem elérhető, ilyenkor nem jegyezzük meg.
  }
}

function loadTab() {
  try {
    return localStorage.getItem(TAB_STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function setupTabs() {
  const tabButtons = [...document.querySelectorAll('nav button')];
  const isTab = (id) => tabButtons.some((button) => button.dataset.tab === id);

  function showTab(tabId) {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.tab === tabId;
      button.setAttribute('aria-selected', isActive);
      document.getElementById(button.dataset.tab).hidden = !isActive;
    });
    saveTab(tabId);
  }

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      showTab(button.dataset.tab);
      window.scrollTo(0, 0);
    });
  });

  // A fülre mutató linkek (pl. href="#top") is fület váltanak.
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    const tabId = link && link.getAttribute('href').slice(1);
    if (!isTab(tabId)) return;
    event.preventDefault();
    showTab(tabId);
    window.scrollTo(0, 0);
  });

  const hashTab = location.hash.slice(1);
  const startTab = isTab(hashTab) ? hashTab : loadTab();
  if (isTab(startTab)) showTab(startTab);
}

// ---------- Pokédex keresés ----------

function setupPokedexSearch() {
  const input = document.getElementById('dex-search');
  const cards = [...document.querySelectorAll('#dex-list .mon')];
  const count = document.getElementById('dex-count');
  const emptyMessage = document.getElementById('dex-empty');

  // Szám (vagy #szám) pontos Pokédex-számra keres, minden más a név, alapforma és típus szövegében.
  function matchesQuery(card, rawQuery) {
    const dexQuery = /^#?(\d+)$/.exec(rawQuery);
    if (dexQuery) return card.dataset.dex === String(Number(dexQuery[1]));
    return card.dataset.search.includes(normalizeForSearch(rawQuery));
  }

  function filter() {
    const query = input.value.trim();
    let visible = 0;
    cards.forEach((card) => {
      const matches = matchesQuery(card, query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = `${visible} / ${cards.length} faj`;
    emptyMessage.hidden = visible > 0;
  }

  input.addEventListener('input', filter);

  // A GL Top 50 nevei a Pokédexben nyitják meg a fajt.
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-pokemon]');
    if (!link) return;
    input.value = link.dataset.pokemon;
    filter();
  });

  filter();
}

// ---------- Kártya fülei és formaváltó ----------

// Formaváltás: a gomb, a formapanel és a fejlécben a típus is a kiválasztott formára vált.
function selectFormTab(tab) {
  const card = tab.closest('.mon');
  card.querySelectorAll('.form-tab').forEach((button) => {
    button.setAttribute('aria-pressed', button === tab);
  });
  card.querySelectorAll('.form-panel, .mon-types').forEach((element) => {
    element.hidden = element.dataset.form !== tab.dataset.form;
  });
}

function setupModeTabs() {
  document.getElementById('dex-list').addEventListener('click', (event) => {
    const formTab = event.target.closest('.form-tab');
    if (formTab) {
      selectFormTab(formTab);
      return;
    }
    const tab = event.target.closest('.mode-tab');
    if (!tab) return;
    const modes = tab.closest('.modes');
    modes.querySelectorAll('.mode-tab').forEach((button) => {
      button.setAttribute('aria-pressed', button === tab);
    });
    modes.querySelectorAll('.mode-panel').forEach((panel) => {
      panel.hidden = panel.dataset.mode !== tab.dataset.mode;
    });
  });
}

// ---------- Súgóbuborék (típus-chipek, speciális mozdulatok) ----------

// A buborék ideje a szöveg hosszához igazodik, hogy a hosszabb is elolvasható legyen.
const TOOLTIP_MIN_MS = 2000;
const TOOLTIP_MS_PER_CHAR = 40;
const TOOLTIP_MAX_MS = 6000;
const TOOLTIP_GAP_PX = 6;
const TOOLTIP_EDGE_PX = 8;

// Egy közös buborék: a data-tooltip elemre koppintva fölötte mutatja a szöveget.
function setupTooltip() {
  const tooltip = document.createElement('div');
  tooltip.className = 'type-tooltip';
  tooltip.setAttribute('role', 'status');
  tooltip.hidden = true;
  document.body.appendChild(tooltip);
  let hideTimer;

  const hide = () => {
    tooltip.hidden = true;
  };

  function showFor(chip) {
    tooltip.textContent = chip.dataset.tooltip;
    tooltip.hidden = false;
    const chipRect = chip.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();
    const centeredLeft = chipRect.left + chipRect.width / 2 - tipRect.width / 2;
    const left = Math.min(Math.max(TOOLTIP_EDGE_PX, centeredLeft), window.innerWidth - tipRect.width - TOOLTIP_EDGE_PX);
    tooltip.style.left = `${left + window.scrollX}px`;
    tooltip.style.top = `${chipRect.top + window.scrollY - tipRect.height - TOOLTIP_GAP_PX}px`;
    clearTimeout(hideTimer);
    const visibleMs = Math.min(TOOLTIP_MAX_MS, TOOLTIP_MIN_MS + chip.dataset.tooltip.length * TOOLTIP_MS_PER_CHAR);
    hideTimer = setTimeout(hide, visibleMs);
  }

  document.addEventListener('click', (event) => {
    const chip = event.target.closest('[data-tooltip]');
    if (chip) showFor(chip);
    else hide();
  });
  window.addEventListener('scroll', hide, { passive: true });
}

// ---------- Másolás ----------

function addCopyButton(codeBox) {
  const code = codeBox.querySelector('code');
  const button = document.createElement('button');
  button.className = 'copy';
  button.type = 'button';
  button.textContent = 'Másol';

  const showCopied = () => {
    button.textContent = 'Kész ✓';
    button.classList.add('ok');
    setTimeout(() => {
      button.textContent = 'Másol';
      button.classList.remove('ok');
    }, COPY_FEEDBACK_MS);
  };

  // Ha a vágólap nem elérhető, kijelöljük a szöveget kézi másoláshoz.
  const selectText = () => {
    const range = document.createRange();
    range.selectNodeContents(code);
    const selection = getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    button.textContent = 'Kijelölve';
  };

  button.addEventListener('click', () => {
    try {
      navigator.clipboard.writeText(code.textContent).then(showCopied, selectText);
    } catch (error) {
      selectText();
    }
  });

  codeBox.appendChild(button);
}

function setupCopyButtons() {
  document.querySelectorAll('.code').forEach(addCopyButton);
}

// ---------- Indítás ----------

renderContent(DATA, combineSpeciesData(POKEMON, PVPOKE), PVPOKE_DATE);
setupTabs();
setupPokedexSearch();
setupModeTabs();
setupTooltip();
setupCopyButtons();
