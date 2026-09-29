# Pokémon GO puska

Statikus oldal GitHub Pages-en, build nélkül.

- `index.html`: markup és a szöveges részek
- `style.css`: stílusok
- `data.js`: keresőkifejezések és linkek (`DATA`)
- `pokemon.js`: fajonkénti, kézzel írt tanácsok (`POKEMON`), a mezők leírása a fájl elején
- `pvpoke.js`: GENERÁLT (`PVPOKE`): típus, Mega formák, buddy km, GL/UL helyezés, ajánlott szett,
  párharcok, a normál és a Shadow formára külön.
  Kézzel ne szerkeszd; frissítés: `node tools/sync-pvpoke.mjs` (a pokemon.js `id`-jai alapján)
- `types.js`: a 18 típus ikonja, színe és típustáblázata (`TYPES`)
- `app.js`: megjelenítés, fülek, Pokédex-keresés, másolás
- `tools/`: `sync-pvpoke.mjs` (pvpoke.js generálása), `pvpoke-lookup.mjs` (egy faj PvPoke-adatai),
  `pvpoke-common.mjs` (közös kód)

Az `index.html`-ben a CSS és JS hivatkozásoknak verziója van (`?v=ÉÉÉÉ-HH-NN`). Ha bármelyik
fájl változik, írd át mindegyiket a mai dátumra (ha aznap már volt változás, sorszámmal:
`2026-09-29.2`), különben a böngésző a régi, cache-elt fájlt töltheti be az új oldal mellé.

## Ha a felhasználó egy Pokémonról kérdez

Szövegben vagy képernyőképen: kövesd a `pokedex` skillt (`.claude/skills/pokedex/SKILL.md`).
A válaszban adott tanács a `pokemon.js`-be is bekerül; a saját példányok adatai nem.
