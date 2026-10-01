// GENERÁLT FÁJL, ne szerkeszd kézzel. Frissítés: node tools/sync-pvpoke.mjs
// Forrás: github.com/pvpoke/pvpoke (gamemaster és rankings-1500/2500).
// dex: a Pokédex-szám (a regionális formáknak ugyanaz, mint az alapfajnak)
// legendary: legendás, mitikus vagy Ultra Beast
// megaForms: a faj Mega formái a típusukkal (csak raidben számítanak)
// maxForms: Dynamax / Gigantamax formák (a játék game masteréből, PokeMiners)
// evolution: a fejlődési ág fokonként (elágazásnál egy fokon több faj); a current a faj maga,
//   candy és a többi mező az előző fokról ide fejlődés ára és feltételei (game master);
//   id, rank (legjobb GL/UL helyezés) és legendary a fok színéhez
// shadow: a Shadow változat Great és Ultra League adatai
// specialMoves: csak Elite TM-mel vagy eseményen megszerezhető mozdulatok
// moveset: az ajánlott szett ({ fast, charged })
// bestIv: a ligában a legjobb IV ({ iv: 'Attack/Defense/HP', cp }) a game master CP-szorzóival
// beats / losesTo: a legfontosabb nyert és vesztett párharcok ({ id, name, rank, legendary }, mint az ágban)
// PVPOKE_MOVE_TYPES: az ajánlott mozdulatok típusa (a PvPoke-szettekből és a pokemon.js-ből)

const PVPOKE_DATE = '2026. 10. 01.';

