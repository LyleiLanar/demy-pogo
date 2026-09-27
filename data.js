// A puska tartalma. Tartalmat itt frissíts, az oldal ebből épül fel.

const DATA = {
  // PvP-ben használható fajok (Great League).
  // origin: az alapforma, amit a vadonban kapsz el (elhagyható)
  pvpSpecies: [
    { name: 'Azumarill', origin: 'Marill / Azurill' },
    { name: 'Tinkaton', origin: 'Tinkatink' },
    { name: 'Annihilape', origin: 'Mankey' },
    { name: 'Hariyama', origin: 'Makuhita' },
    { name: 'Medicham', origin: 'Meditite' },
    { name: 'Clodsire', origin: 'paldeai Wooper' },
    { name: 'Quagsire', origin: 'Wooper' },
    { name: 'Galarian Stunfisk' },
    { name: 'Mandibuzz', origin: 'Vullaby' },
    { name: 'Toxapex', origin: 'Mareanie' },
    { name: 'Altaria', origin: 'Swablu' },
    { name: 'Lanturn', origin: 'Chinchou' },
    { name: 'Florges', origin: 'Flabébé' },
    { name: 'Mimikyu' },
    { name: 'Alolan Ninetales', origin: 'alolai Vulpix' },
    { name: 'Ninetales, főleg Shadow', origin: 'Vulpix' },
    { name: 'Swampert', origin: 'Mudkip, Hydro Cannon kell' },
    { name: 'Feraligatr', origin: 'Totodile, Hydro Cannon kell' },
    { name: 'Jumpluff', origin: 'Hoppip' },
    { name: 'Bastiodon', origin: 'Shieldon' },
    { name: 'Lickitung' },
    { name: 'Melmetal', origin: 'Meltan' },
  ],

  // Keresőkifejezések csoportokban.
  // warning: figyelmeztetés a csoport elején (elhagyható)
  searchGroups: [
    {
      title: 'Takarítás',
      warning: 'Ez csak átnézendő lista, nem vakon elküldendő! Görgesd végig, a PvP-fajokat vedd ki belőle.',
      searches: [
        { label: 'Heti takarítás (elmúlt hét, védettek nélkül)', query: 'age0-7&!3*&!4*&!favorite&!shiny&!legendary&!mythical&!ultrabeast&!shadow&!purified&!costume&!lucky&!background&!dynamax&!gigantamax&!@special' },
        { label: 'Ma elkapottak', query: 'age0' },
      ],
    },
    {
      title: 'PvP (Great League)',
      searches: [
        { label: 'PvP jelöltek (alacsony Attack, magas Defense és HP)', query: '0attack,1attack&3defense,4defense&3hp,4hp' },
        { label: 'Alacsony Attackosak (tágabb lista)', query: '0attack,1attack' },
        { label: 'Great League-be beférők (max 1500 CP)', query: 'cp-1500' },
      ],
    },
    {
      title: 'Raid',
      searches: [
        { label: 'Legjobb példányok (3 és 4 csillag)', query: '3*,4*' },
        { label: '100%-osak (hundo)', query: '4*' },
        { label: 'Shadow Pokémonok', query: 'shadow' },
        { label: 'Mega evolválhatók', query: 'megaevolve' },
      ],
    },
    {
      title: 'Védett / különleges',
      searches: [
        { label: 'Shinyk', query: 'shiny' },
        { label: 'Legendás, mitikus, Ultra Beast', query: 'legendary,mythical,ultrabeast' },
        { label: 'Jelmezesek', query: 'costume' },
        { label: 'Különleges hátterűek', query: 'background' },
        { label: 'Lucky', query: 'lucky' },
        { label: 'Különleges (Community Day / Elite TM) mozdulat', query: '@special' },
      ],
    },
    {
      title: 'Max Battle',
      searches: [
        { label: 'Dynamax és Gigantamax', query: 'dynamax,gigantamax' },
      ],
    },
    {
      title: 'Fejlesztés',
      searches: [
        { label: 'Most fejleszthetők', query: 'evolve' },
        { label: 'Új Pokédex-bejegyzést adnak', query: 'evolvenew' },
      ],
    },
    {
      title: 'Címkék és fajok',
      searches: [
        { label: 'A Kétes címkések', query: '#Kétes' },
        { label: 'Teljes fejlődési sor (példa: Charmander)', query: '+Charmander' },
      ],
    },
  ],

  // Great League Top 50 (PvPoke).
  // shadow: a Shadow változat is a top 50-ben van
  // origin: honnan szerzed meg
  // note: plusz megjegyzés (elhagyható)
  // warning: kiemelt figyelmeztetés (elhagyható)
  rankingGroups: [
    {
      title: 'Top 10',
      entries: [
        { rank: 1, name: 'Melmetal', origin: 'Meltan (Mystery Boxból)' },
        { rank: 2, name: 'Altaria', shadow: true, origin: 'Swablu' },
        { rank: 3, name: 'Ninetales', shadow: true, origin: 'Vulpix (a sima, nem az alolai)' },
        { rank: 4, name: 'Cramorant', origin: 'Cramorant' },
        { rank: 5, name: 'Tinkaton', origin: 'Tinkatink' },
        { rank: 6, name: 'Mimikyu', origin: 'Mimikyu' },
        { rank: 7, name: 'Corviknight', shadow: true, origin: 'Rookidee' },
        { rank: 8, name: 'Galarian Corsola', origin: 'Galarian Corsola', warning: 'NE fejleszd Cursolává!' },
        { rank: 11, name: 'Florges', origin: 'Flabébé' },
        { rank: 12, name: 'Quagsire', shadow: true, origin: 'Wooper (a sima, nem a paldeai)' },
      ],
    },
    {
      title: '13–30',
      entries: [
        { rank: 15, name: 'Thievul', origin: 'Nickit' },
        { rank: 16, name: 'Araquanid', shadow: true, origin: 'Dewpider' },
        { rank: 17, name: 'Clodsire', origin: 'paldeai Wooper' },
        { rank: 18, name: 'Sableye', shadow: true, origin: 'Sableye' },
        { rank: 19, name: 'Marowak', origin: 'Cubone (a sima, nem az alolai)' },
        { rank: 20, name: 'Stunfisk', origin: 'Stunfisk (a sima, nem a galari)' },
        { rank: 21, name: 'Vigoroth', shadow: true, origin: 'Slakoth', warning: 'NE fejleszd Slakinggé!' },
        { rank: 22, name: 'Jellicent', origin: 'Frillish' },
        { rank: 23, name: 'Empoleon', shadow: true, origin: 'Piplup', note: 'Hydro Cannon kell (Community Day mozdulat)' },
        { rank: 25, name: 'Fearow', origin: 'Spearow' },
        { rank: 26, name: 'Mantine', origin: 'Mantyke / Mantine' },
        { rank: 27, name: 'Snorlax', shadow: true, origin: 'Munchlax / Snorlax' },
        { rank: 28, name: 'Umbreon', origin: 'Eevee' },
        { rank: 30, name: 'Feraligatr', origin: 'Totodile', note: 'Hydro Cannon kell' },
      ],
    },
    {
      title: '31–50',
      entries: [
        { rank: 31, name: 'Annihilape', shadow: true, origin: 'Mankey' },
        { rank: 32, name: 'Azumarill', origin: 'Marill / Azurill' },
        { rank: 33, name: 'Deoxys (Defense)', origin: 'legendás, raidből' },
        { rank: 34, name: 'Hisuian Electrode', origin: 'hisui Voltorb' },
        { rank: 35, name: 'Rillaboom', origin: 'Grookey' },
        { rank: 39, name: 'Lapras', origin: 'Lapras' },
        { rank: 41, name: 'Charjabug', shadow: true, origin: 'Grubbin', warning: 'NE fejleszd Vikavolttá!' },
        { rank: 42, name: 'Malamar', shadow: true, origin: 'Inkay' },
        { rank: 43, name: 'Furret', origin: 'Sentret' },
        { rank: 44, name: 'Guzzlord', origin: 'Ultra Beast, raidből' },
        { rank: 46, name: 'Carbink', origin: 'Carbink' },
        { rank: 48, name: 'Forretress', origin: 'Pineco', note: 'csak a Shadow változat van a top 50-ben' },
        { rank: 49, name: 'Dondozo', origin: 'Dondozo' },
        { rank: 50, name: 'Hippowdon', origin: 'Hippopotas' },
      ],
    },
  ],

  // Hasznos oldalak.
  // badge: kiemelő címke a név mellett (elhagyható)
  linkGroups: [
    {
      title: 'Napi infó, események',
      links: [
        { name: 'Leek Duck', url: 'https://leekduck.com', badge: 'NAPI', description: 'Események, raid bossok, Max Battle-ök, Community Day naptár.' },
        { name: 'Pokémon GO Hub', url: 'https://pokemongohub.net', description: 'Hírek és részletes útmutatók, kezdőknek is.' },
      ],
    },
    {
      title: 'PvP (Great League)',
      links: [
        { name: 'PvPoke', url: 'https://pvpoke.com/rankings/', badge: 'NAPI', description: 'Rangsorok, csapatépítő, mozdulatok. A GL Top 50 innen van.' },
        { name: 'GO Stadium', url: 'https://gostadium.club', description: 'Kezdőbarát PvP cikkek, meta összefoglalók.' },
      ],
    },
    {
      title: 'Raid és Max Battle',
      links: [
        { name: 'Pokebattler', url: 'https://pokebattler.com', description: 'Kivel érdemes egy bosst verni, és hány ember kell hozzá.' },
        { name: 'GamePress', url: 'https://gamepress.gg/pokemongo', description: 'Adatbázis: mozdulatok, statok, raid counterek.' },
      ],
    },
    {
      title: 'Kézikönyv és közösség',
      links: [
        { name: 'Bulbapedia', url: 'https://bulbapedia.bulbagarden.net', description: 'Mindenről van oldal, ha valamit nem értesz.' },
        { name: 'r/TheSilphRoad', url: 'https://reddit.com/r/TheSilphRoad', description: 'Tapasztalt játékosok, gyors válaszok.' },
      ],
    },
  ],
};
