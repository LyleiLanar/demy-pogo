// Fajonkénti, kézzel írt tanácsok. A Pokédex és a GL Top 50 fül ebből és a pvpoke.js-ből épül fel.
// A típus, a helyezés, az ajánlott szett és a párharcok a generált pvpoke.js-ben vannak.
//
// Mezők (csak az id kötelező; egy új fajhoz elég: { id: 'glaceon' }):
//   id           a faj PvPoke-azonosítója (speciesId), ezzel kapcsolódik a pvpoke.js-hez
//                (a Pokédex-szám a pvpoke.js-ből jön; az nem egyedi, a regionális formáknak ugyanaz)
//   name         csak ha a pvpoke.js neve helyett mást kérünk (alapból onnan jön)
//   origin       ahonnan szerzed, ha a fejlődési ágból nem derül ki (pl. 'raidből (legendás)'); a kártyán
//                csak akkor látszik, ha a fajnak nincs fejlődési ága
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
    greatLeague: {
      iv: 'A Legjobb IV a Shield formára szól; a Blade forma ereje is az IV-ből jön, ezért Stardust előtt nézd meg a Poke Genie-ben mindkét forma rankját.',
      tips: [
        'Harc közben két forma között vált, nehezen tanulható. Kezdőként a Doublade egyszerűbb.',
      ],
    },
  },
  { id: 'alakazam' },
  { id: 'altaria' },
  {
    id: 'ampharos',
    forms: {
      mega: {
        raid: {
          moves: { charged: ['Dragon Pulse'] },
        },
      },
    },
  },
  { id: 'annihilape' },
  { id: 'araquanid' },
  { id: 'azumarill' },
  { id: 'bastiodon' },
  {
    id: 'baxcalibur',
    notes: ['A Frigibax ritka, ne küldj el semmit a vonalból, amíg nincs egy jó Baxcaliburod.'],
  },
  { id: 'blaziken' },
  { id: 'blissey' },
  { id: 'bulbasaur' },
  { id: 'carbink' },
  {
    id: 'charizard',
    raid: {
      moves: {
        fast: ['Fire Spin'],
        charged: ['Blast Burn', 'Overheat'],
        note: 'Blast Burn nélkül az Overheat is elfogadható. A Dragon Claw-t cseréld le Charged TM-mel.',
      },
    },
    ultraLeague: {
      moves: { fast: ['Dragon Breath'], charged: ['Blast Burn', 'Dragon Claw'] },
    },
  },
  { id: 'charjabug', warning: 'NE fejleszd Vikavolttá!' },
  { id: 'cherrim_overcast' },
  { id: 'cinderace' },
  { id: 'clodsire' },
  { id: 'corsola_galarian', warning: 'NE fejleszd Cursolává!' },
  { id: 'corviknight' },
  { id: 'cramorant' },
  { id: 'darmanitan_standard' },
  {
    id: 'decidueye',
    notes: ['A hisui Decidueye (Grass/Fighting) külön faj, más a típusa és a szettje.'],
  },
  { id: 'dedenne' },
  { id: 'delphox' },
  { id: 'deoxys_defense', origin: 'raidből (legendás)' },
  { id: 'dondozo' },
  {
    id: 'doublade',
    warning: 'Great League-re NE fejleszd Aegislashsá!',
    raid: { rating: 'trash' },
  },
  { id: 'drifblim' },
  {
    id: 'dubwool',
    raid: { rating: 'trash' },
  },
  {
    id: 'dusclops',
    warning: 'Great League-re NE fejleszd Dusknoirrá!',
    greatLeague: { tips: ['Nagyon bírja a sebzést, kezdőknek is jól játszható.'] },
  },
  {
    id: 'eevee',
    raid: { rating: 'trash' },
    maxBattle: { note: 'Dynamax Glaceonnak fejlesztve az egyik legjobb Ice Max támadó.' },
    notes: [
      'Névtrükk: ha fejlesztés előtt átnevezed, a kiválasztott formát kapod. Rainer = Vaporeon, Sparky = Jolteon, Pyro = Flareon, Sakura = Espeon, Tamao = Umbreon, Linnea = Leafeon, Rea = Glaceon, Kira = Sylveon. Mindegyik név csak egyszer működik.',
    ],
  },
  {
    id: 'eldegoss',
    notes: ['Egy alacsony Attackos Gossifleur maradhat a Little Cupra (500 CP).'],
  },
  { id: 'electrode_hisuian' },
  { id: 'empoleon' },
  { id: 'excadrill' },
  {
    id: 'fearow',
    greatLeague: { tips: ['Olcsó építeni, a Spearow gyakori, és a Great League-hez nem kell XL cukor.'] },
  },
  { id: 'feraligatr' },
  { id: 'flareon' },
  { id: 'florges' },
  {
    id: 'forretress',
    raid: { rating: 'trash' },
  },
  {
    id: 'furret',
    raid: { rating: 'trash' },
  },
  { id: 'gardevoir' },
  {
    id: 'gigalith',
    maxBattle: { note: 'Jobb: Rhyperior.' },
  },
  { id: 'gothitelle' },
  { id: 'greedent' },
  { id: 'guzzlord', origin: 'raidből (Ultra Beast)' },
  {
    id: 'gyarados',
    raid: {
      moves: {
        fast: ['Waterfall', 'Bite'],
        charged: ['Hydro Pump', 'Crunch', 'Aqua Tail'],
        note: 'Water szett: Waterfall + Hydro Pump\nDark szett: Bite + Crunch',
      },
    },
  },
  {
    id: 'hariyama',
    raid: { note: 'Jobb: Machamp, Lucario, Conkeldurr.' },
  },
  { id: 'hatterene' },
  { id: 'hippowdon' },
  { id: 'inteleon' },
  { id: 'ivysaur' },
  { id: 'jellicent' },
  { id: 'jumpluff' },
  { id: 'kilowattrel' },
  { id: 'lanturn' },
  { id: 'lapras' },
  {
    id: 'lickitung',
    raid: { rating: 'trash' },
  },
  { id: 'lokix' },
  { id: 'machamp' },
  { id: 'malamar' },
  { id: 'mandibuzz' },
  { id: 'mantine' },
  { id: 'marowak' },
  { id: 'medicham' },
  { id: 'melmetal' },
  { id: 'meowscarada' },
  { id: 'mimikyu' },
  { id: 'moltres', origin: 'legendás (raid / Max Battle)' },
  { id: 'moltres_galarian', origin: 'legendás (Max Battle / raid)' },
  { id: 'ninetales' },
  { id: 'ninetales_alolan' },
  { id: 'numel' },
  { id: 'perrserker' },
  {
    id: 'pyroar',
    notes: [
      'A hím és a nőstény másképp néz ki, a Pokédex nemi változataihoz mindkettőből egy maradhat.',
    ],
  },
  { id: 'quagsire' },
  { id: 'quaquaval' },
  { id: 'raboot' },
  { id: 'rhyperior' },
  { id: 'rillaboom' },
  { id: 'sableye' },
  { id: 'scorbunny' },
  {
    id: 'snorlax',
    raid: { rating: 'trash' },
  },
  { id: 'staraptor' },
  { id: 'stunfisk' },
  { id: 'stunfisk_galarian' },
  { id: 'swampert' },
  { id: 'thievul' },
  { id: 'tinkaton' },
  { id: 'torterra' },
  { id: 'toxapex' },
  { id: 'trevenant' },
  { id: 'tsareena' },
  { id: 'tyrantrum' },
  { id: 'umbreon' },
  { id: 'venusaur' },
  { id: 'vigoroth', warning: 'NE fejleszd Slakinggé!' },
  { id: 'whimsicott' },
];
