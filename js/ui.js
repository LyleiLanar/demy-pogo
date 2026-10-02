// Kezelés: fülek, Pokédex-keresés, kártyafülek, súgóbuborék és másolás gomb.

const TAB_STORAGE_KEY = 'tab';
const COPY_FEEDBACK_MS = 1500;

// ---------- Fülek, Pokédex-keresés és navigáció ----------

// A navigáció a böngésző előzményeiben él (History API): a fül és a kiválasztott faj a címben van
// (#/dex, #/dex/umbreon), így a vissza gomb (telefonon a vissza mozdulat) az előző fülre vagy fajra lép,
// és a görgetés helye is visszajön. A gépelt keresés nem lép új bejegyzést, csak a mostanit frissíti.

const NO_RESULT_TEXT = 'Nincs találat: vagy nincs ilyen Pokémon, vagy még nincs a Pokédexben, és feltöltésre vár. Kérdezz rá, és felvesszük.';
const NOT_ADDED_TEXT = (name) => `${name} még nincs a Pokédexben, feltöltésre vár. Kérdezz rá, és felvesszük.`;

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

// A Pokédex szűrése: gépelt szöveg (query) vagy egy kiválasztott faj (species: { id, name }).
function createPokedexFilter() {
  const input = document.getElementById('dex-search');
  const clearButton = document.getElementById('dex-search-clear');
  const cards = [...document.querySelectorAll('#dex-list .mon')];
  const count = document.getElementById('dex-count');
  const emptyMessage = document.getElementById('dex-empty');
  let selectedSpecies = null;

  // Szám (vagy #szám) pontos Pokédex-számra keres, minden más a név, alapforma, fejlődési ág és típus szövegében.
  function matchesQuery(card, rawQuery) {
    if (selectedSpecies) return card.dataset.id === selectedSpecies.id;
    const dexQuery = /^#?(\d+)$/.exec(rawQuery);
    if (dexQuery) return card.dataset.dex === String(Number(dexQuery[1]));
    return card.dataset.search.includes(normalizeForSearch(rawQuery));
  }

  function apply() {
    const query = input.value.trim();
    let visible = 0;
    cards.forEach((card) => {
      const matches = matchesQuery(card, query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = `${visible} / ${cards.length} faj`;
    emptyMessage.textContent = selectedSpecies ? NOT_ADDED_TEXT(selectedSpecies.name) : NO_RESULT_TEXT;
    emptyMessage.hidden = visible > 0;
    clearButton.hidden = input.value === '';
  }

  return {
    input,
    clearButton,
    // Az állapot: { query } vagy { species: { id, name } }.
    set({ query = '', species = null }) {
      selectedSpecies = species;
      input.value = species ? species.name : query;
      apply();
    },
    get() {
      return selectedSpecies ? { species: selectedSpecies } : { query: input.value };
    },
  };
}

// Egy faj neve az azonosítójából (a címből betöltéskor): a kártyáról vagy egy fejlődési ágból.
function speciesNameOf(id) {
  const link = document.querySelector(`[data-species="${CSS.escape(id)}"]`);
  return link ? link.dataset.name : id;
}

function setupNavigation() {
  const tabButtons = [...document.querySelectorAll('nav button')];
  const isTab = (id) => tabButtons.some((button) => button.dataset.tab === id);
  const pokedex = createPokedexFilter();
  let currentTab = null;

  function showTab(tabId) {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.tab === tabId;
      button.setAttribute('aria-selected', isActive);
      document.getElementById(button.dataset.tab).hidden = !isActive;
    });
    currentTab = tabId;
    saveTab(tabId);
  }

  function urlOf(state) {
    return state.species ? `#/${state.tab}/${encodeURIComponent(state.species.id)}` : `#/${state.tab}`;
  }

  function render(state) {
    showTab(state.tab);
    pokedex.set(state);
  }

  // Új bejegyzés az előzményekben; előtte a mostanihoz elmentjük, hol tartott a görgetés.
  function navigate(state) {
    history.replaceState({ ...history.state, scrollY: window.scrollY }, '', location.href);
    history.pushState(state, '', urlOf(state));
    render(state);
    window.scrollTo(0, 0);
  }

  // A mostani bejegyzés frissítése (gépelés, törlés): a vissza gomb nem lépked betűnként.
  function updateCurrent() {
    const state = { tab: currentTab, ...pokedex.get() };
    history.replaceState(state, '', urlOf(state));
  }

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => navigate({ tab: button.dataset.tab }));
  });

  document.addEventListener('click', (event) => {
    // Egy faj neve (fejlődési ág, GL Top 50): a Pokédexben csak az a faj látszik.
    const speciesLink = event.target.closest('[data-species]');
    if (speciesLink) {
      event.preventDefault();
      navigate({ tab: 'dex', species: { id: speciesLink.dataset.species, name: speciesLink.dataset.name } });
      return;
    }
    // A fülre mutató linkek (pl. href="#top") is fület váltanak.
    const link = event.target.closest('a[href^="#"]');
    const tabId = link && link.getAttribute('href').slice(1);
    if (!isTab(tabId)) return;
    event.preventDefault();
    navigate({ tab: tabId });
  });

  pokedex.input.addEventListener('input', () => {
    pokedex.set({ query: pokedex.input.value });
    updateCurrent();
  });

  // Egykattintásos törlés.
  pokedex.clearButton.addEventListener('click', () => {
    pokedex.set({ query: '' });
    updateCurrent();
    pokedex.input.focus();
  });

  window.addEventListener('popstate', (event) => {
    const state = event.state || stateFromLocation();
    render(state);
    window.scrollTo(0, state.scrollY || 0);
  });

  // A címből (#/dex/umbreon; a régi #dex alakot is elfogadja), különben az utoljára megnyitott fül.
  function stateFromLocation() {
    const [tabId, speciesId] = location.hash.replace(/^#\/?/, '').split('/');
    if (isTab(tabId)) {
      const id = speciesId && decodeURIComponent(speciesId);
      return id ? { tab: tabId, species: { id, name: speciesNameOf(id) } } : { tab: tabId };
    }
    const savedTab = loadTab();
    return { tab: isTab(savedTab) ? savedTab : tabButtons[0].dataset.tab };
  }

  // A görgetést mi állítjuk vissza (a cím #/ alakja miatt a böngésző horgonyhoz sem ugrik).
  history.scrollRestoration = 'manual';
  const startState = history.state?.tab ? history.state : stateFromLocation();
  history.replaceState(startState, '', urlOf(startState));
  render(startState);
  window.scrollTo(0, startState.scrollY || 0);
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
