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
//                js/species.js, speciesTier); ritkán kell, mert a fejlődési ág színei mutatják, mivé
//                érdemes fejleszteni. A legendás / mitikus / Ultra Beast mindig arany (pvpoke.js: legendary).
//   warning      rövid, kiemelt figyelmeztetés (a GL Top 50 fülön is látszik)
//
//   Játékmódok (a kártya fülei). Minden módban csak az ahhoz kellő tanács van.
//   raid         { note, iv, moves, tips }: a helyezés, a rating és a szett számolt (pvpoke.js raid);
//                rating csak ott kell, ahol nincs számolt adat (pl. csak Normal támadása van)
//   greatLeague  { note, iv, moves, tips }: a helyezés és a rating a pvpoke.js-ből jön
//   ultraLeague  { note, iv, moves, tips }
//   maxBattle    { note, iv, moves, tips }: a Dynamax példány (a kártya Max formája); a három szerep
//                (támadó, tank, gyógyító), a szín és a Fejleszd számolt (pvpoke.js maxBattle); rating és
//                upgrade csak ott kell, ahol nincs számolt adat
//     rating     a mód színe, Diablo-szerű ritkaság (a név színe a legjobb módé):
//                'meta' = lila, a legjobbak közt; 'collect' = kék, gyűjtendő, érdemes építeni;
//                'alternative' = zöld, átmenetileg jó, ha nincs jobb; 'trash' = szürke, kuka
//     note       egy mondatos összegzés
//     iv         milyen IV a jó ebben a módban (a liga legjobb IV-jét a pvpoke.js adja, azt ne írd be)
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
  { id: 'alakazam', name: 'Alakazam', origin: 'Abra' },
  { id: 'ninetales_alolan', name: 'Alolan Ninetales', origin: 'alolai Vulpix' },
  { id: 'altaria', name: 'Altaria', origin: 'Swablu' },
  {
    id: 'ampharos',
    name: 'Ampharos',
    origin: 'Mareep',
    forms: {
      mega: {
        raid: {
          moves: { charged: ['Dragon Pulse'] },
        },
      },
    },
  },
  { id: 'annihilape', name: 'Annihilape', origin: 'Mankey' },
  { id: 'araquanid', name: 'Araquanid', origin: 'Dewpider' },
  { id: 'azumarill', name: 'Azumarill', origin: 'Marill / Azurill' },
  { id: 'bastiodon', name: 'Bastiodon', origin: 'Shieldon' },
  {
    id: 'baxcalibur',
    name: 'Baxcalibur',
    origin: 'Frigibax',
    notes: ['A Frigibax ritka, ne küldj el semmit a vonalból, amíg nincs egy jó Baxcaliburod.'],
  },
  { id: 'blaziken', name: 'Blaziken', origin: 'Torchic' },
  { id: 'blissey', name: 'Blissey', origin: 'Chansey / Happiny' },
  { id: 'carbink', name: 'Carbink', origin: 'Carbink' },
  {
    id: 'charizard',
    name: 'Charizard',
    origin: 'Charmander',
    raid: {
      moves: {
        fast: ['Fire Spin'],
        charged: ['Blast Burn', 'Overheat'],
        note: 'Blast Burn nélkül az Overheat is elfogadható; a Dragon Claw-t cseréld le Charged TM-mel.',
      },
    },
    ultraLeague: {
      moves: { fast: ['Dragon Breath'], charged: ['Blast Burn', 'Dragon Claw'] },
    },
  },
  {
    id: 'charjabug',
    name: 'Charjabug',
    origin: 'Grubbin',
    warning: 'NE fejleszd Vikavolttá!',
  },
  { id: 'cherrim_overcast', name: 'Cherrim', origin: 'Cherubi' },
  { id: 'cinderace', name: 'Cinderace', origin: 'Scorbunny' },
  { id: 'clodsire', name: 'Clodsire', origin: 'paldeai Wooper' },
  { id: 'corviknight', name: 'Corviknight', origin: 'Rookidee' },
  { id: 'cramorant', name: 'Cramorant', origin: 'Cramorant' },
  { id: 'darmanitan_standard', name: 'Darmanitan', origin: 'Darumaka' },
  {
    id: 'decidueye',
    name: 'Decidueye',
    origin: 'Rowlet',
    raid: { note: 'Jobb Grass támadó: Venusaur (Frenzy Plant).' },
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
    greatLeague: {
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
    raid: { note: 'Jobb: Mega Charizard Y. Rocket ellen tartaléknak jó.' },
  },
  { id: 'deoxys_defense', name: 'Deoxys (Defense)', origin: 'raidből (legendás)' },
  { id: 'dondozo', name: 'Dondozo', origin: 'Dondozo' },
  {
    id: 'doublade',
    name: 'Doublade',
    origin: 'Honedge',
    warning: 'Great League-re NE fejleszd Aegislashsá!',
    raid: { rating: 'trash' },
  },
  { id: 'drifblim', name: 'Drifblim', origin: 'Drifloon' },
  {
    id: 'dubwool',
    name: 'Dubwool',
    origin: 'Wooloo',
    raid: { rating: 'trash' },
  },
  {
    id: 'dusclops',
    name: 'Dusclops',
    origin: 'Duskull',
    warning: 'Great League-re NE fejleszd Dusknoirrá!',
    greatLeague: { tips: ['Nagyon bírja a sebzést, kezdőknek is jól játszható.'] },
  },
  {
    id: 'eevee',
    name: 'Eevee',
    origin: 'Eevee',
    raid: { rating: 'trash' },
    maxBattle: { note: 'Dynamax Glaceonnak fejlesztve az egyik legjobb Ice Max támadó.' },
    notes: [
      'A két jó irány: Umbreon (Great League) és Glaceon (raid, Max Battle). A Sylveon, a Flareon, az Espeon és a Leafeon tartaléknak jó, a Vaporeon és a Jolteon ma gyenge.',
      'Névtrükk: ha fejlesztés előtt átnevezed, a kiválasztott formát kapod. Rainer = Vaporeon, Sparky = Jolteon, Pyro = Flareon, Sakura = Espeon, Tamao = Umbreon, Linnea = Leafeon, Rea = Glaceon, Kira = Sylveon. Mindegyik név csak egyszer működik.',
    ],
  },
  {
    id: 'eldegoss',
    name: 'Eldegoss',
    origin: 'Gossifleur',
    notes: ['Egy alacsony Attackos Gossifleur maradhat a Little Cupra (500 CP).'],
  },
  { id: 'empoleon', name: 'Empoleon', origin: 'Piplup' },
  { id: 'excadrill', name: 'Excadrill', origin: 'Drilbur' },
  {
    id: 'fearow',
    name: 'Fearow',
    origin: 'Spearow',
    greatLeague: { tips: ['Olcsó építeni, a Spearow gyakori, és a Great League-hez nem kell XL cukor.'] },
  },
  { id: 'feraligatr', name: 'Feraligatr', origin: 'Totodile' },
  { id: 'flareon', name: 'Flareon', origin: 'Eevee' },
  { id: 'florges', name: 'Florges', origin: 'Flabébé' },
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
  },
  {
    id: 'moltres_galarian',
    name: 'Galarian Moltres',
    origin: 'legendás (Max Battle / raid)',
  },
  { id: 'stunfisk_galarian', name: 'Galarian Stunfisk', origin: 'Galarian Stunfisk' },
  { id: 'gardevoir', name: 'Gardevoir', origin: 'Ralts' },
  {
    id: 'gigalith',
    name: 'Gigalith',
    origin: 'Roggenrola',
    maxBattle: { note: 'Jobb: Rhyperior.' },
  },
  { id: 'gothitelle', name: 'Gothitelle', origin: 'Gothita' },
  {
    id: 'greedent',
    name: 'Greedent',
    origin: 'Skwovet',
    notes: ['Részben felhős időben több Skwovet jön.'],
  },
  { id: 'guzzlord', name: 'Guzzlord', origin: 'raidből (Ultra Beast)' },
  {
    id: 'gyarados',
    name: 'Gyarados',
    origin: 'Magikarp',
    raid: {
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
    raid: { note: 'Jobb: Machamp, Lucario, Conkeldurr.' },
  },
  { id: 'hatterene', name: 'Hatterene', origin: 'Hatenna' },
  { id: 'hippowdon', name: 'Hippowdon', origin: 'Hippopotas' },
  { id: 'electrode_hisuian', name: 'Hisuian Electrode', origin: 'hisui Voltorb' },
  { id: 'inteleon', name: 'Inteleon', origin: 'Sobble' },
  { id: 'jellicent', name: 'Jellicent', origin: 'Frillish' },
  { id: 'jumpluff', name: 'Jumpluff', origin: 'Hoppip' },
  { id: 'kilowattrel', name: 'Kilowattrel', origin: 'Wattrel' },
  { id: 'lanturn', name: 'Lanturn', origin: 'Chinchou' },
  { id: 'lapras', name: 'Lapras', origin: 'Lapras' },
  {
    id: 'lickitung',
    name: 'Lickitung',
    origin: 'Lickitung',
    raid: { rating: 'trash' },
  },
  { id: 'lokix', name: 'Lokix', origin: 'Nymble' },
  {
    id: 'machamp',
    name: 'Machamp',
    origin: 'Machop',
    raid: { note: 'Olcsón építhető.' },
  },
  { id: 'malamar', name: 'Malamar', origin: 'Inkay' },
  { id: 'mandibuzz', name: 'Mandibuzz', origin: 'Vullaby' },
  { id: 'mantine', name: 'Mantine', origin: 'Mantyke / Mantine' },
  { id: 'marowak', name: 'Marowak', origin: 'Cubone (a sima, nem az alolai)' },
  { id: 'medicham', name: 'Medicham', origin: 'Meditite' },
  { id: 'melmetal', name: 'Melmetal', origin: 'Meltan (Mystery Boxból)' },
  { id: 'meowscarada', name: 'Meowscarada', origin: 'Sprigatito' },
  { id: 'mimikyu', name: 'Mimikyu', origin: 'Mimikyu' },
  { id: 'moltres', name: 'Moltres', origin: 'legendás (raid / Max Battle)' },
  { id: 'ninetales', name: 'Ninetales', origin: 'Vulpix (a sima, nem az alolai)' },
  { id: 'perrserker', name: 'Perrserker', origin: 'Galarian Meowth' },
  {
    id: 'pyroar',
    name: 'Pyroar',
    origin: 'Litleo',
    notes: [
      'A hím és a nőstény másképp néz ki, a Pokédex nemi változataihoz mindkettőből egy maradhat.',
    ],
  },
  { id: 'quagsire', name: 'Quagsire', origin: 'Wooper (a sima, nem a paldeai)' },
  { id: 'quaquaval', name: 'Quaquaval', origin: 'Quaxly' },
  { id: 'rhyperior', name: 'Rhyperior', origin: 'Rhyhorn' },
  { id: 'rillaboom', name: 'Rillaboom', origin: 'Grookey' },
  { id: 'sableye', name: 'Sableye', origin: 'Sableye' },
  {
    id: 'snorlax',
    name: 'Snorlax',
    origin: 'Munchlax / Snorlax',
    raid: { rating: 'trash' },
  },
  { id: 'staraptor', name: 'Staraptor', origin: 'Starly' },
  { id: 'stunfisk', name: 'Stunfisk', origin: 'Stunfisk (a sima, nem a galari)' },
  { id: 'swampert', name: 'Swampert', origin: 'Mudkip' },
  { id: 'thievul', name: 'Thievul', origin: 'Nickit' },
  { id: 'tinkaton', name: 'Tinkaton', origin: 'Tinkatink' },
  {
    id: 'torterra',
    name: 'Torterra',
    origin: 'Turtwig',
    raid: { note: 'Csak Frenzy Plant-tel jó.' },
  },
  { id: 'toxapex', name: 'Toxapex', origin: 'Mareanie' },
  { id: 'trevenant', name: 'Trevenant', origin: 'Phantump' },
  { id: 'tsareena', name: 'Tsareena', origin: 'Bounsweet' },
  { id: 'tyrantrum', name: 'Tyrantrum', origin: 'Tyrunt' },
  { id: 'umbreon', name: 'Umbreon', origin: 'Eevee' },
  { id: 'venusaur', name: 'Venusaur', origin: 'Bulbasaur' },
  { id: 'vigoroth', name: 'Vigoroth', origin: 'Slakoth', warning: 'NE fejleszd Slakinggé!' },
  { id: 'whimsicott', name: 'Whimsicott', origin: 'Cottonee' },
];
