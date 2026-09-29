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

Az `index.html`-ben a CSS és JS hivatkozásoknak verziója van (`?v=ÉÉÉÉ-HH-NN`). Ha bármelyik
fájl változik, írd át mindegyiket a mai dátumra (ha aznap már volt változás, sorszámmal:
`2026-09-29.2`), különben a böngésző a régi, cache-elt fájlt töltheti be az új oldal mellé.

## Ha a felhasználó egy Pokémonról kérdez

A válaszban adott tanácsot vedd fel a `pokemon.js`-be is:

- Ha a faj már szerepel, egészítsd ki vagy javítsd a meglévő bejegyzést, ne duplikáld.
- Ha új, szúrd be ábécérendben.
- Új fajnál add meg az `id`-t (PvPoke speciesId), majd futtasd a `node tools/sync-pvpoke.mjs`-t;
  a helyezés, típus és szett ebből jön, a GL Top 50 fül is.
- A döntés (`verdict`) szabálya: `keep` = raidben vagy gymben erős, vagy legendás / mitikus /
  Ultra Beast; `scan` = GL vagy UL top 100; minden más `transfer`. A csak Max Battle-ben jó faj
  `transfer`, mert a Dynamax példány a kivétel miatt amúgy is marad.
- Ne ismételd a PvPoke-adatot (szett, nehéz ellenfelek) a kézi `moves` / `tips` mezőkben.
- A módhoz kötött tanácsot (IV, mozdulatok, tippek) a megfelelő mód (`raid`, `greatLeague`,
  `ultraLeague`, `maxBattle`, `gym`) `iv`, `moves` és `tips` mezőjébe írd; a `notes`-ba csak
  az kerüljön, ami egyik módhoz sem kötődik.
- A Shadow és a Mega nem külön faj: a formára szabott tanács a faj `forms` mezőjébe kerül
  (`shadow`, `mega`, `megaX`, `megaY`). A Shadow helyezése és a Mega típusa a pvpoke.js-ből jön.
- A felhasználó saját példányait (IV, CP, szint) ne írd be, mert folyamatosan változnak.
- Az általános, nem fajhoz kötött tanács az `index.html` Tippek fülére kerüljön.
