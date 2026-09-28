// Fajonkénti, kézzel írt tanácsok. A Pokédex és a GL Top 50 fül ebből és a pvpoke.js-ből épül fel.
// A típus, a helyezés, az ajánlott szett és a párharcok a generált pvpoke.js-ben vannak.
//
// Mezők (csak az id, name, origin és verdict kötelező):
//   id           a faj PvPoke-azonosítója (speciesId), ezzel kapcsolódik a pvpoke.js-hez
//   name         a faj neve
//   origin       amit a vadonban elkapsz, vagy ahonnan szerzed
//   verdict      'keep'     = maradjon, építsd
//                'scan'     = PvP-jelölt: az alacsony Attackosakat nézd meg Poke Genie-vel,
//                             a legjobb marad, a többi mehet cukorért
//                'transfer' = mehet cukorért (egy maradhat a Pokédexért), kivételek a notes-ban
//   warning      rövid, kiemelt figyelmeztetés (a GL Top 50 fülön is látszik)
//
//   Játékmódok (a kártya fülei). Minden módban csak az ahhoz kellő tanács van.
//   raid         { rating, note, iv, moves, tips }
//   greatLeague  { note, iv, moves, tips }: a helyezés és a rating a pvpoke.js-ből jön
//   ultraLeague  { note, iv, moves, tips }
//   maxBattle    { rating, note, iv, moves, tips }
//   gym          { rating, note, iv, moves, tips }
//     rating     'good' = erős, 'ok' = közepes, 'bad' = gyenge
//     note       egy mondatos összegzés
//     iv         milyen IV a jó ebben a módban
//     moves      ajánlott mozdulatok ebben a módban
//     tips       további tanácsok ebben a módban
//   Ha egy mód hiányzik, arról nincs adat.
//
//   Módtól független:
//   evolution    fejlődés, cukorár
//   notes        általános tanácsok
//
// Mindig érvényes kivétel, ezt nem ismételjük minden sorban: shiny, jelmezes,
// különleges hátterű, Dynamax, Shadow, legendás, Lucky és @special mozdulatú példány marad.