const PVPOKE = {
  aegislash_shield: {
    dex: 681,
    types: ['steel', 'ghost'],
    evolution: [
      [
        { id: 'honedge', name: 'Honedge', rank: 871 },
      ],
      [
        { id: 'doublade', name: 'Doublade', rank: 75, candy: 25 },
      ],
      [
        { id: 'aegislash_shield', name: 'Aegislash (Shield)', rank: 80, current: true, candy: 100 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 80,
      moveset: { fast: ['Psycho Cut'], charged: ['Shadow Ball', 'Gyro Ball'] },
      beats: [
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
      ],
      bestIv: { iv: '0/12/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 606,
      moveset: { fast: ['Psycho Cut'], charged: ['Shadow Ball', 'Flash Cannon'] },
      bestIv: { iv: '15/15/15', cp: 1746 },
    },
  },
  alakazam: {
    dex: 65,
    types: ['psychic'],
    megaForms: [
      { name: 'Mega', types: ['psychic'] },
    ],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'abra', name: 'Abra' },
      ],
      [
        { id: 'kadabra', name: 'Kadabra', rank: 1101, candy: 25 },
      ],
      [
        { id: 'alakazam', name: 'Alakazam', rank: 658, current: true, candy: 100, tradeFree: true },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Counter', 'Dazzling Gleam', 'Psychic'],
    greatLeague: {
      rank: 927,
      moveset: { fast: ['Psycho Cut'], charged: ['Fire Punch', 'Shadow Ball'] },
      bestIv: { iv: '1/15/15', cp: 1495 },
    },
    ultraLeague: {
      rank: 682,
      moveset: { fast: ['Psycho Cut'], charged: ['Fire Punch', 'Shadow Ball'] },
      bestIv: { iv: '0/14/15', cp: 2497 },
    },
    shadow: {
      greatLeague: {
        rank: 844,
        moveset: { fast: ['Psycho Cut'], charged: ['Fire Punch', 'Shadow Ball'] },
        bestIv: { iv: '1/15/15', cp: 1495 },
      },
      ultraLeague: {
        rank: 658,
        moveset: { fast: ['Psycho Cut'], charged: ['Fire Punch', 'Shadow Ball'] },
        bestIv: { iv: '0/14/15', cp: 2497 },
      },
    },
  },
  ninetales_alolan: {
    dex: 38,
    types: ['ice', 'fairy'],
    evolution: [
      [
        { id: 'vulpix_alolan', name: 'Alolan Vulpix' },
      ],
      [
        { id: 'ninetales_alolan', name: 'Alolan Ninetales', rank: 24, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Chilling Water'],
    greatLeague: {
      rank: 68,
      moveset: { fast: ['Powder Snow'], charged: ['Weather Ball (Ice)', 'Chilling Water'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'thievul', name: 'Thievul', rank: 15 },
        { id: 'stunfisk', name: 'Stunfisk', rank: 21 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      bestIv: { iv: '0/14/12', cp: 1500 },
    },
    ultraLeague: {
      rank: 24,
      moveset: { fast: ['Powder Snow'], charged: ['Weather Ball (Ice)', 'Chilling Water'] },
      beats: [
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, legendary: true },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
      ],
      losesTo: [
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      bestIv: { iv: '7/15/15', cp: 2497 },
    },
    shadow: {
      greatLeague: {
        rank: 73,
        moveset: { fast: ['Powder Snow'], charged: ['Weather Ball (Ice)', 'Chilling Water'] },
        beats: [
          { id: 'altaria', name: 'Altaria', rank: 2 },
          { id: 'fearow', name: 'Fearow', rank: 26 },
          { id: 'stunfisk', name: 'Stunfisk', rank: 21 },
        ],
        losesTo: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        ],
        bestIv: { iv: '0/14/12', cp: 1500 },
      },
      ultraLeague: {
        rank: 30,
        moveset: { fast: ['Powder Snow'], charged: ['Weather Ball (Ice)', 'Chilling Water'] },
        beats: [
          { id: 'moltres_galarian', name: 'Galarian Moltres', rank: 13, legendary: true },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
          { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, legendary: true },
        ],
        losesTo: [
          { id: 'empoleon', name: 'Empoleon', rank: 7 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        ],
        bestIv: { iv: '7/15/15', cp: 2497 },
      },
    },
  },
  altaria: {
    dex: 334,
    types: ['dragon', 'flying'],
    megaForms: [
      { name: 'Mega', types: ['dragon', 'fairy'] },
    ],
    evolution: [
      [
        { id: 'swablu', name: 'Swablu' },
      ],
      [
        { id: 'altaria', name: 'Altaria', rank: 2, current: true, candy: 400 },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Moonblast'],
    greatLeague: {
      rank: 2,
      moveset: { fast: ['Dragon Breath'], charged: ['Moonblast', 'Flamethrower'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'thievul', name: 'Thievul', rank: 15 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      bestIv: { iv: '0/14/15', cp: 1497 },
    },
    ultraLeague: {
      rank: 270,
      moveset: { fast: ['Dragon Breath'], charged: ['Moonblast', 'Flamethrower'] },
      bestIv: { iv: '15/15/15', cp: 2266 },
    },
    shadow: {
      greatLeague: {
        rank: 9,
        moveset: { fast: ['Dragon Breath'], charged: ['Moonblast', 'Flamethrower'] },
        beats: [
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        ],
        losesTo: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        ],
        bestIv: { iv: '0/14/15', cp: 1497 },
      },
      ultraLeague: {
        rank: 309,
        moveset: { fast: ['Dragon Breath'], charged: ['Moonblast', 'Flamethrower'] },
        bestIv: { iv: '15/15/15', cp: 2266 },
      },
    },
  },
  ampharos: {
    dex: 181,
    types: ['electric'],
    megaForms: [
      { name: 'Mega', types: ['electric', 'dragon'] },
    ],
    evolution: [
      [
        { id: 'mareep', name: 'Mareep' },
      ],
      [
        { id: 'flaaffy', name: 'Flaaffy', rank: 902, candy: 25 },
      ],
      [
        { id: 'ampharos', name: 'Ampharos', rank: 51, current: true, candy: 100 },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Dragon Pulse'],
    greatLeague: {
      rank: 220,
      moveset: { fast: ['Volt Switch'], charged: ['Brutal Swing', 'Trailblaze'] },
      bestIv: { iv: '0/13/11', cp: 1499 },
    },
    ultraLeague: {
      rank: 51,
      moveset: { fast: ['Volt Switch'], charged: ['Brutal Swing', 'Trailblaze'] },
      beats: [
        { id: 'feraligatr', name: 'Feraligatr', rank: 14 },
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
        { id: 'jellicent', name: 'Jellicent', rank: 16 },
      ],
      losesTo: [
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
      ],
      bestIv: { iv: '0/13/15', cp: 2497 },
    },
    shadow: {
      greatLeague: {
        rank: 221,
        moveset: { fast: ['Volt Switch'], charged: ['Brutal Swing', 'Trailblaze'] },
        bestIv: { iv: '0/13/11', cp: 1499 },
      },
      ultraLeague: {
        rank: 55,
        moveset: { fast: ['Volt Switch'], charged: ['Brutal Swing', 'Trailblaze'] },
        beats: [
          { id: 'empoleon', name: 'Empoleon', rank: 7 },
          { id: 'jellicent', name: 'Jellicent', rank: 16 },
          { id: 'feraligatr', name: 'Feraligatr', rank: 14 },
        ],
        losesTo: [
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        ],
        bestIv: { iv: '0/13/15', cp: 2497 },
      },
    },
  },
  annihilape: {
    dex: 979,
    types: ['fighting', 'ghost'],
    evolution: [
      [
        { id: 'mankey', name: 'Mankey', rank: 794 },
      ],
      [
        { id: 'primeape', name: 'Primeape', rank: 251, candy: 50 },
      ],
      [
        { id: 'annihilape', name: 'Annihilape', rank: 32, current: true, candy: 100, quest: true },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Rage Fist'],
    greatLeague: {
      rank: 32,
      moveset: { fast: ['Low Kick'], charged: ['Rage Fist', 'Ice Punch'] },
      beats: [
        { id: 'thievul', name: 'Thievul', rank: 15 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
      ],
      bestIv: { iv: '2/15/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 61,
      moveset: { fast: ['Low Kick'], charged: ['Rage Fist', 'Ice Punch'] },
      beats: [
        { id: 'blastoise', name: 'Blastoise', rank: 29 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
      ],
      bestIv: { iv: '0/15/15', cp: 2492 },
    },
    shadow: {
      greatLeague: {
        rank: 38,
        moveset: { fast: ['Low Kick'], charged: ['Rage Fist', 'Ice Punch'] },
        beats: [
          { id: 'thievul', name: 'Thievul', rank: 15 },
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
          { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
          { id: 'cramorant', name: 'Cramorant', rank: 4 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        ],
        bestIv: { iv: '2/15/15', cp: 1499 },
      },
      ultraLeague: {
        rank: 72,
        moveset: { fast: ['Low Kick'], charged: ['Rage Fist', 'Ice Punch'] },
        beats: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'blastoise', name: 'Blastoise', rank: 29 },
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
          { id: 'florges', name: 'Florges', rank: 11 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        ],
        bestIv: { iv: '0/15/15', cp: 2492 },
      },
    },
  },
  araquanid: {
    dex: 752,
    types: ['water', 'bug'],
    evolution: [
      [
        { id: 'dewpider', name: 'Dewpider' },
      ],
      [
        { id: 'araquanid', name: 'Araquanid', rank: 16, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 16,
      moveset: { fast: ['Infestation'], charged: ['Water Pulse', 'Mirror Coat'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'thievul', name: 'Thievul', rank: 15 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
      ],
      losesTo: [
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
      ],
      bestIv: { iv: '0/10/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 561,
      moveset: { fast: ['Infestation'], charged: ['Water Pulse', 'Mirror Coat'] },
      bestIv: { iv: '15/15/15', cp: 2065 },
    },
    shadow: {
      greatLeague: {
        rank: 30,
        moveset: { fast: ['Infestation'], charged: ['Water Pulse', 'Mirror Coat'] },
        beats: [
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        ],
        losesTo: [
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
          { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8 },
          { id: 'cramorant', name: 'Cramorant', rank: 4 },
        ],
        bestIv: { iv: '0/10/15', cp: 1500 },
      },
      ultraLeague: {
        rank: 567,
        moveset: { fast: ['Infestation'], charged: ['Water Pulse', 'Mirror Coat'] },
        bestIv: { iv: '15/15/15', cp: 2065 },
      },
    },
  },
  azumarill: {
    dex: 184,
    types: ['water', 'fairy'],
    evolution: [
      [
        { id: 'azurill', name: 'Azurill' },
      ],
      [
        { id: 'marill', name: 'Marill', candy: 25 },
      ],
      [
        { id: 'azumarill', name: 'Azumarill', rank: 33, current: true, candy: 25 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 33,
      moveset: { fast: ['Bubble'], charged: ['Ice Beam', 'Play Rough'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      bestIv: { iv: '0/15/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 817,
      moveset: { fast: ['Bubble'], charged: ['Play Rough', 'Ice Beam'] },
      bestIv: { iv: '15/15/15', cp: 1795 },
    },
  },
  bastiodon: {
    dex: 411,
    types: ['rock', 'steel'],
    evolution: [
      [
        { id: 'shieldon', name: 'Shieldon' },
      ],
      [
        { id: 'bastiodon', name: 'Bastiodon', rank: 168, current: true, candy: 50 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 168,
      moveset: { fast: ['Smack Down'], charged: ['Stone Edge', 'Flamethrower'] },
      bestIv: { iv: '0/15/14', cp: 1497 },
    },
    ultraLeague: {
      rank: 838,
      moveset: { fast: ['Smack Down'], charged: ['Stone Edge', 'Flamethrower'] },
      bestIv: { iv: '15/15/15', cp: 1741 },
    },
    shadow: {
      greatLeague: {
        rank: 323,
        moveset: { fast: ['Smack Down'], charged: ['Stone Edge', 'Flamethrower'] },
        bestIv: { iv: '0/15/14', cp: 1497 },
      },
      ultraLeague: {
        rank: 841,
        moveset: { fast: ['Smack Down'], charged: ['Stone Edge', 'Flamethrower'] },
        bestIv: { iv: '15/15/15', cp: 1741 },
      },
    },
  },
  baxcalibur: {
    dex: 998,
    types: ['dragon', 'ice'],
    evolution: [
      [
        { id: 'frigibax', name: 'Frigibax', rank: 643 },
      ],
      [
        { id: 'arctibax', name: 'Arctibax', rank: 301, candy: 25 },
      ],
      [
        { id: 'baxcalibur', name: 'Baxcalibur', rank: 347, current: true, candy: 100 },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Glaive Rush'],
    greatLeague: {
      rank: 499,
      moveset: { fast: ['Dragon Breath'], charged: ['Glaive Rush', 'Avalanche'] },
      bestIv: { iv: '0/15/5', cp: 1500 },
    },
    ultraLeague: {
      rank: 347,
      moveset: { fast: ['Dragon Breath'], charged: ['Glaive Rush', 'Avalanche'] },
      bestIv: { iv: '1/15/15', cp: 2500 },
    },
  },
  blaziken: {
    dex: 257,
    types: ['fire', 'fighting'],
    megaForms: [
      { name: 'Mega', types: ['fire', 'fighting'] },
    ],
    evolution: [
      [
        { id: 'torchic', name: 'Torchic' },
      ],
      [
        { id: 'combusken', name: 'Combusken', rank: 619, candy: 25 },
      ],
      [
        { id: 'blaziken', name: 'Blaziken', rank: 170, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Blast Burn', 'Stone Edge'],
    greatLeague: {
      rank: 285,
      moveset: { fast: ['Ember'], charged: ['Aura Sphere', 'Blast Burn'] },
      bestIv: { iv: '1/15/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 170,
      moveset: { fast: ['Ember'], charged: ['Aura Sphere', 'Blast Burn'] },
      bestIv: { iv: '1/15/15', cp: 2499 },
    },
    shadow: {
      greatLeague: {
        rank: 239,
        moveset: { fast: ['Ember'], charged: ['Aura Sphere', 'Blaze Kick'] },
        bestIv: { iv: '1/15/15', cp: 1499 },
      },
      ultraLeague: {
        rank: 174,
        moveset: { fast: ['Ember'], charged: ['Aura Sphere', 'Blast Burn'] },
        bestIv: { iv: '1/15/15', cp: 2499 },
      },
    },
  },
  blissey: {
    dex: 242,
    types: ['normal'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'happiny', name: 'Happiny' },
      ],
      [
        { id: 'chansey', name: 'Chansey', rank: 608, candy: 25, buddyKm: 15, quest: true },
      ],
      [
        { id: 'blissey', name: 'Blissey', rank: 639, current: true, candy: 50 },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Wild Charge'],
    greatLeague: {
      rank: 934,
      moveset: { fast: ['Zen Headbutt'], charged: ['Wild Charge', 'Dazzling Gleam'] },
      bestIv: { iv: '0/15/3', cp: 1499 },
    },
    ultraLeague: {
      rank: 639,
      moveset: { fast: ['Zen Headbutt'], charged: ['Wild Charge', 'Dazzling Gleam'] },
      bestIv: { iv: '0/15/14', cp: 2499 },
    },
  },
  carbink: {
    dex: 703,
    types: ['rock', 'fairy'],
    buddyKm: 5,
    greatLeague: {
      rank: 47,
      moveset: { fast: ['Rock Throw'], charged: ['Rock Slide', 'Moonblast'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
      ],
      bestIv: { iv: '5/15/15', cp: 1498 },
    },
    ultraLeague: {
      rank: 819,
      moveset: { fast: ['Rock Throw'], charged: ['Moonblast', 'Rock Slide'] },
      bestIv: { iv: '15/15/15', cp: 1658 },
    },
  },
  charizard: {
    dex: 6,
    types: ['fire', 'flying'],
    megaForms: [
      { name: 'Mega X', types: ['fire', 'dragon'] },
      { name: 'Mega Y', types: ['fire', 'flying'] },
    ],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'charmander', name: 'Charmander' },
      ],
      [
        { id: 'charmeleon', name: 'Charmeleon', rank: 537, candy: 25 },
      ],
      [
        { id: 'charizard', name: 'Charizard', rank: 101, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Ember', 'Wing Attack', 'Blast Burn', 'Flamethrower', 'Dragon Breath'],
    greatLeague: {
      rank: 259,
      moveset: { fast: ['Ember'], charged: ['Blast Burn', 'Air Cutter'] },
      bestIv: { iv: '0/15/13', cp: 1500 },
    },
    ultraLeague: {
      rank: 101,
      moveset: { fast: ['Dragon Breath'], charged: ['Blast Burn', 'Air Cutter'] },
      bestIv: { iv: '0/13/15', cp: 2500 },
    },
    shadow: {
      greatLeague: {
        rank: 199,
        moveset: { fast: ['Ember'], charged: ['Blast Burn', 'Air Cutter'] },
        bestIv: { iv: '0/15/13', cp: 1500 },
      },
      ultraLeague: {
        rank: 124,
        moveset: { fast: ['Dragon Breath'], charged: ['Blast Burn', 'Air Cutter'] },
        bestIv: { iv: '0/13/15', cp: 2500 },
      },
    },
  },
  charjabug: {
    dex: 737,
    types: ['bug', 'electric'],
    evolution: [
      [
        { id: 'grubbin', name: 'Grubbin' },
      ],
      [
        { id: 'charjabug', name: 'Charjabug', rank: 42, current: true, candy: 25 },
      ],
      [
        { id: 'vikavolt', name: 'Vikavolt', rank: 312, candy: 100, item: 'Magnetic Lure' },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Volt Switch'],
    greatLeague: {
      rank: 42,
      moveset: { fast: ['Volt Switch'], charged: ['X-Scissor', 'Discharge'] },
      beats: [
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
      ],
      bestIv: { iv: '0/13/15', cp: 1497 },
    },
    shadow: {
      greatLeague: {
        rank: 48,
        moveset: { fast: ['Volt Switch'], charged: ['X-Scissor', 'Discharge'] },
        beats: [
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
          { id: 'cramorant', name: 'Cramorant', rank: 4 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        ],
        losesTo: [
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        ],
        bestIv: { iv: '0/13/15', cp: 1497 },
      },
    },
  },
  cherrim_overcast: {
    dex: 421,
    types: ['grass'],
    evolution: [
      [
        { id: 'cherubi', name: 'Cherubi' },
      ],
      [
        { id: 'cherrim_overcast', name: 'Cherrim (Overcast)', rank: 836, current: true, candy: 50 },
      ],
    ],
    buddyKm: 1,
    greatLeague: {
      rank: 1118,
      moveset: { fast: ['Bullet Seed'], charged: ['Dazzling Gleam', 'Solar Beam'] },
      bestIv: { iv: '0/13/15', cp: 1496 },
    },
    ultraLeague: {
      rank: 836,
      moveset: { fast: ['Bullet Seed'], charged: ['Dazzling Gleam', 'Solar Beam'] },
      bestIv: { iv: '15/15/15', cp: 2315 },
    },
  },
  cinderace: {
    dex: 815,
    types: ['fire'],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'scorbunny', name: 'Scorbunny' },
      ],
      [
        { id: 'raboot', name: 'Raboot', rank: 874, candy: 25 },
      ],
      [
        { id: 'cinderace', name: 'Cinderace', rank: 403, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Blast Burn'],
    greatLeague: {
      rank: 618,
      moveset: { fast: ['Fire Spin'], charged: ['Blast Burn', 'Pyro Ball'] },
      bestIv: { iv: '0/15/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 403,
      moveset: { fast: ['Fire Spin'], charged: ['Blast Burn', 'Pyro Ball'] },
      bestIv: { iv: '1/15/14', cp: 2499 },
    },
  },
  clodsire: {
    dex: 980,
    types: ['poison', 'ground'],
    evolution: [
      [
        { id: 'wooper_paldean', name: 'Paldean Wooper' },
      ],
      [
        { id: 'clodsire', name: 'Clodsire', rank: 17, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Megahorn'],
    greatLeague: {
      rank: 17,
      moveset: { fast: ['Poison Sting'], charged: ['Earthquake', 'Stone Edge'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
      ],
      losesTo: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
      ],
      bestIv: { iv: '0/14/13', cp: 1499 },
    },
    ultraLeague: {
      rank: 348,
      moveset: { fast: ['Poison Sting'], charged: ['Stone Edge', 'Earthquake'] },
      bestIv: { iv: '15/15/15', cp: 2207 },
    },
  },
  corviknight: {
    dex: 823,
    types: ['flying', 'steel'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'rookidee', name: 'Rookidee' },
      ],
      [
        { id: 'corvisquire', name: 'Corvisquire', rank: 601, candy: 25 },
      ],
      [
        { id: 'corviknight', name: 'Corviknight', rank: 2, current: true, candy: 100 },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Iron Head', 'Air Cutter'],
    greatLeague: {
      rank: 7,
      moveset: { fast: ['Sand Attack'], charged: ['Air Cutter', 'Iron Head'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
      ],
      losesTo: [
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      bestIv: { iv: '0/13/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 2,
      moveset: { fast: ['Sand Attack'], charged: ['Air Cutter', 'Iron Head'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
      ],
      losesTo: [
        { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
        { id: 'blastoise', name: 'Blastoise', rank: 29 },
        { id: 'dusknoir', name: 'Shadow Dusknoir', rank: 25 },
      ],
      bestIv: { iv: '0/15/15', cp: 2498 },
    },
    shadow: {
      greatLeague: {
        rank: 10,
        moveset: { fast: ['Sand Attack'], charged: ['Air Cutter', 'Iron Head'] },
        beats: [
          { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'florges', name: 'Florges', rank: 11 },
        ],
        losesTo: [
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
          { id: 'altaria', name: 'Altaria', rank: 2 },
        ],
        bestIv: { iv: '0/13/14', cp: 1500 },
      },
      ultraLeague: {
        rank: 4,
        moveset: { fast: ['Sand Attack'], charged: ['Air Cutter', 'Payback'] },
        beats: [
          { id: 'empoleon', name: 'Empoleon', rank: 7 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        ],
        losesTo: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'feraligatr', name: 'Feraligatr', rank: 14 },
          { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
        ],
        bestIv: { iv: '0/15/15', cp: 2498 },
      },
    },
  },
  cramorant: {
    dex: 845,
    types: ['flying', 'water'],
    buddyKm: 3,
    greatLeague: {
      rank: 4,
      moveset: { fast: ['Peck'], charged: ['Dive', 'Fly'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
      ],
      losesTo: [
        { id: 'stunfisk', name: 'Stunfisk', rank: 21 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8 },
      ],
      bestIv: { iv: '0/14/11', cp: 1500 },
    },
    ultraLeague: {
      rank: 18,
      moveset: { fast: ['Peck'], charged: ['Dive', 'Fly'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'florges', name: 'Florges', rank: 11 },
      ],
      losesTo: [
        { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, legendary: true },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'feraligatr', name: 'Feraligatr', rank: 14 },
      ],
      bestIv: { iv: '15/15/15', cp: 2421 },
    },
  },
  darmanitan_standard: {
    dex: 555,
    types: ['fire'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'darumaka', name: 'Darumaka', rank: 712 },
      ],
      [
        { id: 'darmanitan_standard', name: 'Darmanitan (Standard)', rank: 534, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 823,
      moveset: { fast: ['Incinerate'], charged: ['Rock Slide', 'Overheat'] },
      bestIv: { iv: '0/15/11', cp: 1498 },
    },
    ultraLeague: {
      rank: 534,
      moveset: { fast: ['Incinerate'], charged: ['Rock Slide', 'Overheat'] },
      bestIv: { iv: '0/13/15', cp: 2498 },
    },
    shadow: {
      greatLeague: {
        rank: 807,
        moveset: { fast: ['Incinerate'], charged: ['Rock Slide', 'Overheat'] },
        bestIv: { iv: '0/15/11', cp: 1498 },
      },
      ultraLeague: {
        rank: 576,
        moveset: { fast: ['Incinerate'], charged: ['Rock Slide', 'Overheat'] },
        bestIv: { iv: '0/13/15', cp: 2498 },
      },
    },
  },
  decidueye: {
    dex: 724,
    types: ['grass', 'ghost'],
    evolution: [
      [
        { id: 'rowlet', name: 'Rowlet', rank: 1058 },
      ],
      [
        { id: 'dartrix', name: 'Dartrix', rank: 186, candy: 25 },
      ],
      [
        { id: 'decidueye', name: 'Decidueye', rank: 212, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Frenzy Plant'],
    greatLeague: {
      rank: 565,
      moveset: { fast: ['Leafage'], charged: ['Frenzy Plant', 'Spirit Shackle'] },
      bestIv: { iv: '0/14/11', cp: 1497 },
    },
    ultraLeague: {
      rank: 212,
      moveset: { fast: ['Astonish'], charged: ['Frenzy Plant', 'Spirit Shackle'] },
      bestIv: { iv: '0/14/13', cp: 2497 },
    },
  },
  dedenne: {
    dex: 702,
    types: ['electric', 'fairy'],
    buddyKm: 3,
    greatLeague: {
      rank: 268,
      moveset: { fast: ['Thunder Shock'], charged: ['Discharge', 'Play Rough'] },
      bestIv: { iv: '0/14/12', cp: 1500 },
    },
    ultraLeague: {
      rank: 605,
      moveset: { fast: ['Thunder Shock'], charged: ['Discharge', 'Parabolic Charge'] },
      bestIv: { iv: '15/15/15', cp: 2081 },
    },
  },
  delphox: {
    dex: 655,
    types: ['fire', 'psychic'],
    megaForms: [
      { name: 'Mega', types: ['fire', 'psychic'] },
    ],
    evolution: [
      [
        { id: 'fennekin', name: 'Fennekin' },
      ],
      [
        { id: 'braixen', name: 'Braixen', rank: 510, candy: 25 },
      ],
      [
        { id: 'delphox', name: 'Delphox', rank: 281, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Blast Burn'],
    greatLeague: {
      rank: 399,
      moveset: { fast: ['Scratch'], charged: ['Psyshock', 'Blast Burn'] },
      bestIv: { iv: '0/11/14', cp: 1499 },
    },
    ultraLeague: {
      rank: 281,
      moveset: { fast: ['Scratch'], charged: ['Psyshock', 'Blast Burn'] },
      bestIv: { iv: '1/15/15', cp: 2493 },
    },
    shadow: {
      greatLeague: {
        rank: 460,
        moveset: { fast: ['Scratch'], charged: ['Psyshock', 'Blast Burn'] },
        bestIv: { iv: '0/11/14', cp: 1499 },
      },
      ultraLeague: {
        rank: 285,
        moveset: { fast: ['Scratch'], charged: ['Psyshock', 'Blast Burn'] },
        bestIv: { iv: '1/15/15', cp: 2493 },
      },
    },
  },
  deoxys_defense: {
    dex: 386,
    types: ['psychic'],
    legendary: true,
    buddyKm: 20,
    greatLeague: {
      rank: 34,
      moveset: { fast: ['Low Kick'], charged: ['Psycho Boost', 'Thunderbolt'] },
      beats: [
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
      ],
      bestIv: { iv: '0/15/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 42,
      moveset: { fast: ['Low Kick'], charged: ['Psycho Boost', 'Thunderbolt'] },
      beats: [
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
        { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      bestIv: { iv: '12/13/15', cp: 2500 },
    },
  },
  dondozo: {
    dex: 977,
    types: ['water'],
    buddyKm: 5,
    greatLeague: {
      rank: 49,
      moveset: { fast: ['Waterfall'], charged: ['Surf', 'Outrage'] },
      beats: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'stunfisk', name: 'Stunfisk', rank: 21 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
      ],
      bestIv: { iv: '0/15/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 26,
      moveset: { fast: ['Waterfall'], charged: ['Surf', 'Outrage'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
      ],
      losesTo: [
        { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
      ],
      bestIv: { iv: '0/14/15', cp: 2498 },
    },
  },
  doublade: {
    dex: 680,
    types: ['steel', 'ghost'],
    evolution: [
      [
        { id: 'honedge', name: 'Honedge', rank: 871 },
      ],
      [
        { id: 'doublade', name: 'Doublade', rank: 75, current: true, candy: 25 },
      ],
      [
        { id: 'aegislash_shield', name: 'Aegislash (Shield)', rank: 80, candy: 100 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 75,
      moveset: { fast: ['Shadow Claw'], charged: ['Sacred Sword', 'Iron Head'] },
      beats: [
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
      ],
      bestIv: { iv: '0/11/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 96,
      moveset: { fast: ['Shadow Claw'], charged: ['Sacred Sword', 'Iron Head'] },
      beats: [
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'florges', name: 'Florges', rank: 11 },
      ],
      losesTo: [
        { id: 'jellicent', name: 'Jellicent', rank: 16 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
      ],
      bestIv: { iv: '0/14/14', cp: 2499 },
    },
  },
  drifblim: {
    dex: 426,
    types: ['ghost', 'flying'],
    evolution: [
      [
        { id: 'drifloon', name: 'Drifloon', rank: 637 },
      ],
      [
        { id: 'drifblim', name: 'Drifblim', rank: 137, current: true, candy: 50 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 363,
      moveset: { fast: ['Hex'], charged: ['Icy Wind', 'Shadow Ball'] },
      bestIv: { iv: '0/15/12', cp: 1500 },
    },
    ultraLeague: {
      rank: 137,
      moveset: { fast: ['Hex'], charged: ['Icy Wind', 'Shadow Ball'] },
      bestIv: { iv: '1/15/15', cp: 2499 },
    },
    shadow: {
      greatLeague: {
        rank: 289,
        moveset: { fast: ['Astonish'], charged: ['Icy Wind', 'Shadow Ball'] },
        bestIv: { iv: '0/15/12', cp: 1500 },
      },
      ultraLeague: {
        rank: 236,
        moveset: { fast: ['Hex'], charged: ['Shadow Ball', 'Icy Wind'] },
        bestIv: { iv: '1/15/15', cp: 2499 },
      },
    },
  },
  dubwool: {
    dex: 832,
    types: ['normal'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'wooloo', name: 'Wooloo' },
      ],
      [
        { id: 'dubwool', name: 'Dubwool', rank: 163, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 163,
      moveset: { fast: ['Take Down'], charged: ['Body Slam', 'Wild Charge'] },
      bestIv: { iv: '1/15/15', cp: 1497 },
    },
    ultraLeague: {
      rank: 375,
      moveset: { fast: ['Double Kick'], charged: ['Body Slam', 'Wild Charge'] },
      bestIv: { iv: '15/15/15', cp: 2478 },
    },
  },
  dusclops: {
    dex: 356,
    types: ['ghost'],
    evolution: [
      [
        { id: 'duskull', name: 'Duskull' },
      ],
      [
        { id: 'dusclops', name: 'Dusclops', rank: 71, current: true, candy: 25 },
      ],
      [
        { id: 'dusknoir', name: 'Dusknoir', rank: 25, candy: 100, item: 'Sinnoh Stone' },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 77,
      moveset: { fast: ['Hex'], charged: ['Ice Punch', 'Shadow Punch'] },
      beats: [
        { id: 'clodsire', name: 'Clodsire', rank: 17 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'stunfisk', name: 'Stunfisk', rank: 21 },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
      ],
      bestIv: { iv: '0/11/15', cp: 1499 },
    },
    shadow: {
      greatLeague: {
        rank: 71,
        moveset: { fast: ['Hex'], charged: ['Ice Punch', 'Shadow Punch'] },
        beats: [
          { id: 'stunfisk', name: 'Stunfisk', rank: 21 },
          { id: 'altaria', name: 'Altaria', rank: 2 },
          { id: 'florges', name: 'Florges', rank: 11 },
        ],
        losesTo: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        ],
        bestIv: { iv: '0/11/15', cp: 1499 },
      },
    },
  },
  eevee: {
    dex: 133,
    types: ['normal'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'eevee', name: 'Eevee', rank: 1026, current: true },
      ],
      [
        { id: 'vaporeon', name: 'Vaporeon', rank: 399, candy: 25 },
        { id: 'jolteon', name: 'Jolteon', rank: 514, candy: 25 },
        { id: 'flareon', name: 'Flareon', rank: 589, candy: 25 },
        { id: 'espeon', name: 'Espeon', rank: 649, candy: 25, buddyKm: 10, time: 'day', quest: true },
        { id: 'umbreon', name: 'Umbreon', rank: 29, candy: 25, buddyKm: 10, time: 'night', quest: true },
        { id: 'leafeon', name: 'Leafeon', rank: 618, candy: 25, item: 'Mossy Lure' },
        { id: 'glaceon', name: 'Glaceon', rank: 788, candy: 25, item: 'Glacial Lure' },
        { id: 'sylveon', name: 'Sylveon', rank: 104, candy: 25, quest: true },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Last Resort', 'Body Slam'],
    greatLeague: {
      rank: 1026,
      moveset: { fast: ['Quick Attack'], charged: ['Swift', 'Dig'] },
      bestIv: { iv: '15/15/15', cp: 1210 },
    },
  },
  eldegoss: {
    dex: 830,
    types: ['grass'],
    evolution: [
      [
        { id: 'gossifleur', name: 'Gossifleur' },
      ],
      [
        { id: 'eldegoss', name: 'Eldegoss', rank: 780, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 814,
      moveset: { fast: ['Bullet Seed'], charged: ['Energy Ball', 'Grass Knot'] },
      bestIv: { iv: '0/14/15', cp: 1498 },
    },
    ultraLeague: {
      rank: 780,
      moveset: { fast: ['Bullet Seed'], charged: ['Energy Ball', 'Grass Knot'] },
      bestIv: { iv: '15/15/15', cp: 2255 },
    },
  },
  empoleon: {
    dex: 395,
    types: ['water', 'steel'],
    evolution: [
      [
        { id: 'piplup', name: 'Piplup', rank: 1082 },
      ],
      [
        { id: 'prinplup', name: 'Prinplup', rank: 818, candy: 25 },
      ],
      [
        { id: 'empoleon', name: 'Empoleon', rank: 7, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Hydro Cannon'],
    greatLeague: {
      rank: 24,
      moveset: { fast: ['Metal Sound'], charged: ['Hydro Cannon', 'Drill Peck'] },
      beats: [
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
      ],
      losesTo: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
      ],
      bestIv: { iv: '0/13/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 7,
      moveset: { fast: ['Metal Sound'], charged: ['Hydro Cannon', 'Drill Peck'] },
      beats: [
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      losesTo: [
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'feraligatr', name: 'Feraligatr', rank: 14 },
      ],
      bestIv: { iv: '1/15/14', cp: 2500 },
    },
    shadow: {
      greatLeague: {
        rank: 25,
        moveset: { fast: ['Metal Sound'], charged: ['Hydro Cannon', 'Drill Peck'] },
        beats: [
          { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
          { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
          { id: 'thievul', name: 'Thievul', rank: 15 },
        ],
        losesTo: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'altaria', name: 'Altaria', rank: 2 },
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
        ],
        bestIv: { iv: '0/13/15', cp: 1500 },
      },
      ultraLeague: {
        rank: 9,
        moveset: { fast: ['Metal Sound'], charged: ['Hydro Cannon', 'Drill Peck'] },
        beats: [
          { id: 'togekiss', name: 'Togekiss', rank: 58 },
          { id: 'florges', name: 'Florges', rank: 11 },
          { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
        ],
        losesTo: [
          { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
          { id: 'snorlax', name: 'Snorlax', rank: 3 },
        ],
        bestIv: { iv: '1/15/14', cp: 2500 },
      },
    },
  },
  excadrill: {
    dex: 530,
    types: ['ground', 'steel'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'drilbur', name: 'Drilbur', rank: 407 },
      ],
      [
        { id: 'excadrill', name: 'Excadrill', rank: 365, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 538,
      moveset: { fast: ['Mud Shot'], charged: ['Drill Run', 'Rock Slide'] },
      bestIv: { iv: '2/15/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 440,
      moveset: { fast: ['Mud Shot'], charged: ['Drill Run', 'Rock Slide'] },
      bestIv: { iv: '0/15/15', cp: 2495 },
    },
    shadow: {
      greatLeague: {
        rank: 461,
        moveset: { fast: ['Mud Shot'], charged: ['Drill Run', 'Rock Slide'] },
        bestIv: { iv: '2/15/15', cp: 1499 },
      },
      ultraLeague: {
        rank: 365,
        moveset: { fast: ['Mud Shot'], charged: ['Drill Run', 'Rock Slide'] },
        bestIv: { iv: '0/15/15', cp: 2495 },
      },
    },
  },
  fearow: {
    dex: 22,
    types: ['normal', 'flying'],
    evolution: [
      [
        { id: 'spearow', name: 'Spearow' },
      ],
      [
        { id: 'fearow', name: 'Fearow', rank: 26, current: true, candy: 50 },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Twister'],
    greatLeague: {
      rank: 26,
      moveset: { fast: ['Peck'], charged: ['Drill Peck', 'Drill Run'] },
      beats: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'jellicent', name: 'Jellicent', rank: 16 },
        { id: 'rillaboom', name: 'Rillaboom', rank: 20 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      bestIv: { iv: '0/15/14', cp: 1498 },
    },
    ultraLeague: {
      rank: 302,
      moveset: { fast: ['Peck'], charged: ['Drill Peck', 'Drill Run'] },
      bestIv: { iv: '15/15/15', cp: 2257 },
    },
  },
  feraligatr: {
    dex: 160,
    types: ['water'],
    evolution: [
      [
        { id: 'totodile', name: 'Totodile', rank: 848 },
      ],
      [
        { id: 'croconaw', name: 'Croconaw', rank: 223, candy: 25 },
      ],
      [
        { id: 'feraligatr', name: 'Feraligatr', rank: 14, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Water Gun', 'Hydro Cannon'],
    greatLeague: {
      rank: 31,
      moveset: { fast: ['Shadow Claw'], charged: ['Hydro Cannon', 'Ice Beam'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
      ],
      bestIv: { iv: '0/11/13', cp: 1499 },
    },
    ultraLeague: {
      rank: 15,
      moveset: { fast: ['Shadow Claw'], charged: ['Hydro Cannon', 'Ice Beam'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
      ],
      losesTo: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, legendary: true },
      ],
      bestIv: { iv: '1/15/14', cp: 2497 },
    },
    shadow: {
      greatLeague: {
        rank: 60,
        moveset: { fast: ['Shadow Claw'], charged: ['Hydro Cannon', 'Ice Beam'] },
        beats: [
          { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
          { id: 'annihilape', name: 'Annihilape', rank: 32 },
          { id: 'altaria', name: 'Altaria', rank: 2 },
        ],
        losesTo: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
          { id: 'cramorant', name: 'Cramorant', rank: 4 },
        ],
        bestIv: { iv: '0/11/13', cp: 1499 },
      },
      ultraLeague: {
        rank: 14,
        moveset: { fast: ['Shadow Claw'], charged: ['Hydro Cannon', 'Ice Beam'] },
        beats: [
          { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
        ],
        losesTo: [
          { id: 'snorlax', name: 'Snorlax', rank: 3 },
          { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        ],
        bestIv: { iv: '1/15/14', cp: 2497 },
      },
    },
  },
  flareon: {
    dex: 136,
    types: ['fire'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'eevee', name: 'Eevee', rank: 1026 },
      ],
      [
        { id: 'flareon', name: 'Flareon', rank: 589, current: true, candy: 25 },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Last Resort', 'Heat Wave', 'Superpower'],
    greatLeague: {
      rank: 695,
      moveset: { fast: ['Ember'], charged: ['Heat Wave', 'Superpower'] },
      bestIv: { iv: '0/15/13', cp: 1500 },
    },
    ultraLeague: {
      rank: 589,
      moveset: { fast: ['Ember'], charged: ['Superpower', 'Heat Wave'] },
      bestIv: { iv: '1/15/15', cp: 2498 },
    },
  },
  florges: {
    dex: 671,
    types: ['fairy'],
    evolution: [
      [
        { id: 'flabebe', name: 'Flabebe', rank: 1124 },
      ],
      [
        { id: 'floette', name: 'Floette', rank: 786, candy: 25 },
      ],
      [
        { id: 'florges', name: 'Florges', rank: 11, current: true, candy: 100, quest: true },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Chilling Water'],
    greatLeague: {
      rank: 11,
      moveset: { fast: ['Fairy Wind'], charged: ['Chilling Water', 'Moonblast'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'thievul', name: 'Thievul', rank: 15 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
      ],
      bestIv: { iv: '0/14/13', cp: 1500 },
    },
    ultraLeague: {
      rank: 12,
      moveset: { fast: ['Fairy Wind'], charged: ['Chilling Water', 'Disarming Voice'] },
      beats: [
        { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, legendary: true },
        { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
      ],
      losesTo: [
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      bestIv: { iv: '0/14/15', cp: 2498 },
    },
  },
  forretress: {
    dex: 205,
    types: ['bug', 'steel'],
    evolution: [
      [
        { id: 'pineco', name: 'Pineco', rank: 985 },
      ],
      [
        { id: 'forretress', name: 'Forretress', rank: 31, current: true, candy: 50 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 54,
      moveset: { fast: ['Volt Switch'], charged: ['Sand Tomb', 'Rock Tomb'] },
      beats: [
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
      ],
      bestIv: { iv: '0/9/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 31,
      moveset: { fast: ['Volt Switch'], charged: ['Rock Tomb', 'Sand Tomb'] },
      beats: [
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
      ],
      losesTo: [
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
        { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
      ],
      bestIv: { iv: '9/15/15', cp: 2492 },
    },
    shadow: {
      greatLeague: {
        rank: 50,
        moveset: { fast: ['Volt Switch'], charged: ['Sand Tomb', 'Rock Tomb'] },
        beats: [
          { id: 'cramorant', name: 'Cramorant', rank: 4 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
        ],
        losesTo: [
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
          { id: 'altaria', name: 'Altaria', rank: 2 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        ],
        bestIv: { iv: '0/9/15', cp: 1500 },
      },
      ultraLeague: {
        rank: 39,
        moveset: { fast: ['Volt Switch'], charged: ['Rock Tomb', 'Sand Tomb'] },
        beats: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'empoleon', name: 'Empoleon', rank: 7 },
          { id: 'florges', name: 'Florges', rank: 11 },
        ],
        losesTo: [
          { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
          { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
        ],
        bestIv: { iv: '9/15/15', cp: 2492 },
      },
    },
  },
  furret: {
    dex: 162,
    types: ['normal'],
    evolution: [
      [
        { id: 'sentret', name: 'Sentret' },
      ],
      [
        { id: 'furret', name: 'Furret', rank: 44, current: true, candy: 25 },
      ],
    ],
    buddyKm: 1,
    greatLeague: {
      rank: 44,
      moveset: { fast: ['Sucker Punch'], charged: ['Swift', 'Trailblaze'] },
      beats: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
      ],
      bestIv: { iv: '1/15/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 741,
      moveset: { fast: ['Sucker Punch'], charged: ['Swift', 'Brick Break'] },
      bestIv: { iv: '15/15/15', cp: 1987 },
    },
  },
  corsola_galarian: {
    dex: 222,
    types: ['ghost'],
    evolution: [
      [
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8, current: true },
      ],
      [
        { id: 'cursola', name: 'Cursola', rank: 680, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 8,
      moveset: { fast: ['Astonish'], charged: ['Night Shade', 'Power Gem'] },
      beats: [
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      bestIv: { iv: '0/15/15', cp: 1498 },
    },
  },
  moltres_galarian: {
    dex: 146,
    types: ['dark', 'flying'],
    legendary: true,
    buddyKm: 20,
    greatLeague: {
      rank: 72,
      moveset: { fast: ['Sucker Punch'], charged: ['Fly', 'Brave Bird'] },
      beats: [
        { id: 'thievul', name: 'Thievul', rank: 15 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
      ],
      losesTo: [
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      bestIv: { iv: '0/13/12', cp: 1499 },
    },
    ultraLeague: {
      rank: 13,
      moveset: { fast: ['Sucker Punch'], charged: ['Fly', 'Brave Bird'] },
      beats: [
        { id: 'feraligatr', name: 'Feraligatr', rank: 14 },
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
        { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      bestIv: { iv: '1/15/15', cp: 2497 },
    },
  },
  stunfisk_galarian: {
    dex: 618,
    types: ['ground', 'steel'],
    buddyKm: 5,
    greatLeague: {
      rank: 90,
      moveset: { fast: ['Mud Shot'], charged: ['Rock Slide', 'Earthquake'] },
      beats: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      losesTo: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
      ],
      bestIv: { iv: '0/12/15', cp: 1498 },
    },
    ultraLeague: {
      rank: 131,
      moveset: { fast: ['Mud Shot'], charged: ['Rock Slide', 'Earthquake'] },
      bestIv: { iv: '15/15/15', cp: 2445 },
    },
  },
  gardevoir: {
    dex: 282,
    types: ['psychic', 'fairy'],
    megaForms: [
      { name: 'Mega', types: ['psychic', 'fairy'] },
    ],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'ralts', name: 'Ralts' },
      ],
      [
        { id: 'kirlia', name: 'Kirlia', candy: 25 },
      ],
      [
        { id: 'gardevoir', name: 'Gardevoir', rank: 654, current: true, candy: 100 },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Synchronoise'],
    greatLeague: {
      rank: 991,
      moveset: { fast: ['Confusion'], charged: ['Triple Axel', 'Shadow Ball'] },
      bestIv: { iv: '0/15/15', cp: 1496 },
    },
    ultraLeague: {
      rank: 654,
      moveset: { fast: ['Confusion'], charged: ['Triple Axel', 'Shadow Ball'] },
      bestIv: { iv: '0/12/15', cp: 2496 },
    },
    shadow: {
      greatLeague: {
        rank: 1012,
        moveset: { fast: ['Confusion'], charged: ['Triple Axel', 'Shadow Ball'] },
        bestIv: { iv: '0/15/15', cp: 1496 },
      },
      ultraLeague: {
        rank: 664,
        moveset: { fast: ['Confusion'], charged: ['Triple Axel', 'Shadow Ball'] },
        bestIv: { iv: '0/12/15', cp: 2496 },
      },
    },
  },
  gigalith: {
    dex: 526,
    types: ['rock'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'roggenrola', name: 'Roggenrola', rank: 1094 },
      ],
      [
        { id: 'boldore', name: 'Boldore', rank: 810, candy: 50 },
      ],
      [
        { id: 'gigalith', name: 'Gigalith', rank: 368, current: true, candy: 200, tradeFree: true },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Meteor Beam'],
    greatLeague: {
      rank: 598,
      moveset: { fast: ['Lock On'], charged: ['Superpower', 'Meteor Beam'] },
      bestIv: { iv: '0/11/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 368,
      moveset: { fast: ['Lock On'], charged: ['Superpower', 'Meteor Beam'] },
      bestIv: { iv: '0/13/15', cp: 2497 },
    },
    shadow: {
      greatLeague: {
        rank: 651,
        moveset: { fast: ['Lock On'], charged: ['Superpower', 'Meteor Beam'] },
        bestIv: { iv: '0/11/15', cp: 1499 },
      },
      ultraLeague: {
        rank: 517,
        moveset: { fast: ['Lock On'], charged: ['Meteor Beam', 'Superpower'] },
        bestIv: { iv: '0/13/15', cp: 2497 },
      },
    },
  },
  gothitelle: {
    dex: 576,
    types: ['psychic'],
    evolution: [
      [
        { id: 'gothita', name: 'Gothita' },
      ],
      [
        { id: 'gothorita', name: 'Gothorita', rank: 887, candy: 25 },
      ],
      [
        { id: 'gothitelle', name: 'Gothitelle', rank: 535, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 840,
      moveset: { fast: ['Confusion'], charged: ['Rock Slide', 'Future Sight'] },
      bestIv: { iv: '0/15/15', cp: 1497 },
    },
    ultraLeague: {
      rank: 535,
      moveset: { fast: ['Confusion'], charged: ['Rock Slide', 'Future Sight'] },
      bestIv: { iv: '0/14/15', cp: 2500 },
    },
    shadow: {
      greatLeague: {
        rank: 940,
        moveset: { fast: ['Confusion'], charged: ['Rock Slide', 'Future Sight'] },
        bestIv: { iv: '0/15/15', cp: 1497 },
      },
      ultraLeague: {
        rank: 598,
        moveset: { fast: ['Confusion'], charged: ['Rock Slide', 'Future Sight'] },
        bestIv: { iv: '0/14/15', cp: 2500 },
      },
    },
  },
  greedent: {
    dex: 820,
    types: ['normal'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'skwovet', name: 'Skwovet' },
      ],
      [
        { id: 'greedent', name: 'Greedent', rank: 150, current: true, candy: 50 },
      ],
    ],
    buddyKm: 1,
    greatLeague: {
      rank: 187,
      moveset: { fast: ['Bite'], charged: ['Body Slam', 'Trailblaze'] },
      bestIv: { iv: '0/12/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 150,
      moveset: { fast: ['Bite'], charged: ['Body Slam', 'Trailblaze'] },
      bestIv: { iv: '3/15/15', cp: 2495 },
    },
  },
  guzzlord: {
    dex: 799,
    types: ['dark', 'dragon'],
    legendary: true,
    buddyKm: 20,
    greatLeague: {
      rank: 45,
      moveset: { fast: ['Dragon Tail'], charged: ['Brutal Swing', 'Sludge Bomb'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      bestIv: { iv: '1/15/15', cp: 1497 },
    },
    ultraLeague: {
      rank: 19,
      moveset: { fast: ['Dragon Tail'], charged: ['Brutal Swing', 'Sludge Bomb'] },
      beats: [
        { id: 'jellicent', name: 'Jellicent', rank: 16 },
        { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
        { id: 'feraligatr', name: 'Feraligatr', rank: 14 },
      ],
      losesTo: [
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      bestIv: { iv: '0/15/14', cp: 2499 },
    },
  },
  gyarados: {
    dex: 130,
    types: ['water', 'flying'],
    megaForms: [
      { name: 'Mega', types: ['water', 'dark'] },
    ],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'magikarp', name: 'Magikarp' },
      ],
      [
        { id: 'gyarados', name: 'Gyarados', rank: 67, current: true, candy: 400 },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Dragon Tail', 'Dragon Pulse', 'Aqua Tail'],
    greatLeague: {
      rank: 271,
      moveset: { fast: ['Dragon Breath'], charged: ['Aqua Tail', 'Twister'] },
      bestIv: { iv: '0/14/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 75,
      moveset: { fast: ['Dragon Breath'], charged: ['Aqua Tail', 'Twister'] },
      beats: [
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        { id: 'feraligatr', name: 'Feraligatr', rank: 14 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
      ],
      bestIv: { iv: '0/15/14', cp: 2500 },
    },
    shadow: {
      greatLeague: {
        rank: 261,
        moveset: { fast: ['Dragon Breath'], charged: ['Aqua Tail', 'Twister'] },
        bestIv: { iv: '0/14/15', cp: 1499 },
      },
      ultraLeague: {
        rank: 67,
        moveset: { fast: ['Dragon Breath'], charged: ['Aqua Tail', 'Twister'] },
        beats: [
          { id: 'blastoise', name: 'Blastoise', rank: 29 },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
          { id: 'empoleon', name: 'Empoleon', rank: 7 },
          { id: 'feraligatr', name: 'Feraligatr', rank: 14 },
        ],
        bestIv: { iv: '0/15/14', cp: 2500 },
      },
    },
  },
  hariyama: {
    dex: 297,
    types: ['fighting'],
    evolution: [
      [
        { id: 'makuhita', name: 'Makuhita' },
      ],
      [
        { id: 'hariyama', name: 'Hariyama', rank: 334, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 486,
      moveset: { fast: ['Force Palm'], charged: ['Upper Hand', 'Heavy Slam'] },
      bestIv: { iv: '0/14/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 334,
      moveset: { fast: ['Force Palm'], charged: ['Upper Hand', 'Heavy Slam'] },
      bestIv: { iv: '1/15/15', cp: 2500 },
    },
    shadow: {
      greatLeague: {
        rank: 443,
        moveset: { fast: ['Force Palm'], charged: ['Upper Hand', 'Heavy Slam'] },
        bestIv: { iv: '0/14/14', cp: 1500 },
      },
      ultraLeague: {
        rank: 349,
        moveset: { fast: ['Force Palm'], charged: ['Upper Hand', 'Heavy Slam'] },
        bestIv: { iv: '1/15/15', cp: 2500 },
      },
    },
  },
  hatterene: {
    dex: 858,
    types: ['psychic', 'fairy'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'hatenna', name: 'Hatenna' },
      ],
      [
        { id: 'hattrem', name: 'Hattrem', rank: 700, candy: 25 },
      ],
      [
        { id: 'hatterene', name: 'Hatterene', rank: 493, current: true, candy: 100 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 724,
      moveset: { fast: ['Psycho Cut'], charged: ['Psyshock', 'Power Whip'] },
      bestIv: { iv: '0/11/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 493,
      moveset: { fast: ['Psycho Cut'], charged: ['Psyshock', 'Power Whip'] },
      bestIv: { iv: '1/15/15', cp: 2500 },
    },
  },
  hippowdon: {
    dex: 450,
    types: ['ground'],
    evolution: [
      [
        { id: 'hippopotas', name: 'Hippopotas', rank: 306 },
      ],
      [
        { id: 'hippowdon', name: 'Hippowdon', rank: 51, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 51,
      moveset: { fast: ['Sand Attack'], charged: ['Weather Ball (Rock)', 'Earth Power'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      bestIv: { iv: '0/14/10', cp: 1499 },
    },
    ultraLeague: {
      rank: 99,
      moveset: { fast: ['Sand Attack'], charged: ['Weather Ball (Rock)', 'Earth Power'] },
      beats: [
        { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      losesTo: [
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
      ],
      bestIv: { iv: '0/14/15', cp: 2496 },
    },
    shadow: {
      greatLeague: {
        rank: 61,
        moveset: { fast: ['Sand Attack'], charged: ['Weather Ball (Rock)', 'Earth Power'] },
        beats: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
          { id: 'altaria', name: 'Altaria', rank: 2 },
          { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
        ],
        bestIv: { iv: '0/14/10', cp: 1499 },
      },
      ultraLeague: {
        rank: 92,
        moveset: { fast: ['Sand Attack'], charged: ['Weather Ball (Rock)', 'Earth Power'] },
        beats: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        ],
        losesTo: [
          { id: 'empoleon', name: 'Empoleon', rank: 7 },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
          { id: 'florges', name: 'Florges', rank: 11 },
        ],
        bestIv: { iv: '0/14/15', cp: 2496 },
      },
    },
  },
  electrode_hisuian: {
    dex: 101,
    types: ['electric', 'grass'],
    evolution: [
      [
        { id: 'voltorb_hisuian', name: 'Hisuian Voltorb' },
      ],
      [
        { id: 'electrode_hisuian', name: 'Hisuian Electrode', rank: 35, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 35,
      moveset: { fast: ['Thunder Shock'], charged: ['Wild Charge', 'Energy Ball'] },
      beats: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
      ],
      bestIv: { iv: '1/14/14', cp: 1499 },
    },
    ultraLeague: {
      rank: 165,
      moveset: { fast: ['Thunder Shock'], charged: ['Wild Charge', 'Energy Ball'] },
      bestIv: { iv: '15/15/15', cp: 2430 },
    },
  },
  inteleon: {
    dex: 818,
    types: ['water'],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'sobble', name: 'Sobble' },
      ],
      [
        { id: 'drizzile', name: 'Drizzile', rank: 1071, candy: 25 },
      ],
      [
        { id: 'inteleon', name: 'Inteleon', rank: 716, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Hydro Cannon'],
    greatLeague: {
      rank: 865,
      moveset: { fast: ['Water Gun'], charged: ['Snipe Shot', 'Hydro Cannon'] },
      bestIv: { iv: '0/13/12', cp: 1500 },
    },
    ultraLeague: {
      rank: 716,
      moveset: { fast: ['Water Gun'], charged: ['Snipe Shot', 'Shadow Ball'] },
      bestIv: { iv: '1/15/13', cp: 2499 },
    },
  },
  jellicent: {
    dex: 593,
    types: ['water', 'ghost'],
    evolution: [
      [
        { id: 'frillish', name: 'Frillish', rank: 427 },
      ],
      [
        { id: 'jellicent', name: 'Jellicent', rank: 16, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 23,
      moveset: { fast: ['Hex'], charged: ['Surf', 'Shadow Ball'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
      ],
      bestIv: { iv: '1/14/14', cp: 1498 },
    },
    ultraLeague: {
      rank: 16,
      moveset: { fast: ['Hex'], charged: ['Surf', 'Shadow Ball'] },
      beats: [
        { id: 'blastoise', name: 'Blastoise', rank: 29 },
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
        { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      bestIv: { iv: '6/14/15', cp: 2500 },
    },
  },
  jumpluff: {
    dex: 189,
    types: ['grass', 'flying'],
    evolution: [
      [
        { id: 'hoppip', name: 'Hoppip' },
      ],
      [
        { id: 'skiploom', name: 'Skiploom', candy: 25 },
      ],
      [
        { id: 'jumpluff', name: 'Jumpluff', rank: 56, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Acrobatics'],
    greatLeague: {
      rank: 56,
      moveset: { fast: ['Fairy Wind'], charged: ['Energy Ball', 'Acrobatics'] },
      beats: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
      ],
      bestIv: { iv: '0/14/14', cp: 1499 },
    },
    ultraLeague: {
      rank: 700,
      moveset: { fast: ['Fairy Wind'], charged: ['Energy Ball', 'Acrobatics'] },
      bestIv: { iv: '15/15/15', cp: 1850 },
    },
    shadow: {
      greatLeague: {
        rank: 81,
        moveset: { fast: ['Fairy Wind'], charged: ['Energy Ball', 'Acrobatics'] },
        beats: [
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
          { id: 'altaria', name: 'Altaria', rank: 2 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        ],
        losesTo: [
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        ],
        bestIv: { iv: '0/14/14', cp: 1499 },
      },
      ultraLeague: {
        rank: 713,
        moveset: { fast: ['Fairy Wind'], charged: ['Energy Ball', 'Acrobatics'] },
        bestIv: { iv: '15/15/15', cp: 1850 },
      },
    },
  },
  kilowattrel: {
    dex: 941,
    types: ['electric', 'flying'],
    evolution: [
      [
        { id: 'wattrel', name: 'Wattrel' },
      ],
      [
        { id: 'kilowattrel', name: 'Kilowattrel', rank: 343, current: true, candy: 50 },
      ],
    ],
    buddyKm: 1,
    greatLeague: {
      rank: 518,
      moveset: { fast: ['Thunder Shock'], charged: ['Acrobatics', 'Aerial Ace'] },
      bestIv: { iv: '0/15/14', cp: 1499 },
    },
    ultraLeague: {
      rank: 343,
      moveset: { fast: ['Thunder Shock'], charged: ['Acrobatics', 'Aerial Ace'] },
      bestIv: { iv: '0/15/15', cp: 2495 },
    },
  },
  lanturn: {
    dex: 171,
    types: ['water', 'electric'],
    evolution: [
      [
        { id: 'chinchou', name: 'Chinchou', rank: 1030 },
      ],
      [
        { id: 'lanturn', name: 'Lanturn', rank: 279, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 279,
      moveset: { fast: ['Spark'], charged: ['Surf', 'Thunderbolt'] },
      bestIv: { iv: '0/13/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 414,
      moveset: { fast: ['Spark'], charged: ['Surf', 'Thunderbolt'] },
      bestIv: { iv: '15/15/15', cp: 2357 },
    },
  },
  lapras: {
    dex: 131,
    types: ['water', 'ice'],
    maxForms: ['Dynamax', 'Gigantamax'],
    buddyKm: 5,
    specialMoves: ['Ice Shard', 'Dragon Pulse', 'Ice Beam'],
    greatLeague: {
      rank: 39,
      moveset: { fast: ['Psywave'], charged: ['Sparkling Aria', 'Ice Beam'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
      ],
      bestIv: { iv: '0/10/14', cp: 1498 },
    },
    ultraLeague: {
      rank: 22,
      moveset: { fast: ['Psywave'], charged: ['Sparkling Aria', 'Ice Beam'] },
      beats: [
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
      ],
      losesTo: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      bestIv: { iv: '0/15/15', cp: 2498 },
    },
    shadow: {
      greatLeague: {
        rank: 63,
        moveset: { fast: ['Psywave'], charged: ['Sparkling Aria', 'Ice Beam'] },
        beats: [
          { id: 'altaria', name: 'Altaria', rank: 2 },
          { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
          { id: 'florges', name: 'Florges', rank: 11 },
        ],
        losesTo: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        ],
        bestIv: { iv: '0/10/14', cp: 1498 },
      },
      ultraLeague: {
        rank: 23,
        moveset: { fast: ['Psywave'], charged: ['Sparkling Aria', 'Ice Beam'] },
        beats: [
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
        ],
        losesTo: [
          { id: 'moltres_galarian', name: 'Galarian Moltres', rank: 13, legendary: true },
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'jellicent', name: 'Jellicent', rank: 16 },
        ],
        bestIv: { iv: '0/15/15', cp: 2498 },
      },
    },
  },
  lickitung: {
    dex: 108,
    types: ['normal'],
    evolution: [
      [
        { id: 'lickitung', name: 'Lickitung', rank: 175, current: true },
      ],
      [
        { id: 'lickilicky', name: 'Lickilicky', rank: 102, candy: 100, item: 'Sinnoh Stone' },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Body Slam'],
    greatLeague: {
      rank: 175,
      moveset: { fast: ['Lick'], charged: ['Body Slam', 'Power Whip'] },
      bestIv: { iv: '8/14/15', cp: 1499 },
    },
  },
  lokix: {
    dex: 920,
    types: ['bug', 'dark'],
    evolution: [
      [
        { id: 'nymble', name: 'Nymble' },
      ],
      [
        { id: 'lokix', name: 'Lokix', rank: 266, current: true, candy: 50 },
      ],
    ],
    buddyKm: 1,
    greatLeague: {
      rank: 350,
      moveset: { fast: ['Sucker Punch'], charged: ['X-Scissor', 'Trailblaze'] },
      bestIv: { iv: '0/14/14', cp: 1499 },
    },
    ultraLeague: {
      rank: 266,
      moveset: { fast: ['Sucker Punch'], charged: ['X-Scissor', 'Trailblaze'] },
      bestIv: { iv: '5/15/15', cp: 2497 },
    },
  },
  machamp: {
    dex: 68,
    types: ['fighting'],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'machop', name: 'Machop', rank: 495 },
      ],
      [
        { id: 'machoke', name: 'Machoke', rank: 236, candy: 25 },
      ],
      [
        { id: 'machamp', name: 'Machamp', rank: 175, current: true, candy: 100, tradeFree: true },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Karate Chop', 'Stone Edge', 'Submission', 'Payback'],
    greatLeague: {
      rank: 246,
      moveset: { fast: ['Karate Chop'], charged: ['Cross Chop', 'Rock Slide'] },
      bestIv: { iv: '0/14/11', cp: 1500 },
    },
    ultraLeague: {
      rank: 249,
      moveset: { fast: ['Karate Chop'], charged: ['Cross Chop', 'Rock Slide'] },
      bestIv: { iv: '0/15/14', cp: 2497 },
    },
    shadow: {
      greatLeague: {
        rank: 194,
        moveset: { fast: ['Karate Chop'], charged: ['Cross Chop', 'Rock Slide'] },
        bestIv: { iv: '0/14/11', cp: 1500 },
      },
      ultraLeague: {
        rank: 175,
        moveset: { fast: ['Karate Chop'], charged: ['Cross Chop', 'Rock Slide'] },
        bestIv: { iv: '0/15/14', cp: 2497 },
      },
    },
  },
  malamar: {
    dex: 687,
    types: ['dark', 'psychic'],
    megaForms: [
      { name: 'Mega', types: ['dark', 'psychic'] },
    ],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'inkay', name: 'Inkay' },
      ],
      [
        { id: 'malamar', name: 'Malamar', rank: 43, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 43,
      moveset: { fast: ['Psywave'], charged: ['Superpower', 'Foul Play'] },
      beats: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
      ],
      bestIv: { iv: '0/15/9', cp: 1500 },
    },
    ultraLeague: {
      rank: 64,
      moveset: { fast: ['Psywave'], charged: ['Superpower', 'Foul Play'] },
      beats: [
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'jellicent', name: 'Jellicent', rank: 16 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      losesTo: [
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
      ],
      bestIv: { iv: '3/15/15', cp: 2500 },
    },
    shadow: {
      greatLeague: {
        rank: 46,
        moveset: { fast: ['Psywave'], charged: ['Foul Play', 'Superpower'] },
        beats: [
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        ],
        losesTo: [
          { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        ],
        bestIv: { iv: '0/15/9', cp: 1500 },
      },
      ultraLeague: {
        rank: 56,
        moveset: { fast: ['Psywave'], charged: ['Foul Play', 'Superpower'] },
        beats: [
          { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
          { id: 'snorlax', name: 'Snorlax', rank: 3 },
          { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
        ],
        losesTo: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'florges', name: 'Florges', rank: 11 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        ],
        bestIv: { iv: '3/15/15', cp: 2500 },
      },
    },
  },
  mandibuzz: {
    dex: 630,
    types: ['dark', 'flying'],
    evolution: [
      [
        { id: 'vullaby', name: 'Vullaby', rank: 426 },
      ],
      [
        { id: 'mandibuzz', name: 'Mandibuzz', rank: 52, current: true, candy: 50 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 52,
      moveset: { fast: ['Snarl'], charged: ['Dark Pulse', 'Shadow Ball'] },
      beats: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
      ],
      losesTo: [
        { id: 'thievul', name: 'Thievul', rank: 15 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      bestIv: { iv: '0/13/15', cp: 1498 },
    },
    ultraLeague: {
      rank: 141,
      moveset: { fast: ['Snarl'], charged: ['Dark Pulse', 'Shadow Ball'] },
      bestIv: { iv: '15/15/15', cp: 2417 },
    },
  },
  mantine: {
    dex: 226,
    types: ['water', 'flying'],
    evolution: [
      [
        { id: 'mantyke', name: 'Mantyke', rank: 753 },
      ],
      [
        { id: 'mantine', name: 'Mantine', rank: 27, current: true, candy: 50 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 27,
      moveset: { fast: ['Wing Attack'], charged: ['Twister', 'Water Pulse'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      bestIv: { iv: '0/15/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 133,
      moveset: { fast: ['Wing Attack'], charged: ['Twister', 'Water Pulse'] },
      bestIv: { iv: '15/15/15', cp: 2383 },
    },
  },
  marowak: {
    dex: 105,
    types: ['ground'],
    evolution: [
      [
        { id: 'cubone', name: 'Cubone', rank: 945 },
      ],
      [
        { id: 'marowak', name: 'Marowak', rank: 20, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 20,
      moveset: { fast: ['Mud Slap'], charged: ['Bone Club', 'Rock Slide'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
      ],
      losesTo: [
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
      ],
      bestIv: { iv: '0/14/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 640,
      moveset: { fast: ['Mud Slap'], charged: ['Bone Club', 'Rock Slide'] },
      bestIv: { iv: '15/15/15', cp: 2075 },
    },
    shadow: {
      greatLeague: {
        rank: 82,
        moveset: { fast: ['Mud Slap'], charged: ['Bone Club', 'Rock Slide'] },
        beats: [
          { id: 'clodsire', name: 'Clodsire', rank: 17 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'morpeko_full_belly', name: 'Morpeko (Full Belly)', rank: 53 },
        ],
        losesTo: [
          { id: 'cramorant', name: 'Cramorant', rank: 4 },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        ],
        bestIv: { iv: '0/14/14', cp: 1500 },
      },
      ultraLeague: {
        rank: 668,
        moveset: { fast: ['Mud Slap'], charged: ['Bone Club', 'Rock Slide'] },
        bestIv: { iv: '15/15/15', cp: 2075 },
      },
    },
  },
  medicham: {
    dex: 308,
    types: ['fighting', 'psychic'],
    megaForms: [
      { name: 'Mega', types: ['fighting', 'psychic'] },
    ],
    evolution: [
      [
        { id: 'meditite', name: 'Meditite' },
      ],
      [
        { id: 'medicham', name: 'Medicham', rank: 55, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 55,
      moveset: { fast: ['Psycho Cut'], charged: ['Ice Punch', 'Dynamic Punch'] },
      beats: [
        { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
        { id: 'thievul', name: 'Thievul', rank: 15 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
      ],
      bestIv: { iv: '5/15/15', cp: 1499 },
    },
  },
  melmetal: {
    dex: 809,
    types: ['steel'],
    legendary: true,
    evolution: [
      [
        { id: 'meltan', name: 'Meltan', rank: 1136, legendary: true },
      ],
      [
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true, current: true, candy: 400 },
      ],
    ],
    buddyKm: 20,
    specialMoves: ['Double Iron Bash'],
    greatLeague: {
      rank: 1,
      moveset: { fast: ['Thunder Shock'], charged: ['Double Iron Bash', 'Dynamic Punch'] },
      beats: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
      ],
      bestIv: { iv: '1/15/14', cp: 1499 },
    },
    ultraLeague: {
      rank: 5,
      moveset: { fast: ['Thunder Shock'], charged: ['Double Iron Bash', 'Dynamic Punch'] },
      beats: [
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      losesTo: [
        { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
      ],
      bestIv: { iv: '0/13/15', cp: 2495 },
    },
  },
  meowscarada: {
    dex: 908,
    types: ['grass', 'dark'],
    evolution: [
      [
        { id: 'sprigatito', name: 'Sprigatito' },
      ],
      [
        { id: 'floragato', name: 'Floragato', rank: 839, candy: 25 },
      ],
      [
        { id: 'meowscarada', name: 'Meowscarada', rank: 462, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Frenzy Plant'],
    greatLeague: {
      rank: 483,
      moveset: { fast: ['Leafage'], charged: ['Night Slash', 'Frenzy Plant'] },
      bestIv: { iv: '0/13/13', cp: 1499 },
    },
    ultraLeague: {
      rank: 462,
      moveset: { fast: ['Leafage'], charged: ['Night Slash', 'Frenzy Plant'] },
      bestIv: { iv: '0/15/14', cp: 2496 },
    },
  },
  mimikyu: {
    dex: 778,
    types: ['ghost', 'fairy'],
    buddyKm: 5,
    greatLeague: {
      rank: 6,
      moveset: { fast: ['Shadow Claw'], charged: ['Shadow Sneak', 'Play Rough'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      losesTo: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
        { id: 'morpeko_full_belly', name: 'Morpeko (Full Belly)', rank: 53 },
      ],
      bestIv: { iv: '1/14/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 10,
      moveset: { fast: ['Shadow Claw'], charged: ['Shadow Sneak', 'Play Rough'] },
      beats: [
        { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
        { id: 'jellicent', name: 'Jellicent', rank: 16 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      losesTo: [
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      bestIv: { iv: '14/14/15', cp: 2497 },
    },
  },
  moltres: {
    dex: 146,
    types: ['fire', 'flying'],
    legendary: true,
    maxForms: ['Dynamax'],
    buddyKm: 20,
    specialMoves: ['Sky Attack'],
    greatLeague: {
      rank: 671,
      moveset: { fast: ['Wing Attack'], charged: ['Fly', 'Heat Wave'] },
      bestIv: { iv: '1/15/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 468,
      moveset: { fast: ['Wing Attack'], charged: ['Fly', 'Heat Wave'] },
      bestIv: { iv: '0/14/12', cp: 2499 },
    },
    shadow: {
      greatLeague: {
        rank: 685,
        moveset: { fast: ['Wing Attack'], charged: ['Fly', 'Heat Wave'] },
        bestIv: { iv: '1/15/15', cp: 1500 },
      },
      ultraLeague: {
        rank: 495,
        moveset: { fast: ['Wing Attack'], charged: ['Fly', 'Heat Wave'] },
        bestIv: { iv: '0/14/12', cp: 2499 },
      },
    },
  },
  ninetales: {
    dex: 38,
    types: ['fire'],
    evolution: [
      [
        { id: 'vulpix', name: 'Vulpix' },
      ],
      [
        { id: 'ninetales', name: 'Ninetales', rank: 3, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Ember', 'Fire Blast', 'Flamethrower', 'Energy Ball'],
    greatLeague: {
      rank: 13,
      moveset: { fast: ['Ember'], charged: ['Weather Ball (Fire)', 'Energy Ball'] },
      beats: [
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      losesTo: [
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
      ],
      bestIv: { iv: '0/15/15', cp: 1495 },
    },
    ultraLeague: {
      rank: 34,
      moveset: { fast: ['Ember'], charged: ['Weather Ball (Fire)', 'Energy Ball'] },
      beats: [
        { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      losesTo: [
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'feraligatr', name: 'Feraligatr', rank: 14 },
      ],
      bestIv: { iv: '9/15/15', cp: 2493 },
    },
    shadow: {
      greatLeague: {
        rank: 3,
        moveset: { fast: ['Ember'], charged: ['Weather Ball (Fire)', 'Energy Ball'] },
        beats: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
          { id: 'florges', name: 'Florges', rank: 11 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
          { id: 'cramorant', name: 'Cramorant', rank: 4 },
          { id: 'altaria', name: 'Altaria', rank: 2 },
        ],
        bestIv: { iv: '0/15/15', cp: 1495 },
      },
      ultraLeague: {
        rank: 65,
        moveset: { fast: ['Ember'], charged: ['Weather Ball (Fire)', 'Energy Ball'] },
        beats: [
          { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        ],
        losesTo: [
          { id: 'feraligatr', name: 'Feraligatr', rank: 14 },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
          { id: 'snorlax', name: 'Snorlax', rank: 3 },
        ],
        bestIv: { iv: '9/15/15', cp: 2493 },
      },
    },
  },
  perrserker: {
    dex: 863,
    types: ['steel'],
    evolution: [
      [
        { id: 'meowth_galarian', name: 'Galarian Meowth' },
      ],
      [
        { id: 'perrserker', name: 'Perrserker', rank: 214, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 506,
      moveset: { fast: ['Shadow Claw'], charged: ['Close Combat', 'Trailblaze'] },
      bestIv: { iv: '1/15/15', cp: 1495 },
    },
    ultraLeague: {
      rank: 214,
      moveset: { fast: ['Shadow Claw'], charged: ['Close Combat', 'Foul Play'] },
      bestIv: { iv: '0/14/15', cp: 2497 },
    },
  },
  pyroar: {
    dex: 668,
    types: ['fire', 'normal'],
    evolution: [
      [
        { id: 'litleo', name: 'Litleo', rank: 487 },
      ],
      [
        { id: 'pyroar', name: 'Pyroar', rank: 476, current: true, candy: 50, gender: 'male' },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 678,
      moveset: { fast: ['Incinerate'], charged: ['Flame Charge', 'Dark Pulse'] },
      bestIv: { iv: '0/15/10', cp: 1500 },
    },
    ultraLeague: {
      rank: 476,
      moveset: { fast: ['Incinerate'], charged: ['Flame Charge', 'Dark Pulse'] },
      bestIv: { iv: '0/15/12', cp: 2500 },
    },
  },
  quagsire: {
    dex: 195,
    types: ['water', 'ground'],
    evolution: [
      [
        { id: 'wooper', name: 'Wooper' },
      ],
      [
        { id: 'quagsire', name: 'Quagsire', rank: 12, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Aqua Tail'],
    greatLeague: {
      rank: 14,
      moveset: { fast: ['Mud Shot'], charged: ['Aqua Tail', 'Stone Edge'] },
      beats: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
      ],
      bestIv: { iv: '0/15/14', cp: 1499 },
    },
    ultraLeague: {
      rank: 453,
      moveset: { fast: ['Mud Shot'], charged: ['Aqua Tail', 'Stone Edge'] },
      bestIv: { iv: '15/15/15', cp: 2252 },
    },
    shadow: {
      greatLeague: {
        rank: 12,
        moveset: { fast: ['Mud Shot'], charged: ['Aqua Tail', 'Stone Edge'] },
        beats: [
          { id: 'stunfisk', name: 'Stunfisk', rank: 21 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
          { id: 'cramorant', name: 'Cramorant', rank: 4 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        ],
        bestIv: { iv: '0/15/14', cp: 1499 },
      },
      ultraLeague: {
        rank: 424,
        moveset: { fast: ['Mud Shot'], charged: ['Aqua Tail', 'Stone Edge'] },
        bestIv: { iv: '15/15/15', cp: 2252 },
      },
    },
  },
  quaquaval: {
    dex: 914,
    types: ['water', 'fighting'],
    evolution: [
      [
        { id: 'quaxly', name: 'Quaxly' },
      ],
      [
        { id: 'quaxwell', name: 'Quaxwell', rank: 501, candy: 25 },
      ],
      [
        { id: 'quaquaval', name: 'Quaquaval', rank: 199, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Hydro Cannon'],
    greatLeague: {
      rank: 288,
      moveset: { fast: ['Low Kick'], charged: ['Close Combat', 'Hydro Cannon'] },
      bestIv: { iv: '0/15/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 199,
      moveset: { fast: ['Low Kick'], charged: ['Close Combat', 'Hydro Cannon'] },
      bestIv: { iv: '1/15/14', cp: 2497 },
    },
  },
  rhyperior: {
    dex: 464,
    types: ['ground', 'rock'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'rhyhorn', name: 'Rhyhorn', rank: 906 },
      ],
      [
        { id: 'rhydon', name: 'Rhydon', rank: 813, candy: 25 },
      ],
      [
        { id: 'rhyperior', name: 'Rhyperior', rank: 485, current: true, candy: 100, item: 'Sinnoh Stone' },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Rock Wrecker'],
    greatLeague: {
      rank: 688,
      moveset: { fast: ['Mud Slap'], charged: ['Drill Run', 'Rock Wrecker'] },
      bestIv: { iv: '0/14/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 485,
      moveset: { fast: ['Mud Slap'], charged: ['Drill Run', 'Rock Wrecker'] },
      bestIv: { iv: '0/14/14', cp: 2499 },
    },
    shadow: {
      greatLeague: {
        rank: 633,
        moveset: { fast: ['Mud Slap'], charged: ['Drill Run', 'Rock Wrecker'] },
        bestIv: { iv: '0/14/14', cp: 1500 },
      },
      ultraLeague: {
        rank: 497,
        moveset: { fast: ['Mud Slap'], charged: ['Drill Run', 'Rock Wrecker'] },
        bestIv: { iv: '0/14/14', cp: 2499 },
      },
    },
  },
  rillaboom: {
    dex: 812,
    types: ['grass'],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'grookey', name: 'Grookey' },
      ],
      [
        { id: 'thwackey', name: 'Thwackey', rank: 789, candy: 25 },
      ],
      [
        { id: 'rillaboom', name: 'Rillaboom', rank: 20, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Frenzy Plant'],
    greatLeague: {
      rank: 36,
      moveset: { fast: ['Scratch'], charged: ['Drum Beating', 'Earth Power'] },
      beats: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'stunfisk', name: 'Stunfisk', rank: 21 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
      ],
      bestIv: { iv: '0/12/13', cp: 1500 },
    },
    ultraLeague: {
      rank: 20,
      moveset: { fast: ['Scratch'], charged: ['Drum Beating', 'Earth Power'] },
      beats: [
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
      ],
      losesTo: [
        { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
        { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      bestIv: { iv: '0/14/15', cp: 2495 },
    },
  },
  sableye: {
    dex: 302,
    types: ['dark', 'ghost'],
    megaForms: [
      { name: 'Mega', types: ['dark', 'ghost'] },
    ],
    maxForms: ['Dynamax'],
    buddyKm: 5,
    greatLeague: {
      rank: 37,
      moveset: { fast: ['Shadow Claw'], charged: ['Foul Play', 'Power Gem'] },
      beats: [
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
      ],
      bestIv: { iv: '0/15/15', cp: 1499 },
    },
    shadow: {
      greatLeague: {
        rank: 19,
        moveset: { fast: ['Shadow Claw'], charged: ['Foul Play', 'Drain Punch'] },
        beats: [
          { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8 },
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        ],
        losesTo: [
          { id: 'cramorant', name: 'Cramorant', rank: 4 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'altaria', name: 'Altaria', rank: 2 },
        ],
        bestIv: { iv: '0/15/15', cp: 1499 },
      },
    },
  },
  snorlax: {
    dex: 143,
    types: ['normal'],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'munchlax', name: 'Munchlax', rank: 290 },
      ],
      [
        { id: 'snorlax', name: 'Snorlax', rank: 3, current: true, candy: 50 },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Yawn'],
    greatLeague: {
      rank: 28,
      moveset: { fast: ['Psywave'], charged: ['Body Slam', 'Earthquake'] },
      beats: [
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8 },
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
      ],
      bestIv: { iv: '1/15/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 11,
      moveset: { fast: ['Psywave'], charged: ['Body Slam', 'Earthquake'] },
      beats: [
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
      ],
      losesTo: [
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, legendary: true },
        { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
      ],
      bestIv: { iv: '0/12/15', cp: 2499 },
    },
    shadow: {
      greatLeague: {
        rank: 40,
        moveset: { fast: ['Psywave'], charged: ['Body Slam', 'Superpower'] },
        beats: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
          { id: 'vigoroth', name: 'Vigoroth', rank: 22 },
        ],
        losesTo: [
          { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
        ],
        bestIv: { iv: '1/15/14', cp: 1500 },
      },
      ultraLeague: {
        rank: 3,
        moveset: { fast: ['Psywave'], charged: ['Body Slam', 'Earthquake'] },
        beats: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
          { id: 'empoleon', name: 'Empoleon', rank: 7 },
        ],
        losesTo: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
          { id: 'moltres_galarian', name: 'Galarian Moltres', rank: 13, legendary: true },
        ],
        bestIv: { iv: '0/12/15', cp: 2499 },
      },
    },
  },
  staraptor: {
    dex: 398,
    types: ['normal', 'flying'],
    megaForms: [
      { name: 'Mega', types: ['fighting', 'flying'] },
    ],
    evolution: [
      [
        { id: 'starly', name: 'Starly' },
      ],
      [
        { id: 'staravia', name: 'Staravia', rank: 644, candy: 25 },
      ],
      [
        { id: 'staraptor', name: 'Staraptor', rank: 464, current: true, candy: 100 },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Gust'],
    greatLeague: {
      rank: 713,
      moveset: { fast: ['Wing Attack'], charged: ['Fly', 'Close Combat'] },
      bestIv: { iv: '0/13/13', cp: 1500 },
    },
    ultraLeague: {
      rank: 505,
      moveset: { fast: ['Wing Attack'], charged: ['Fly', 'Close Combat'] },
      bestIv: { iv: '2/15/14', cp: 2500 },
    },
    shadow: {
      greatLeague: {
        rank: 757,
        moveset: { fast: ['Wing Attack'], charged: ['Fly', 'Close Combat'] },
        bestIv: { iv: '0/13/13', cp: 1500 },
      },
      ultraLeague: {
        rank: 464,
        moveset: { fast: ['Wing Attack'], charged: ['Fly', 'Close Combat'] },
        bestIv: { iv: '2/15/14', cp: 2500 },
      },
    },
  },
  stunfisk: {
    dex: 618,
    types: ['ground', 'electric'],
    buddyKm: 5,
    greatLeague: {
      rank: 21,
      moveset: { fast: ['Thunder Shock'], charged: ['Mud Bomb', 'Discharge'] },
      beats: [
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
      ],
      losesTo: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
      ],
      bestIv: { iv: '0/12/15', cp: 1498 },
    },
    ultraLeague: {
      rank: 136,
      moveset: { fast: ['Thunder Shock'], charged: ['Mud Bomb', 'Discharge'] },
      bestIv: { iv: '15/15/15', cp: 2445 },
    },
  },
  swampert: {
    dex: 260,
    types: ['water', 'ground'],
    megaForms: [
      { name: 'Mega', types: ['water', 'ground'] },
    ],
    evolution: [
      [
        { id: 'mudkip', name: 'Mudkip' },
      ],
      [
        { id: 'marshtomp', name: 'Marshtomp', rank: 411, candy: 25 },
      ],
      [
        { id: 'swampert', name: 'Swampert', rank: 54, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Hydro Cannon'],
    greatLeague: {
      rank: 78,
      moveset: { fast: ['Mud Shot'], charged: ['Hydro Cannon', 'Earthquake'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
      ],
      bestIv: { iv: '0/14/14', cp: 1498 },
    },
    ultraLeague: {
      rank: 54,
      moveset: { fast: ['Mud Shot'], charged: ['Hydro Cannon', 'Earthquake'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'empoleon', name: 'Empoleon', rank: 7 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
      ],
      losesTo: [
        { id: 'virizion', name: 'Virizion', rank: 6, legendary: true },
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'jellicent', name: 'Jellicent', rank: 16 },
      ],
      bestIv: { iv: '0/14/13', cp: 2499 },
    },
    shadow: {
      greatLeague: {
        rank: 79,
        moveset: { fast: ['Mud Shot'], charged: ['Hydro Cannon', 'Earthquake'] },
        beats: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
        ],
        losesTo: [
          { id: 'cramorant', name: 'Cramorant', rank: 4 },
          { id: 'thievul', name: 'Thievul', rank: 15 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        ],
        bestIv: { iv: '0/14/14', cp: 1498 },
      },
      ultraLeague: {
        rank: 89,
        moveset: { fast: ['Mud Shot'], charged: ['Hydro Cannon', 'Earthquake'] },
        beats: [
          { id: 'skeledirge', name: 'Skeledirge', rank: 21 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
          { id: 'snorlax', name: 'Snorlax', rank: 3 },
          { id: 'florges', name: 'Florges', rank: 11 },
        ],
        bestIv: { iv: '0/14/13', cp: 2499 },
      },
    },
  },
  thievul: {
    dex: 828,
    types: ['dark'],
    evolution: [
      [
        { id: 'nickit', name: 'Nickit' },
      ],
      [
        { id: 'thievul', name: 'Thievul', rank: 15, current: true, candy: 50 },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Icy Wind'],
    greatLeague: {
      rank: 15,
      moveset: { fast: ['Sucker Punch'], charged: ['Night Slash', 'Icy Wind'] },
      beats: [
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
      ],
      bestIv: { iv: '0/15/11', cp: 1499 },
    },
    ultraLeague: {
      rank: 172,
      moveset: { fast: ['Sucker Punch'], charged: ['Night Slash', 'Icy Wind'] },
      bestIv: { iv: '15/15/15', cp: 2415 },
    },
  },
  tinkaton: {
    dex: 959,
    types: ['fairy', 'steel'],
    evolution: [
      [
        { id: 'tinkatink', name: 'Tinkatink' },
      ],
      [
        { id: 'tinkatuff', name: 'Tinkatuff', rank: 309, candy: 25 },
      ],
      [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Gigaton Hammer'],
    greatLeague: {
      rank: 5,
      moveset: { fast: ['Fairy Wind'], charged: ['Gigaton Hammer', 'Bulldoze'] },
      beats: [
        { id: 'thievul', name: 'Thievul', rank: 15 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        { id: 'altaria', name: 'Altaria', rank: 2 },
      ],
      losesTo: [
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
      ],
      bestIv: { iv: '1/14/14', cp: 1497 },
    },
    ultraLeague: {
      rank: 1,
      moveset: { fast: ['Fairy Wind'], charged: ['Gigaton Hammer', 'Bulldoze'] },
      beats: [
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, legendary: true },
        { id: 'dusknoir', name: 'Shadow Dusknoir', rank: 25 },
      ],
      losesTo: [
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'feraligatr', name: 'Feraligatr', rank: 14 },
      ],
      bestIv: { iv: '13/15/15', cp: 2499 },
    },
  },
  torterra: {
    dex: 389,
    types: ['grass', 'ground'],
    evolution: [
      [
        { id: 'turtwig', name: 'Turtwig', rank: 1122 },
      ],
      [
        { id: 'grotle', name: 'Grotle', rank: 710, candy: 25 },
      ],
      [
        { id: 'torterra', name: 'Torterra', rank: 277, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Frenzy Plant'],
    greatLeague: {
      rank: 558,
      moveset: { fast: ['Mud Slap'], charged: ['Frenzy Plant', 'Sand Tomb'] },
      bestIv: { iv: '0/11/13', cp: 1500 },
    },
    ultraLeague: {
      rank: 277,
      moveset: { fast: ['Mud Slap'], charged: ['Frenzy Plant', 'Sand Tomb'] },
      bestIv: { iv: '0/15/15', cp: 2497 },
    },
    shadow: {
      greatLeague: {
        rank: 708,
        moveset: { fast: ['Mud Slap'], charged: ['Frenzy Plant', 'Sand Tomb'] },
        bestIv: { iv: '0/11/13', cp: 1500 },
      },
      ultraLeague: {
        rank: 338,
        moveset: { fast: ['Mud Slap'], charged: ['Frenzy Plant', 'Sand Tomb'] },
        bestIv: { iv: '0/15/15', cp: 2497 },
      },
    },
  },
  toxapex: {
    dex: 748,
    types: ['poison', 'water'],
    evolution: [
      [
        { id: 'mareanie', name: 'Mareanie' },
      ],
      [
        { id: 'toxapex', name: 'Toxapex', rank: 115, current: true, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 115,
      moveset: { fast: ['Bite'], charged: ['Brine', 'Sludge Wave'] },
      bestIv: { iv: '0/15/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 770,
      moveset: { fast: ['Poison Jab'], charged: ['Brine', 'Sludge Wave'] },
      bestIv: { iv: '15/15/15', cp: 1905 },
    },
  },
  trevenant: {
    dex: 709,
    types: ['ghost', 'grass'],
    evolution: [
      [
        { id: 'phantump', name: 'Phantump' },
      ],
      [
        { id: 'trevenant', name: 'Trevenant', rank: 147, current: true, candy: 200, tradeFree: true },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 359,
      moveset: { fast: ['Shadow Claw'], charged: ['Seed Bomb', 'Shadow Ball'] },
      bestIv: { iv: '0/15/15', cp: 1497 },
    },
    ultraLeague: {
      rank: 154,
      moveset: { fast: ['Shadow Claw'], charged: ['Shadow Ball', 'Seed Bomb'] },
      bestIv: { iv: '1/15/15', cp: 2500 },
    },
    shadow: {
      greatLeague: {
        rank: 295,
        moveset: { fast: ['Shadow Claw'], charged: ['Shadow Ball', 'Foul Play'] },
        bestIv: { iv: '0/15/15', cp: 1497 },
      },
      ultraLeague: {
        rank: 147,
        moveset: { fast: ['Shadow Claw'], charged: ['Shadow Ball', 'Seed Bomb'] },
        bestIv: { iv: '1/15/15', cp: 2500 },
      },
    },
  },
  tsareena: {
    dex: 763,
    types: ['grass'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'bounsweet', name: 'Bounsweet' },
      ],
      [
        { id: 'steenee', name: 'Steenee', candy: 25 },
      ],
      [
        { id: 'tsareena', name: 'Tsareena', rank: 627, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['High Jump Kick'],
    greatLeague: {
      rank: 1003,
      moveset: { fast: ['Magical Leaf'], charged: ['Triple Axel', 'High Jump Kick'] },
      bestIv: { iv: '0/15/13', cp: 1499 },
    },
    ultraLeague: {
      rank: 627,
      moveset: { fast: ['Magical Leaf'], charged: ['Triple Axel', 'High Jump Kick'] },
      bestIv: { iv: '0/15/15', cp: 2499 },
    },
  },
  tyrantrum: {
    dex: 697,
    types: ['rock', 'dragon'],
    evolution: [
      [
        { id: 'tyrunt', name: 'Tyrunt', rank: 714 },
      ],
      [
        { id: 'tyrantrum', name: 'Tyrantrum', rank: 574, current: true, candy: 50, time: 'day' },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 739,
      moveset: { fast: ['Dragon Tail'], charged: ['Rock Tomb', 'Crunch'] },
      bestIv: { iv: '0/15/12', cp: 1498 },
    },
    ultraLeague: {
      rank: 574,
      moveset: { fast: ['Dragon Tail'], charged: ['Rock Tomb', 'Crunch'] },
      bestIv: { iv: '0/12/15', cp: 2497 },
    },
    shadow: {
      greatLeague: {
        rank: 762,
        moveset: { fast: ['Dragon Tail'], charged: ['Crunch', 'Rock Tomb'] },
        bestIv: { iv: '0/15/12', cp: 1498 },
      },
      ultraLeague: {
        rank: 699,
        moveset: { fast: ['Dragon Tail'], charged: ['Meteor Beam', 'Rock Tomb'] },
        bestIv: { iv: '0/12/15', cp: 2497 },
      },
    },
  },
  umbreon: {
    dex: 197,
    types: ['dark'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'eevee', name: 'Eevee', rank: 1026 },
      ],
      [
        {
          id: 'umbreon',
          name: 'Umbreon',
          rank: 29,
          current: true,
          candy: 25,
          buddyKm: 10,
          time: 'night',
          quest: true,
        },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Last Resort', 'Psychic'],
    greatLeague: {
      rank: 29,
      moveset: { fast: ['Snarl'], charged: ['Dark Pulse', 'Last Resort'] },
      beats: [
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
        { id: 'cramorant', name: 'Cramorant', rank: 4 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, legendary: true },
      ],
      bestIv: { iv: '0/15/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 123,
      moveset: { fast: ['Snarl'], charged: ['Dark Pulse', 'Last Resort'] },
      bestIv: { iv: '15/15/15', cp: 2416 },
    },
  },
  venusaur: {
    dex: 3,
    types: ['grass', 'poison'],
    megaForms: [
      { name: 'Mega', types: ['grass', 'poison'] },
    ],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'bulbasaur', name: 'Bulbasaur', rank: 1070 },
      ],
      [
        { id: 'ivysaur', name: 'Ivysaur', rank: 793, candy: 25 },
      ],
      [
        { id: 'venusaur', name: 'Venusaur', rank: 217, current: true, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Frenzy Plant'],
    greatLeague: {
      rank: 422,
      moveset: { fast: ['Vine Whip'], charged: ['Frenzy Plant', 'Sludge'] },
      bestIv: { iv: '0/14/11', cp: 1498 },
    },
    ultraLeague: {
      rank: 217,
      moveset: { fast: ['Vine Whip'], charged: ['Frenzy Plant', 'Sludge'] },
      bestIv: { iv: '1/15/14', cp: 2499 },
    },
    shadow: {
      greatLeague: {
        rank: 445,
        moveset: { fast: ['Vine Whip'], charged: ['Frenzy Plant', 'Sludge'] },
        bestIv: { iv: '0/14/11', cp: 1498 },
      },
      ultraLeague: {
        rank: 253,
        moveset: { fast: ['Vine Whip'], charged: ['Frenzy Plant', 'Sludge'] },
        bestIv: { iv: '1/15/14', cp: 2499 },
      },
    },
  },
  vigoroth: {
    dex: 288,
    types: ['normal'],
    evolution: [
      [
        { id: 'slakoth', name: 'Slakoth' },
      ],
      [
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, current: true, candy: 25 },
      ],
      [
        { id: 'slaking', name: 'Slaking', rank: 848, candy: 100 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 22,
      moveset: { fast: ['Scratch'], charged: ['Body Slam', 'Bulldoze'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3 },
        { id: 'florges', name: 'Florges', rank: 11 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6 },
      ],
      losesTo: [
        { id: 'altaria', name: 'Altaria', rank: 2 },
        { id: 'corviknight', name: 'Corviknight', rank: 2 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
      ],
      bestIv: { iv: '1/15/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 554,
      moveset: { fast: ['Scratch'], charged: ['Body Slam', 'Rock Slide'] },
      bestIv: { iv: '15/15/15', cp: 2225 },
    },
    shadow: {
      greatLeague: {
        rank: 41,
        moveset: { fast: ['Scratch'], charged: ['Brick Break', 'Rock Slide'] },
        beats: [
          { id: 'altaria', name: 'Altaria', rank: 2 },
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12 },
          { id: 'corviknight', name: 'Corviknight', rank: 2 },
        ],
        losesTo: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1 },
          { id: 'cramorant', name: 'Cramorant', rank: 4 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19 },
        ],
        bestIv: { iv: '1/15/15', cp: 1499 },
      },
      ultraLeague: {
        rank: 555,
        moveset: { fast: ['Scratch'], charged: ['Body Slam', 'Rock Slide'] },
        bestIv: { iv: '15/15/15', cp: 2225 },
      },
    },
  },
  whimsicott: {
    dex: 547,
    types: ['grass', 'fairy'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'cottonee', name: 'Cottonee' },
      ],
      [
        { id: 'whimsicott', name: 'Whimsicott', rank: 379, current: true, candy: 50, item: 'Sun Stone' },
      ],
    ],
    buddyKm: 1,
    greatLeague: {
      rank: 379,
      moveset: { fast: ['Fairy Wind'], charged: ['Seed Bomb', 'Moonblast'] },
      bestIv: { iv: '0/14/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 482,
      moveset: { fast: ['Fairy Wind'], charged: ['Moonblast', 'Seed Bomb'] },
      bestIv: { iv: '15/15/15', cp: 2277 },
    },
  },
};

const PVPOKE_MOVE_TYPES = {
  Acrobatics: 'flying',
  'Aerial Ace': 'flying',
  'Air Cutter': 'flying',
  'Aqua Tail': 'water',
  Astonish: 'ghost',
  'Aura Sphere': 'fighting',
  Avalanche: 'ice',
  Bite: 'dark',
  'Blast Burn': 'fire',
  'Blaze Kick': 'fire',
  'Body Slam': 'normal',
  'Bone Club': 'ground',
  'Brave Bird': 'flying',
  'Brick Break': 'fighting',
  Brine: 'water',
  'Brutal Swing': 'dark',
  Bubble: 'water',
  Bulldoze: 'ground',
  'Bullet Seed': 'grass',
  'Chilling Water': 'water',
  'Close Combat': 'fighting',
  Confusion: 'psychic',
  Counter: 'fighting',
  'Cross Chop': 'fighting',
  Crunch: 'dark',
  'Dark Pulse': 'dark',
  'Dazzling Gleam': 'fairy',
  Dig: 'ground',
  'Disarming Voice': 'fairy',
  Discharge: 'electric',
  Dive: 'water',
  'Double Iron Bash': 'steel',
  'Double Kick': 'fighting',
  'Dragon Breath': 'dragon',
  'Dragon Claw': 'dragon',
  'Dragon Pulse': 'dragon',
  'Dragon Tail': 'dragon',
  'Drain Punch': 'fighting',
  'Drill Peck': 'flying',
  'Drill Run': 'ground',
  'Drum Beating': 'grass',
  'Dynamic Punch': 'fighting',
  'Earth Power': 'ground',
  Earthquake: 'ground',
  Ember: 'fire',
  'Energy Ball': 'grass',
  'Fairy Wind': 'fairy',
  'Fire Punch': 'fire',
  'Fire Spin': 'fire',
  'Flame Charge': 'fire',
  Flamethrower: 'fire',
  'Flash Cannon': 'steel',
  Fly: 'flying',
  'Force Palm': 'fighting',
  'Foul Play': 'dark',
  'Frenzy Plant': 'grass',
  'Future Sight': 'psychic',
  'Gigaton Hammer': 'steel',
  'Glaive Rush': 'dragon',
  'Grass Knot': 'grass',
  'Gyro Ball': 'steel',
  'Heat Wave': 'fire',
  'Heavy Slam': 'steel',
  Hex: 'ghost',
  'High Jump Kick': 'fighting',
  'Hydro Cannon': 'water',
  'Hydro Pump': 'water',
  'Ice Beam': 'ice',
  'Ice Punch': 'ice',
  'Icy Wind': 'ice',
  Incinerate: 'fire',
  Infestation: 'bug',
  'Iron Head': 'steel',
  'Karate Chop': 'fighting',
  'Last Resort': 'normal',
  Leafage: 'grass',
  Lick: 'ghost',
  'Lock On': 'normal',
  'Low Kick': 'fighting',
  'Magical Leaf': 'grass',
  'Metal Sound': 'steel',
  'Meteor Beam': 'rock',
  'Mirror Coat': 'psychic',
  Moonblast: 'fairy',
  'Mud Bomb': 'ground',
  'Mud Shot': 'ground',
  'Mud Slap': 'ground',
  'Night Shade': 'ghost',
  'Night Slash': 'dark',
  Outrage: 'dragon',
  Overheat: 'fire',
  'Parabolic Charge': 'electric',
  Payback: 'dark',
  Peck: 'flying',
  'Play Rough': 'fairy',
  'Poison Jab': 'poison',
  'Poison Sting': 'poison',
  'Powder Snow': 'ice',
  'Power Gem': 'rock',
  'Power Whip': 'grass',
  'Psycho Boost': 'psychic',
  'Psycho Cut': 'psychic',
  Psyshock: 'psychic',
  Psywave: 'psychic',
  'Pyro Ball': 'fire',
  'Quick Attack': 'normal',
  'Rage Fist': 'ghost',
  'Rock Slide': 'rock',
  'Rock Throw': 'rock',
  'Rock Tomb': 'rock',
  'Rock Wrecker': 'rock',
  'Sacred Sword': 'fighting',
  'Sand Attack': 'ground',
  'Sand Tomb': 'ground',
  Scratch: 'normal',
  'Seed Bomb': 'grass',
  'Shadow Ball': 'ghost',
  'Shadow Claw': 'ghost',
  'Shadow Punch': 'ghost',
  'Shadow Sneak': 'ghost',
  Sludge: 'poison',
  'Sludge Bomb': 'poison',
  'Sludge Wave': 'poison',
  'Smack Down': 'rock',
  Snarl: 'dark',
  'Snipe Shot': 'water',
  'Solar Beam': 'grass',
  Spark: 'electric',
  'Sparkling Aria': 'water',
  'Spirit Shackle': 'ghost',
  'Stone Edge': 'rock',
  'Sucker Punch': 'dark',
  Superpower: 'fighting',
  Surf: 'water',
  Swift: 'normal',
  'Take Down': 'normal',
  'Thunder Shock': 'electric',
  Thunderbolt: 'electric',
  Trailblaze: 'grass',
  'Triple Axel': 'ice',
  Twister: 'dragon',
  'Upper Hand': 'fighting',
  'Vine Whip': 'grass',
  'Volt Switch': 'electric',
  'Water Gun': 'water',
  'Water Pulse': 'water',
  Waterfall: 'water',
  'Weather Ball (Fire)': 'fire',
  'Weather Ball (Ice)': 'ice',
  'Weather Ball (Rock)': 'rock',
  'Wild Charge': 'electric',
  'Wing Attack': 'flying',
  'X-Scissor': 'bug',
  'Zen Headbutt': 'psychic',
};
