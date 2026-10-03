// GENERÁLT FÁJL, ne szerkeszd kézzel. Frissítés: node tools/sync-pvpoke.mjs
// Forrás: github.com/pvpoke/pvpoke (gamemaster és rankings-1500/2500).
// name: a faj neve (a kártya ezt mutatja, ha a pokemon.js nem ad meg mást)
// dex: a Pokédex-szám (a regionális formáknak ugyanaz, mint az alapfajnak)
// legendary: legendás, mitikus vagy Ultra Beast
// megaForms: a faj Mega formái a típusukkal (csak raidben számítanak)
// maxForms: Dynamax / Gigantamax formák (a játék game masteréből, PokeMiners)
// evolution: a fejlődési ág fokonként (elágazásnál egy fokon több faj); a current a faj maga,
//   candy és a többi mező az előző fokról ide fejlődés ára és feltételei (game master);
//   id, rank (legjobb GL/UL helyezés) és legendary a fok színéhez
// shadow: a Shadow változat Great és Ultra League adatai
// specialMoves: csak Elite TM-mel vagy eseményen megszerezhető mozdulatok
// moveset: az ajánlott szett ({ fast, charged }); ligában a charged a szimulációk szerinti használat sorrendjében
// bestIv: a ligában a legjobb IV ({ iv: 'Attack/Defense/HP', cp }) a game master CP-szorzóival
// raid: számolt raid-helyezés ({ type, rank, moveset }) a legjobb támadó típusában, a game masterből;
//   a shadow.raid és a megaForms[].raid ugyanígy
// maxBattle: Dynamax / Gigantamax szerepek helyezése (40-es szint, a játék game masteréből):
//   tankRank, healerRank, dynamax / gigantamax: { type, rank, move, fast } a támadó rangsorban
// beats / losesTo: a legfontosabb nyert és vesztett párharcok ({ id, name, rank, legendary }, mint az ágban)
// PVPOKE_MOVE_TYPES: az ajánlott mozdulatok típusa (a PvPoke-szettekből és a pokemon.js-ből)

const PVPOKE_DATE = '2026. 10. 03.';

