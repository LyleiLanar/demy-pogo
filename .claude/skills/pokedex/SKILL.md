---
name: pokedex
description: A demy-pogo Pokédex kitöltése és frissítése (data/pokemon.js). Használd, ha a felhasználó egy Pokémonról kérdez, képernyőképet küld egy Pokémonról, vagy azt kéri, hogy egy faj kerüljön be vagy frissüljön a Pokédexben.
---

# Pokédex kitöltése

A felhasználónak adott tanács a `data/pokemon.js`-be is bekerül, hogy az oldalon is meglegyen.
A gépi adat (típus, helyezés, szett, Megák, Shadow) a generált `data/pvpoke.js`-ből jön, azt kézzel
nem írjuk. A mezők pontos leírása a `data/pokemon.js` elején van.

## 1. A faj azonosítása

- Szövegből vagy képernyőképről: név, típus, régiós forma (Alolan, Galarian, Hisuian, Paldean).
- Képernyőképen a CP, az értékelés (csillag, Attack/Defense/HP sáv), a fogás helye és ideje
  a felhasználó **saját példányáról** szól: csak a válaszban használd, a fájlba ne írd,
  mert folyamatosan változik.

## 2. Adatgyűjtés

Először a gépi adat:

```
node tools/pvpoke-lookup.mjs <név vagy azonosító>
```

Kiírja: `id`, típus, címkék (legendary, shadoweligible…), fejlődési sor, buddy km,
Elite mozdulatok, Mega formák, **Dynamax / Gigantamax**, GL/UL helyezés és szett a normál és a
Shadow formára. A szavak sorrendje mindegy („alolan ninetales”). Ha több találat van
(pl. sima és hisui forma), a felhasználó által mutatottat válaszd.

### Források

Bármilyen megbízható forrást használhatsz; ami nem gépi adat, annál mondd meg, honnan van.

| Mire | Forrás | Elérés innen |
|---|---|---|
| PvP-helyezés, szett, párharcok, típus, Mega | PvPoke (`github.com/pvpoke/pvpoke`) | a lookup / sync script |
| Dynamax, Gigantamax, Mega, mozdulatok, Elite TM | a játék game mastere (PokeMiners, `github.com/PokeMiners/game_masters`) | a lookup script |
| Raid-erő, legjobb raid-támadók, Max Battle szerep | Pokebattler, Pokémon GO Hub (db.pokemongohub.net), GamePress, Serebii | WebSearch (a találati lista látszik, az oldalak közvetlenül le vannak tiltva) |
| Aktuális események, Max Battle bossok, Community Day | Leek Duck, Pokémon GO Hub | WebSearch |
| Általános leírás | Bulbapedia | WebSearch |

- A környezet hálózati szabályai miatt a weboldalak közvetlen letöltése (curl, WebFetch) általában
  tiltott; a GitHub elérhető. A WebSearch működik, de csak a találatokat adja.
- A game master a legpontosabb a Dynamaxra, de néha előre tartalmaz még meg nem jelent formát.
  Ha a WebSearch mást mond, jelezd az eltérést.
- A webes adatgyűjtő oldalak sokszor minden fajhoz generálnak sablonoldalt (pl. „Dynamax X counters”),
  ezért egy ilyen oldal léte nem bizonyítja, hogy a forma létezik a játékban.
- Ha semmi nem biztos, használhatod a saját tudásodat, de jelöld bizonytalannak, és javasold,
  hogy a felhasználó nézze meg (pl. Leek Duck).

## 3. Döntés (`verdict`)

- `keep`: raidben vagy gymben erős, vagy legendás / mitikus / Ultra Beast.
- `scan`: GL vagy UL top 100 (normál vagy Shadow forma).
- `transfer`: minden más. A csak Max Battle-ben jó faj is `transfer`, mert a Dynamax példány
  a mindig érvényes kivétel miatt amúgy is marad.

## 4. Módok értékelése

- `greatLeague`, `ultraLeague`: a helyezés és a szín a `data/pvpoke.js`-ből jön, ezt ne írd be.
  Kézzel csak a plusz tanács kerül ide (`iv`, `moves`, `tips`, `note`).
- `raid`: `rating` = `good` / `ok` / `bad`, egy mondatos `note`-tal. A PvPoke nem ad raidadatot:
  ha nem vagy biztos, hagyd ki a `raid` mezőt, és mondd meg a felhasználónak.
- `maxBattle`: csak ha a lookup szerint a fajnak van Dynamax vagy Gigantamax formája. Az `upgrade`
  mondja meg, melyik Max mozdulatot fejleszd (`attack` / `guard` / `spirit`); gyenge értékelésnél hagyd ki.
  Gigantamaxhoz: `forms.gigantamax.maxBattle` (saját `rating`, `note`, `upgrade`).
  Az értékeléshez (támadó, védő, gyógyító) keress rá WebSearch-csel; ha nem egyértelmű, hagyd ki.
