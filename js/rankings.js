// A GL Top 50 fül: a PvPoke Great League helyezései csoportokban.

const TOP_RANK_LIMIT = 50;
const RANKING_GROUPS = [
  { title: '1–10', maxRank: 10 },
  { title: '11–30', maxRank: 30 },
  { title: '31–50', maxRank: 50 },
];

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
      <a class="f" href="#dex" data-species="${species.id}" data-name="${escapeHtml(species.name)}">${escapeHtml(species.name)}${shadowBadge}</a>
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
