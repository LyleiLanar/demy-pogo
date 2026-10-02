// Indítás: a tartalom felépítése az adatokból, majd a kezelés beállítása.

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

renderContent(DATA, combineSpeciesData(POKEMON, PVPOKE), PVPOKE_DATE);
setupNavigation();
setupModeTabs();
setupTooltip();
setupCopyButtons();
