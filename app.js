// A puska megjelenítése: listák felépítése a DATA-ból és a POKEMON-ból,
// fülek, Pokédex-keresés és másolás gomb.

const TAB_STORAGE_KEY = 'tab';
const COPY_FEEDBACK_MS = 1500;
const TOP_RANK_LIMIT = 50;
const RANKING_GROUPS = [
  { title: '1–10', maxRank: 10 },
  { title: '11–30', maxRank: 30 },
  { title: '31–50', maxRank: 50 },
];
const VERDICT_LABELS = { keep: 'Megtartás', scan: 'Szkenneld', transfer: 'Mehet' };

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

function bestRank(league) {
  return Math.min(league.rank ?? Infinity, league.shadowRank ?? Infinity);
}

function isTopRank(rank) {
  return rank !== undefined && rank <= TOP_RANK_LIMIT;
}

function topPokemon(pokemon) {
  return pokemon
    .filter((species) => species.greatLeague && bestRank(species.greatLeague) <= TOP_RANK_LIMIT)
    .sort((a, b) => bestRank(a.greatLeague) - bestRank(b.greatLeague));
}

function renderRankingEntry(species) {
  const { rank, shadowRank } = species.greatLeague;
  const shadowBadge = isTopRank(rank) && isTopRank(shadowRank) ? '<span class="s">S</span>' : '';
  const details = [escapeHtml(species.origin)];
  if (!isTopRank(rank)) details.push('csak a Shadow változat van a top 50-ben');
  if (species.warning) details.push(`<b>${escapeHtml(species.warning)}</b>`);

  return `
    <li>
      <span class="n">${bestRank(species.greatLeague)}</span>
      <a class="f" href="#dex" data-pokemon="${escapeHtml(species.name)}">${escapeHtml(species.name)}${shadowBadge}</a>
      <span class="w">${details.join(' · ')}</span>
    </li>`;
}

function renderRankings(pokemon) {
  let minRank = 1;
  return RANKING_GROUPS.map((group) => {
    const entries = pokemon.filter((species) => {
      const rank = bestRank(species.greatLeague);
      return rank >= minRank && rank <= group.maxRank;
    });
    minRank = group.maxRank + 1;
    return `<h2>${group.title}</h2><ol class="rank">${entries.map(renderRankingEntry).join('')}</ol>`;
  }).join('');
}

// ---------- Pokédex ----------

function formatLeague(league) {
  const parts = [];
  if (league.rank) parts.push(`${league.rank}.`);
  if (league.shadowRank) parts.push(`Shadow: ${league.shadowRank}.`);
  if (league.note) parts.push(league.note);
  return parts.join(' · ');
}

function renderFact(label, value) {
  return value ? `<dt>${label}</dt><dd>${escapeHtml(value)}</dd>` : '';
}

function renderList(className, items) {
  return items ? `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>` : '';
}

function renderPokemonCard(species) {
  const roles = species.roles || {};
  const searchText = normalizeForSearch(`${species.name} ${species.origin}`);
  const warning = species.warning ? `<div class="warn">${escapeHtml(species.warning)}</div>` : '';
  const owned = species.owned
    ? `<h4 class="mon-owned">Saját példányaid</h4>${renderList('mon-notes', species.owned)}`
    : '';

  return `
    <article class="mon" data-search="${escapeHtml(searchText)}">
      <div class="mon-head">
        <h3 class="mon-name">${escapeHtml(species.name)}</h3>
        <span class="verdict verdict-${species.verdict}">${VERDICT_LABELS[species.verdict]}</span>
      </div>
      <p class="mon-origin">${escapeHtml(species.origin)}</p>
      ${warning}
      <dl class="mon-facts">
        ${renderFact('Great League', species.greatLeague && formatLeague(species.greatLeague))}
        ${renderFact('Ultra League', species.ultraLeague && formatLeague(species.ultraLeague))}
        ${renderFact('Raid', roles.raid)}
        ${renderFact('Max Battle', roles.maxBattle)}
        ${renderFact('Gym', roles.gym)}
        ${renderFact('IV', species.ivAdvice)}
        ${renderFact('Mozdulatok', species.moves)}
        ${renderFact('Fejlődés', species.evolution)}
      </dl>
      ${renderList('mon-notes', species.notes)}
      ${owned}
    </article>`;
}

function renderPokedex(pokemon) {
  const cards = pokemon.map(renderPokemonCard).join('');
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

  function filter() {
    const query = normalizeForSearch(input.value.trim());
    let visible = 0;
    cards.forEach((card) => {
      const matches = card.dataset.search.includes(query);
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

renderContent(DATA, POKEMON, RANKINGS_DATE);
setupTabs();
setupPokedexSearch();
setupCopyButtons();