const PVPOKE = {
  aegislash_shield: {
    name: 'Aegislash (Shield)',
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
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
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
    name: 'Alakazam',
    dex: 65,
    types: ['psychic'],
    megaForms: [
      {
        name: 'Mega',
        types: ['psychic'],
        raid: {
          type: 'psychic',
          rank: 4,
          moveset: { fast: ['Psycho Cut'], charged: ['Psychic'] },
        },
      },
    ],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'abra', name: 'Abra', raidRank: 110 },
      ],
      [
        { id: 'kadabra', name: 'Kadabra', rank: 1101, raidRank: 77, candy: 25 },
      ],
      [
        {
          id: 'alakazam',
          name: 'Alakazam',
          rank: 658,
          raidRank: 15,
          current: true,
          candy: 100,
          tradeFree: true,
        },
      ],
    ],
    raid: {
      type: 'psychic',
      rank: 24,
      moveset: { fast: ['Psycho Cut'], charged: ['Psychic'] },
    },
    maxBattle: {
      tankRank: 86,
      healerRank: 96,
      dynamax: { type: 'psychic', rank: 1, strength: 1, move: 'Max Mindstorm', fast: 'Confusion' },
    },
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
      raid: {
        type: 'psychic',
        rank: 15,
        moveset: { fast: ['Confusion'], charged: ['Psychic'] },
      },
    },
  },
  altaria: {
    name: 'Altaria',
    dex: 334,
    types: ['dragon', 'flying'],
    megaForms: [
      {
        name: 'Mega',
        types: ['dragon', 'fairy'],
        raid: {
          type: 'flying',
          rank: 39,
          moveset: { fast: ['Peck'], charged: ['Sky Attack'] },
        },
      },
    ],
    evolution: [
      [
        { id: 'swablu', name: 'Swablu', raidRank: 127 },
      ],
      [
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64, current: true, candy: 400 },
      ],
    ],
    raid: {
      type: 'flying',
      rank: 74,
      moveset: { fast: ['Peck'], charged: ['Sky Attack'] },
    },
    buddyKm: 1,
    specialMoves: ['Moonblast'],
    greatLeague: {
      rank: 2,
      moveset: { fast: ['Dragon Breath'], charged: ['Moonblast', 'Flamethrower'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
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
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        ],
        losesTo: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        ],
        bestIv: { iv: '0/14/15', cp: 1497 },
      },
      ultraLeague: {
        rank: 309,
        moveset: { fast: ['Dragon Breath'], charged: ['Moonblast', 'Flamethrower'] },
        bestIv: { iv: '15/15/15', cp: 2266 },
      },
      raid: {
        type: 'flying',
        rank: 64,
        moveset: { fast: ['Peck'], charged: ['Sky Attack'] },
      },
    },
  },
  ampharos: {
    name: 'Ampharos',
    dex: 181,
    types: ['electric'],
    megaForms: [
      {
        name: 'Mega',
        types: ['electric', 'dragon'],
        raid: {
          type: 'electric',
          rank: 8,
          moveset: { fast: ['Volt Switch'], charged: ['Zap Cannon'] },
        },
      },
    ],
    evolution: [
      [
        { id: 'mareep', name: 'Mareep', raidRank: 98 },
      ],
      [
        { id: 'flaaffy', name: 'Flaaffy', rank: 902, raidRank: 79, candy: 25 },
      ],
      [
        { id: 'ampharos', name: 'Ampharos', rank: 51, raidRank: 24, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'electric',
      rank: 42,
      moveset: { fast: ['Volt Switch'], charged: ['Zap Cannon'] },
    },
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
        { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13 },
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
        { id: 'jellicent', name: 'Jellicent', rank: 16, raidRank: 48 },
      ],
      losesTo: [
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
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
          { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
          { id: 'jellicent', name: 'Jellicent', rank: 16, raidRank: 48 },
          { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13 },
        ],
        losesTo: [
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        ],
        bestIv: { iv: '0/13/15', cp: 2497 },
      },
      raid: {
        type: 'electric',
        rank: 24,
        moveset: { fast: ['Volt Switch'], charged: ['Zap Cannon'] },
      },
    },
  },
  annihilape: {
    name: 'Annihilape',
    dex: 979,
    types: ['fighting', 'ghost'],
    evolution: [
      [
        { id: 'mankey', name: 'Mankey', rank: 794, raidRank: 116 },
      ],
      [
        { id: 'primeape', name: 'Primeape', rank: 251, raidRank: 57, candy: 50 },
      ],
      [
        {
          id: 'annihilape',
          name: 'Annihilape',
          rank: 32,
          raidRank: 24,
          current: true,
          candy: 100,
          quest: true,
        },
      ],
    ],
    raid: {
      type: 'fighting',
      rank: 40,
      moveset: { fast: ['Counter'], charged: ['Close Combat'] },
    },
    buddyKm: 3,
    specialMoves: ['Rage Fist'],
    greatLeague: {
      rank: 32,
      moveset: { fast: ['Low Kick'], charged: ['Rage Fist', 'Ice Punch'] },
      beats: [
        { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
      ],
      bestIv: { iv: '2/15/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 61,
      moveset: { fast: ['Low Kick'], charged: ['Rage Fist', 'Ice Punch'] },
      beats: [
        { id: 'blastoise', name: 'Blastoise', rank: 29, raidRank: 45 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
      ],
      bestIv: { iv: '0/15/15', cp: 2492 },
    },
    shadow: {
      greatLeague: {
        rank: 38,
        moveset: { fast: ['Low Kick'], charged: ['Rage Fist', 'Ice Punch'] },
        beats: [
          { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105 },
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
          { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
          { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        ],
        bestIv: { iv: '2/15/15', cp: 1499 },
      },
      ultraLeague: {
        rank: 72,
        moveset: { fast: ['Low Kick'], charged: ['Rage Fist', 'Ice Punch'] },
        beats: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'blastoise', name: 'Blastoise', rank: 29, raidRank: 45 },
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
          { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        ],
        bestIv: { iv: '0/15/15', cp: 2492 },
      },
      raid: {
        type: 'fighting',
        rank: 24,
        moveset: { fast: ['Counter'], charged: ['Close Combat'] },
      },
    },
  },
  araquanid: {
    name: 'Araquanid',
    dex: 752,
    types: ['water', 'bug'],
    evolution: [
      [
        { id: 'dewpider', name: 'Dewpider' },
      ],
      [
        { id: 'araquanid', name: 'Araquanid', rank: 16, raidRank: 54, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'bug',
      rank: 75,
      moveset: { fast: ['Infestation'], charged: ['Bug Buzz'] },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 16,
      moveset: { fast: ['Infestation'], charged: ['Water Pulse', 'Mirror Coat'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
      ],
      losesTo: [
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
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
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        ],
        losesTo: [
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
          { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8, raidRank: 87 },
          { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        ],
        bestIv: { iv: '0/10/15', cp: 1500 },
      },
      ultraLeague: {
        rank: 567,
        moveset: { fast: ['Infestation'], charged: ['Water Pulse', 'Mirror Coat'] },
        bestIv: { iv: '15/15/15', cp: 2065 },
      },
      raid: {
        type: 'bug',
        rank: 54,
        moveset: { fast: ['Bug Bite'], charged: ['Bug Buzz'] },
      },
    },
  },
  azumarill: {
    name: 'Azumarill',
    dex: 184,
    types: ['water', 'fairy'],
    evolution: [
      [
        { id: 'azurill', name: 'Azurill', raidRank: 202 },
      ],
      [
        { id: 'marill', name: 'Marill', raidRank: 201, candy: 25 },
      ],
      [
        { id: 'azumarill', name: 'Azumarill', rank: 33, raidRank: 138, current: true, candy: 25 },
      ],
    ],
    raid: {
      type: 'water',
      rank: 138,
      moveset: { fast: ['Bubble'], charged: ['Hydro Pump'] },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 33,
      moveset: { fast: ['Bubble'], charged: ['Ice Beam', 'Play Rough'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
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
    name: 'Bastiodon',
    dex: 411,
    types: ['rock', 'steel'],
    evolution: [
      [
        { id: 'shieldon', name: 'Shieldon', raidRank: 87 },
      ],
      [
        { id: 'bastiodon', name: 'Bastiodon', rank: 168, raidRank: 64, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'rock',
      rank: 73,
      moveset: { fast: ['Smack Down'], charged: ['Stone Edge'] },
    },
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
      raid: {
        type: 'rock',
        rank: 64,
        moveset: { fast: ['Smack Down'], charged: ['Stone Edge'] },
      },
    },
  },
  baxcalibur: {
    name: 'Baxcalibur',
    dex: 998,
    types: ['dragon', 'ice'],
    evolution: [
      [
        { id: 'frigibax', name: 'Frigibax', rank: 643, raidRank: 64 },
      ],
      [
        { id: 'arctibax', name: 'Arctibax', rank: 301, raidRank: 49, candy: 25 },
      ],
      [
        { id: 'baxcalibur', name: 'Baxcalibur', rank: 347, raidRank: 4, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'ice',
      rank: 4,
      moveset: { fast: ['Ice Fang'], charged: ['Avalanche'] },
    },
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
    name: 'Blaziken',
    dex: 257,
    types: ['fire', 'fighting'],
    megaForms: [
      {
        name: 'Mega',
        types: ['fire', 'fighting'],
        raid: {
          type: 'fighting',
          rank: 4,
          moveset: { fast: ['Counter'], charged: ['Aura Sphere'] },
        },
      },
    ],
    evolution: [
      [
        { id: 'torchic', name: 'Torchic', raidRank: 111 },
      ],
      [
        { id: 'combusken', name: 'Combusken', rank: 619, raidRank: 81, candy: 25 },
      ],
      [
        { id: 'blaziken', name: 'Blaziken', rank: 170, raidRank: 9, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'fighting',
      rank: 18,
      moveset: { fast: ['Counter'], charged: ['Aura Sphere'] },
    },
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
      raid: {
        type: 'fighting',
        rank: 9,
        moveset: { fast: ['Counter'], charged: ['Aura Sphere'] },
      },
    },
  },
  blissey: {
    name: 'Blissey',
    dex: 242,
    types: ['normal'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'happiny', name: 'Happiny', raidRank: 165 },
      ],
      [
        { id: 'chansey', name: 'Chansey', rank: 608, raidRank: 155, candy: 25, buddyKm: 15, quest: true },
      ],
      [
        { id: 'blissey', name: 'Blissey', rank: 639, raidRank: 109, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'psychic',
      rank: 109,
      moveset: { fast: ['Zen Headbutt'], charged: ['Psychic'] },
    },
    maxBattle: {
      tankRank: 1,
      healerRank: 1,
      dynamax: { type: 'psychic', rank: 30, strength: 0.42, move: 'Max Mindstorm', fast: 'Zen Headbutt' },
    },
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
    name: 'Carbink',
    dex: 703,
    types: ['rock', 'fairy'],
    raid: {
      type: 'rock',
      rank: 74,
      moveset: { fast: ['Rock Throw'], charged: ['Rock Slide'] },
    },
    buddyKm: 5,
    greatLeague: {
      rank: 47,
      moveset: { fast: ['Rock Throw'], charged: ['Rock Slide', 'Moonblast'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
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
    name: 'Charizard',
    dex: 6,
    types: ['fire', 'flying'],
    megaForms: [
      {
        name: 'Mega X',
        types: ['fire', 'dragon'],
        raid: {
          type: 'fire',
          rank: 8,
          moveset: { fast: ['Fire Spin'], charged: ['Blast Burn'] },
        },
      },
      {
        name: 'Mega Y',
        types: ['fire', 'flying'],
        raid: {
          type: 'fire',
          rank: 3,
          moveset: { fast: ['Fire Spin'], charged: ['Blast Burn'] },
        },
      },
    ],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'charmander', name: 'Charmander', raidRank: 115 },
      ],
      [
        { id: 'charmeleon', name: 'Charmeleon', rank: 537, raidRank: 71, candy: 25 },
      ],
      [
        { id: 'charizard', name: 'Charizard', rank: 101, raidRank: 20, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'fire',
      rank: 35,
      moveset: { fast: ['Fire Spin'], charged: ['Blast Burn'] },
    },
    maxBattle: {
      tankRank: 52,
      healerRank: 52,
      dynamax: { type: 'flying', rank: 3, strength: 0.89, move: 'Max Airstream', fast: 'Air Slash' },
      gigantamax: { type: 'fire', rank: 2, strength: 0.94, move: 'G-Max Wildfire' },
    },
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
      raid: {
        type: 'fire',
        rank: 20,
        moveset: { fast: ['Fire Spin'], charged: ['Blast Burn'] },
      },
    },
  },
  charjabug: {
    name: 'Charjabug',
    dex: 737,
    types: ['bug', 'electric'],
    evolution: [
      [
        { id: 'grubbin', name: 'Grubbin', raidRank: 82 },
      ],
      [
        { id: 'charjabug', name: 'Charjabug', rank: 42, raidRank: 58, current: true, candy: 25 },
      ],
      [
        { id: 'vikavolt', name: 'Vikavolt', rank: 312, raidRank: 4, candy: 100, item: 'Magnetic Lure' },
      ],
    ],
    raid: {
      type: 'bug',
      rank: 69,
      moveset: { fast: ['Bug Bite'], charged: ['X-Scissor'] },
    },
    buddyKm: 1,
    specialMoves: ['Volt Switch'],
    greatLeague: {
      rank: 42,
      moveset: { fast: ['Volt Switch'], charged: ['X-Scissor', 'Discharge'] },
      beats: [
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
      ],
      bestIv: { iv: '0/13/15', cp: 1497 },
    },
    shadow: {
      greatLeague: {
        rank: 48,
        moveset: { fast: ['Volt Switch'], charged: ['X-Scissor', 'Discharge'] },
        beats: [
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
          { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        ],
        losesTo: [
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        ],
        bestIv: { iv: '0/13/15', cp: 1497 },
      },
      raid: {
        type: 'bug',
        rank: 58,
        moveset: { fast: ['Bug Bite'], charged: ['X-Scissor'] },
      },
    },
  },
  cherrim_overcast: {
    name: 'Cherrim (Overcast)',
    dex: 421,
    types: ['grass'],
    evolution: [
      [
        { id: 'cherubi', name: 'Cherubi', raidRank: 144 },
      ],
      [
        {
          id: 'cherrim_overcast',
          name: 'Cherrim (Overcast)',
          rank: 836,
          raidRank: 74,
          current: true,
          candy: 50,
        },
      ],
    ],
    raid: {
      type: 'grass',
      rank: 74,
      moveset: { fast: ['Razor Leaf'], charged: ['Solar Beam'] },
    },
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
    name: 'Cinderace',
    dex: 815,
    types: ['fire'],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'scorbunny', name: 'Scorbunny', raidRank: 108 },
      ],
      [
        { id: 'raboot', name: 'Raboot', rank: 874, raidRank: 74, candy: 25 },
      ],
      [
        { id: 'cinderace', name: 'Cinderace', rank: 403, raidRank: 33, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'fire',
      rank: 33,
      moveset: { fast: ['Fire Spin'], charged: ['Blast Burn'] },
    },
    maxBattle: {
      tankRank: 58,
      healerRank: 51,
      dynamax: { type: 'fire', rank: 8, strength: 0.78, move: 'Max Flare', fast: 'Fire Spin' },
      gigantamax: { type: 'fire', rank: 1, strength: 1, move: 'G-Max Fireball' },
    },
    buddyKm: 3,
    specialMoves: ['Blast Burn'],
    greatLeague: {
      rank: 618,
      moveset: { fast: ['Fire Spin'], charged: ['Pyro Ball', 'Blast Burn'] },
      bestIv: { iv: '0/15/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 403,
      moveset: { fast: ['Fire Spin'], charged: ['Pyro Ball', 'Blast Burn'] },
      bestIv: { iv: '1/15/14', cp: 2499 },
    },
  },
  clodsire: {
    name: 'Clodsire',
    dex: 980,
    types: ['poison', 'ground'],
    evolution: [
      [
        { id: 'wooper_paldean', name: 'Paldean Wooper', raidRank: 91 },
      ],
      [
        { id: 'clodsire', name: 'Clodsire', rank: 17, raidRank: 54, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'poison',
      rank: 54,
      moveset: { fast: ['Poison Sting'], charged: ['Sludge Bomb'] },
    },
    buddyKm: 3,
    specialMoves: ['Megahorn'],
    greatLeague: {
      rank: 17,
      moveset: { fast: ['Poison Sting'], charged: ['Earthquake', 'Stone Edge'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
      ],
      losesTo: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
      ],
      bestIv: { iv: '0/14/13', cp: 1499 },
    },
    ultraLeague: {
      rank: 348,
      moveset: { fast: ['Poison Sting'], charged: ['Earthquake', 'Stone Edge'] },
      bestIv: { iv: '15/15/15', cp: 2207 },
    },
  },
  corsola_galarian: {
    name: 'Galarian Corsola',
    dex: 222,
    types: ['ghost'],
    evolution: [
      [
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8, raidRank: 87, current: true },
      ],
      [
        { id: 'cursola', name: 'Cursola', rank: 680, raidRank: 47, candy: 50 },
      ],
    ],
    raid: {
      type: 'ghost',
      rank: 87,
      moveset: { fast: ['Astonish'], charged: ['Night Shade'] },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 8,
      moveset: { fast: ['Astonish'], charged: ['Night Shade', 'Power Gem'] },
      beats: [
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      bestIv: { iv: '0/15/15', cp: 1498 },
    },
  },
  corviknight: {
    name: 'Corviknight',
    dex: 823,
    types: ['flying', 'steel'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'rookidee', name: 'Rookidee', raidRank: 113 },
      ],
      [
        { id: 'corvisquire', name: 'Corvisquire', rank: 601, raidRank: 86, candy: 25 },
      ],
      [
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'flying',
      rank: 55,
      moveset: { fast: ['Air Slash'], charged: ['Sky Attack'] },
    },
    maxBattle: {
      tankRank: 21,
      healerRank: 20,
      dynamax: { type: 'flying', rank: 4, strength: 0.67, move: 'Max Airstream', fast: 'Air Slash' },
    },
    buddyKm: 1,
    specialMoves: ['Iron Head', 'Air Cutter'],
    greatLeague: {
      rank: 7,
      moveset: { fast: ['Sand Attack'], charged: ['Air Cutter', 'Iron Head'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
      ],
      losesTo: [
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
      ],
      bestIv: { iv: '0/13/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 2,
      moveset: { fast: ['Sand Attack'], charged: ['Air Cutter', 'Iron Head'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
      ],
      losesTo: [
        { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
        { id: 'blastoise', name: 'Blastoise', rank: 29, raidRank: 45 },
        { id: 'dusknoir', name: 'Shadow Dusknoir', rank: 25, raidRank: 30 },
      ],
      bestIv: { iv: '0/15/15', cp: 2498 },
    },
    shadow: {
      greatLeague: {
        rank: 10,
        moveset: { fast: ['Sand Attack'], charged: ['Air Cutter', 'Iron Head'] },
        beats: [
          { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        ],
        losesTo: [
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
          { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        ],
        bestIv: { iv: '0/13/14', cp: 1500 },
      },
      ultraLeague: {
        rank: 4,
        moveset: { fast: ['Sand Attack'], charged: ['Air Cutter', 'Payback'] },
        beats: [
          { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        ],
        losesTo: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13 },
          { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
        ],
        bestIv: { iv: '0/15/15', cp: 2498 },
      },
      raid: {
        type: 'flying',
        rank: 35,
        moveset: { fast: ['Air Slash'], charged: ['Sky Attack'] },
      },
    },
  },
  cramorant: {
    name: 'Cramorant',
    dex: 845,
    types: ['flying', 'water'],
    raid: {
      type: 'flying',
      rank: 57,
      moveset: { fast: ['Peck'], charged: ['Fly'] },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 4,
      moveset: { fast: ['Peck'], charged: ['Dive', 'Fly'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
      ],
      losesTo: [
        { id: 'stunfisk', name: 'Stunfisk', rank: 21, raidRank: 76 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8, raidRank: 87 },
      ],
      bestIv: { iv: '0/14/11', cp: 1500 },
    },
    ultraLeague: {
      rank: 18,
      moveset: { fast: ['Peck'], charged: ['Dive', 'Fly'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
      ],
      losesTo: [
        { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, raidRank: 8, legendary: true },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13 },
      ],
      bestIv: { iv: '15/15/15', cp: 2421 },
    },
  },
  darmanitan_standard: {
    name: 'Darmanitan (Standard)',
    dex: 555,
    types: ['fire'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'darumaka', name: 'Darumaka', rank: 712, raidRank: 90 },
      ],
      [
        {
          id: 'darmanitan_standard',
          name: 'Darmanitan (Standard)',
          rank: 534,
          raidRank: 12,
          current: true,
          candy: 50,
        },
      ],
    ],
    raid: {
      type: 'fire',
      rank: 30,
      moveset: { fast: ['Fire Fang'], charged: ['Overheat'] },
    },
    maxBattle: {
      tankRank: 79,
      healerRank: 42,
      dynamax: { type: 'fire', rank: 3, strength: 0.85, move: 'Max Flare', fast: 'Fire Fang' },
    },
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
      raid: {
        type: 'fire',
        rank: 12,
        moveset: { fast: ['Fire Fang'], charged: ['Overheat'] },
      },
    },
  },
  decidueye: {
    name: 'Decidueye',
    dex: 724,
    types: ['grass', 'ghost'],
    evolution: [
      [
        { id: 'rowlet', name: 'Rowlet', rank: 1058, raidRank: 137 },
      ],
      [
        { id: 'dartrix', name: 'Dartrix', rank: 186, raidRank: 80, candy: 25 },
      ],
      [
        { id: 'decidueye', name: 'Decidueye', rank: 212, raidRank: 20, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'grass',
      rank: 20,
      moveset: { fast: ['Magical Leaf'], charged: ['Frenzy Plant'] },
    },
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
    name: 'Dedenne',
    dex: 702,
    types: ['electric', 'fairy'],
    raid: {
      type: 'electric',
      rank: 80,
      moveset: { fast: ['Thunder Shock'], charged: ['Discharge'] },
    },
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
    name: 'Delphox',
    dex: 655,
    types: ['fire', 'psychic'],
    megaForms: [
      {
        name: 'Mega',
        types: ['fire', 'psychic'],
        raid: {
          type: 'fire',
          rank: 1,
          moveset: { fast: ['Fire Spin'], charged: ['Blast Burn'] },
        },
      },
    ],
    evolution: [
      [
        { id: 'fennekin', name: 'Fennekin', raidRank: 113 },
      ],
      [
        { id: 'braixen', name: 'Braixen', rank: 510, raidRank: 75, candy: 25 },
      ],
      [
        { id: 'delphox', name: 'Delphox', rank: 281, raidRank: 14, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'fire',
      rank: 31,
      moveset: { fast: ['Fire Spin'], charged: ['Blast Burn'] },
    },
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
      raid: {
        type: 'fire',
        rank: 14,
        moveset: { fast: ['Fire Spin'], charged: ['Blast Burn'] },
      },
    },
  },
  deoxys_defense: {
    name: 'Deoxys (Defense)',
    dex: 386,
    types: ['psychic'],
    legendary: true,
    raid: {
      type: 'psychic',
      rank: 122,
      moveset: { fast: ['Zen Headbutt'], charged: ['Psycho Boost'] },
    },
    buddyKm: 20,
    greatLeague: {
      rank: 34,
      moveset: { fast: ['Low Kick'], charged: ['Psycho Boost', 'Thunderbolt'] },
      beats: [
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
      ],
      bestIv: { iv: '0/15/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 42,
      moveset: { fast: ['Low Kick'], charged: ['Psycho Boost', 'Thunderbolt'] },
      beats: [
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
        { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      bestIv: { iv: '12/13/15', cp: 2500 },
    },
  },
  dondozo: {
    name: 'Dondozo',
    dex: 977,
    types: ['water'],
    raid: {
      type: 'water',
      rank: 64,
      moveset: { fast: ['Water Gun'], charged: ['Hydro Pump'] },
    },
    buddyKm: 5,
    greatLeague: {
      rank: 49,
      moveset: { fast: ['Waterfall'], charged: ['Surf', 'Outrage'] },
      beats: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'stunfisk', name: 'Stunfisk', rank: 21, raidRank: 76 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
      ],
      bestIv: { iv: '0/15/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 26,
      moveset: { fast: ['Waterfall'], charged: ['Surf', 'Outrage'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
      ],
      losesTo: [
        { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
      ],
      bestIv: { iv: '0/14/15', cp: 2498 },
    },
  },
  doublade: {
    name: 'Doublade',
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
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
      ],
      bestIv: { iv: '0/11/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 96,
      moveset: { fast: ['Shadow Claw'], charged: ['Sacred Sword', 'Iron Head'] },
      beats: [
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
      ],
      losesTo: [
        { id: 'jellicent', name: 'Jellicent', rank: 16, raidRank: 48 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
      ],
      bestIv: { iv: '0/14/14', cp: 2499 },
    },
  },
  drifblim: {
    name: 'Drifblim',
    dex: 426,
    types: ['ghost', 'flying'],
    evolution: [
      [
        { id: 'drifloon', name: 'Drifloon', rank: 637, raidRank: 66 },
      ],
      [
        { id: 'drifblim', name: 'Drifblim', rank: 137, raidRank: 31, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'ghost',
      rank: 42,
      moveset: { fast: ['Hex'], charged: ['Shadow Ball'] },
    },
    buddyKm: 5,
    greatLeague: {
      rank: 363,
      moveset: { fast: ['Hex'], charged: ['Shadow Ball', 'Icy Wind'] },
      bestIv: { iv: '0/15/12', cp: 1500 },
    },
    ultraLeague: {
      rank: 137,
      moveset: { fast: ['Hex'], charged: ['Shadow Ball', 'Icy Wind'] },
      bestIv: { iv: '1/15/15', cp: 2499 },
    },
    shadow: {
      greatLeague: {
        rank: 289,
        moveset: { fast: ['Astonish'], charged: ['Shadow Ball', 'Icy Wind'] },
        bestIv: { iv: '0/15/12', cp: 1500 },
      },
      ultraLeague: {
        rank: 236,
        moveset: { fast: ['Hex'], charged: ['Shadow Ball', 'Icy Wind'] },
        bestIv: { iv: '1/15/15', cp: 2499 },
      },
      raid: {
        type: 'ghost',
        rank: 31,
        moveset: { fast: ['Astonish'], charged: ['Shadow Ball'] },
      },
    },
  },
  dubwool: {
    name: 'Dubwool',
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
    maxBattle: {
      tankRank: 42,
      healerRank: 53,
      dynamax: { type: 'fighting', rank: 24, strength: 0.45, move: 'Max Knuckle', fast: 'Double Kick' },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 163,
      moveset: { fast: ['Take Down'], charged: ['Wild Charge', 'Body Slam'] },
      bestIv: { iv: '1/15/15', cp: 1497 },
    },
    ultraLeague: {
      rank: 375,
      moveset: { fast: ['Double Kick'], charged: ['Wild Charge', 'Body Slam'] },
      bestIv: { iv: '15/15/15', cp: 2478 },
    },
  },
  dusclops: {
    name: 'Dusclops',
    dex: 356,
    types: ['ghost'],
    evolution: [
      [
        { id: 'duskull', name: 'Duskull', raidRank: 99 },
      ],
      [
        { id: 'dusclops', name: 'Dusclops', rank: 71, raidRank: 61, current: true, candy: 25 },
      ],
      [
        { id: 'dusknoir', name: 'Dusknoir', rank: 25, raidRank: 30, candy: 100, item: 'Sinnoh Stone' },
      ],
    ],
    raid: {
      type: 'ghost',
      rank: 70,
      moveset: { fast: ['Hex'], charged: ['Poltergeist'] },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 77,
      moveset: { fast: ['Hex'], charged: ['Shadow Punch', 'Ice Punch'] },
      beats: [
        { id: 'clodsire', name: 'Clodsire', rank: 17, raidRank: 54 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'stunfisk', name: 'Stunfisk', rank: 21, raidRank: 76 },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
      ],
      bestIv: { iv: '0/11/15', cp: 1499 },
    },
    shadow: {
      greatLeague: {
        rank: 71,
        moveset: { fast: ['Hex'], charged: ['Shadow Punch', 'Ice Punch'] },
        beats: [
          { id: 'stunfisk', name: 'Stunfisk', rank: 21, raidRank: 76 },
          { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
          { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        ],
        losesTo: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        ],
        bestIv: { iv: '0/11/15', cp: 1499 },
      },
      raid: {
        type: 'ghost',
        rank: 61,
        moveset: { fast: ['Hex'], charged: ['Poltergeist'] },
      },
    },
  },
  eevee: {
    name: 'Eevee',
    dex: 133,
    types: ['normal'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'eevee', name: 'Eevee', rank: 1026, current: true },
      ],
      [
        { id: 'vaporeon', name: 'Vaporeon', rank: 399, raidRank: 58, candy: 25 },
        { id: 'jolteon', name: 'Jolteon', rank: 514, raidRank: 30, candy: 25 },
        { id: 'flareon', name: 'Flareon', rank: 589, raidRank: 37, candy: 25 },
        {
          id: 'espeon',
          name: 'Espeon',
          rank: 649,
          raidRank: 28,
          candy: 25,
          buddyKm: 10,
          time: 'day',
          quest: true,
        },
        {
          id: 'umbreon',
          name: 'Umbreon',
          rank: 29,
          raidRank: 94,
          candy: 25,
          buddyKm: 10,
          time: 'night',
          quest: true,
        },
        { id: 'leafeon', name: 'Leafeon', rank: 618, raidRank: 36, candy: 25, item: 'Mossy Lure' },
        { id: 'glaceon', name: 'Glaceon', rank: 788, raidRank: 10, candy: 25, item: 'Glacial Lure' },
        { id: 'sylveon', name: 'Sylveon', rank: 104, raidRank: 11, candy: 25, quest: true },
      ],
    ],
    maxBattle: { tankRank: 111, healerRank: 112 },
    buddyKm: 5,
    specialMoves: ['Last Resort', 'Body Slam'],
    greatLeague: {
      rank: 1026,
      moveset: { fast: ['Quick Attack'], charged: ['Swift', 'Dig'] },
      bestIv: { iv: '15/15/15', cp: 1210 },
    },
  },
  eldegoss: {
    name: 'Eldegoss',
    dex: 830,
    types: ['grass'],
    evolution: [
      [
        { id: 'gossifleur', name: 'Gossifleur', raidRank: 154 },
      ],
      [
        { id: 'eldegoss', name: 'Eldegoss', rank: 780, raidRank: 84, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'grass',
      rank: 84,
      moveset: { fast: ['Bullet Seed'], charged: ['Grass Knot'] },
    },
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
  electrode_hisuian: {
    name: 'Hisuian Electrode',
    dex: 101,
    types: ['electric', 'grass'],
    evolution: [
      [
        { id: 'voltorb_hisuian', name: 'Hisuian Voltorb', raidRank: 119 },
      ],
      [
        {
          id: 'electrode_hisuian',
          name: 'Hisuian Electrode',
          rank: 35,
          raidRank: 59,
          current: true,
          candy: 50,
        },
      ],
    ],
    raid: {
      type: 'electric',
      rank: 59,
      moveset: { fast: ['Thunder Shock'], charged: ['Wild Charge'] },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 35,
      moveset: { fast: ['Thunder Shock'], charged: ['Wild Charge', 'Energy Ball'] },
      beats: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
      ],
      bestIv: { iv: '1/14/14', cp: 1499 },
    },
    ultraLeague: {
      rank: 165,
      moveset: { fast: ['Thunder Shock'], charged: ['Wild Charge', 'Energy Ball'] },
      bestIv: { iv: '15/15/15', cp: 2430 },
    },
  },
  empoleon: {
    name: 'Empoleon',
    dex: 395,
    types: ['water', 'steel'],
    evolution: [
      [
        { id: 'piplup', name: 'Piplup', rank: 1082, raidRank: 153 },
      ],
      [
        { id: 'prinplup', name: 'Prinplup', rank: 818, raidRank: 94, candy: 25 },
      ],
      [
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'water',
      rank: 31,
      moveset: { fast: ['Waterfall'], charged: ['Hydro Cannon'] },
    },
    buddyKm: 3,
    specialMoves: ['Hydro Cannon'],
    greatLeague: {
      rank: 24,
      moveset: { fast: ['Metal Sound'], charged: ['Hydro Cannon', 'Drill Peck'] },
      beats: [
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
      ],
      losesTo: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
      ],
      bestIv: { iv: '0/13/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 7,
      moveset: { fast: ['Metal Sound'], charged: ['Hydro Cannon', 'Drill Peck'] },
      beats: [
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      losesTo: [
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13 },
      ],
      bestIv: { iv: '1/15/14', cp: 2500 },
    },
    shadow: {
      greatLeague: {
        rank: 25,
        moveset: { fast: ['Metal Sound'], charged: ['Hydro Cannon', 'Drill Peck'] },
        beats: [
          { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
          { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
          { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105 },
        ],
        losesTo: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        ],
        bestIv: { iv: '0/13/15', cp: 1500 },
      },
      ultraLeague: {
        rank: 9,
        moveset: { fast: ['Metal Sound'], charged: ['Hydro Cannon', 'Drill Peck'] },
        beats: [
          { id: 'togekiss', name: 'Togekiss', rank: 58, raidRank: 5 },
          { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
          { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
        ],
        losesTo: [
          { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
          { id: 'snorlax', name: 'Snorlax', rank: 3 },
        ],
        bestIv: { iv: '1/15/14', cp: 2500 },
      },
      raid: {
        type: 'water',
        rank: 12,
        moveset: { fast: ['Waterfall'], charged: ['Hydro Cannon'] },
      },
    },
  },
  excadrill: {
    name: 'Excadrill',
    dex: 530,
    types: ['ground', 'steel'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'drilbur', name: 'Drilbur', rank: 407, raidRank: 73 },
      ],
      [
        { id: 'excadrill', name: 'Excadrill', rank: 365, raidRank: 9, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'ground',
      rank: 18,
      moveset: { fast: ['Mud Slap'], charged: ['Earthquake'] },
    },
    maxBattle: {
      tankRank: 55,
      healerRank: 27,
      dynamax: { type: 'ground', rank: 1, strength: 1, move: 'Max Quake', fast: 'Mud Slap' },
    },
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
      raid: {
        type: 'steel',
        rank: 9,
        moveset: { fast: ['Metal Claw'], charged: ['Iron Head'] },
      },
    },
  },
  fearow: {
    name: 'Fearow',
    dex: 22,
    types: ['normal', 'flying'],
    evolution: [
      [
        { id: 'spearow', name: 'Spearow', raidRank: 112 },
      ],
      [
        { id: 'fearow', name: 'Fearow', rank: 26, raidRank: 51, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'flying',
      rank: 51,
      moveset: { fast: ['Peck'], charged: ['Fly'] },
    },
    buddyKm: 1,
    specialMoves: ['Twister'],
    greatLeague: {
      rank: 26,
      moveset: { fast: ['Peck'], charged: ['Drill Peck', 'Drill Run'] },
      beats: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'jellicent', name: 'Jellicent', rank: 16, raidRank: 48 },
        { id: 'rillaboom', name: 'Rillaboom', rank: 20, raidRank: 13 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
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
    name: 'Feraligatr',
    dex: 160,
    types: ['water'],
    evolution: [
      [
        { id: 'totodile', name: 'Totodile', rank: 848, raidRank: 149 },
      ],
      [
        { id: 'croconaw', name: 'Croconaw', rank: 223, raidRank: 134, candy: 25 },
      ],
      [
        { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'water',
      rank: 32,
      moveset: { fast: ['Waterfall'], charged: ['Hydro Cannon'] },
    },
    buddyKm: 3,
    specialMoves: ['Water Gun', 'Hydro Cannon'],
    greatLeague: {
      rank: 31,
      moveset: { fast: ['Shadow Claw'], charged: ['Hydro Cannon', 'Ice Beam'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
      ],
      bestIv: { iv: '0/11/13', cp: 1499 },
    },
    ultraLeague: {
      rank: 15,
      moveset: { fast: ['Shadow Claw'], charged: ['Hydro Cannon', 'Ice Beam'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
      ],
      losesTo: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, raidRank: 8, legendary: true },
      ],
      bestIv: { iv: '1/15/14', cp: 2497 },
    },
    shadow: {
      greatLeague: {
        rank: 60,
        moveset: { fast: ['Shadow Claw'], charged: ['Hydro Cannon', 'Ice Beam'] },
        beats: [
          { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
          { id: 'annihilape', name: 'Annihilape', rank: 32, raidRank: 24 },
          { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        ],
        losesTo: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
          { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        ],
        bestIv: { iv: '0/11/13', cp: 1499 },
      },
      ultraLeague: {
        rank: 14,
        moveset: { fast: ['Shadow Claw'], charged: ['Hydro Cannon', 'Ice Beam'] },
        beats: [
          { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        ],
        losesTo: [
          { id: 'snorlax', name: 'Snorlax', rank: 3 },
          { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        ],
        bestIv: { iv: '1/15/14', cp: 2497 },
      },
      raid: {
        type: 'water',
        rank: 13,
        moveset: { fast: ['Water Gun'], charged: ['Hydro Cannon'] },
      },
    },
  },
  flareon: {
    name: 'Flareon',
    dex: 136,
    types: ['fire'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'eevee', name: 'Eevee', rank: 1026 },
      ],
      [
        { id: 'flareon', name: 'Flareon', rank: 589, raidRank: 37, current: true, candy: 25 },
      ],
    ],
    raid: {
      type: 'fire',
      rank: 37,
      moveset: { fast: ['Fire Spin'], charged: ['Overheat'] },
    },
    maxBattle: {
      tankRank: 67,
      healerRank: 73,
      dynamax: { type: 'fire', rank: 6, strength: 0.8, move: 'Max Flare', fast: 'Fire Spin' },
    },
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
    name: 'Florges',
    dex: 671,
    types: ['fairy'],
    evolution: [
      [
        { id: 'flabebe', name: 'Flabebe', rank: 1124, raidRank: 142 },
      ],
      [
        { id: 'floette', name: 'Floette', rank: 786, raidRank: 130, candy: 25 },
      ],
      [
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13, current: true, candy: 100, quest: true },
      ],
    ],
    raid: {
      type: 'fairy',
      rank: 13,
      moveset: { fast: ['Fairy Wind'], charged: ['Moonblast'] },
    },
    buddyKm: 3,
    specialMoves: ['Chilling Water'],
    greatLeague: {
      rank: 11,
      moveset: { fast: ['Fairy Wind'], charged: ['Moonblast', 'Chilling Water'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
      ],
      bestIv: { iv: '0/14/13', cp: 1500 },
    },
    ultraLeague: {
      rank: 12,
      moveset: { fast: ['Fairy Wind'], charged: ['Disarming Voice', 'Chilling Water'] },
      beats: [
        { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, raidRank: 8, legendary: true },
        { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
      ],
      losesTo: [
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      bestIv: { iv: '0/14/15', cp: 2498 },
    },
  },
  forretress: {
    name: 'Forretress',
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
      moveset: { fast: ['Volt Switch'], charged: ['Rock Tomb', 'Sand Tomb'] },
      beats: [
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
      ],
      bestIv: { iv: '0/9/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 31,
      moveset: { fast: ['Volt Switch'], charged: ['Rock Tomb', 'Sand Tomb'] },
      beats: [
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
      ],
      losesTo: [
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
        { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
      ],
      bestIv: { iv: '9/15/15', cp: 2492 },
    },
    shadow: {
      greatLeague: {
        rank: 50,
        moveset: { fast: ['Volt Switch'], charged: ['Rock Tomb', 'Sand Tomb'] },
        beats: [
          { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        ],
        losesTo: [
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
          { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        ],
        bestIv: { iv: '0/9/15', cp: 1500 },
      },
      ultraLeague: {
        rank: 39,
        moveset: { fast: ['Volt Switch'], charged: ['Rock Tomb', 'Sand Tomb'] },
        beats: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
          { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        ],
        losesTo: [
          { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
          { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
        ],
        bestIv: { iv: '9/15/15', cp: 2492 },
      },
    },
  },
  furret: {
    name: 'Furret',
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
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8, raidRank: 87 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
      ],
      bestIv: { iv: '1/15/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 741,
      moveset: { fast: ['Sucker Punch'], charged: ['Swift', 'Brick Break'] },
      bestIv: { iv: '15/15/15', cp: 1987 },
    },
  },
  gardevoir: {
    name: 'Gardevoir',
    dex: 282,
    types: ['psychic', 'fairy'],
    megaForms: [
      {
        name: 'Mega',
        types: ['psychic', 'fairy'],
        raid: {
          type: 'fairy',
          rank: 1,
          moveset: { fast: ['Charm'], charged: ['Dazzling Gleam'] },
        },
      },
    ],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'ralts', name: 'Ralts', raidRank: 157 },
      ],
      [
        { id: 'kirlia', name: 'Kirlia', raidRank: 128, candy: 25 },
      ],
      [
        { id: 'gardevoir', name: 'Gardevoir', rank: 654, raidRank: 3, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'fairy',
      rank: 6,
      moveset: { fast: ['Charm'], charged: ['Dazzling Gleam'] },
    },
    maxBattle: {
      tankRank: 48,
      healerRank: 64,
      dynamax: { type: 'fairy', rank: 1, strength: 1, move: 'Max Starfall', fast: 'Charm' },
    },
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
      raid: {
        type: 'fairy',
        rank: 3,
        moveset: { fast: ['Charm'], charged: ['Dazzling Gleam'] },
      },
    },
  },
  gigalith: {
    name: 'Gigalith',
    dex: 526,
    types: ['rock'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'roggenrola', name: 'Roggenrola', rank: 1094, raidRank: 67 },
      ],
      [
        { id: 'boldore', name: 'Boldore', rank: 810, raidRank: 48, candy: 50 },
      ],
      [
        {
          id: 'gigalith',
          name: 'Gigalith',
          rank: 368,
          raidRank: 7,
          current: true,
          candy: 200,
          tradeFree: true,
        },
      ],
    ],
    raid: {
      type: 'rock',
      rank: 15,
      moveset: { fast: ['Smack Down'], charged: ['Meteor Beam'] },
    },
    maxBattle: {
      tankRank: 27,
      healerRank: 37,
      dynamax: { type: 'rock', rank: 2, strength: 0.94, move: 'Max Rockfall', fast: 'Smack Down' },
    },
    buddyKm: 3,
    specialMoves: ['Meteor Beam'],
    greatLeague: {
      rank: 598,
      moveset: { fast: ['Lock On'], charged: ['Meteor Beam', 'Superpower'] },
      bestIv: { iv: '0/11/15', cp: 1499 },
    },
    ultraLeague: {
      rank: 368,
      moveset: { fast: ['Lock On'], charged: ['Meteor Beam', 'Superpower'] },
      bestIv: { iv: '0/13/15', cp: 2497 },
    },
    shadow: {
      greatLeague: {
        rank: 651,
        moveset: { fast: ['Lock On'], charged: ['Meteor Beam', 'Superpower'] },
        bestIv: { iv: '0/11/15', cp: 1499 },
      },
      ultraLeague: {
        rank: 517,
        moveset: { fast: ['Lock On'], charged: ['Meteor Beam', 'Superpower'] },
        bestIv: { iv: '0/13/15', cp: 2497 },
      },
      raid: {
        type: 'rock',
        rank: 7,
        moveset: { fast: ['Smack Down'], charged: ['Meteor Beam'] },
      },
    },
  },
  gothitelle: {
    name: 'Gothitelle',
    dex: 576,
    types: ['psychic'],
    evolution: [
      [
        { id: 'gothita', name: 'Gothita', raidRank: 134 },
      ],
      [
        { id: 'gothorita', name: 'Gothorita', rank: 887, raidRank: 96, candy: 25 },
      ],
      [
        { id: 'gothitelle', name: 'Gothitelle', rank: 535, raidRank: 47, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'psychic',
      rank: 70,
      moveset: { fast: ['Confusion'], charged: ['Psychic'] },
    },
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
      raid: {
        type: 'psychic',
        rank: 47,
        moveset: { fast: ['Confusion'], charged: ['Psychic'] },
      },
    },
  },
  greedent: {
    name: 'Greedent',
    dex: 820,
    types: ['normal'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'skwovet', name: 'Skwovet', raidRank: 157 },
      ],
      [
        { id: 'greedent', name: 'Greedent', rank: 150, raidRank: 112, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'grass',
      rank: 112,
      moveset: { fast: ['Bullet Seed'], charged: ['Trailblaze'] },
    },
    maxBattle: {
      tankRank: 23,
      healerRank: 9,
      dynamax: { type: 'grass', rank: 12, strength: 0.45, move: 'Max Overgrowth', fast: 'Bullet Seed' },
    },
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
    name: 'Guzzlord',
    dex: 799,
    types: ['dark', 'dragon'],
    legendary: true,
    raid: {
      type: 'dark',
      rank: 36,
      moveset: { fast: ['Snarl'], charged: ['Brutal Swing'] },
    },
    buddyKm: 20,
    greatLeague: {
      rank: 45,
      moveset: { fast: ['Dragon Tail'], charged: ['Brutal Swing', 'Sludge Bomb'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
      ],
      bestIv: { iv: '1/15/15', cp: 1497 },
    },
    ultraLeague: {
      rank: 19,
      moveset: { fast: ['Dragon Tail'], charged: ['Brutal Swing', 'Sludge Bomb'] },
      beats: [
        { id: 'jellicent', name: 'Jellicent', rank: 16, raidRank: 48 },
        { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
        { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13 },
      ],
      losesTo: [
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      bestIv: { iv: '0/15/14', cp: 2499 },
    },
  },
  gyarados: {
    name: 'Gyarados',
    dex: 130,
    types: ['water', 'flying'],
    megaForms: [
      {
        name: 'Mega',
        types: ['water', 'dark'],
        raid: {
          type: 'water',
          rank: 5,
          moveset: { fast: ['Waterfall'], charged: ['Hydro Pump'] },
        },
      },
    ],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'magikarp', name: 'Magikarp' },
      ],
      [
        { id: 'gyarados', name: 'Gyarados', rank: 67, raidRank: 10, current: true, candy: 400 },
      ],
    ],
    raid: {
      type: 'water',
      rank: 28,
      moveset: { fast: ['Waterfall'], charged: ['Hydro Pump'] },
    },
    maxBattle: {
      tankRank: 26,
      healerRank: 26,
      dynamax: { type: 'dark', rank: 7, strength: 0.67, move: 'Max Darkness', fast: 'Bite' },
    },
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
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
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
          { id: 'blastoise', name: 'Blastoise', rank: 29, raidRank: 45 },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
          { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
          { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13 },
        ],
        bestIv: { iv: '0/15/14', cp: 2500 },
      },
      raid: {
        type: 'water',
        rank: 10,
        moveset: { fast: ['Waterfall'], charged: ['Hydro Pump'] },
      },
    },
  },
  hariyama: {
    name: 'Hariyama',
    dex: 297,
    types: ['fighting'],
    evolution: [
      [
        { id: 'makuhita', name: 'Makuhita', raidRank: 134 },
      ],
      [
        { id: 'hariyama', name: 'Hariyama', rank: 334, raidRank: 19, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'fighting',
      rank: 46,
      moveset: { fast: ['Force Palm'], charged: ['Dynamic Punch'] },
    },
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
      raid: {
        type: 'fighting',
        rank: 19,
        moveset: { fast: ['Force Palm'], charged: ['Dynamic Punch'] },
      },
    },
  },
  hatterene: {
    name: 'Hatterene',
    dex: 858,
    types: ['psychic', 'fairy'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'hatenna', name: 'Hatenna', raidRank: 54 },
      ],
      [
        { id: 'hattrem', name: 'Hattrem', rank: 700, raidRank: 40, candy: 25 },
      ],
      [
        { id: 'hatterene', name: 'Hatterene', rank: 493, raidRank: 10, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'fairy',
      rank: 10,
      moveset: { fast: ['Charm'], charged: ['Dazzling Gleam'] },
    },
    maxBattle: {
      tankRank: 78,
      healerRank: 86,
      dynamax: { type: 'fairy', rank: 2, strength: 1, move: 'Max Starfall', fast: 'Charm' },
    },
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
    name: 'Hippowdon',
    dex: 450,
    types: ['ground'],
    evolution: [
      [
        { id: 'hippopotas', name: 'Hippopotas', rank: 306, raidRank: 99 },
      ],
      [
        { id: 'hippowdon', name: 'Hippowdon', rank: 51, raidRank: 21, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'ground',
      rank: 27,
      moveset: { fast: ['Sand Attack'], charged: ['Earthquake'] },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 51,
      moveset: { fast: ['Sand Attack'], charged: ['Weather Ball (Rock)', 'Earth Power'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8, raidRank: 87 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      bestIv: { iv: '0/14/10', cp: 1499 },
    },
    ultraLeague: {
      rank: 99,
      moveset: { fast: ['Sand Attack'], charged: ['Weather Ball (Rock)', 'Earth Power'] },
      beats: [
        { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      losesTo: [
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
      ],
      bestIv: { iv: '0/14/15', cp: 2496 },
    },
    shadow: {
      greatLeague: {
        rank: 61,
        moveset: { fast: ['Sand Attack'], charged: ['Weather Ball (Rock)', 'Earth Power'] },
        beats: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
          { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
          { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
        ],
        bestIv: { iv: '0/14/10', cp: 1499 },
      },
      ultraLeague: {
        rank: 92,
        moveset: { fast: ['Sand Attack'], charged: ['Weather Ball (Rock)', 'Earth Power'] },
        beats: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        ],
        losesTo: [
          { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
          { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        ],
        bestIv: { iv: '0/14/15', cp: 2496 },
      },
      raid: {
        type: 'ground',
        rank: 21,
        moveset: { fast: ['Sand Attack'], charged: ['Earthquake'] },
      },
    },
  },
  inteleon: {
    name: 'Inteleon',
    dex: 818,
    types: ['water'],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'sobble', name: 'Sobble', raidRank: 155 },
      ],
      [
        { id: 'drizzile', name: 'Drizzile', rank: 1071, raidRank: 106, candy: 25 },
      ],
      [
        { id: 'inteleon', name: 'Inteleon', rank: 716, raidRank: 17, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'water',
      rank: 17,
      moveset: { fast: ['Water Gun'], charged: ['Hydro Cannon'] },
    },
    maxBattle: {
      tankRank: 87,
      healerRank: 78,
      dynamax: { type: 'water', rank: 4, strength: 0.78, move: 'Max Geyser', fast: 'Water Gun' },
      gigantamax: { type: 'water', rank: 1, strength: 1, move: 'G-Max Hydrosnipe' },
    },
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
  ivysaur: {
    name: 'Ivysaur',
    dex: 2,
    types: ['grass', 'poison'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'bulbasaur', name: 'Bulbasaur', rank: 1070, raidRank: 103 },
      ],
      [
        { id: 'ivysaur', name: 'Ivysaur', rank: 793, raidRank: 58, current: true, candy: 25 },
      ],
      [
        { id: 'venusaur', name: 'Venusaur', rank: 217, raidRank: 8, candy: 100 },
      ],
    ],
    raid: {
      type: 'grass',
      rank: 87,
      moveset: { fast: ['Vine Whip'], charged: ['Power Whip'] },
    },
    maxBattle: {
      tankRank: 95,
      healerRank: 95,
      dynamax: { type: 'grass', rank: 10, strength: 0.51, move: 'Max Overgrowth', fast: 'Razor Leaf' },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 793,
      moveset: { fast: ['Vine Whip'], charged: ['Power Whip', 'Sludge Bomb'] },
      bestIv: { iv: '0/13/14', cp: 1498 },
    },
    shadow: {
      greatLeague: {
        rank: 908,
        moveset: { fast: ['Vine Whip'], charged: ['Power Whip', 'Sludge Bomb'] },
        bestIv: { iv: '0/13/14', cp: 1498 },
      },
      raid: {
        type: 'grass',
        rank: 58,
        moveset: { fast: ['Vine Whip'], charged: ['Power Whip'] },
      },
    },
  },
  jellicent: {
    name: 'Jellicent',
    dex: 593,
    types: ['water', 'ghost'],
    evolution: [
      [
        { id: 'frillish', name: 'Frillish', rank: 427, raidRank: 88 },
      ],
      [
        { id: 'jellicent', name: 'Jellicent', rank: 16, raidRank: 48, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'ghost',
      rank: 48,
      moveset: { fast: ['Hex'], charged: ['Shadow Ball'] },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 23,
      moveset: { fast: ['Hex'], charged: ['Surf', 'Shadow Ball'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
      ],
      bestIv: { iv: '1/14/14', cp: 1498 },
    },
    ultraLeague: {
      rank: 16,
      moveset: { fast: ['Hex'], charged: ['Shadow Ball', 'Surf'] },
      beats: [
        { id: 'blastoise', name: 'Blastoise', rank: 29, raidRank: 45 },
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
        { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      bestIv: { iv: '6/14/15', cp: 2500 },
    },
  },
  jumpluff: {
    name: 'Jumpluff',
    dex: 189,
    types: ['grass', 'flying'],
    evolution: [
      [
        { id: 'hoppip', name: 'Hoppip', raidRank: 153 },
      ],
      [
        { id: 'skiploom', name: 'Skiploom', raidRank: 132, candy: 25 },
      ],
      [
        { id: 'jumpluff', name: 'Jumpluff', rank: 56, raidRank: 38, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'fairy',
      rank: 43,
      moveset: { fast: ['Fairy Wind'], charged: ['Dazzling Gleam'] },
    },
    buddyKm: 3,
    specialMoves: ['Acrobatics'],
    greatLeague: {
      rank: 56,
      moveset: { fast: ['Fairy Wind'], charged: ['Energy Ball', 'Acrobatics'] },
      beats: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
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
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
          { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        ],
        losesTo: [
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        ],
        bestIv: { iv: '0/14/14', cp: 1499 },
      },
      ultraLeague: {
        rank: 713,
        moveset: { fast: ['Fairy Wind'], charged: ['Energy Ball', 'Acrobatics'] },
        bestIv: { iv: '15/15/15', cp: 1850 },
      },
      raid: {
        type: 'fairy',
        rank: 38,
        moveset: { fast: ['Fairy Wind'], charged: ['Dazzling Gleam'] },
      },
    },
  },
  kilowattrel: {
    name: 'Kilowattrel',
    dex: 941,
    types: ['electric', 'flying'],
    evolution: [
      [
        { id: 'wattrel', name: 'Wattrel', raidRank: 117 },
      ],
      [
        { id: 'kilowattrel', name: 'Kilowattrel', rank: 343, raidRank: 43, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'flying',
      rank: 43,
      moveset: { fast: ['Air Slash'], charged: ['Acrobatics'] },
    },
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
    name: 'Lanturn',
    dex: 171,
    types: ['water', 'electric'],
    evolution: [
      [
        { id: 'chinchou', name: 'Chinchou', rank: 1030, raidRank: 109 },
      ],
      [
        { id: 'lanturn', name: 'Lanturn', rank: 279, raidRank: 77, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'electric',
      rank: 77,
      moveset: { fast: ['Spark'], charged: ['Thunderbolt'] },
    },
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
    name: 'Lapras',
    dex: 131,
    types: ['water', 'ice'],
    maxForms: ['Dynamax', 'Gigantamax'],
    raid: {
      type: 'ice',
      rank: 37,
      moveset: { fast: ['Frost Breath'], charged: ['Blizzard'] },
    },
    maxBattle: {
      tankRank: 12,
      healerRank: 6,
      dynamax: { type: 'ice', rank: 9, strength: 0.7, move: 'Max Hailstorm', fast: 'Frost Breath' },
      gigantamax: { type: 'ice', rank: 3, strength: 0.9, move: 'G-Max Resonance' },
    },
    buddyKm: 5,
    specialMoves: ['Ice Shard', 'Dragon Pulse', 'Ice Beam'],
    greatLeague: {
      rank: 39,
      moveset: { fast: ['Psywave'], charged: ['Sparkling Aria', 'Ice Beam'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
      ],
      bestIv: { iv: '0/10/14', cp: 1498 },
    },
    ultraLeague: {
      rank: 22,
      moveset: { fast: ['Psywave'], charged: ['Sparkling Aria', 'Ice Beam'] },
      beats: [
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
      ],
      losesTo: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      bestIv: { iv: '0/15/15', cp: 2498 },
    },
    shadow: {
      greatLeague: {
        rank: 63,
        moveset: { fast: ['Psywave'], charged: ['Sparkling Aria', 'Ice Beam'] },
        beats: [
          { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
          { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
          { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        ],
        losesTo: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        ],
        bestIv: { iv: '0/10/14', cp: 1498 },
      },
      ultraLeague: {
        rank: 23,
        moveset: { fast: ['Psywave'], charged: ['Sparkling Aria', 'Ice Beam'] },
        beats: [
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        ],
        losesTo: [
          { id: 'moltres_galarian', name: 'Galarian Moltres', rank: 13, raidRank: 19, legendary: true },
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'jellicent', name: 'Jellicent', rank: 16, raidRank: 48 },
        ],
        bestIv: { iv: '0/15/15', cp: 2498 },
      },
      raid: {
        type: 'ice',
        rank: 20,
        moveset: { fast: ['Frost Breath'], charged: ['Blizzard'] },
      },
    },
  },
  lickitung: {
    name: 'Lickitung',
    dex: 108,
    types: ['normal'],
    evolution: [
      [
        { id: 'lickitung', name: 'Lickitung', rank: 175, current: true },
      ],
      [
        { id: 'lickilicky', name: 'Lickilicky', rank: 102, raidRank: 55, candy: 100, item: 'Sinnoh Stone' },
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
    name: 'Lokix',
    dex: 920,
    types: ['bug', 'dark'],
    evolution: [
      [
        { id: 'nymble', name: 'Nymble', raidRank: 105 },
      ],
      [
        { id: 'lokix', name: 'Lokix', rank: 266, raidRank: 45, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'bug',
      rank: 45,
      moveset: { fast: ['Bug Bite'], charged: ['Bug Buzz'] },
    },
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
    name: 'Machamp',
    dex: 68,
    types: ['fighting'],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'machop', name: 'Machop', rank: 495, raidRank: 115 },
      ],
      [
        { id: 'machoke', name: 'Machoke', rank: 236, raidRank: 68, candy: 25 },
      ],
      [
        {
          id: 'machamp',
          name: 'Machamp',
          rank: 175,
          raidRank: 15,
          current: true,
          candy: 100,
          tradeFree: true,
        },
      ],
    ],
    raid: {
      type: 'fighting',
      rank: 36,
      moveset: { fast: ['Counter'], charged: ['Dynamic Punch'] },
    },
    maxBattle: {
      tankRank: 47,
      healerRank: 43,
      dynamax: { type: 'fighting', rank: 5, strength: 0.78, move: 'Max Knuckle', fast: 'Counter' },
      gigantamax: { type: 'fighting', rank: 1, strength: 1, move: 'G-Max Chi Strike' },
    },
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
      raid: {
        type: 'fighting',
        rank: 15,
        moveset: { fast: ['Counter'], charged: ['Dynamic Punch'] },
      },
    },
  },
  malamar: {
    name: 'Malamar',
    dex: 687,
    types: ['dark', 'psychic'],
    megaForms: [
      {
        name: 'Mega',
        types: ['dark', 'psychic'],
        raid: {
          type: 'psychic',
          rank: 76,
          moveset: { fast: ['Psycho Cut'], charged: ['Psybeam'] },
        },
      },
    ],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'inkay', name: 'Inkay', raidRank: 149 },
      ],
      [
        { id: 'malamar', name: 'Malamar', rank: 43, raidRank: 90, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'psychic',
      rank: 102,
      moveset: { fast: ['Psycho Cut'], charged: ['Psybeam'] },
    },
    maxBattle: {
      tankRank: 50,
      healerRank: 46,
      dynamax: { type: 'flying', rank: 8, strength: 0.6, move: 'Max Airstream', fast: 'Peck' },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 43,
      moveset: { fast: ['Psywave'], charged: ['Foul Play', 'Superpower'] },
      beats: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
      ],
      bestIv: { iv: '0/15/9', cp: 1500 },
    },
    ultraLeague: {
      rank: 64,
      moveset: { fast: ['Psywave'], charged: ['Foul Play', 'Superpower'] },
      beats: [
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'jellicent', name: 'Jellicent', rank: 16, raidRank: 48 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
      ],
      losesTo: [
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
      ],
      bestIv: { iv: '3/15/15', cp: 2500 },
    },
    shadow: {
      greatLeague: {
        rank: 46,
        moveset: { fast: ['Psywave'], charged: ['Foul Play', 'Superpower'] },
        beats: [
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        ],
        losesTo: [
          { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        ],
        bestIv: { iv: '0/15/9', cp: 1500 },
      },
      ultraLeague: {
        rank: 56,
        moveset: { fast: ['Psywave'], charged: ['Foul Play', 'Superpower'] },
        beats: [
          { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
          { id: 'snorlax', name: 'Snorlax', rank: 3 },
          { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
        ],
        losesTo: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        ],
        bestIv: { iv: '3/15/15', cp: 2500 },
      },
      raid: {
        type: 'psychic',
        rank: 90,
        moveset: { fast: ['Psycho Cut'], charged: ['Psybeam'] },
      },
    },
  },
  mandibuzz: {
    name: 'Mandibuzz',
    dex: 630,
    types: ['dark', 'flying'],
    evolution: [
      [
        { id: 'vullaby', name: 'Vullaby', rank: 426, raidRank: 102 },
      ],
      [
        { id: 'mandibuzz', name: 'Mandibuzz', rank: 52, raidRank: 93, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'flying',
      rank: 93,
      moveset: { fast: ['Air Slash'], charged: ['Aerial Ace'] },
    },
    buddyKm: 5,
    greatLeague: {
      rank: 52,
      moveset: { fast: ['Snarl'], charged: ['Shadow Ball', 'Dark Pulse'] },
      beats: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
      ],
      losesTo: [
        { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      bestIv: { iv: '0/13/15', cp: 1498 },
    },
    ultraLeague: {
      rank: 141,
      moveset: { fast: ['Snarl'], charged: ['Shadow Ball', 'Dark Pulse'] },
      bestIv: { iv: '15/15/15', cp: 2417 },
    },
  },
  mantine: {
    name: 'Mantine',
    dex: 226,
    types: ['water', 'flying'],
    evolution: [
      [
        { id: 'mantyke', name: 'Mantyke', rank: 753, raidRank: 167 },
      ],
      [
        { id: 'mantine', name: 'Mantine', rank: 27, raidRank: 92, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'flying',
      rank: 92,
      moveset: { fast: ['Wing Attack'], charged: ['Aerial Ace'] },
    },
    buddyKm: 5,
    greatLeague: {
      rank: 27,
      moveset: { fast: ['Wing Attack'], charged: ['Twister', 'Water Pulse'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
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
    name: 'Marowak',
    dex: 105,
    types: ['ground'],
    evolution: [
      [
        { id: 'cubone', name: 'Cubone', rank: 945, raidRank: 113 },
      ],
      [
        { id: 'marowak', name: 'Marowak', rank: 20, raidRank: 53, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'ground',
      rank: 74,
      moveset: { fast: ['Mud Slap'], charged: ['Earthquake'] },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 20,
      moveset: { fast: ['Mud Slap'], charged: ['Bone Club', 'Rock Slide'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
      ],
      losesTo: [
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
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
          { id: 'clodsire', name: 'Clodsire', rank: 17, raidRank: 54 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'morpeko_full_belly', name: 'Morpeko (Full Belly)', rank: 53 },
        ],
        losesTo: [
          { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        ],
        bestIv: { iv: '0/14/14', cp: 1500 },
      },
      ultraLeague: {
        rank: 668,
        moveset: { fast: ['Mud Slap'], charged: ['Bone Club', 'Rock Slide'] },
        bestIv: { iv: '15/15/15', cp: 2075 },
      },
      raid: {
        type: 'ground',
        rank: 53,
        moveset: { fast: ['Mud Slap'], charged: ['Earthquake'] },
      },
    },
  },
  medicham: {
    name: 'Medicham',
    dex: 308,
    types: ['fighting', 'psychic'],
    megaForms: [
      {
        name: 'Mega',
        types: ['fighting', 'psychic'],
        raid: {
          type: 'psychic',
          rank: 53,
          moveset: { fast: ['Psycho Cut'], charged: ['Psychic'] },
        },
      },
    ],
    evolution: [
      [
        { id: 'meditite', name: 'Meditite', raidRank: 137 },
      ],
      [
        { id: 'medicham', name: 'Medicham', rank: 55, raidRank: 114, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'fighting',
      rank: 114,
      moveset: { fast: ['Counter'], charged: ['Dynamic Punch'] },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 55,
      moveset: { fast: ['Psycho Cut'], charged: ['Dynamic Punch', 'Ice Punch'] },
      beats: [
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
        { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
      ],
      bestIv: { iv: '5/15/15', cp: 1499 },
    },
  },
  melmetal: {
    name: 'Melmetal',
    dex: 809,
    types: ['steel'],
    legendary: true,
    evolution: [
      [
        { id: 'meltan', name: 'Meltan', rank: 1136, raidRank: 118, legendary: true },
      ],
      [
        {
          id: 'melmetal',
          name: 'Melmetal',
          rank: 1,
          raidRank: 39,
          legendary: true,
          current: true,
          candy: 400,
        },
      ],
    ],
    raid: {
      type: 'electric',
      rank: 39,
      moveset: { fast: ['Thunder Shock'], charged: ['Thunderbolt'] },
    },
    buddyKm: 20,
    specialMoves: ['Double Iron Bash'],
    greatLeague: {
      rank: 1,
      moveset: { fast: ['Thunder Shock'], charged: ['Double Iron Bash', 'Dynamic Punch'] },
      beats: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
      ],
      bestIv: { iv: '1/15/14', cp: 1499 },
    },
    ultraLeague: {
      rank: 5,
      moveset: { fast: ['Thunder Shock'], charged: ['Double Iron Bash', 'Dynamic Punch'] },
      beats: [
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      losesTo: [
        { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
      ],
      bestIv: { iv: '0/13/15', cp: 2495 },
    },
  },
  meowscarada: {
    name: 'Meowscarada',
    dex: 908,
    types: ['grass', 'dark'],
    evolution: [
      [
        { id: 'sprigatito', name: 'Sprigatito', raidRank: 50 },
      ],
      [
        { id: 'floragato', name: 'Floragato', rank: 839, raidRank: 39, candy: 25 },
      ],
      [
        { id: 'meowscarada', name: 'Meowscarada', rank: 462, raidRank: 23, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'fairy',
      rank: 23,
      moveset: { fast: ['Charm'], charged: ['Play Rough'] },
    },
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
    name: 'Mimikyu',
    dex: 778,
    types: ['ghost', 'fairy'],
    raid: {
      type: 'ghost',
      rank: 57,
      moveset: { fast: ['Shadow Claw'], charged: ['Shadow Sneak'] },
    },
    buddyKm: 5,
    greatLeague: {
      rank: 6,
      moveset: { fast: ['Shadow Claw'], charged: ['Shadow Sneak', 'Play Rough'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      losesTo: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
        { id: 'morpeko_full_belly', name: 'Morpeko (Full Belly)', rank: 53 },
      ],
      bestIv: { iv: '1/14/15', cp: 1500 },
    },
    ultraLeague: {
      rank: 10,
      moveset: { fast: ['Shadow Claw'], charged: ['Shadow Sneak', 'Play Rough'] },
      beats: [
        { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
        { id: 'jellicent', name: 'Jellicent', rank: 16, raidRank: 48 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      losesTo: [
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
      ],
      bestIv: { iv: '14/14/15', cp: 2497 },
    },
  },
  moltres: {
    name: 'Moltres',
    dex: 146,
    types: ['fire', 'flying'],
    legendary: true,
    maxForms: ['Dynamax'],
    raid: {
      type: 'flying',
      rank: 10,
      moveset: { fast: ['Wing Attack'], charged: ['Fly'] },
    },
    maxBattle: {
      tankRank: 35,
      healerRank: 35,
      dynamax: { type: 'flying', rank: 1, strength: 1, move: 'Max Airstream', fast: 'Wing Attack' },
    },
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
      raid: {
        type: 'flying',
        rank: 4,
        moveset: { fast: ['Wing Attack'], charged: ['Fly'] },
      },
    },
  },
  moltres_galarian: {
    name: 'Galarian Moltres',
    dex: 146,
    types: ['dark', 'flying'],
    legendary: true,
    raid: {
      type: 'flying',
      rank: 19,
      moveset: { fast: ['Wing Attack'], charged: ['Fly'] },
    },
    buddyKm: 20,
    greatLeague: {
      rank: 72,
      moveset: { fast: ['Sucker Punch'], charged: ['Brave Bird', 'Fly'] },
      beats: [
        { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
      ],
      losesTo: [
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
      ],
      bestIv: { iv: '0/13/12', cp: 1499 },
    },
    ultraLeague: {
      rank: 13,
      moveset: { fast: ['Sucker Punch'], charged: ['Brave Bird', 'Fly'] },
      beats: [
        { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13 },
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
        { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
      ],
      bestIv: { iv: '1/15/15', cp: 2497 },
    },
  },
  ninetales: {
    name: 'Ninetales',
    dex: 38,
    types: ['fire'],
    evolution: [
      [
        { id: 'vulpix', name: 'Vulpix', raidRank: 121 },
      ],
      [
        { id: 'ninetales', name: 'Ninetales', rank: 3, raidRank: 56, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'fire',
      rank: 62,
      moveset: { fast: ['Fire Spin'], charged: ['Overheat'] },
    },
    buddyKm: 3,
    specialMoves: ['Ember', 'Fire Blast', 'Flamethrower', 'Energy Ball'],
    greatLeague: {
      rank: 13,
      moveset: { fast: ['Ember'], charged: ['Weather Ball (Fire)', 'Energy Ball'] },
      beats: [
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      losesTo: [
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
      ],
      bestIv: { iv: '0/15/15', cp: 1495 },
    },
    ultraLeague: {
      rank: 34,
      moveset: { fast: ['Ember'], charged: ['Weather Ball (Fire)', 'Energy Ball'] },
      beats: [
        { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      losesTo: [
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
        { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13 },
      ],
      bestIv: { iv: '9/15/15', cp: 2493 },
    },
    shadow: {
      greatLeague: {
        rank: 3,
        moveset: { fast: ['Ember'], charged: ['Weather Ball (Fire)', 'Energy Ball'] },
        beats: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
          { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
          { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
          { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        ],
        bestIv: { iv: '0/15/15', cp: 1495 },
      },
      ultraLeague: {
        rank: 65,
        moveset: { fast: ['Ember'], charged: ['Weather Ball (Fire)', 'Energy Ball'] },
        beats: [
          { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        ],
        losesTo: [
          { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13 },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
          { id: 'snorlax', name: 'Snorlax', rank: 3 },
        ],
        bestIv: { iv: '9/15/15', cp: 2493 },
      },
      raid: {
        type: 'fire',
        rank: 56,
        moveset: { fast: ['Fire Spin'], charged: ['Overheat'] },
      },
    },
  },
  ninetales_alolan: {
    name: 'Alolan Ninetales',
    dex: 38,
    types: ['ice', 'fairy'],
    evolution: [
      [
        { id: 'vulpix_alolan', name: 'Alolan Vulpix', raidRank: 67 },
      ],
      [
        {
          id: 'ninetales_alolan',
          name: 'Alolan Ninetales',
          rank: 24,
          raidRank: 15,
          current: true,
          candy: 50,
        },
      ],
    ],
    raid: {
      type: 'fairy',
      rank: 25,
      moveset: { fast: ['Charm'], charged: ['Dazzling Gleam'] },
    },
    buddyKm: 3,
    specialMoves: ['Chilling Water'],
    greatLeague: {
      rank: 68,
      moveset: { fast: ['Powder Snow'], charged: ['Weather Ball (Ice)', 'Chilling Water'] },
      beats: [
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105 },
        { id: 'stunfisk', name: 'Stunfisk', rank: 21, raidRank: 76 },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      bestIv: { iv: '0/14/12', cp: 1500 },
    },
    ultraLeague: {
      rank: 24,
      moveset: { fast: ['Powder Snow'], charged: ['Weather Ball (Ice)', 'Chilling Water'] },
      beats: [
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, raidRank: 8, legendary: true },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
      ],
      losesTo: [
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      bestIv: { iv: '7/15/15', cp: 2497 },
    },
    shadow: {
      greatLeague: {
        rank: 73,
        moveset: { fast: ['Powder Snow'], charged: ['Weather Ball (Ice)', 'Chilling Water'] },
        beats: [
          { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
          { id: 'fearow', name: 'Fearow', rank: 26, raidRank: 51 },
          { id: 'stunfisk', name: 'Stunfisk', rank: 21, raidRank: 76 },
        ],
        losesTo: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        ],
        bestIv: { iv: '0/14/12', cp: 1500 },
      },
      ultraLeague: {
        rank: 30,
        moveset: { fast: ['Powder Snow'], charged: ['Weather Ball (Ice)', 'Chilling Water'] },
        beats: [
          { id: 'moltres_galarian', name: 'Galarian Moltres', rank: 13, raidRank: 19, legendary: true },
          { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
          { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, raidRank: 8, legendary: true },
        ],
        losesTo: [
          { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        ],
        bestIv: { iv: '7/15/15', cp: 2497 },
      },
      raid: {
        type: 'fairy',
        rank: 15,
        moveset: { fast: ['Charm'], charged: ['Dazzling Gleam'] },
      },
    },
  },
  numel: {
    name: 'Numel',
    dex: 322,
    types: ['fire', 'ground'],
    evolution: [
      [
        { id: 'numel', name: 'Numel', raidRank: 120, current: true },
      ],
      [
        { id: 'camerupt', name: 'Camerupt', rank: 229, raidRank: 55, candy: 50 },
      ],
    ],
    raid: {
      type: 'fire',
      rank: 136,
      moveset: { fast: ['Ember'], charged: ['Heat Wave'] },
    },
    buddyKm: 3,
    shadow: {
      raid: {
        type: 'fire',
        rank: 120,
        moveset: { fast: ['Ember'], charged: ['Heat Wave'] },
      },
    },
  },
  perrserker: {
    name: 'Perrserker',
    dex: 863,
    types: ['steel'],
    evolution: [
      [
        { id: 'meowth_galarian', name: 'Galarian Meowth', raidRank: 86 },
      ],
      [
        { id: 'perrserker', name: 'Perrserker', rank: 214, raidRank: 55, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'steel',
      rank: 55,
      moveset: { fast: ['Metal Claw'], charged: ['Iron Head'] },
    },
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
    name: 'Pyroar',
    dex: 668,
    types: ['fire', 'normal'],
    evolution: [
      [
        { id: 'litleo', name: 'Litleo', rank: 487, raidRank: 99 },
      ],
      [
        { id: 'pyroar', name: 'Pyroar', rank: 476, raidRank: 44, current: true, candy: 50, gender: 'male' },
      ],
    ],
    raid: {
      type: 'fire',
      rank: 44,
      moveset: { fast: ['Fire Fang'], charged: ['Overheat'] },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 678,
      moveset: { fast: ['Incinerate'], charged: ['Dark Pulse', 'Flame Charge'] },
      bestIv: { iv: '0/15/10', cp: 1500 },
    },
    ultraLeague: {
      rank: 476,
      moveset: { fast: ['Incinerate'], charged: ['Dark Pulse', 'Flame Charge'] },
      bestIv: { iv: '0/15/12', cp: 2500 },
    },
  },
  quagsire: {
    name: 'Quagsire',
    dex: 195,
    types: ['water', 'ground'],
    evolution: [
      [
        { id: 'wooper', name: 'Wooper', raidRank: 123 },
      ],
      [
        { id: 'quagsire', name: 'Quagsire', rank: 12, raidRank: 47, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'ground',
      rank: 72,
      moveset: { fast: ['Mud Shot'], charged: ['Earthquake'] },
    },
    buddyKm: 3,
    specialMoves: ['Aqua Tail'],
    greatLeague: {
      rank: 14,
      moveset: { fast: ['Mud Shot'], charged: ['Aqua Tail', 'Stone Edge'] },
      beats: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
      ],
      losesTo: [
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
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
          { id: 'stunfisk', name: 'Stunfisk', rank: 21, raidRank: 76 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
          { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        ],
        bestIv: { iv: '0/15/14', cp: 1499 },
      },
      ultraLeague: {
        rank: 424,
        moveset: { fast: ['Mud Shot'], charged: ['Aqua Tail', 'Stone Edge'] },
        bestIv: { iv: '15/15/15', cp: 2252 },
      },
      raid: {
        type: 'ground',
        rank: 47,
        moveset: { fast: ['Mud Shot'], charged: ['Earthquake'] },
      },
    },
  },
  quaquaval: {
    name: 'Quaquaval',
    dex: 914,
    types: ['water', 'fighting'],
    evolution: [
      [
        { id: 'quaxly', name: 'Quaxly', raidRank: 126 },
      ],
      [
        { id: 'quaxwell', name: 'Quaxwell', rank: 501, raidRank: 105, candy: 25 },
      ],
      [
        { id: 'quaquaval', name: 'Quaquaval', rank: 199, raidRank: 16, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'water',
      rank: 16,
      moveset: { fast: ['Water Gun'], charged: ['Hydro Cannon'] },
    },
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
  raboot: {
    name: 'Raboot',
    dex: 814,
    types: ['fire'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'scorbunny', name: 'Scorbunny', raidRank: 108 },
      ],
      [
        { id: 'raboot', name: 'Raboot', rank: 874, raidRank: 74, current: true, candy: 25 },
      ],
      [
        { id: 'cinderace', name: 'Cinderace', rank: 403, raidRank: 33, candy: 100 },
      ],
    ],
    raid: {
      type: 'fire',
      rank: 74,
      moveset: { fast: ['Fire Spin'], charged: ['Flamethrower'] },
    },
    maxBattle: {
      tankRank: 98,
      healerRank: 92,
      dynamax: { type: 'fire', rank: 14, strength: 0.57, move: 'Max Flare', fast: 'Fire Spin' },
    },
    buddyKm: 3,
    greatLeague: {
      rank: 874,
      moveset: { fast: ['Fire Spin'], charged: ['Flame Charge', 'Flamethrower'] },
      bestIv: { iv: '0/12/14', cp: 1499 },
    },
  },
  rhyperior: {
    name: 'Rhyperior',
    dex: 464,
    types: ['ground', 'rock'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'rhyhorn', name: 'Rhyhorn', rank: 906, raidRank: 77 },
      ],
      [
        { id: 'rhydon', name: 'Rhydon', rank: 813, raidRank: 12, candy: 25 },
      ],
      [
        {
          id: 'rhyperior',
          name: 'Rhyperior',
          rank: 485,
          raidRank: 3,
          current: true,
          candy: 100,
          item: 'Sinnoh Stone',
        },
      ],
    ],
    raid: {
      type: 'rock',
      rank: 11,
      moveset: { fast: ['Smack Down'], charged: ['Rock Wrecker'] },
    },
    maxBattle: {
      tankRank: 13,
      healerRank: 8,
      dynamax: { type: 'rock', rank: 1, strength: 1, move: 'Max Rockfall', fast: 'Smack Down' },
    },
    buddyKm: 3,
    specialMoves: ['Rock Wrecker'],
    greatLeague: {
      rank: 688,
      moveset: { fast: ['Mud Slap'], charged: ['Rock Wrecker', 'Drill Run'] },
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
        moveset: { fast: ['Mud Slap'], charged: ['Rock Wrecker', 'Drill Run'] },
        bestIv: { iv: '0/14/14', cp: 1500 },
      },
      ultraLeague: {
        rank: 497,
        moveset: { fast: ['Mud Slap'], charged: ['Drill Run', 'Rock Wrecker'] },
        bestIv: { iv: '0/14/14', cp: 2499 },
      },
      raid: {
        type: 'rock',
        rank: 3,
        moveset: { fast: ['Smack Down'], charged: ['Rock Wrecker'] },
      },
    },
  },
  rillaboom: {
    name: 'Rillaboom',
    dex: 812,
    types: ['grass'],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'grookey', name: 'Grookey', raidRank: 127 },
      ],
      [
        { id: 'thwackey', name: 'Thwackey', rank: 789, raidRank: 82, candy: 25 },
      ],
      [
        { id: 'rillaboom', name: 'Rillaboom', rank: 20, raidRank: 13, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'grass',
      rank: 13,
      moveset: { fast: ['Razor Leaf'], charged: ['Frenzy Plant'] },
    },
    maxBattle: {
      tankRank: 34,
      healerRank: 25,
      dynamax: { type: 'grass', rank: 3, strength: 0.78, move: 'Max Overgrowth', fast: 'Razor Leaf' },
      gigantamax: { type: 'grass', rank: 1, strength: 1, move: 'G-Max Drum Solo' },
    },
    buddyKm: 3,
    specialMoves: ['Frenzy Plant'],
    greatLeague: {
      rank: 36,
      moveset: { fast: ['Scratch'], charged: ['Drum Beating', 'Earth Power'] },
      beats: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'stunfisk', name: 'Stunfisk', rank: 21, raidRank: 76 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
      ],
      losesTo: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
      ],
      bestIv: { iv: '0/12/13', cp: 1500 },
    },
    ultraLeague: {
      rank: 20,
      moveset: { fast: ['Scratch'], charged: ['Drum Beating', 'Earth Power'] },
      beats: [
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
      ],
      losesTo: [
        { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
        { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, raidRank: 8, legendary: true },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      bestIv: { iv: '0/14/15', cp: 2495 },
    },
  },
  sableye: {
    name: 'Sableye',
    dex: 302,
    types: ['dark', 'ghost'],
    megaForms: [
      {
        name: 'Mega',
        types: ['dark', 'ghost'],
        raid: {
          type: 'ghost',
          rank: 71,
          moveset: { fast: ['Shadow Claw'], charged: ['Shadow Sneak'] },
        },
      },
    ],
    maxForms: ['Dynamax'],
    raid: {
      type: 'ghost',
      rank: 81,
      moveset: { fast: ['Shadow Claw'], charged: ['Shadow Sneak'] },
    },
    maxBattle: {
      tankRank: 104,
      healerRank: 113,
      dynamax: { type: 'ghost', rank: 7, strength: 0.44, move: 'Max Phantasm', fast: 'Shadow Claw' },
    },
    buddyKm: 5,
    greatLeague: {
      rank: 37,
      moveset: { fast: ['Shadow Claw'], charged: ['Foul Play', 'Power Gem'] },
      beats: [
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8, raidRank: 87 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
      ],
      bestIv: { iv: '0/15/15', cp: 1499 },
    },
    shadow: {
      greatLeague: {
        rank: 19,
        moveset: { fast: ['Shadow Claw'], charged: ['Foul Play', 'Drain Punch'] },
        beats: [
          { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8, raidRank: 87 },
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        ],
        losesTo: [
          { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        ],
        bestIv: { iv: '0/15/15', cp: 1499 },
      },
      raid: {
        type: 'ghost',
        rank: 76,
        moveset: { fast: ['Shadow Claw'], charged: ['Shadow Sneak'] },
      },
    },
  },
  scorbunny: {
    name: 'Scorbunny',
    dex: 813,
    types: ['fire'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'scorbunny', name: 'Scorbunny', raidRank: 108, current: true },
      ],
      [
        { id: 'raboot', name: 'Raboot', rank: 874, raidRank: 74, candy: 25 },
      ],
      [
        { id: 'cinderace', name: 'Cinderace', rank: 403, raidRank: 33, candy: 100 },
      ],
    ],
    raid: {
      type: 'fire',
      rank: 108,
      moveset: { fast: ['Fire Spin'], charged: ['Flamethrower'] },
    },
    maxBattle: {
      tankRank: 143,
      healerRank: 136,
      dynamax: { type: 'fire', rank: 19, strength: 0.45, move: 'Max Flare', fast: 'Fire Spin' },
    },
    buddyKm: 3,
  },
  snorlax: {
    name: 'Snorlax',
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
    maxBattle: {
      tankRank: 6,
      healerRank: 3,
      dynamax: { type: 'ghost', rank: 6, strength: 0.48, move: 'Max Phantasm', fast: 'Lick' },
    },
    buddyKm: 5,
    specialMoves: ['Yawn'],
    greatLeague: {
      rank: 28,
      moveset: { fast: ['Psywave'], charged: ['Body Slam', 'Earthquake'] },
      beats: [
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8, raidRank: 87 },
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
      ],
      bestIv: { iv: '1/15/14', cp: 1500 },
    },
    ultraLeague: {
      rank: 11,
      moveset: { fast: ['Psywave'], charged: ['Body Slam', 'Earthquake'] },
      beats: [
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
      ],
      losesTo: [
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'zygarde_complete', name: 'Zygarde (Complete Forme)', rank: 8, raidRank: 47, legendary: true },
        { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
      ],
      bestIv: { iv: '0/12/15', cp: 2499 },
    },
    shadow: {
      greatLeague: {
        rank: 40,
        moveset: { fast: ['Psywave'], charged: ['Body Slam', 'Superpower'] },
        beats: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
          { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111 },
        ],
        losesTo: [
          { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        ],
        bestIv: { iv: '1/15/14', cp: 1500 },
      },
      ultraLeague: {
        rank: 3,
        moveset: { fast: ['Psywave'], charged: ['Body Slam', 'Earthquake'] },
        beats: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
          { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
        ],
        losesTo: [
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
          { id: 'moltres_galarian', name: 'Galarian Moltres', rank: 13, raidRank: 19, legendary: true },
        ],
        bestIv: { iv: '0/12/15', cp: 2499 },
      },
    },
  },
  staraptor: {
    name: 'Staraptor',
    dex: 398,
    types: ['normal', 'flying'],
    megaForms: [
      {
        name: 'Mega',
        types: ['fighting', 'flying'],
        raid: {
          type: 'flying',
          rank: 3,
          moveset: { fast: ['Gust'], charged: ['Fly'] },
        },
      },
    ],
    evolution: [
      [
        { id: 'starly', name: 'Starly' },
      ],
      [
        { id: 'staravia', name: 'Staravia', rank: 644, raidRank: 81, candy: 25 },
      ],
      [
        { id: 'staraptor', name: 'Staraptor', rank: 464, raidRank: 9, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'flying',
      rank: 15,
      moveset: { fast: ['Gust'], charged: ['Fly'] },
    },
    buddyKm: 1,
    specialMoves: ['Gust'],
    greatLeague: {
      rank: 713,
      moveset: { fast: ['Wing Attack'], charged: ['Close Combat', 'Fly'] },
      bestIv: { iv: '0/13/13', cp: 1500 },
    },
    ultraLeague: {
      rank: 505,
      moveset: { fast: ['Wing Attack'], charged: ['Close Combat', 'Fly'] },
      bestIv: { iv: '2/15/14', cp: 2500 },
    },
    shadow: {
      greatLeague: {
        rank: 757,
        moveset: { fast: ['Wing Attack'], charged: ['Close Combat', 'Fly'] },
        bestIv: { iv: '0/13/13', cp: 1500 },
      },
      ultraLeague: {
        rank: 464,
        moveset: { fast: ['Wing Attack'], charged: ['Close Combat', 'Fly'] },
        bestIv: { iv: '2/15/14', cp: 2500 },
      },
      raid: {
        type: 'flying',
        rank: 9,
        moveset: { fast: ['Gust'], charged: ['Fly'] },
      },
    },
  },
  stunfisk: {
    name: 'Stunfisk',
    dex: 618,
    types: ['ground', 'electric'],
    raid: {
      type: 'electric',
      rank: 76,
      moveset: { fast: ['Thunder Shock'], charged: ['Discharge'] },
    },
    buddyKm: 5,
    greatLeague: {
      rank: 21,
      moveset: { fast: ['Thunder Shock'], charged: ['Discharge', 'Mud Bomb'] },
      beats: [
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
      ],
      losesTo: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
      ],
      bestIv: { iv: '0/12/15', cp: 1498 },
    },
    ultraLeague: {
      rank: 136,
      moveset: { fast: ['Thunder Shock'], charged: ['Discharge', 'Mud Bomb'] },
      bestIv: { iv: '15/15/15', cp: 2445 },
    },
  },
  stunfisk_galarian: {
    name: 'Galarian Stunfisk',
    dex: 618,
    types: ['ground', 'steel'],
    raid: {
      type: 'ground',
      rank: 65,
      moveset: { fast: ['Mud Shot'], charged: ['Earthquake'] },
    },
    buddyKm: 5,
    greatLeague: {
      rank: 90,
      moveset: { fast: ['Mud Shot'], charged: ['Rock Slide', 'Earthquake'] },
      beats: [
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      losesTo: [
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
      ],
      bestIv: { iv: '0/12/15', cp: 1498 },
    },
    ultraLeague: {
      rank: 131,
      moveset: { fast: ['Mud Shot'], charged: ['Rock Slide', 'Earthquake'] },
      bestIv: { iv: '15/15/15', cp: 2445 },
    },
  },
  swampert: {
    name: 'Swampert',
    dex: 260,
    types: ['water', 'ground'],
    megaForms: [
      {
        name: 'Mega',
        types: ['water', 'ground'],
        raid: {
          type: 'water',
          rank: 4,
          moveset: { fast: ['Water Gun'], charged: ['Hydro Cannon'] },
        },
      },
    ],
    evolution: [
      [
        { id: 'mudkip', name: 'Mudkip' },
      ],
      [
        { id: 'marshtomp', name: 'Marshtomp', rank: 411, raidRank: 63, candy: 25 },
      ],
      [
        { id: 'swampert', name: 'Swampert', rank: 54, raidRank: 11, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'ground',
      rank: 33,
      moveset: { fast: ['Mud Shot'], charged: ['Earthquake'] },
    },
    buddyKm: 3,
    specialMoves: ['Hydro Cannon'],
    greatLeague: {
      rank: 78,
      moveset: { fast: ['Mud Shot'], charged: ['Hydro Cannon', 'Earthquake'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
      ],
      losesTo: [
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
      ],
      bestIv: { iv: '0/14/14', cp: 1498 },
    },
    ultraLeague: {
      rank: 54,
      moveset: { fast: ['Mud Shot'], charged: ['Hydro Cannon', 'Earthquake'] },
      beats: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'empoleon', name: 'Empoleon', rank: 7, raidRank: 12 },
        { id: 'snorlax', name: 'Snorlax', rank: 3 },
      ],
      losesTo: [
        { id: 'virizion', name: 'Virizion', rank: 6, raidRank: 33, legendary: true },
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'jellicent', name: 'Jellicent', rank: 16, raidRank: 48 },
      ],
      bestIv: { iv: '0/14/13', cp: 2499 },
    },
    shadow: {
      greatLeague: {
        rank: 79,
        moveset: { fast: ['Mud Shot'], charged: ['Hydro Cannon', 'Earthquake'] },
        beats: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
        ],
        losesTo: [
          { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
          { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        ],
        bestIv: { iv: '0/14/14', cp: 1498 },
      },
      ultraLeague: {
        rank: 89,
        moveset: { fast: ['Mud Shot'], charged: ['Hydro Cannon', 'Earthquake'] },
        beats: [
          { id: 'skeledirge', name: 'Skeledirge', rank: 21, raidRank: 26 },
          { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        ],
        losesTo: [
          { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
          { id: 'snorlax', name: 'Snorlax', rank: 3 },
          { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        ],
        bestIv: { iv: '0/14/13', cp: 2499 },
      },
      raid: {
        type: 'water',
        rank: 11,
        moveset: { fast: ['Water Gun'], charged: ['Hydro Cannon'] },
      },
    },
  },
  thievul: {
    name: 'Thievul',
    dex: 828,
    types: ['dark'],
    evolution: [
      [
        { id: 'nickit', name: 'Nickit', raidRank: 185 },
      ],
      [
        { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'dark',
      rank: 105,
      moveset: { fast: ['Snarl'], charged: ['Night Slash'] },
    },
    buddyKm: 1,
    specialMoves: ['Icy Wind'],
    greatLeague: {
      rank: 15,
      moveset: { fast: ['Sucker Punch'], charged: ['Night Slash', 'Icy Wind'] },
      beats: [
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8, raidRank: 87 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
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
    name: 'Tinkaton',
    dex: 959,
    types: ['fairy', 'steel'],
    evolution: [
      [
        { id: 'tinkatink', name: 'Tinkatink', raidRank: 49 },
      ],
      [
        { id: 'tinkatuff', name: 'Tinkatuff', rank: 309, raidRank: 44, candy: 25 },
      ],
      [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'fairy',
      rank: 27,
      moveset: { fast: ['Fairy Wind'], charged: ['Play Rough'] },
    },
    buddyKm: 3,
    specialMoves: ['Gigaton Hammer'],
    greatLeague: {
      rank: 5,
      moveset: { fast: ['Fairy Wind'], charged: ['Gigaton Hammer', 'Bulldoze'] },
      beats: [
        { id: 'thievul', name: 'Thievul', rank: 15, raidRank: 105 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
      ],
      losesTo: [
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
      ],
      bestIv: { iv: '1/14/14', cp: 1497 },
    },
    ultraLeague: {
      rank: 1,
      moveset: { fast: ['Fairy Wind'], charged: ['Gigaton Hammer', 'Bulldoze'] },
      beats: [
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'giratina_altered', name: 'Giratina (Altered)', rank: 17, raidRank: 8, legendary: true },
        { id: 'dusknoir', name: 'Shadow Dusknoir', rank: 25, raidRank: 30 },
      ],
      losesTo: [
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'feraligatr', name: 'Feraligatr', rank: 14, raidRank: 13 },
      ],
      bestIv: { iv: '13/15/15', cp: 2499 },
    },
  },
  torterra: {
    name: 'Torterra',
    dex: 389,
    types: ['grass', 'ground'],
    evolution: [
      [
        { id: 'turtwig', name: 'Turtwig', rank: 1122, raidRank: 118 },
      ],
      [
        { id: 'grotle', name: 'Grotle', rank: 710, raidRank: 60, candy: 25 },
      ],
      [
        { id: 'torterra', name: 'Torterra', rank: 277, raidRank: 15, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'grass',
      rank: 31,
      moveset: { fast: ['Razor Leaf'], charged: ['Frenzy Plant'] },
    },
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
      raid: {
        type: 'grass',
        rank: 15,
        moveset: { fast: ['Razor Leaf'], charged: ['Frenzy Plant'] },
      },
    },
  },
  toxapex: {
    name: 'Toxapex',
    dex: 748,
    types: ['poison', 'water'],
    evolution: [
      [
        { id: 'mareanie', name: 'Mareanie', raidRank: 82 },
      ],
      [
        { id: 'toxapex', name: 'Toxapex', rank: 115, raidRank: 57, current: true, candy: 50 },
      ],
    ],
    raid: {
      type: 'poison',
      rank: 57,
      moveset: { fast: ['Poison Jab'], charged: ['Gunk Shot'] },
    },
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
    name: 'Trevenant',
    dex: 709,
    types: ['ghost', 'grass'],
    evolution: [
      [
        { id: 'phantump', name: 'Phantump', raidRank: 68 },
      ],
      [
        {
          id: 'trevenant',
          name: 'Trevenant',
          rank: 147,
          raidRank: 17,
          current: true,
          candy: 200,
          tradeFree: true,
        },
      ],
    ],
    raid: {
      type: 'ghost',
      rank: 29,
      moveset: { fast: ['Shadow Claw'], charged: ['Shadow Ball'] },
    },
    buddyKm: 5,
    greatLeague: {
      rank: 359,
      moveset: { fast: ['Shadow Claw'], charged: ['Shadow Ball', 'Seed Bomb'] },
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
      raid: {
        type: 'ghost',
        rank: 17,
        moveset: { fast: ['Shadow Claw'], charged: ['Shadow Ball'] },
      },
    },
  },
  tsareena: {
    name: 'Tsareena',
    dex: 763,
    types: ['grass'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'bounsweet', name: 'Bounsweet', raidRank: 56 },
      ],
      [
        { id: 'steenee', name: 'Steenee', raidRank: 55, candy: 25 },
      ],
      [
        { id: 'tsareena', name: 'Tsareena', rank: 627, raidRank: 24, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'grass',
      rank: 24,
      moveset: { fast: ['Magical Leaf'], charged: ['Grass Knot'] },
    },
    maxBattle: {
      tankRank: 45,
      healerRank: 54,
      dynamax: { type: 'grass', rank: 4, strength: 0.73, move: 'Max Overgrowth', fast: 'Razor Leaf' },
    },
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
    name: 'Tyrantrum',
    dex: 697,
    types: ['rock', 'dragon'],
    evolution: [
      [
        { id: 'tyrunt', name: 'Tyrunt', rank: 714, raidRank: 81 },
      ],
      [
        {
          id: 'tyrantrum',
          name: 'Tyrantrum',
          rank: 574,
          raidRank: 4,
          current: true,
          candy: 50,
          time: 'day',
        },
      ],
    ],
    raid: {
      type: 'rock',
      rank: 10,
      moveset: { fast: ['Rock Throw'], charged: ['Meteor Beam'] },
    },
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
        moveset: { fast: ['Dragon Tail'], charged: ['Rock Tomb', 'Crunch'] },
        bestIv: { iv: '0/15/12', cp: 1498 },
      },
      ultraLeague: {
        rank: 699,
        moveset: { fast: ['Dragon Tail'], charged: ['Meteor Beam', 'Rock Tomb'] },
        bestIv: { iv: '0/12/15', cp: 2497 },
      },
      raid: {
        type: 'rock',
        rank: 4,
        moveset: { fast: ['Rock Throw'], charged: ['Meteor Beam'] },
      },
    },
  },
  umbreon: {
    name: 'Umbreon',
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
          raidRank: 94,
          current: true,
          candy: 25,
          buddyKm: 10,
          time: 'night',
          quest: true,
        },
      ],
    ],
    raid: {
      type: 'dark',
      rank: 94,
      moveset: { fast: ['Snarl'], charged: ['Foul Play'] },
    },
    maxBattle: {
      tankRank: 10,
      healerRank: 13,
      dynamax: { type: 'dark', rank: 17, strength: 0.45, move: 'Max Darkness', fast: 'Feint Attack' },
    },
    buddyKm: 5,
    specialMoves: ['Last Resort', 'Psychic'],
    greatLeague: {
      rank: 29,
      moveset: { fast: ['Snarl'], charged: ['Dark Pulse', 'Last Resort'] },
      beats: [
        { id: 'corsola_galarian', name: 'Galarian Corsola', rank: 8, raidRank: 87 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
      ],
      losesTo: [
        { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
        { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
        { id: 'melmetal', name: 'Melmetal', rank: 1, raidRank: 39, legendary: true },
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
    name: 'Venusaur',
    dex: 3,
    types: ['grass', 'poison'],
    megaForms: [
      {
        name: 'Mega',
        types: ['grass', 'poison'],
        raid: {
          type: 'grass',
          rank: 3,
          moveset: { fast: ['Vine Whip'], charged: ['Frenzy Plant'] },
        },
      },
    ],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'bulbasaur', name: 'Bulbasaur', rank: 1070, raidRank: 103 },
      ],
      [
        { id: 'ivysaur', name: 'Ivysaur', rank: 793, raidRank: 58, candy: 25 },
      ],
      [
        { id: 'venusaur', name: 'Venusaur', rank: 217, raidRank: 8, current: true, candy: 100 },
      ],
    ],
    raid: {
      type: 'grass',
      rank: 22,
      moveset: { fast: ['Vine Whip'], charged: ['Frenzy Plant'] },
    },
    maxBattle: {
      tankRank: 37,
      healerRank: 47,
      dynamax: { type: 'grass', rank: 6, strength: 0.65, move: 'Max Overgrowth', fast: 'Razor Leaf' },
      gigantamax: { type: 'grass', rank: 2, strength: 0.84, move: 'G-Max Vine Lash' },
    },
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
      raid: {
        type: 'grass',
        rank: 8,
        moveset: { fast: ['Vine Whip'], charged: ['Frenzy Plant'] },
      },
    },
  },
  vigoroth: {
    name: 'Vigoroth',
    dex: 288,
    types: ['normal'],
    evolution: [
      [
        { id: 'slakoth', name: 'Slakoth' },
      ],
      [
        { id: 'vigoroth', name: 'Vigoroth', rank: 22, raidRank: 111, current: true, candy: 25 },
      ],
      [
        { id: 'slaking', name: 'Slaking', rank: 848, candy: 100 },
      ],
    ],
    raid: {
      type: 'fighting',
      rank: 121,
      moveset: { fast: ['Counter'], charged: ['Brick Break'] },
    },
    buddyKm: 5,
    greatLeague: {
      rank: 22,
      moveset: { fast: ['Scratch'], charged: ['Body Slam', 'Bulldoze'] },
      beats: [
        { id: 'ninetales', name: 'Shadow Ninetales', rank: 3, raidRank: 56 },
        { id: 'florges', name: 'Florges', rank: 11, raidRank: 13 },
        { id: 'mimikyu', name: 'Mimikyu', rank: 6, raidRank: 57 },
      ],
      losesTo: [
        { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
        { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
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
        moveset: { fast: ['Scratch'], charged: ['Rock Slide', 'Brick Break'] },
        beats: [
          { id: 'altaria', name: 'Altaria', rank: 2, raidRank: 64 },
          { id: 'quagsire', name: 'Shadow Quagsire', rank: 12, raidRank: 47 },
          { id: 'corviknight', name: 'Corviknight', rank: 2, raidRank: 35 },
        ],
        losesTo: [
          { id: 'tinkaton', name: 'Tinkaton', rank: 1, raidRank: 27 },
          { id: 'cramorant', name: 'Cramorant', rank: 4, raidRank: 57 },
          { id: 'sableye', name: 'Shadow Sableye', rank: 19, raidRank: 76 },
        ],
        bestIv: { iv: '1/15/15', cp: 1499 },
      },
      ultraLeague: {
        rank: 555,
        moveset: { fast: ['Scratch'], charged: ['Body Slam', 'Rock Slide'] },
        bestIv: { iv: '15/15/15', cp: 2225 },
      },
      raid: {
        type: 'fighting',
        rank: 111,
        moveset: { fast: ['Counter'], charged: ['Brick Break'] },
      },
    },
  },
  whimsicott: {
    name: 'Whimsicott',
    dex: 547,
    types: ['grass', 'fairy'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'cottonee', name: 'Cottonee', raidRank: 155 },
      ],
      [
        {
          id: 'whimsicott',
          name: 'Whimsicott',
          rank: 379,
          raidRank: 33,
          current: true,
          candy: 50,
          item: 'Sun Stone',
        },
      ],
    ],
    raid: {
      type: 'fairy',
      rank: 33,
      moveset: { fast: ['Charm'], charged: ['Moonblast'] },
    },
    maxBattle: {
      tankRank: 76,
      healerRank: 85,
      dynamax: { type: 'fairy', rank: 7, strength: 0.71, move: 'Max Starfall', fast: 'Charm' },
    },
    buddyKm: 1,
    greatLeague: {
      rank: 379,
      moveset: { fast: ['Fairy Wind'], charged: ['Moonblast', 'Seed Bomb'] },
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
  'Air Slash': 'flying',
  'Aqua Tail': 'water',
  Astonish: 'ghost',
  'Aura Sphere': 'fighting',
  Avalanche: 'ice',
  Bite: 'dark',
  'Blast Burn': 'fire',
  'Blaze Kick': 'fire',
  Blizzard: 'ice',
  'Body Slam': 'normal',
  'Bone Club': 'ground',
  'Brave Bird': 'flying',
  'Brick Break': 'fighting',
  Brine: 'water',
  'Brutal Swing': 'dark',
  Bubble: 'water',
  'Bug Bite': 'bug',
  'Bug Buzz': 'bug',
  Bulldoze: 'ground',
  'Bullet Seed': 'grass',
  Charm: 'fairy',
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
  'Fire Fang': 'fire',
  'Fire Punch': 'fire',
  'Fire Spin': 'fire',
  'Flame Charge': 'fire',
  Flamethrower: 'fire',
  'Flash Cannon': 'steel',
  Fly: 'flying',
  'Force Palm': 'fighting',
  'Foul Play': 'dark',
  'Frenzy Plant': 'grass',
  'Frost Breath': 'ice',
  'Future Sight': 'psychic',
  'Gigaton Hammer': 'steel',
  'Glaive Rush': 'dragon',
  'Grass Knot': 'grass',
  'Gunk Shot': 'poison',
  Gust: 'flying',
  'Gyro Ball': 'steel',
  'Heat Wave': 'fire',
  'Heavy Slam': 'steel',
  Hex: 'ghost',
  'High Jump Kick': 'fighting',
  'Hydro Cannon': 'water',
  'Hydro Pump': 'water',
  'Ice Beam': 'ice',
  'Ice Fang': 'ice',
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
  'Metal Claw': 'steel',
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
  Poltergeist: 'ghost',
  'Powder Snow': 'ice',
  'Power Gem': 'rock',
  'Power Whip': 'grass',
  Psybeam: 'psychic',
  Psychic: 'psychic',
  'Psycho Boost': 'psychic',
  'Psycho Cut': 'psychic',
  Psyshock: 'psychic',
  Psywave: 'psychic',
  'Pyro Ball': 'fire',
  'Quick Attack': 'normal',
  'Rage Fist': 'ghost',
  'Razor Leaf': 'grass',
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
  'Sky Attack': 'flying',
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
  'Zap Cannon': 'electric',
  'Zen Headbutt': 'psychic',
};
