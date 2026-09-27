// A puska megjelenítése: listák felépítése a DATA-ból, fülek és másolás gomb.

const TAB_STORAGE_KEY = 'tab';
const COPY_FEEDBACK_MS = 1500;

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

// ---------- Listák ----------

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

function renderRankingEntry(entry) {
  const shadowBadge = entry.shadow ? '<span class="s">S</span>' : '';
  const details = [escapeHtml(entry.origin)];
  if (entry.note) details.push(escapeHtml(entry.note));
  if (entry.warning) details.push(`<b>${escapeHtml(entry.warning)}</b>`);

  return `
    <li>
      <span class="n">${entry.rank}</span>
      <span class="f">${escapeHtml(entry.name)}${shadowBadge}</span>
      <span class="w">${details.join(' · ')}</span>
    </li>`;
}

function renderRankingGroup(group) {
  return `<ol class="rank">${group.entries.map(renderRankingEntry).join('')}</ol>`;
}

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

function renderContent(data) {
  renderInto('search-list', renderGroups(data.searchGroups, renderSearchGroup));
  renderInto('top-list', renderGroups(data.rankingGroups, renderRankingGroup));
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

renderContent(DATA);
setupTabs();
setupCopyButtons();