- `gym`: csak ha kifejezetten jó gym védő.

## 5. A tanácsok helye

- Módhoz kötött tanács (IV, mozdulat, tipp): a megfelelő mód `iv`, `moves`, `tips` mezőjébe.
- Mozdulatok szétválasztva: `moves: { fast: ['Waterfall', 'Bite'], charged: ['Hydro Pump', 'Crunch'], note }`,
  a játékbeli angol mozdulatnévvel (a lookup is így írja). Ha a PvPoke-szett jó, a GL/UL-hez
  ne írj `moves`-t, mert a kártya magától mutatja.
- Speciális mozdulat (csak Elite TM-mel vagy eseményen szerezhető meg): a ⚠️ jelölés és a szövege
  automatikus a game master alapján, kézzel nem kell jelölni.
- Formához kötött tanács: `forms.shadow`, `forms.mega`, `forms.megaX`, `forms.megaY`, `forms.gigantamax`
  (a kártya Max formájában a faj `maxBattle`-je a Dynamax, a `forms.gigantamax.maxBattle` a Gigantamax fül)
  (a Shadow és a Mega nem külön faj). A Megának csak raidje van, a Shadow-nak nincs Max Battle-je.
- Módtól független, de fajra szóló tanács: `notes`; fejlődés és cukorár: `evolution`.
- Általános, nem fajhoz kötött tanács: az `index.html` Tippek fülére, ne a fajhoz.
- Ne írd be:
  - amit a PvPoke-adat már mutat (szett, nehéz ellenfelek, helyezés);
  - a mindig érvényes kivételt (shiny, jelmezes, különleges hátterű, Dynamax, Shadow, legendás,
    Lucky, @special mozdulatú példány marad) és a „kedvencnek jelöld” jellegű mondatokat;
  - a felhasználó saját példányát, és a csapatára szabott prioritást
    („előbb az X-be tedd a Stardustot”, „a második Dynamax Y tartalék”);
  - az általános szabályokat, akkor sem, ha egy fajjal kapcsolatban hangzottak el. Ezek a Tippek
    fülre valók, ha még nincsenek ott. Például: „raidre magas Attack kell, ideálisan 15”,
    „PvP-re alacsony Attack, magas Defense/HP”, „95% fölötti rank a jó”, „fokozatosan 30–35-ös
    szintig húzd”, „a többi mehet cukorért”, „Pinap Berryvel kapd el”, „egy magas Attackos
    példány maradjon a Megához”, „a Shadow Frustrationnel jön”, „a Genie PvP %-a félrevezető”,
    „a Gigantamax csak Max Battle-ből szerezhető”, „csak a Dynamax példány használható”,
    „a Community Day ritka, tarts meg fejletlen példányt / cukrot”, „tematikus kupákban előkerülhet”,
    „a második Charged Attackot érdemes feloldani”;
  - amit a helyezés mutat („ma nincs a top 100-ban”, „a meta része”, „csak niche”, „a Shadow
    változat jobb”), és hogy a Shadow / Mega erősebb: ilyenkor a forma kapjon saját értékelést
    (`forms.shadow.raid`, `forms.mega.raid`);
  - a típusból adódó gyengeséget („Fighting boss ellen ne vidd”): a kártya Érzékeny sora mutatja.
  - hogy milyen típusú támadó („Fire támadó”), ha a módnál van mozdulatlista: a mozdulatok
    típusikonja mutatja. Mozdulatlista nélkül maradhat.

  Próba: ha a mondat egy másik fajnál is szó szerint igaz lenne, akkor általános.

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
  // nincs maxBattle: a lookup szerint nincs Dynamax formája
  evolution: 'Rowlet → Dartrix (25 cukor) → Decidueye (100 cukor).',
},
```

## 7. Generálás, verzió, ellenőrzés

1. `node tools/sync-pvpoke.mjs` – frissíti a `data/pvpoke.js`-t (az új fajjal együtt).
2. `node tools/bump-version.mjs` – az `index.html` összes `?v=` verzióját a mai dátumra írja
   (ha aznap már volt változás: `2026-09-29.2`, `.3`…).
3. Ellenőrizd, hogy a fájl betölthető:
   `node -e "$(cat data/pokemon.js); console.log(POKEMON.length)"`.
4. Ha van Playwright, nyisd meg az `index.html`-t, keress rá a fajra a Pokédex fülön, és nézd meg,
   hogy a kártya hibamentesen megjelenik.

## 8. Lezárás

- Commit és push a munkaágra; előnézet frissítése, ha van publikált artifact; PR csak kérésre.
- A válaszban röviden: döntés, a módok értékelése, érzékenység (a típusból), fejlődés,
  és ha a felhasználó egy saját példányt mutatott, arra vonatkozó tanács
  (pl. PvP-hez jó-e az IV-eloszlása, elküldhető-e, kedvenc-csillag levétele).
