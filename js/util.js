// Közös segédfüggvények a megjelenítéshez.

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

function renderFact(label, value) {
  return value ? `<dt>${label}</dt><dd>${escapeHtml(value)}</dd>` : '';
}

// Szöveges tanácsok a szakasz alján: minden tanács külön bekezdés, felsorolásjel nélkül.
function renderAdvice(items) {
  const texts = items.flat().filter(Boolean);
  return texts.length ? `<div class="advice">${texts.map((text) => `<p>${escapeHtml(text)}</p>`).join('')}</div>` : '';
}
