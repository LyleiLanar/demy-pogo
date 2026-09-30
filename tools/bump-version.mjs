// Az index.html összes ?v= verzióját a mai dátumra írja (ha aznap már volt: .2, .3…),
// hogy a böngésző ne a régi, cache-elt CSS/JS fájlt töltse be.
//
// Futtatás: node tools/bump-version.mjs

import { readFile, writeFile } from 'node:fs/promises';

const INDEX_FILE = new URL('../index.html', import.meta.url);
const VERSION_PATTERN = /\?v=(\d{4}-\d{2}-\d{2})(?:\.(\d+))?/g;

function nextVersion(html, today) {
  const versions = [...html.matchAll(VERSION_PATTERN)];
  const todays = versions.filter(([, date]) => date === today).map(([, , counter]) => Number(counter || 1));
  return todays.length ? `${today}.${Math.max(...todays) + 1}` : today;
}

async function main() {
  const html = await readFile(INDEX_FILE, 'utf8');
  const today = new Date().toISOString().slice(0, 10);
  const version = nextVersion(html, today);
  await writeFile(INDEX_FILE, html.replace(VERSION_PATTERN, `?v=${version}`));
  console.log(`index.html: ?v=${version}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
