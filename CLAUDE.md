# Pokémon GO puska

Statikus oldal GitHub Pages-en, build nélkül.

- `index.html`: markup és a szöveges részek
- `style.css`: stílusok
- `data/`: az adatok
  - `lists.js`: keresőkifejezések és linkek (`DATA`)
  - `pokemon.js`: fajonkénti, kézzel írt tanácsok (`POKEMON`), a mezők leírása a fájl elején
  - `pvpoke.js`: GENERÁLT (`PVPOKE`): típus, Mega formák, buddy km, GL/UL helyezés, ajánlott szett,
    párharcok, a normál és a Shadow formára külön.
    Kézzel ne szerkeszd; frissítés: `node tools/sync-pvpoke.mjs` (a pokemon.js `id`-jai alapján)
  - `types.js`: a 18 típus ikonja, színe és típustáblázata (`TYPES`)
- `js/`: a megjelenítés, sima (nem modul) scriptek, hogy `file://`-ról is működjön; a sorrend az
  `index.html`-ben számít
  - `util.js`: közös segédfüggvények
  - `type-view.js`: típusikonok, Érzékeny / Ellenálló sor, típustáblázat
  - `lists.js`: Keresők és Linkek fül
  - `rankings.js`: GL Top 50 fül
  - `species.js`: a Pokédex adatlogikája (POKEMON + PVPOKE, formák, módok, értékelés)
  - `pokedex.js`: a Pokédex kártyái
  - `ui.js`: fülek, keresés, formaváltó, súgóbuborék, másolás
  - `main.js`: indítás
- `tools/`: `sync-pvpoke.mjs` (data/pvpoke.js generálása), `pvpoke-lookup.mjs` (egy faj gépi adatai:
  PvPoke + a játék game mastere, Dynamaxszal), `pvpoke-common.mjs` (közös kód),
  `bump-version.mjs` (az index.html `?v=` verzióinak átírása)
- `.github/workflows/sync-pvpoke.yml`: hetente lefuttatja a szinkront, és ha változott az adat,
  verziót vált és commitol a main-re. A helyezések frissítéséhez tehát nem kell kézzel szinkronizálni.

Az `index.html`-ben a CSS és JS hivatkozásoknak verziója van (`?v=ÉÉÉÉ-HH-NN`). Ha bármelyik
fájl változik, írd át mindegyiket a mai dátumra (ha aznap már volt változás, sorszámmal:
`2026-09-29.2`), különben a böngésző a régi, cache-elt fájlt töltheti be az új oldal mellé.
Erre való a `node tools/bump-version.mjs`.

## Ha a felhasználó egy Pokémonról kérdez

Szövegben vagy képernyőképen: kövesd a `pokedex` skillt (`.claude/skills/pokedex/SKILL.md`).
A válaszban adott tanács a `data/pokemon.js`-be is bekerül; a saját példányok adatai nem.
