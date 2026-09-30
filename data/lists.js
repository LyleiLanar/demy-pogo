// A puska tartalma. Tartalmat itt frissíts, az oldal ebből épül fel.

const DATA = {
  // Keresőkifejezések csoportokban.
  // warning: figyelmeztetés a csoport elején (elhagyható)
  searchGroups: [
    {
      title: 'Takarítás',
      warning: 'Ez csak átnézendő lista, nem vakon elküldendő! Görgesd végig, a GL Top 50 fajait vedd ki belőle.',
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