const POKEMON = [
  {
    id: 'aegislash_shield',
    name: 'Aegislash',
    origin: 'Honedge',
    verdict: 'scan',
    greatLeague: {
      iv: 'Mielőtt Stardustot teszel bele, nézd meg a Genie-ben az IV rankját mindkét formára, mert eltérhet.',
      tips: [
        'Harc közben két forma között vált, nehezen tanulható. Kezdőként a Doublade egyszerűbb.',
      ],
    },
  },
  {
    id: 'alakazam',
    name: 'Alakazam',
    origin: 'Abra',
    verdict: 'transfer',
    raid: {
      rating: 'ok',
      note: 'Közepes Psychic támadó, nagyon vékony. A Shadow és a Mega Alakazam erősebb.',
    },
    maxBattle: {
      rating: 'bad',
      note: 'Psychic támadó, nagyon vékony. Alacsony prioritás.',
      tips: [
        'Fighting és Poison bossok ellen jó, ellenáll a Fighting támadásoknak.',
        'Max Particle-t ne költs rá, amíg a fő csapat nincs kész.',
      ],
    },
    evolution: 'Abra → Kadabra (25 cukor) → Alakazam (100 cukor), vagy csere után ingyen.',
  },
  {
    id: 'ninetales_alolan',
    name: 'Alolan Ninetales',
    origin: 'alolai Vulpix',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'altaria',
    name: 'Altaria',
    origin: 'Swablu',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'ampharos',
    name: 'Ampharos',
    origin: 'Mareep',
    verdict: 'scan',
    raid: {
      rating: 'ok',
      note: 'Electric/Dragon Mega.',
      iv: 'Megára magas Attackos példány.',
      moves: 'A Dragon Pulse (Community Day mozdulat) különösen értékes.',
      tips: [
        'Mega Ampharos: Electric/Dragon Mega, Water és Flying bossok ellen hasznos, szólóban is jó Mega.',
        'Mega Ampharoshoz egy magas Attackos példány maradjon.',
      ],
    },
    ultraLeague: {
      note: '35–40-es szintre kell húzni.',
      iv: 'Alacsony Attack; 95% fölötti rank a jó, 98% fölötti kiváló.',
      tips: [
        'Ultra League-ben a meta része.',
      ],
    },
    notes: [
      'A többi Mareep/Flaaffy/Ampharos cukorért mehet.',
    ],
  },
  { id: 'annihilape', name: 'Annihilape', origin: 'Mankey', verdict: 'scan' },
  {
    id: 'araquanid',
    name: 'Araquanid',
    origin: 'Dewpider',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'azumarill',
    name: 'Azumarill',
    origin: 'Marill / Azurill',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'bastiodon',
    name: 'Bastiodon',
    origin: 'Shieldon',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    notes: [
      'Great League-ben ma nincs a top 100-ban; tematikus kupákban előkerülhet.',
    ],
  },
  {
    id: 'baxcalibur',
    name: 'Baxcalibur',
    origin: 'Frigibax',
    verdict: 'keep',
    raid: {
      rating: 'good',
      note: 'Ice támadó.',
      iv: 'Magas Attack, a 3 csillagos példányok a legjobbak.',
      tips: [
        'Az egyik legjobb Ice raid támadó (Dragon/Ice).',
        'Dragon, Flying, Ground és Grass bossok ellen kiváló.',
        'Jó Stardust-befektetés, fokozatosan 30–35-ös szintig.',
      ],
    },
    evolution: 'Frigibax → Arctibax (25 cukor) → Baxcalibur (100 cukor).',
    notes: [
      'A Frigibax ritka, ne küldj el semmit a vonalból, amíg nincs egy jó Baxcaliburod.',
    ],
  },
  {
    id: 'blaziken',
    name: 'Blaziken',
    origin: 'Torchic',
    verdict: 'keep',
    raid: {
      rating: 'good',
      note: 'Fire és Fighting támadó (Shadow).',
      iv: 'Csak magas Attackos példányt építs, Shadowként drága.',
      moves: 'A legjobb a Blast Burn (legacy). Frustrationnel jön, Rocket eseményen cseréld; addig a második töltött mozdulatot érdemes feloldani.',
      tips: [
        'A Shadow Torchic raidbe napi ingyenes Raid Passszal megéri bemenni, prémium vagy távoli passra nem.',
        'Stardustot előbb a Charizardba és a Baxcaliburba tedd.',
      ],
    },
    evolution: 'Torchic → Combusken (25 cukor) → Blaziken (100 cukor).',
    notes: [
      'Mega nem lehet belőle, mert Shadow.',
    ],
  },
  {
    id: 'blissey',
    name: 'Blissey',
    origin: 'Chansey / Happiny',
    verdict: 'keep',
    raid: { rating: 'bad' },
    maxBattle: { rating: 'ok', note: 'Csak a Dynamax Blissey használható, az a legjobb gyógyító.' },
    gym: {
      rating: 'good',
      note: 'Az egyik legjobb gym védő.',
      iv: 'Gym védőnek a magas HP és Defense a jó.',
      tips: [
        'Az egyik legjobb gym védő, de az érme az időtől függ, nem a védő erejétől, ezért Stardustot ne tegyél bele.',
      ],
    },
  },
  {
    id: 'carbink',
    name: 'Carbink',
    origin: 'Carbink',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'charizard',
    name: 'Charizard',
    origin: 'Charmander',
    verdict: 'keep',
    raid: {
      rating: 'good',
      note: 'Fire támadó, Mega Y.',
      iv: 'Raidre magas Attack kell, ideálisan 15. Egy 14-es és egy 15-ös Attack között csak pár százalék a különbség, azért nem kell eldobni egy jó példányt.',
      moves: 'A legjobb a Blast Burn (Community Day vagy Elite Charged TM). Nélküle Overheat-tel elfogadható; ha fejlesztés után nem Overheat vagy Dragon Claw lett, egy Charged TM-mel cseréld.',
      tips: [
        'Fő cél: Mega Charizard Y raidhez. Mega alakban a jelmez nem látszik, utána visszajön.',
        'Fokozatosan 30–35-ös szintig húzd, 40 fölött XL cukor kell.',
      ],
    },
    ultraLeague: {
      moves: 'Dragon Breath + Blast Burn + Dragon Claw.',
      tips: [
        'Csak niche szerep.',
      ],
    },
    maxBattle: {
      rating: 'good',
      note: 'A Gigantamax Charizard a legerősebb G-Max támadó, csak eseményes Max Battle-ből, 10–40 fős csapattal.',
    },
    evolution: 'Charmander → Charmeleon (25 cukor) → Charizard (100 cukor). A jelmez megmarad fejlesztéskor.',
    notes: [
      'Charmander Community Day ritka (utoljára 2018, azóta csak Classic visszatérések), ne várj rá.',
      'Tarts meg 1–2 jó Charmandert fejletlenül egy esetleges Classic eseményre.',
      'A többi Charmander cukorért mehet; Pinap Berry duplázza a cukrot, buddyként 3 km/cukor.',
    ],
  },
  {
    id: 'charjabug',
    name: 'Charjabug',
    origin: 'Grubbin',
    verdict: 'scan',
    warning: 'NE fejleszd Vikavolttá!',
    raid: { rating: 'bad' },
    evolution: 'NE fejleszd Vikavolttá, köztes formában jó.',
  },
  {
    id: 'cherrim_overcast',
    name: 'Cherrim',
    origin: 'Cherubi',
    verdict: 'transfer',
    raid: { rating: 'bad', note: 'Gyenge Grass típus.' },
  },
  {
    id: 'cinderace',
    name: 'Cinderace',
    origin: 'Scorbunny',
    verdict: 'transfer',
    raid: { rating: 'ok', note: 'Közepes Fire támadó.' },
    maxBattle: {
      rating: 'good',
      note: 'Csak a Dynamax példány: erős Fire támadó.',
      tips: [
        'Grass, Bug, Steel és Ice bossok ellen.',
        'A Darmanitan és a Cinderace közül csak az egyikre költs Max Particle-t.',
      ],
    },
    evolution: 'Scorbunny → Raboot → Cinderace. A Dynamax képesség fejlesztés után megmarad.',
  },
  {
    id: 'clodsire',
    name: 'Clodsire',
    origin: 'paldeai Wooper',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'corviknight',
    name: 'Corviknight',
    origin: 'Rookidee',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'cramorant',
    name: 'Cramorant',
    origin: 'Cramorant',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'darmanitan_standard',
    name: 'Darmanitan',
    origin: 'Darumaka',
    verdict: 'transfer',
    raid: { rating: 'ok' },
    maxBattle: {
      rating: 'ok',
      note: 'Fire támadó; ő vagy a Cinderace kap Max Particle-t.',
      tips: [
        'A magasabb CP miatt valószínűleg vele olcsóbb indulni.',
      ],
    },
    notes: [
      'A Darumaka duplikátumok cukorért mehetnek.',
    ],
  },
  {
    id: 'dedenne',
    name: 'Dedenne',
    origin: 'Dedenne',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    greatLeague: {
      iv: 'Ha mégis építenéd: legjobb IV 0/14/12 (33-as szint, 1500 CP).',
      moves: 'Ha mégis építenéd: Thunder Shock + Discharge + Play Rough.',
      tips: [
        'Nehéz ellenfelei: Shadow Quagsire, Mimikyu, Tinkaton.',
        'Kivétel: Electric vagy Fairy tematikus kupánál előkerülhet.',
      ],
    },
  },
  {
    id: 'delphox',
    name: 'Delphox',
    origin: 'Fennekin',
    verdict: 'transfer',
    raid: {
      rating: 'ok',
      note: 'Közepes Fire támadó, a Mega Charizard Y jobb.',
      moves: 'A legjobb a Blast Burn (Community Day mozdulat).',
      tips: [
        'Tartalék Fire támadó raidre és Rocket ellen.',
      ],
    },
    notes: [
      'A többi Fennekin/Braixen cukorért mehet, a cukor a Delphox felhúzásához kell.',
    ],
  },
  {
    id: 'deoxys_defense',
    name: 'Deoxys (Defense)',
    origin: 'raidből (legendás)',
    verdict: 'keep',
    raid: { rating: 'bad' },
  },
  {
    id: 'dondozo',
    name: 'Dondozo',
    origin: 'Dondozo',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'doublade',
    name: 'Doublade',
    origin: 'Honedge',
    verdict: 'scan',
    warning: 'NE fejleszd Aegislashsá!',
    raid: { rating: 'bad' },
    greatLeague: {
      tips: [
        'Egy jó, alacsony Attackos példány marad.',
      ],
    },
    evolution: 'Great League-re NE fejleszd Aegislashsá, köztes formában jó.',
  },
  {
    id: 'drifblim',
    name: 'Drifblim',
    origin: 'Drifloon',
    verdict: 'transfer',
    raid: { rating: 'bad' },
  },
  {
    id: 'dubwool',
    name: 'Dubwool',
    origin: 'Wooloo',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    maxBattle: { rating: 'bad', note: 'Gyenge szerepben.' },
  },
  {
    id: 'dusclops',
    name: 'Dusclops',
    origin: 'Duskull',
    verdict: 'scan',
    warning: 'NE fejleszd Dusknoirrá!',
    raid: { rating: 'bad' },
    greatLeague: {
      tips: [
        'A Shadow változat valamivel jobb.',
        'Nagyon bírja a sebzést, kezdőknek is jól játszható.',
      ],
    },
    evolution: 'Great League-re NE fejleszd Dusknoirrá, köztes formában jó.',
  },
  {
    id: 'eldegoss',
    name: 'Eldegoss',
    origin: 'Gossifleur',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    evolution: 'Gossifleur → Eldegoss, 50 cukor.',
    notes: [
      'Egy alacsony Attackos Gossifleur maradhat a Little Cupra (500 CP).',
    ],
  },
  {
    id: 'empoleon',
    name: 'Empoleon',
    origin: 'Piplup',
    verdict: 'scan',
    warning: 'Hydro Cannon kell hozzá',
    raid: { rating: 'ok' },
  },
  {
    id: 'excadrill',
    name: 'Excadrill',
    origin: 'Drilbur',
    verdict: 'keep',
    raid: { rating: 'good' },
    maxBattle: {
      rating: 'good',
      note: 'Fő támadó (Ground/Steel), a Max Attackot húzd fel.',
      tips: [
        'Fighting boss ellen ne vidd, kétszeres sebzést kap.',
        'A második Dynamax Drilbur tartalék egy második Excadrillhez.',
      ],
    },
    evolution: 'Drilbur → Excadrill, 50 cukor.',
  },
  {
    id: 'fearow',
    name: 'Fearow',
    origin: 'Spearow',
    verdict: 'scan',
    raid: { rating: 'bad' },
    greatLeague: {
      iv: 'Legjobb IV: 0/15/14 (28,5-ös szint, 1498 CP). Alacsony Attack, magas Defense és HP.',
      tips: [
        'Olcsó építeni, a Spearow gyakori, és a Great League-hez nem kell XL cukor.',
        'A második töltött mozdulatot (Drill Run) érdemes feloldani.',
      ],
    },
    evolution: 'Spearow → Fearow, 50 cukor.',
  },
  {
    id: 'feraligatr',
    name: 'Feraligatr',
    origin: 'Totodile',
    verdict: 'scan',
    warning: 'Hydro Cannon kell hozzá',
    raid: { rating: 'ok' },
  },
  {
    id: 'flareon',
    name: 'Flareon',
    origin: 'Eevee',
    verdict: 'transfer',
    raid: { rating: 'ok' },
    maxBattle: {
      rating: 'ok',
      note: 'Tartalék Fire támadó.',
      tips: [
        'Max Particle-t ne költs rá.',
      ],
    },
  },
  {
    id: 'florges',
    name: 'Florges',
    origin: 'Flabébé',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'forretress',
    name: 'Forretress',
    origin: 'Pineco',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'furret',
    name: 'Furret',
    origin: 'Sentret',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'corsola_galarian',
    name: 'Galarian Corsola',
    origin: 'Galarian Corsola',
    verdict: 'scan',
    warning: 'NE fejleszd Cursolává!',
    raid: { rating: 'bad' },
    evolution: 'NE fejleszd Cursolává, köztes formában jó.',
  },
  {
    id: 'moltres_galarian',
    name: 'Galarian Moltres',
    origin: 'legendás (Max Battle / raid)',
    verdict: 'keep',
    raid: { rating: 'ok', note: 'Nem kiemelkedő.' },
    greatLeague: {
      tips: [
        'Használható Dark/Flying Pokémon.',
      ],
    },
  },
  {
    id: 'stunfisk_galarian',
    name: 'Galarian Stunfisk',
    origin: 'Galarian Stunfisk',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'gardevoir',
    name: 'Gardevoir',
    origin: 'Ralts',
    verdict: 'transfer',
    raid: {
      rating: 'ok',
      tips: [
        'Mega Gardevoirhoz egy magas Attackos példány maradhat.',
      ],
    },
    maxBattle: {
      rating: 'ok',
      note: 'Fairy/Psychic támadó, Fighting bossok ellen.',
      tips: [
        'Most még gyenge (290 CP), ráér.',
      ],
    },
  },
  {
    id: 'gigalith',
    name: 'Gigalith',
    origin: 'Roggenrola',
    verdict: 'transfer',
    raid: { rating: 'bad', note: 'Vannak jobb Rock támadók.' },
    maxBattle: {
      rating: 'bad',
      note: 'A Rhyperior mellett nem prioritás.',
      tips: [
        'A Rhyperior mellett nem prioritás.',
      ],
    },
    evolution: 'A Boldore csere után ingyen fejlődik.',
  },
  {
    id: 'gothitelle',
    name: 'Gothitelle',
    origin: 'Gothita',
    verdict: 'transfer',
    raid: { rating: 'bad', note: 'Vannak jobb Psychic támadók.' },
    evolution: 'Gothita → Gothorita → Gothitelle.',
  },
  {
    id: 'greedent',
    name: 'Greedent',
    origin: 'Skwovet',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    maxBattle: {
      rating: 'ok',
      note: 'Gyógyító (Max Spirit), csak csapatban hasznos.',
      tips: [
        'Gyógyító: a Max Spirit feloldása 400 Max Particle + 50 cukor, a 2. szint 100 cukor.',
        'A Max Spirit a használó max HP-jának 8/12/16%-át (1/2/3. szint) gyógyítja vissza a pályán lévő aktív Pokémonoknak.',
        'Szólóban csak saját magát gyógyítja, csapatban a többi játékos aktív Pokémonját is. Szólóra ne építs gyógyítót.',
        'Fighting boss ellen ne vidd (Normal típus).',
        'A Max Spirit 2. szintje ráér, előbb Excadrill, Rhyperior és Inteleon.',
      ],
    },
    evolution: 'Skwovet → Greedent, 50 cukor.',
    notes: [
      'Skwovet cukor: Rare Candy, Pinap Berry, buddy, részben felhős időben több Skwovet jön.',
    ],
  },
  {
    id: 'guzzlord',
    name: 'Guzzlord',
    origin: 'raidből (Ultra Beast)',
    verdict: 'keep',
    raid: { rating: 'bad' },
  },
  {
    id: 'gyarados',
    name: 'Gyarados',
    origin: 'Magikarp',
    verdict: 'keep',
    raid: {
      rating: 'good',
      note: 'Water támadó, Mega.',
      iv: 'Raidre és Megára magas Attack kell. Átlagos IV-s Magikarpra ne pazarold a 400 cukrot.',
      moves: 'Waterfall + Hydro Pump. Második töltött mozdulatnak Crunch vagy Aqua Tail. Bite + Crunch Dark szettként is működik.',
      tips: [
        'Raidben Fire, Ground és Rock bossok ellen jó.',
        'Mega Gyarados raidben erős Water/Dark Mega.',
      ],
    },
    evolution: 'Magikarp → Gyarados, 400 cukor. A Magikarp 1 km-enként ad cukrot buddyként.',
    notes: [
      'A Genie Magikarpra mutatott PvP %-a félrevezető, ne az alapján dönts.',
      'Max Battle-ben a Waterfall Water, a Dragon Breath Dragon Max mozdulatot ad.',
    ],
  },
  {
    id: 'hariyama',
    name: 'Hariyama',
    origin: 'Makuhita',
    verdict: 'transfer',
    raid: { rating: 'ok', note: 'Közepes Fighting támadó, a Machamp, Lucario és Conkeldurr jobb.' },
    evolution: 'Makuhita → Hariyama, 50 cukor.',
  },
  {
    id: 'hatterene',
    name: 'Hatterene',
    origin: 'Hatenna',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    maxBattle: {
      rating: 'bad',
      note: 'Nem prioritás.',
      tips: [
        'Nem prioritás, Max Particle-t ne költs rá.',
      ],
    },
    evolution: 'Hatenna → Hattrem → Hatterene.',
  },
  {
    id: 'hippowdon',
    name: 'Hippowdon',
    origin: 'Hippopotas',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'electrode_hisuian',
    name: 'Hisuian Electrode',
    origin: 'hisui Voltorb',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'inteleon',
    name: 'Inteleon',
    origin: 'Sobble',
    verdict: 'transfer',
    maxBattle: {
      rating: 'good',
      note: 'Water támadó.',
      tips: [
        'Fire, Rock és Ground bossok ellen.',
      ],
    },
    evolution: 'Drizzile → Inteleon, 100 cukor.',
  },
  {
    id: 'jellicent',
    name: 'Jellicent',
    origin: 'Frillish',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'jumpluff',
    name: 'Jumpluff',
    origin: 'Hoppip',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'kilowattrel',
    name: 'Kilowattrel',
    origin: 'Wattrel',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    greatLeague: {
      tips: [
        'A 2071 CP-s példány már nem fér be a Great League-be, a szintet nem lehet visszacsinálni.',
      ],
    },
  },
  {
    id: 'lanturn',
    name: 'Lanturn',
    origin: 'Chinchou',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    notes: [
      'Great League-ben ma nincs a top 100-ban; tematikus kupákban előkerülhet.',
    ],
  },
  {
    id: 'lapras',
    name: 'Lapras',
    origin: 'Lapras',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'lickitung',
    name: 'Lickitung',
    origin: 'Lickitung',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    notes: [
      'Great League-ben ma nincs a top 100-ban; tematikus kupákban előkerülhet.',
    ],
  },
  {
    id: 'lokix',
    name: 'Lokix',
    origin: 'Nymble',
    verdict: 'transfer',
    raid: { rating: 'bad' },
  },
  {
    id: 'machamp',
    name: 'Machamp',
    origin: 'Machop',
    verdict: 'keep',
    raid: {
      rating: 'good',
      note: 'Fighting támadó.',
      iv: '1–2 magas Attackos (3 csillagos) példány marad, bármelyik alakban.',
      moves: 'Counter + Dynamic Punch vagy Cross Chop.',
      tips: [
        'Megbízható, olcsó raides Fighting támadó, a Shadow Machamp még erősebb.',
      ],
    },
    maxBattle: { rating: 'ok', note: 'A Gigantamax forma csak Max Battle-ből szerezhető.' },
    evolution: 'Machop → Machoke → Machamp. A Machoke csere után ingyen (0 cukor) fejlődik.',
    notes: [
      'A többi Machop cukorért mehet.',
    ],
  },
  {
    id: 'malamar',
    name: 'Malamar',
    origin: 'Inkay',
    verdict: 'scan',
    raid: { rating: 'bad' },
    greatLeague: {
      tips: [
        'A Dynamax Inkayt is szkenneld: a Dynamax Pokémonok GBL-ben is használhatók.',
      ],
    },
  },
  {
    id: 'mandibuzz',
    name: 'Mandibuzz',
    origin: 'Vullaby',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'mantine',
    name: 'Mantine',
    origin: 'Mantyke / Mantine',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'marowak',
    name: 'Marowak',
    origin: 'Cubone (a sima, nem az alolai)',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'medicham',
    name: 'Medicham',
    origin: 'Meditite',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'melmetal',
    name: 'Melmetal',
    origin: 'Meltan (Mystery Boxból)',
    verdict: 'keep',
    raid: { rating: 'ok' },
  },
  {
    id: 'meowscarada',
    name: 'Meowscarada',
    origin: 'Sprigatito',
    verdict: 'transfer',
    notes: [
      'A Genie PvP %-a (pl. 98,8%) a fajon belüli IV-minőséget mutatja, nem azt, hogy a faj jó-e.',
    ],
  },
  {
    id: 'mimikyu',
    name: 'Mimikyu',
    origin: 'Mimikyu',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'moltres',
    name: 'Moltres',
    origin: 'legendás (raid / Max Battle)',
    verdict: 'keep',
    raid: {
      rating: 'ok',
      note: 'Tisztességes Fire és Flying támadó, a Shadow Moltres kifejezetten erős.',
      iv: 'Stardustot csak Shadow vagy magas Attackos raides példányba tegyél.',
      tips: [
        'Raidben tisztességes Fire és Flying támadó, a Shadow Moltres kifejezetten erős.',
      ],
    },
    maxBattle: {
      rating: 'good',
      note: 'Támadó és tank (Fire/Flying).',
      moves: 'Max Battle-ben Wing Attack gyors mozdulattal Flying Max mozdulatot (Max Airstream) kap.',
    },
    notes: [
      'Buddyként 20 km-enként ad cukrot (legendás), de a napi 2 km-es séta a szívecskékhez minden buddynál ugyanannyi.',
    ],
  },
  {
    id: 'ninetales',
    name: 'Ninetales',
    origin: 'Vulpix (a sima, nem az alolai)',
    verdict: 'scan',
    raid: { rating: 'bad' },
    greatLeague: {
      tips: [
        'Főleg a Shadow változat értékes.',
      ],
    },
  },
  {
    id: 'perrserker',
    name: 'Perrserker',
    origin: 'Galarian Meowth',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    notes: [
      'Steel típusként tematikus kupákban előkerülhet, egy alacsony Attackos maradhat.',
    ],
  },
  {
    id: 'pyroar',
    name: 'Pyroar',
    origin: 'Litleo',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    notes: [
      'A hím és a nőstény másképp néz ki, a Pokédex nemi változataihoz mindkettőből egy maradhat.',
    ],
  },
  {
    id: 'quagsire',
    name: 'Quagsire',
    origin: 'Wooper (a sima, nem a paldeai)',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'quaquaval',
    name: 'Quaquaval',
    origin: 'Quaxly',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    greatLeague: {
      tips: [
        'Tele Attack sávval és alig Defense-szel a legrosszabb kombináció Great League-hez.',
      ],
    },
    evolution: 'Quaxly → Quaxwell (25 cukor) → Quaquaval (100 cukor), a Pokédexért.',
    notes: [
      'Water/Fighting, nem meta se raidben, se PvP-ben. Stardustot ne tegyél bele.',
    ],
  },
  {
    id: 'rhyperior',
    name: 'Rhyperior',
    origin: 'Rhyhorn',
    verdict: 'keep',
    raid: { rating: 'good' },
    maxBattle: {
      rating: 'good',
      note: 'Védő (tank), oldd fel a Max Guardot.',
      tips: [
        'Fire, Electric, Flying és Ice bossok ellen erős.',
        'Fighting boss ellen ne vidd, kétszeres sebzést kap.',
      ],
    },
    notes: [
      'Egy tartalék Rhyhorn marad (a legjobb Attackos), a többi Rhyhorn cukorért mehet a Max mozdulatokhoz.',
    ],
  },
  {
    id: 'rillaboom',
    name: 'Rillaboom',
    origin: 'Grookey',
    verdict: 'scan',
    raid: { rating: 'ok' },
  },
  {
    id: 'sableye',
    name: 'Sableye',
    origin: 'Sableye',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'venusaur_shadow',
    name: 'Shadow Venusaur',
    origin: 'Shadow Bulbasaur (Team Rocket)',
    verdict: 'keep',
    raid: {
      rating: 'good',
      iv: 'Ha 3 csillagos vagy magas Attackos, építsd; ha gyenge, akkor se küldd el sietve.',
      moves: 'Frustrationnel jön, ezt csak Team Rocket eseményen lehet lecserélni, addig ne építsd.',
      tips: [
        'Raidben 20%-kal többet sebez a sima változatnál, cserébe kicsit kevesebbet bír.',
        'Raidre szánva ne tisztítsd meg (Purify), a Purified gyengébb támadó.',
      ],
    },
    ultraLeague: { note: 'Legjobb IV: 1/15/14 (39-es szint).' },
    notes: [
      'Kb. 20%-kal drágább felhúzni.',
      'Shadow nem tud Mega evolválni.',
    ],
  },
  {
    id: 'snorlax',
    name: 'Snorlax',
    origin: 'Munchlax / Snorlax',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'staraptor',
    name: 'Staraptor',
    origin: 'Starly',
    verdict: 'transfer',
    raid: {
      rating: 'ok',
      note: 'Mega-jelölt.',
      iv: 'Csak magas (ideálisan 15) Attackos példány éri meg.',
      tips: [
        'Mega Staraptorhoz egy magas Attackos példány maradjon, a Starly cukor a felhúzásához kell.',
      ],
    },
    notes: [
      'A vadon fogott Starlykat Pinap Berryvel kapd el, és küldd el cukorért.',
    ],
  },
  {
    id: 'stunfisk',
    name: 'Stunfisk',
    origin: 'Stunfisk (a sima, nem a galari)',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'swampert',
    name: 'Swampert',
    origin: 'Mudkip',
    verdict: 'scan',
    warning: 'Hydro Cannon kell hozzá',
    raid: { rating: 'ok' },
  },
  {
    id: 'thievul',
    name: 'Thievul',
    origin: 'Nickit',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  { id: 'tinkaton', name: 'Tinkaton', origin: 'Tinkatink', verdict: 'scan' },
  {
    id: 'torterra',
    name: 'Torterra',
    origin: 'Turtwig',
    verdict: 'transfer',
    raid: { rating: 'ok', note: 'Frenzy Plant-tel tisztességes Grass/Ground támadó.' },
  },
  {
    id: 'toxapex',
    name: 'Toxapex',
    origin: 'Mareanie',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    notes: [
      'Great League-ben ma nincs a top 100-ban; tematikus kupákban előkerülhet.',
    ],
  },
  {
    id: 'trevenant',
    name: 'Trevenant',
    origin: 'Phantump',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    greatLeague: {
      tips: [
        'Egy alacsony Attackos tartalék opcionális a tematikus kupákra (pl. Halloween Cup).',
        'Régebben ismert PvP Pokémon volt, ma nincs a Top 50-ben.',
      ],
    },
    evolution: 'Phantump → Trevenant 50 cukor, vagy csere után ingyen.',
  },
  {
    id: 'tsareena',
    name: 'Tsareena',
    origin: 'Bounsweet',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    maxBattle: { rating: 'bad', note: 'Gyenge szerepben.' },
  },
  { id: 'tyrantrum', name: 'Tyrantrum', origin: 'Tyrunt', verdict: 'transfer' },
  {
    id: 'umbreon',
    name: 'Umbreon',
    origin: 'Eevee',
    verdict: 'scan',
    raid: { rating: 'bad' },
  },
  {
    id: 'venusaur',
    name: 'Venusaur',
    origin: 'Bulbasaur',
    verdict: 'keep',
    raid: {
      rating: 'good',
      note: 'Grass/Poison, Mega.',
      iv: 'Egy magas Attackos (3 csillagos) példány marad Mega Venusaurnak, a többi cukorért mehet.',
      moves: 'A legjobb a Frenzy Plant (legacy: Elite TM vagy esemény).',
      tips: [
        'Mega Venusaur 1,3× bónuszt ad a Grass és Poison támadásoknak a raidben, szólóban is hasznos Mega.',
      ],
    },
    maxBattle: {
      rating: 'ok',
      note: 'A Gigantamax forma csak Max Battle-ből szerezhető, vadon fogottból soha.',
    },
    evolution: 'Bulbasaur → Ivysaur → Venusaur, összesen 125 cukor.',
    notes: [
      'A cukrot tartogasd: egy Bulbasaur Community Day Classic alatt a fejlesztés ingyen Frenzy Plantet ad.',
    ],
  },
  {
    id: 'vigoroth',
    name: 'Vigoroth',
    origin: 'Slakoth',
    verdict: 'scan',
    warning: 'NE fejleszd Slakinggé!',
    raid: { rating: 'bad' },
    evolution: 'NE fejleszd Slakinggé, köztes formában jó.',
  },
  {
    id: 'whimsicott',
    name: 'Whimsicott',
    origin: 'Cottonee',
    verdict: 'transfer',
    raid: { rating: 'bad' },
    maxBattle: { rating: 'bad', note: 'Gyenge szerepben.' },
  },
];
