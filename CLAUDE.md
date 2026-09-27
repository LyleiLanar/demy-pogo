# Pokémon GO puska

Statikus oldal GitHub Pages-en, build nélkül.

- `index.html`: markup és a szöveges részek
- `style.css`: stílusok
- `data.js`: keresőkifejezések és linkek (`DATA`)
- `pokemon.js`: fajonkénti tanácsok (`POKEMON`), a mezők leírása a fájl elején
- `app.js`: megjelenítés, fülek, Pokédex-keresés, másolás

## Ha a felhasználó egy Pokémonról kérdez

A válaszban adott tanácsot vedd fel a `pokemon.js`-be is:

- Ha a faj már szerepel, egészítsd ki vagy javítsd a meglévő bejegyzést, ne duplikáld.
- Ha új, szúrd be ábécérendben.
- A `greatLeague` és `ultraLeague` helyezést a PvPoke adataiból vedd
  (`github.com/pvpoke/pvpoke`, `src/data/rankings/all/overall/rankings-1500.json` és `-2500.json`,
  1-től számozva; a Shadow változat `<id>_shadow`).
- A GL Top 50 fül a `greatLeague` helyezésekből épül fel, külön listát nem kell frissíteni.
- A felhasználó saját példányait az `owned` mezőbe írd.
