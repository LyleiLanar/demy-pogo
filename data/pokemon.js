// Fajonkénti, kézzel írt tanácsok. A Pokédex és a GL Top 50 fül ebből és a pvpoke.js-ből épül fel.
// A típus, a helyezés, az ajánlott szett és a párharcok a generált pvpoke.js-ben vannak.
//
// Mezők (csak az id, name és origin kötelező):
//   id           a faj PvPoke-azonosítója (speciesId), ezzel kapcsolódik a pvpoke.js-hez
//                (a Pokédex-szám a pvpoke.js-ből jön; az nem egyedi, a regionális formáknak ugyanaz)
//   name         a faj neve
//   origin       amit a vadonban elkapsz, vagy ahonnan szerzed (a keresés is ezt nézi; a kártyán csak akkor
//                látszik, ha a fajnak nincs fejlődési ága, mert az ág a pvpoke.js-ből jön, cukorárral)
//   tier         a név színe legalább ez legyen (alapból a módok legjobb értékeléséből számolódik,
//                js/species.js, speciesTier); pl. 'collect' az Eevee-nél, ami magában gyenge, de
//                fejlesztési alap. A legendás / mitikus / Ultra Beast mindig arany (pvpoke.js: legendary).
//   warning      rövid, kiemelt figyelmeztetés (a GL Top 50 fülön is látszik)
//
//   Játékmódok (a kártya fülei). Minden módban csak az ahhoz kellő tanács van.
//   raid         { rating, note, iv, moves, tips }
//   greatLeague  { note, iv, moves, tips }: a helyezés és a rating a pvpoke.js-ből jön
//   ultraLeague  { note, iv, moves, tips }
//   maxBattle    { rating, note, upgrade, iv, moves, tips }: a Dynamax példány (a kártya Max formája)
//   gym          { rating, note, iv, moves, tips }
//     rating     a mód színe, Diablo-szerű ritkaság (a név színe a legjobb módé):
//                'meta' = lila, a legjobbak közt; 'collect' = kék, gyűjtendő, érdemes építeni;
//                'alternative' = zöld, átmenetileg jó, ha nincs jobb; 'trash' = szürke, kuka
//     note       egy mondatos összegzés
//     iv         milyen IV a jó ebben a módban
//     moves      ajánlott mozdulatok: { fast: [...], charged: [...], note }
//     tips       további tanácsok ebben a módban
//     upgrade    csak maxBattle: melyik Max mozdulatot fejleszd: ['attack', 'guard', 'spirit']
//   Ha egy mód hiányzik, arról nincs adat.
//
//   forms        formánkénti eltérések, a fenti módok felülírására:
//                { shadow, mega, megaX, megaY: { raid, greatLeague, ultraLeague, notes },
//                  gigantamax: { maxBattle } }
//                A Megának csak raidje van. A gigantamax.maxBattle a Gigantamax példány értékelése; a Max
//                formában a Dynamax mellett jelenik meg, ha a game master szerint a fajnak van ilyen formája.
//
//
//   Módtól független:
//   notes        általános tanácsok
//
// Mindig érvényes kivétel, ezt nem ismételjük minden sorban: shiny, jelmezes,
// különleges hátterű, Dynamax, Shadow, legendás, Lucky és @special mozdulatú példány marad.

