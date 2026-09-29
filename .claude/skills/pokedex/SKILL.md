---
name: pokedex
description: A demy-pogo Pokédex kitöltése és frissítése (pokemon.js). Használd, ha a felhasználó egy Pokémonról kérdez, képernyőképet küld egy Pokémonról, vagy azt kéri, hogy egy faj kerüljön be vagy frissüljön a Pokédexben.
---

# Pokédex kitöltése

A felhasználónak adott tanács a `pokemon.js`-be is bekerül, hogy az oldalon is meglegyen.
A gépi adat (típus, helyezés, szett, Megák, Shadow) a generált `pvpoke.js`-ből jön, azt kézzel
nem írjuk. A mezők pontos leírása a `pokemon.js` elején van.

## 1. A faj azonosítása

- Szövegből vagy képernyőképről: név, típus, régiós forma (Alolan, Galarian, Hisuian, Paldean).
- Képernyőképen a CP, az értékelés (csillag, Attack/Defense/HP sáv), a fogás helye és ideje
  a felhasználó **saját példányáról** szól: csak a válaszban használd, a fájlba ne írd,
  mert folyamatosan változik.

## 2. PvPoke-adat lekérése

```
node tools/pvpoke-lookup.mjs <név vagy azonosító>
```

Kiírja: `id`, típus, címkék (legendary, shadoweligible…), fejlődési sor, buddy km,
Elite mozdulatok, Mega formák, GL/UL helyezés és szett a normál és a Shadow formára.
Ha több találat van (pl. sima és hisui forma), a felhasználó által mutatottat válaszd.

## 3. Döntés (`verdict`)

- `keep`: raidben vagy gymben erős, vagy legendás / mitikus / Ultra Beast.
- `scan`: GL vagy UL top 100 (normál vagy Shadow forma).
- `transfer`: minden más. A csak Max Battle-ben jó faj is `transfer`, mert a Dynamax példány
  a mindig érvényes kivétel miatt amúgy is marad.

## 4. Módok értékelése

- `greatLeague`, `ultraLeague`: a helyezés és a szín a `pvpoke.js`-ből jön, ezt ne írd be.
  Kézzel csak a plusz tanács kerül ide (`iv`, `moves`, `tips`, `note`).
- `raid`: `rating` = `good` / `ok` / `bad`, egy mondatos `note`-tal. A PvPoke nem ad raidadatot:
  ha nem vagy biztos, hagyd ki a `raid` mezőt, és mondd meg a felhasználónak.
- `maxBattle`: csak ha a fajnak van Dynamax vagy Gigantamax formája. A PvPoke ezt nem tudja;
  ha nem vagy biztos, hagyd ki, és javasold a Leek Duck Max Battles oldalát.
- `gym`: csak ha kifejezetten jó gym védő.

## 5. A tanácsok helye

- Módhoz kötött tanács (IV, mozdulat, tipp): a megfelelő mód `iv`, `moves`, `tips` mezőjébe.
- Formához kötött tanács: `forms.shadow`, `forms.mega`, `forms.megaX`, `forms.megaY`
  (a Shadow és a Mega nem külön faj). A Megának csak raidje van, a Shadow-nak nincs Max Battle-je.
- Módtól független, de fajra szóló tanács: `notes`; fejlődés és cukorár: `evolution`.
- Általános, nem fajhoz kötött tanács: az `index.html` Tippek fülére, ne a fajhoz.
- Ne írd be:
  - amit a PvPoke-adat már mutat (szett, nehéz ellenfelek, helyezés);
  - a mindig érvényes kivételt (shiny, jelmezes, különleges hátterű, Dynamax, Shadow, legendás,
    Lucky, @special mozdulatú példány marad) és a „kedvencnek jelöld” jellegű mondatokat;
  - a felhasználó saját példányát.

## 6. Beírás

- Ha a faj már szerepel, egészítsd ki vagy javítsd a meglévő bejegyzést, ne duplikáld.
- Új fajt ábécérendben szúrj be (`localeCompare(..., 'hu')` szerint), a megfelelő `id`-vel.
- Minta:

```js
{
  id: 'decidueye',
  name: 'Decidueye',
  origin: 'Rowlet',
  verdict: 'transfer',
  raid: { rating: 'bad', note: 'Grass/Ghost, vékony támadó; vannak jobb Grass támadók.' },
  evolution: 'Rowlet → Dartrix (25 cukor) → Decidueye (100 cukor).',
},
```

## 7. Generálás, verzió, ellenőrzés

1. `node tools/sync-pvpoke.mjs` – frissíti a `pvpoke.js`-t (az új fajjal együtt).
2. Az `index.html` összes `?v=` verzióját írd át a mai dátumra
   (ha aznap már volt változás: `2026-09-29.2`, `.3`…).
3. Ellenőrizd, hogy a fájl betölthető:
   `node -e "$(cat pokemon.js); console.log(POKEMON.length)"`.
4. Ha van Playwright, nyisd meg az `index.html`-t, keress rá a fajra a Pokédex fülön, és nézd meg,
   hogy a kártya hibamentesen megjelenik.

## 8. Lezárás

- Commit és push a munkaágra; előnézet frissítése, ha van publikált artifact; PR csak kérésre.
- A válaszban röviden: döntés, a módok értékelése, érzékenység (a típusból), fejlődés,
  és ha a felhasználó egy saját példányt mutatott, arra vonatkozó tanács
  (pl. PvP-hez jó-e az IV-eloszlása, elküldhető-e, kedvenc-csillag levétele).
