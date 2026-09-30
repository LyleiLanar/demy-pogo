// A Keresők és a Linkek fül listái (DATA).

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