const POKEMON = [
  {
    id: 'aegislash_shield',
    name: 'Aegislash',
    origin: 'Honedge',
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
    raid: { rating: 'alternative', note: 'Közepes Psychic támadó, nagyon vékony.' },
    maxBattle: { rating: 'trash', note: 'Psychic támadó, nagyon vékony. Alacsony prioritás.' },
    forms: {
      shadow: {
        raid: { rating: 'collect', note: 'Erős Psychic támadó, de nagyon vékony.' },
      },
      mega: {
        raid: { rating: 'collect', note: 'Erős Psychic Mega.' },
      },
    },
  },
  {
    id: 'ninetales_alolan',
    name: 'Alolan Ninetales',
    origin: 'alolai Vulpix',
    raid: { rating: 'trash' },
  },
  {
    id: 'altaria',
    name: 'Altaria',
    origin: 'Swablu',
    raid: { rating: 'trash' },
  },
  {
    id: 'ampharos',
    name: 'Ampharos',
    origin: 'Mareep',
    raid: { rating: 'trash', note: 'Mega nélkül gyenge Electric támadó.' },
    ultraLeague: { note: '35–40-es szintre kell húzni.' },
    forms: {
      mega: {
        raid: {
          rating: 'collect',
          note: 'Szólóban is jó Mega.',
          moves: { charged: ['Dragon Pulse'] },
        },
      },
    },
  },
  { id: 'annihilape', name: 'Annihilape', origin: 'Mankey' },
  {
    id: 'araquanid',
    name: 'Araquanid',
    origin: 'Dewpider',
    raid: { rating: 'trash' },
  },
  {
    id: 'azumarill',
    name: 'Azumarill',
    origin: 'Marill / Azurill',
    raid: { rating: 'trash' },
  },
  {
    id: 'bastiodon',
    name: 'Bastiodon',
    origin: 'Shieldon',
    raid: { rating: 'trash' },
  },
  {
    id: 'baxcalibur',
    name: 'Baxcalibur',
    origin: 'Frigibax',
    raid: { rating: 'meta', note: 'Az egyik legjobb Ice raid támadó.' },
    notes: ['A Frigibax ritka, ne küldj el semmit a vonalból, amíg nincs egy jó Baxcaliburod.'],
  },
  {
    id: 'blaziken',
    name: 'Blaziken',
    origin: 'Torchic',
    raid: {
      rating: 'alternative',
      moves: { fast: ['Fire Spin', 'Counter'], charged: ['Blast Burn'] },
    },
    forms: {
      shadow: {
        raid: { rating: 'collect' },
      },
      mega: {
        raid: { rating: 'collect' },
      },
    },
  },
  {
    id: 'blissey',
    name: 'Blissey',
    origin: 'Chansey / Happiny',
    raid: { rating: 'trash' },
    maxBattle: { rating: 'meta', note: 'A Dynamax Blissey a legjobb gyógyító.', upgrade: ['spirit'] },
    gym: { rating: 'meta', note: 'Az egyik legjobb gym védő.' },
  },
  {
    id: 'carbink',
    name: 'Carbink',
    origin: 'Carbink',
    raid: { rating: 'trash' },
  },
  {
    id: 'charizard',
    name: 'Charizard',
    origin: 'Charmander',
    raid: {
      rating: 'collect',
      moves: {
        fast: ['Fire Spin'],
        charged: ['Blast Burn', 'Overheat'],
        note: 'Blast Burn nélkül az Overheat is elfogadható; a Dragon Claw-t cseréld le Charged TM-mel.',
      },
    },
    ultraLeague: {
      moves: { fast: ['Dragon Breath'], charged: ['Blast Burn', 'Dragon Claw'] },
    },
    maxBattle: {
      rating: 'alternative',
      note: 'Használható Fire támadó; a Gigantamax sokkal erősebb.',
      upgrade: ['attack'],
    },
    forms: {
      megaY: {
        raid: { note: 'A legjobb Fire Mega raidhez.' },
      },
      gigantamax: {
        maxBattle: { rating: 'meta', note: 'A legerősebb G-Max támadó.', upgrade: ['attack'] },
      },
    },
  },
  {
    id: 'charjabug',
    name: 'Charjabug',
    origin: 'Grubbin',
    warning: 'NE fejleszd Vikavolttá!',
    raid: { rating: 'trash' },
  },
  {
    id: 'cherrim_overcast',
    name: 'Cherrim',
    origin: 'Cherubi',
    raid: { rating: 'trash', note: 'Gyenge Grass típus.' },
  },
  {
    id: 'cinderace',
    name: 'Cinderace',
    origin: 'Scorbunny',
    raid: { rating: 'alternative', note: 'Közepes Fire támadó.' },
    maxBattle: { rating: 'collect', note: 'Erős Fire támadó.', upgrade: ['attack'] },
  },
  {
    id: 'clodsire',
    name: 'Clodsire',
    origin: 'paldeai Wooper',
    raid: { rating: 'trash' },
  },
  {
    id: 'corviknight',
    name: 'Corviknight',
    origin: 'Rookidee',
    raid: { rating: 'trash' },
  },
  {
    id: 'cramorant',
    name: 'Cramorant',
    origin: 'Cramorant',
    raid: { rating: 'trash' },
  },
  {
    id: 'darmanitan_standard',
    name: 'Darmanitan',
    origin: 'Darumaka',
    raid: { rating: 'alternative' },
    maxBattle: { rating: 'alternative', note: 'Fire támadó.', upgrade: ['attack'] },
  },
  {
    id: 'decidueye',
    name: 'Decidueye',
    origin: 'Rowlet',
    raid: {
      rating: 'trash',
      note: 'Vékony támadó; vannak jobb Grass támadók, pl. a Frenzy Plant-es Venusaur.',
    },
    ultraLeague: {
      moves: {
        fast: ['Astonish'],
        charged: ['Frenzy Plant', 'Spirit Shackle'],
        note: 'Ha mégis építenéd.',
      },
    },
    notes: ['A hisui Decidueye (Grass/Fighting) külön faj, más a típusa és a szettje.'],
  },
  {
    id: 'dedenne',
    name: 'Dedenne',
    origin: 'Dedenne',
    raid: { rating: 'trash' },
    greatLeague: {
      iv: 'Ha mégis építenéd: legjobb IV 0/14/12 (33-as szint, 1500 CP).',
      moves: {
        fast: ['Thunder Shock'],
        charged: ['Discharge', 'Play Rough'],
        note: 'Ha mégis építenéd.',
      },
      tips: ['Nehéz ellenfelei: Shadow Quagsire, Mimikyu, Tinkaton.'],
    },
  },
  {
    id: 'delphox',
    name: 'Delphox',
    origin: 'Fennekin',
    raid: {
      rating: 'alternative',
      note: 'A Mega Charizard Y jobb; tartalék raidre és Rocket ellen.',
      moves: { fast: ['Fire Spin'], charged: ['Blast Burn'] },
    },
  },
  {
    id: 'deoxys_defense',
    name: 'Deoxys (Defense)',
    origin: 'raidből (legendás)',
    raid: { rating: 'trash' },
  },
  {
    id: 'dondozo',
    name: 'Dondozo',
    origin: 'Dondozo',
    raid: { rating: 'trash' },
  },
  {
    id: 'doublade',
    name: 'Doublade',
    origin: 'Honedge',
    warning: 'Great League-re NE fejleszd Aegislashsá!',
    raid: { rating: 'trash' },
  },
  {
    id: 'drifblim',
    name: 'Drifblim',
    origin: 'Drifloon',
    raid: { rating: 'trash' },
  },
  {
    id: 'dubwool',
    name: 'Dubwool',
    origin: 'Wooloo',
    raid: { rating: 'trash' },
    maxBattle: { rating: 'trash', note: 'Gyenge szerepben.' },
  },
  {
    id: 'dusclops',
    name: 'Dusclops',
    origin: 'Duskull',
    warning: 'Great League-re NE fejleszd Dusknoirrá!',
    raid: { rating: 'trash' },
    greatLeague: { tips: ['Nagyon bírja a sebzést, kezdőknek is jól játszható.'] },
  },
  {
    id: 'eevee',
    name: 'Eevee',
    origin: 'Eevee',
    tier: 'collect',
    raid: {
      rating: 'trash',
      note: 'Fejletlenül nem támadó. Fejlesztve a Glaceon jó Ice támadó, a Flareon és az Espeon tartalék.',
    },
    greatLeague: {
      note: 'Fejletlenül nem játszható, de Umbreonná fejlesztve top 50-es: ezért szkenneld.',
    },
    maxBattle: {
      rating: 'trash',
      note: 'Fejletlenül gyenge. Dynamax Glaceonnak fejlesztve az egyik legjobb Ice Max támadó.',
    },
    notes: [
      'A két jó irány: Umbreon (Great League) és Glaceon (raid, Max Battle). A Sylveon, a Flareon, az Espeon és a Leafeon tartaléknak jó, a Vaporeon és a Jolteon ma gyenge.',
      'Névtrükk: ha fejlesztés előtt átnevezed, a kiválasztott formát kapod. Rainer = Vaporeon, Sparky = Jolteon, Pyro = Flareon, Sakura = Espeon, Tamao = Umbreon, Linnea = Leafeon, Rea = Glaceon, Kira = Sylveon. Mindegyik név csak egyszer működik.',
    ],
  },
  {
    id: 'eldegoss',
    name: 'Eldegoss',
    origin: 'Gossifleur',
    raid: { rating: 'trash' },
    notes: ['Egy alacsony Attackos Gossifleur maradhat a Little Cupra (500 CP).'],
  },
  {
    id: 'empoleon',
    name: 'Empoleon',
    origin: 'Piplup',
    raid: { rating: 'alternative' },
  },
  {
    id: 'excadrill',
    name: 'Excadrill',
    origin: 'Drilbur',
    raid: { rating: 'collect' },
    maxBattle: { rating: 'meta', note: 'Fő támadó.', upgrade: ['attack'] },
  },
  {
    id: 'fearow',
    name: 'Fearow',
    origin: 'Spearow',
    raid: { rating: 'trash' },
    greatLeague: {
      iv: 'Legjobb IV: 0/15/14 (28,5-ös szint, 1498 CP).',
      tips: ['Olcsó építeni, a Spearow gyakori, és a Great League-hez nem kell XL cukor.'],
    },
  },
  {
    id: 'feraligatr',
    name: 'Feraligatr',
    origin: 'Totodile',
    raid: { rating: 'alternative' },
  },
  {
    id: 'flareon',
    name: 'Flareon',
    origin: 'Eevee',
    raid: { rating: 'alternative' },
    maxBattle: { rating: 'alternative', note: 'Tartalék Fire támadó.', upgrade: ['attack'] },
  },
  {
    id: 'florges',
    name: 'Florges',
    origin: 'Flabébé',
    raid: { rating: 'trash' },
  },
  {
    id: 'forretress',
    name: 'Forretress',
    origin: 'Pineco',
    raid: { rating: 'trash' },
  },
  {
    id: 'furret',
    name: 'Furret',
    origin: 'Sentret',
    raid: { rating: 'trash' },
  },
  {
    id: 'corsola_galarian',
    name: 'Galarian Corsola',
    origin: 'Galarian Corsola',
    warning: 'NE fejleszd Cursolává!',
    raid: { rating: 'trash' },
  },
  {
    id: 'moltres_galarian',
    name: 'Galarian Moltres',
    origin: 'legendás (Max Battle / raid)',
    raid: { rating: 'alternative', note: 'Nem kiemelkedő.' },
  },
  {
    id: 'stunfisk_galarian',
    name: 'Galarian Stunfisk',
    origin: 'Galarian Stunfisk',
    raid: { rating: 'trash' },
  },
  {
    id: 'gardevoir',
    name: 'Gardevoir',
    origin: 'Ralts',
    raid: { rating: 'alternative' },
    maxBattle: { rating: 'alternative', note: 'Fairy/Psychic támadó.', upgrade: ['attack'] },
  },
  {
    id: 'gigalith',
    name: 'Gigalith',
    origin: 'Roggenrola',
    raid: { rating: 'trash', note: 'Vannak jobb Rock támadók.' },
    maxBattle: { rating: 'trash', note: 'A Rhyperior mellett nem prioritás.' },
  },
  {
    id: 'gothitelle',
    name: 'Gothitelle',
    origin: 'Gothita',
    raid: { rating: 'trash', note: 'Vannak jobb Psychic támadók.' },
  },
  {
    id: 'greedent',
    name: 'Greedent',
    origin: 'Skwovet',
    raid: { rating: 'trash' },
    maxBattle: { rating: 'alternative', note: 'Gyógyító, csak csapatban hasznos.', upgrade: ['spirit'] },
    notes: ['Részben felhős időben több Skwovet jön.'],
  },
  {
    id: 'guzzlord',
    name: 'Guzzlord',
    origin: 'raidből (Ultra Beast)',
    raid: { rating: 'trash' },
  },
  {
    id: 'gyarados',
    name: 'Gyarados',
    origin: 'Magikarp',
    raid: {
      rating: 'collect',
      moves: {
        fast: ['Waterfall', 'Bite'],
        charged: ['Hydro Pump', 'Crunch', 'Aqua Tail'],
        note: 'Water szett: Waterfall + Hydro Pump; Dark szett: Bite + Crunch.',
      },
    },
  },
  {
    id: 'hariyama',
    name: 'Hariyama',
    origin: 'Makuhita',
    raid: {
      rating: 'alternative',
      note: 'Közepes Fighting támadó, a Machamp, Lucario és Conkeldurr jobb.',
    },
  },
  {
    id: 'hatterene',
    name: 'Hatterene',
    origin: 'Hatenna',
    raid: { rating: 'trash' },
    maxBattle: { rating: 'trash', note: 'Nem prioritás.' },
  },
  {
    id: 'hippowdon',
    name: 'Hippowdon',
    origin: 'Hippopotas',
    raid: { rating: 'trash' },
  },
  {
    id: 'electrode_hisuian',
    name: 'Hisuian Electrode',
    origin: 'hisui Voltorb',
    raid: { rating: 'trash' },
  },
  {
    id: 'inteleon',
    name: 'Inteleon',
    origin: 'Sobble',
    maxBattle: {
      rating: 'collect',
      note: 'Water támadó.',
      upgrade: ['attack'],
      tips: ['Fire, Rock és Ground bossok ellen.'],
    },
  },
  {
    id: 'jellicent',
    name: 'Jellicent',
    origin: 'Frillish',
    raid: { rating: 'trash' },
  },
  {
    id: 'jumpluff',
    name: 'Jumpluff',
    origin: 'Hoppip',
    raid: { rating: 'trash' },
  },
  {
    id: 'kilowattrel',
    name: 'Kilowattrel',
    origin: 'Wattrel',
    raid: { rating: 'trash' },
  },
  {
    id: 'lanturn',
    name: 'Lanturn',
    origin: 'Chinchou',
    raid: { rating: 'trash' },
  },
  {
    id: 'lapras',
    name: 'Lapras',
    origin: 'Lapras',
    raid: { rating: 'trash' },
  },
  {
    id: 'lickitung',
    name: 'Lickitung',
    origin: 'Lickitung',
    raid: { rating: 'trash' },
  },
  {
    id: 'lokix',
    name: 'Lokix',
    origin: 'Nymble',
    raid: { rating: 'trash' },
  },
  {
    id: 'machamp',
    name: 'Machamp',
    origin: 'Machop',
    raid: {
      rating: 'collect',
      note: 'Megbízható, olcsó raides támadó.',
      moves: { fast: ['Counter'], charged: ['Dynamic Punch', 'Cross Chop'] },
    },
    maxBattle: { rating: 'alternative', upgrade: ['attack'] },
  },
  {
    id: 'malamar',
    name: 'Malamar',
    origin: 'Inkay',
    raid: { rating: 'trash' },
  },
  {
    id: 'mandibuzz',
    name: 'Mandibuzz',
    origin: 'Vullaby',
    raid: { rating: 'trash' },
  },
  {
    id: 'mantine',
    name: 'Mantine',
    origin: 'Mantyke / Mantine',
    raid: { rating: 'trash' },
  },
  {
    id: 'marowak',
    name: 'Marowak',
    origin: 'Cubone (a sima, nem az alolai)',
    raid: { rating: 'trash' },
  },
  {
    id: 'medicham',
    name: 'Medicham',
    origin: 'Meditite',
    raid: { rating: 'trash' },
  },
  {
    id: 'melmetal',
    name: 'Melmetal',
    origin: 'Meltan (Mystery Boxból)',
    raid: { rating: 'alternative' },
  },
  { id: 'meowscarada', name: 'Meowscarada', origin: 'Sprigatito' },
  {
    id: 'mimikyu',
    name: 'Mimikyu',
    origin: 'Mimikyu',
    raid: { rating: 'trash' },
  },
  {
    id: 'moltres',
    name: 'Moltres',
    origin: 'legendás (raid / Max Battle)',
    raid: { rating: 'alternative', note: 'Tisztességes Fire és Flying támadó.' },
    maxBattle: {
      rating: 'collect',
      note: 'Támadó és tank (Fire/Flying).',
      upgrade: ['attack', 'guard'],
      moves: { fast: ['Wing Attack'] },
    },
    forms: {
      shadow: {
        raid: { rating: 'meta', note: 'Az egyik legjobb Fire támadó.' },
      },
    },
  },
  {
    id: 'ninetales',
    name: 'Ninetales',
    origin: 'Vulpix (a sima, nem az alolai)',
    raid: { rating: 'trash' },
  },
  {
    id: 'perrserker',
    name: 'Perrserker',
    origin: 'Galarian Meowth',
    raid: { rating: 'trash' },
  },
  {
    id: 'pyroar',
    name: 'Pyroar',
    origin: 'Litleo',
    raid: { rating: 'trash' },
    notes: [
      'A hím és a nőstény másképp néz ki, a Pokédex nemi változataihoz mindkettőből egy maradhat.',
    ],
  },
  {
    id: 'quagsire',
    name: 'Quagsire',
    origin: 'Wooper (a sima, nem a paldeai)',
    raid: { rating: 'trash' },
  },
  {
    id: 'quaquaval',
    name: 'Quaquaval',
    origin: 'Quaxly',
    raid: { rating: 'trash' },
  },
  {
    id: 'rhyperior',
    name: 'Rhyperior',
    origin: 'Rhyhorn',
    raid: { rating: 'meta' },
    maxBattle: { rating: 'meta', note: 'Védő (tank).', upgrade: ['guard'] },
  },
  {
    id: 'rillaboom',
    name: 'Rillaboom',
    origin: 'Grookey',
    raid: { rating: 'alternative' },
  },
  {
    id: 'sableye',
    name: 'Sableye',
    origin: 'Sableye',
    raid: { rating: 'trash' },
  },
  {
    id: 'snorlax',
    name: 'Snorlax',
    origin: 'Munchlax / Snorlax',
    raid: { rating: 'trash' },
  },
  {
    id: 'staraptor',
    name: 'Staraptor',
    origin: 'Starly',
    raid: { rating: 'alternative' },
  },
  {
    id: 'stunfisk',
    name: 'Stunfisk',
    origin: 'Stunfisk (a sima, nem a galari)',
    raid: { rating: 'trash' },
  },
  {
    id: 'swampert',
    name: 'Swampert',
    origin: 'Mudkip',
    raid: { rating: 'alternative' },
  },
  {
    id: 'thievul',
    name: 'Thievul',
    origin: 'Nickit',
    raid: { rating: 'trash' },
  },
  { id: 'tinkaton', name: 'Tinkaton', origin: 'Tinkatink' },
  {
    id: 'torterra',
    name: 'Torterra',
    origin: 'Turtwig',
    raid: { rating: 'alternative', note: 'Frenzy Plant-tel tisztességes Grass/Ground támadó.' },
  },
  {
    id: 'toxapex',
    name: 'Toxapex',
    origin: 'Mareanie',
    raid: { rating: 'trash' },
  },
  {
    id: 'trevenant',
    name: 'Trevenant',
    origin: 'Phantump',
    raid: { rating: 'trash' },
  },
  {
    id: 'tsareena',
    name: 'Tsareena',
    origin: 'Bounsweet',
    raid: { rating: 'trash' },
    maxBattle: { rating: 'trash', note: 'Gyenge szerepben.' },
  },
  { id: 'tyrantrum', name: 'Tyrantrum', origin: 'Tyrunt' },
  {
    id: 'umbreon',
    name: 'Umbreon',
    origin: 'Eevee',
    raid: { rating: 'trash' },
  },
  {
    id: 'venusaur',
    name: 'Venusaur',
    origin: 'Bulbasaur',
    raid: {
      rating: 'collect',
      moves: { fast: ['Vine Whip'], charged: ['Frenzy Plant'] },
    },
    maxBattle: { rating: 'alternative', upgrade: ['attack'] },
    forms: {
      shadow: {
        raid: { rating: 'collect' },
      },
      mega: {
        raid: { note: 'Szólóban is hasznos Mega.' },
      },
    },
  },
  {
    id: 'vigoroth',
    name: 'Vigoroth',
    origin: 'Slakoth',
    warning: 'NE fejleszd Slakinggé!',
    raid: { rating: 'trash' },
  },
  {
    id: 'whimsicott',
    name: 'Whimsicott',
    origin: 'Cottonee',
    raid: { rating: 'trash' },
    maxBattle: { rating: 'trash', note: 'Gyenge szerepben.' },
  },
];
