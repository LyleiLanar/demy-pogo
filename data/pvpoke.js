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
// beats / losesTo: a legfontosabb nyert és vesztett párharcok
// PVPOKE_MOVE_TYPES: az ajánlott mozdulatok típusa (a PvPoke-szettekből és a pokemon.js-ből)

const PVPOKE_DATE = '2026. 10. 01.';

const PVPOKE = {
  aegislash_shield: {
    dex: 681,
    types: ['steel', 'ghost'],
    evolution: [
      [
        { id: 'honedge', name: 'Honedge', rank: 864 },
      ],
      [
        { id: 'doublade', name: 'Doublade', rank: 74, candy: 25 },
      ],
      [
        { id: 'aegislash_shield', name: 'Aegislash (Shield)', current: true, rank: 80, candy: 100 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 80,
      moveset: { fast: ['Psycho Cut'], charged: ['Shadow Ball', 'Gyro Ball'] },
      beats: ['Florges', 'Corviknight', 'Melmetal'],
      losesTo: ['Shadow Sableye', 'Shadow Ninetales', 'Mimikyu'],
    },
    ultraLeague: { rank: 601 },
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
        { id: 'kadabra', name: 'Kadabra', rank: 1096, candy: 25 },
      ],
      [
        { id: 'alakazam', name: 'Alakazam', current: true, rank: 656, candy: 100, tradeFree: true },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Counter', 'Dazzling Gleam', 'Psychic'],
    greatLeague: { rank: 919 },
    ultraLeague: { rank: 679 },
    shadow: {
      greatLeague: { rank: 837 },
      ultraLeague: { rank: 656 },
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
        { id: 'ninetales_alolan', name: 'Alolan Ninetales', current: true, rank: 25, candy: 50 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Chilling Water'],
    greatLeague: {
      rank: 68,
      moveset: { fast: ['Powder Snow'], charged: ['Weather Ball (Ice)', 'Chilling Water'] },
      beats: ['Altaria', 'Thievul', 'Stunfisk'],
      losesTo: ['Shadow Ninetales', 'Melmetal', 'Tinkaton'],
    },
    ultraLeague: {
      rank: 25,
      moveset: { fast: ['Powder Snow'], charged: ['Weather Ball (Ice)', 'Chilling Water'] },
      beats: ['Zygarde (Complete Forme)', 'Giratina (Altered)', 'Snorlax'],
      losesTo: ['Empoleon', 'Tinkaton', 'Corviknight'],
    },
    shadow: {
      greatLeague: {
        rank: 73,
        moveset: { fast: ['Powder Snow'], charged: ['Weather Ball (Ice)', 'Chilling Water'] },
        beats: ['Altaria', 'Fearow', 'Stunfisk'],
        losesTo: ['Melmetal', 'Shadow Ninetales', 'Tinkaton'],
      },
      ultraLeague: {
        rank: 30,
        moveset: { fast: ['Powder Snow'], charged: ['Weather Ball (Ice)', 'Chilling Water'] },
        beats: ['Galarian Moltres', 'Zygarde (Complete Forme)', 'Giratina (Altered)'],
        losesTo: ['Empoleon', 'Tinkaton', 'Mimikyu'],
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
        { id: 'altaria', name: 'Altaria', current: true, rank: 2, candy: 400 },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Moonblast'],
    greatLeague: {
      rank: 2,
      moveset: { fast: ['Dragon Breath'], charged: ['Moonblast', 'Flamethrower'] },
      beats: ['Shadow Ninetales', 'Shadow Sableye', 'Shadow Quagsire'],
      losesTo: ['Mimikyu', 'Thievul', 'Tinkaton'],
    },
    ultraLeague: { rank: 272 },
    shadow: {
      greatLeague: {
        rank: 9,
        moveset: { fast: ['Dragon Breath'], charged: ['Moonblast', 'Flamethrower'] },
        beats: ['Shadow Quagsire', 'Corviknight', 'Shadow Ninetales'],
        losesTo: ['Tinkaton', 'Mimikyu', 'Melmetal'],
      },
      ultraLeague: { rank: 306 },
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
        { id: 'flaaffy', name: 'Flaaffy', rank: 898, candy: 25 },
      ],
      [
        { id: 'ampharos', name: 'Ampharos', current: true, rank: 52, candy: 100 },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Dragon Pulse'],
    greatLeague: { rank: 217 },
    ultraLeague: {
      rank: 52,
      moveset: { fast: ['Volt Switch'], charged: ['Brutal Swing', 'Trailblaze'] },
      beats: ['Feraligatr', 'Empoleon', 'Jellicent'],
      losesTo: ['Zygarde (Complete Forme)', 'Virizion', 'Snorlax'],
    },
    shadow: {
      greatLeague: { rank: 219 },
      ultraLeague: {
        rank: 55,
        moveset: { fast: ['Volt Switch'], charged: ['Brutal Swing', 'Trailblaze'] },
        beats: ['Empoleon', 'Jellicent', 'Feraligatr'],
        losesTo: ['Zygarde (Complete Forme)', 'Mimikyu', 'Tinkaton'],
      },
    },
  },
  annihilape: {
    dex: 979,
    types: ['fighting', 'ghost'],
    evolution: [
      [
        { id: 'mankey', name: 'Mankey', rank: 789 },
      ],
      [
        { id: 'primeape', name: 'Primeape', rank: 247, candy: 50 },
      ],
      [
        { id: 'annihilape', name: 'Annihilape', current: true, rank: 31, candy: 100, quest: true },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Rage Fist'],
    greatLeague: {
      rank: 31,
      moveset: { fast: ['Low Kick'], charged: ['Rage Fist', 'Ice Punch'] },
      beats: ['Thievul', 'Melmetal', 'Vigoroth'],
      losesTo: ['Mimikyu', 'Cramorant', 'Shadow Sableye'],
    },
    ultraLeague: {
      rank: 59,
      moveset: { fast: ['Low Kick'], charged: ['Rage Fist', 'Ice Punch'] },
      beats: ['Blastoise', 'Zygarde (Complete Forme)', 'Virizion'],
      losesTo: ['Tinkaton', 'Florges', 'Snorlax'],
    },
    shadow: {
      greatLeague: {
        rank: 38,
        moveset: { fast: ['Low Kick'], charged: ['Rage Fist', 'Ice Punch'] },
        beats: ['Thievul', 'Shadow Quagsire', 'Vigoroth'],
        losesTo: ['Mimikyu', 'Cramorant', 'Tinkaton'],
      },
      ultraLeague: {
        rank: 74,
        moveset: { fast: ['Low Kick'], charged: ['Rage Fist', 'Ice Punch'] },
        beats: ['Melmetal', 'Blastoise', 'Corviknight'],
        losesTo: ['Mimikyu', 'Florges', 'Tinkaton'],
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
        { id: 'araquanid', name: 'Araquanid', current: true, rank: 16, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 16,
      moveset: { fast: ['Infestation'], charged: ['Water Pulse', 'Mirror Coat'] },
      beats: ['Shadow Ninetales', 'Thievul', 'Shadow Sableye'],
      losesTo: ['Cramorant', 'Altaria', 'Mimikyu'],
    },
    ultraLeague: { rank: 557 },
    shadow: {
      greatLeague: {
        rank: 29,
        moveset: { fast: ['Infestation'], charged: ['Water Pulse', 'Mirror Coat'] },
        beats: ['Shadow Ninetales', 'Tinkaton', 'Shadow Sableye'],
        losesTo: ['Corviknight', 'Galarian Corsola', 'Cramorant'],
      },
      ultraLeague: { rank: 558 },
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
        { id: 'azumarill', name: 'Azumarill', current: true, rank: 32, candy: 25 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 32,
      moveset: { fast: ['Bubble'], charged: ['Ice Beam', 'Play Rough'] },
      beats: ['Altaria', 'Shadow Sableye', 'Shadow Quagsire'],
      losesTo: ['Mimikyu', 'Melmetal', 'Tinkaton'],
    },
    ultraLeague: { rank: 813 },
  },
  bastiodon: {
    dex: 411,
    types: ['rock', 'steel'],
    evolution: [
      [
        { id: 'shieldon', name: 'Shieldon' },
      ],
      [
        { id: 'bastiodon', name: 'Bastiodon', current: true, rank: 168, candy: 50 },
      ],
    ],
    buddyKm: 5,
    greatLeague: { rank: 168 },
    ultraLeague: { rank: 833 },
    shadow: {
      greatLeague: { rank: 310 },
      ultraLeague: { rank: 836 },
    },
  },
  baxcalibur: {
    dex: 998,
    types: ['dragon', 'ice'],
    evolution: [
      [
        { id: 'frigibax', name: 'Frigibax', rank: 631 },
      ],
      [
        { id: 'arctibax', name: 'Arctibax', rank: 301, candy: 25 },
      ],
      [
        { id: 'baxcalibur', name: 'Baxcalibur', current: true, rank: 343, candy: 100 },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Glaive Rush'],
    greatLeague: { rank: 501 },
    ultraLeague: { rank: 343 },
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
        { id: 'combusken', name: 'Combusken', rank: 615, candy: 25 },
      ],
      [
        { id: 'blaziken', name: 'Blaziken', current: true, rank: 170, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Blast Burn', 'Stone Edge'],
    greatLeague: { rank: 286 },
    ultraLeague: { rank: 175 },
    shadow: {
      greatLeague: { rank: 239 },
      ultraLeague: { rank: 170 },
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
        { id: 'chansey', name: 'Chansey', rank: 607, candy: 25, buddyKm: 15, quest: true },
      ],
      [
        { id: 'blissey', name: 'Blissey', current: true, rank: 632, candy: 50 },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Wild Charge'],
    greatLeague: { rank: 928 },
    ultraLeague: { rank: 632 },
  },
  carbink: {
    dex: 703,
    types: ['rock', 'fairy'],
    buddyKm: 5,
    greatLeague: {
      rank: 46,
      moveset: { fast: ['Rock Throw'], charged: ['Rock Slide', 'Moonblast'] },
      beats: ['Altaria', 'Shadow Ninetales', 'Vigoroth'],
      losesTo: ['Tinkaton', 'Melmetal', 'Shadow Quagsire'],
    },
    ultraLeague: { rank: 815 },
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
        { id: 'charmeleon', name: 'Charmeleon', rank: 540, candy: 25 },
      ],
      [
        { id: 'charizard', name: 'Charizard', current: true, rank: 103, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Ember', 'Wing Attack', 'Blast Burn', 'Flamethrower', 'Dragon Breath'],
    greatLeague: { rank: 258 },
    ultraLeague: { rank: 103 },
    shadow: {
      greatLeague: { rank: 201 },
      ultraLeague: { rank: 125 },
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
        { id: 'charjabug', name: 'Charjabug', current: true, rank: 41, candy: 25 },
      ],
      [
        { id: 'vikavolt', name: 'Vikavolt', rank: 305, candy: 100, item: 'Magnetic Lure' },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Volt Switch'],
    greatLeague: {
      rank: 41,
      moveset: { fast: ['Volt Switch'], charged: ['X-Scissor', 'Discharge'] },
      beats: ['Cramorant', 'Corviknight', 'Melmetal'],
      losesTo: ['Shadow Ninetales', 'Mimikyu', 'Altaria'],
    },
    shadow: {
      greatLeague: {
        rank: 47,
        moveset: { fast: ['Volt Switch'], charged: ['X-Scissor', 'Discharge'] },
        beats: ['Corviknight', 'Cramorant', 'Melmetal'],
        losesTo: ['Shadow Ninetales', 'Shadow Sableye', 'Mimikyu'],
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
        { id: 'cherrim_overcast', name: 'Cherrim (Overcast)', current: true, rank: 830, candy: 50 },
      ],
    ],
    buddyKm: 1,
    greatLeague: { rank: 1112 },
    ultraLeague: { rank: 830 },
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
        { id: 'raboot', name: 'Raboot', rank: 869, candy: 25 },
      ],
      [
        { id: 'cinderace', name: 'Cinderace', current: true, rank: 398, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Blast Burn'],
    greatLeague: { rank: 618 },
    ultraLeague: { rank: 398 },
  },
  clodsire: {
    dex: 980,
    types: ['poison', 'ground'],
    evolution: [
      [
        { id: 'wooper_paldean', name: 'Paldean Wooper' },
      ],
      [
        { id: 'clodsire', name: 'Clodsire', current: true, rank: 17, candy: 50 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Megahorn'],
    greatLeague: {
      rank: 17,
      moveset: { fast: ['Poison Sting'], charged: ['Earthquake', 'Stone Edge'] },
      beats: ['Tinkaton', 'Melmetal', 'Shadow Ninetales'],
      losesTo: ['Shadow Quagsire', 'Mimikyu', 'Vigoroth'],
    },
    ultraLeague: { rank: 338 },
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
        { id: 'corvisquire', name: 'Corvisquire', rank: 608, candy: 25 },
      ],
      [
        { id: 'corviknight', name: 'Corviknight', current: true, rank: 2, candy: 100 },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Iron Head', 'Air Cutter'],
    greatLeague: {
      rank: 7,
      moveset: { fast: ['Sand Attack'], charged: ['Air Cutter', 'Iron Head'] },
      beats: ['Tinkaton', 'Shadow Quagsire', 'Vigoroth'],
      losesTo: ['Cramorant', 'Shadow Ninetales', 'Melmetal'],
    },
    ultraLeague: {
      rank: 2,
      moveset: { fast: ['Sand Attack'], charged: ['Air Cutter', 'Iron Head'] },
      beats: ['Tinkaton', 'Snorlax', 'Mimikyu'],
      losesTo: ['Skeledirge', 'Blastoise', 'Shadow Dusknoir'],
    },
    shadow: {
      greatLeague: {
        rank: 10,
        moveset: { fast: ['Sand Attack'], charged: ['Air Cutter', 'Iron Head'] },
        beats: ['Vigoroth', 'Tinkaton', 'Florges'],
        losesTo: ['Shadow Ninetales', 'Mimikyu', 'Altaria'],
      },
      ultraLeague: {
        rank: 4,
        moveset: { fast: ['Sand Attack'], charged: ['Air Cutter', 'Payback'] },
        beats: ['Empoleon', 'Tinkaton', 'Zygarde (Complete Forme)'],
        losesTo: ['Melmetal', 'Feraligatr', 'Skeledirge'],
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
      beats: ['Shadow Ninetales', 'Corviknight', 'Shadow Sableye'],
      losesTo: ['Stunfisk', 'Mimikyu', 'Galarian Corsola'],
    },
    ultraLeague: {
      rank: 18,
      moveset: { fast: ['Peck'], charged: ['Dive', 'Fly'] },
      beats: ['Tinkaton', 'Snorlax', 'Florges'],
      losesTo: ['Giratina (Altered)', 'Melmetal', 'Feraligatr'],
    },
  },
  darmanitan_standard: {
    dex: 555,
    types: ['fire'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'darumaka', name: 'Darumaka', rank: 709 },
      ],
      [
        { id: 'darmanitan_standard', name: 'Darmanitan (Standard)', current: true, rank: 531, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: { rank: 820 },
    ultraLeague: { rank: 531 },
    shadow: {
      greatLeague: { rank: 803 },
      ultraLeague: { rank: 574 },
    },
  },
  decidueye: {
    dex: 724,
    types: ['grass', 'ghost'],
    evolution: [
      [
        { id: 'rowlet', name: 'Rowlet', rank: 1053 },
      ],
      [
        { id: 'dartrix', name: 'Dartrix', rank: 187, candy: 25 },
      ],
      [
        { id: 'decidueye', name: 'Decidueye', current: true, rank: 217, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Frenzy Plant'],
    greatLeague: { rank: 566 },
    ultraLeague: { rank: 217 },
  },
  dedenne: {
    dex: 702,
    types: ['electric', 'fairy'],
    buddyKm: 3,
    greatLeague: { rank: 268 },
    ultraLeague: { rank: 602 },
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
        { id: 'braixen', name: 'Braixen', rank: 512, candy: 25 },
      ],
      [
        { id: 'delphox', name: 'Delphox', current: true, rank: 274, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Blast Burn'],
    greatLeague: { rank: 400 },
    ultraLeague: { rank: 274 },
    shadow: {
      greatLeague: { rank: 456 },
      ultraLeague: { rank: 285 },
    },
  },
  deoxys_defense: {
    dex: 386,
    types: ['psychic'],
    legendary: true,
    buddyKm: 20,
    greatLeague: {
      rank: 33,
      moveset: { fast: ['Low Kick'], charged: ['Psycho Boost', 'Thunderbolt'] },
      beats: ['Cramorant', 'Vigoroth', 'Melmetal'],
      losesTo: ['Mimikyu', 'Shadow Sableye', 'Altaria'],
    },
    ultraLeague: {
      rank: 42,
      moveset: { fast: ['Low Kick'], charged: ['Psycho Boost', 'Thunderbolt'] },
      beats: ['Empoleon', 'Virizion', 'Corviknight'],
      losesTo: ['Mimikyu', 'Zygarde (Complete Forme)', 'Tinkaton'],
    },
  },
  dondozo: {
    dex: 977,
    types: ['water'],
    buddyKm: 5,
    greatLeague: {
      rank: 49,
      moveset: { fast: ['Waterfall'], charged: ['Surf', 'Outrage'] },
      beats: ['Shadow Quagsire', 'Stunfisk', 'Shadow Ninetales'],
      losesTo: ['Mimikyu', 'Tinkaton', 'Altaria'],
    },
    ultraLeague: {
      rank: 26,
      moveset: { fast: ['Waterfall'], charged: ['Surf', 'Outrage'] },
      beats: ['Tinkaton', 'Corviknight', 'Empoleon'],
      losesTo: ['Virizion', 'Mimikyu', 'Zygarde (Complete Forme)'],
    },
  },
  doublade: {
    dex: 680,
    types: ['steel', 'ghost'],
    evolution: [
      [
        { id: 'honedge', name: 'Honedge', rank: 864 },
      ],
      [
        { id: 'doublade', name: 'Doublade', current: true, rank: 74, candy: 25 },
      ],
      [
        { id: 'aegislash_shield', name: 'Aegislash (Shield)', rank: 80, candy: 100 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 74,
      moveset: { fast: ['Shadow Claw'], charged: ['Sacred Sword', 'Iron Head'] },
      beats: ['Florges', 'Melmetal', 'Corviknight'],
      losesTo: ['Shadow Ninetales', 'Shadow Sableye', 'Cramorant'],
    },
    ultraLeague: {
      rank: 95,
      moveset: { fast: ['Shadow Claw'], charged: ['Sacred Sword', 'Iron Head'] },
      beats: ['Empoleon', 'Tinkaton', 'Florges'],
      losesTo: ['Jellicent', 'Mimikyu', 'Skeledirge'],
    },
  },
  drifblim: {
    dex: 426,
    types: ['ghost', 'flying'],
    evolution: [
      [
        { id: 'drifloon', name: 'Drifloon', rank: 643 },
      ],
      [
        { id: 'drifblim', name: 'Drifblim', current: true, rank: 137, candy: 50 },
      ],
    ],
    buddyKm: 5,
    greatLeague: { rank: 362 },
    ultraLeague: { rank: 137 },
    shadow: {
      greatLeague: { rank: 287 },
      ultraLeague: { rank: 231 },
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
        { id: 'dubwool', name: 'Dubwool', current: true, rank: 161, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: { rank: 161 },
    ultraLeague: { rank: 359 },
  },
  dusclops: {
    dex: 356,
    types: ['ghost'],
    evolution: [
      [
        { id: 'duskull', name: 'Duskull' },
      ],
      [
        { id: 'dusclops', name: 'Dusclops', current: true, rank: 70, candy: 25 },
      ],
      [
        { id: 'dusknoir', name: 'Dusknoir', rank: 24, candy: 100, item: 'Sinnoh Stone' },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 76,
      moveset: { fast: ['Hex'], charged: ['Ice Punch', 'Shadow Punch'] },
      beats: ['Clodsire', 'Corviknight', 'Stunfisk'],
      losesTo: ['Shadow Sableye', 'Mimikyu', 'Shadow Ninetales'],
    },
    shadow: {
      greatLeague: {
        rank: 70,
        moveset: { fast: ['Hex'], charged: ['Ice Punch', 'Shadow Punch'] },
        beats: ['Stunfisk', 'Altaria', 'Florges'],
        losesTo: ['Tinkaton', 'Shadow Sableye', 'Mimikyu'],
      },
    },
  },
  eevee: {
    dex: 133,
    types: ['normal'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'eevee', name: 'Eevee', current: true, rank: 1023 },
      ],
      [
        { id: 'vaporeon', name: 'Vaporeon', rank: 387, candy: 25 },
        { id: 'jolteon', name: 'Jolteon', rank: 504, candy: 25 },
        { id: 'flareon', name: 'Flareon', rank: 586, candy: 25 },
        { id: 'espeon', name: 'Espeon', rank: 645, candy: 25, buddyKm: 10, time: 'day', quest: true },
        { id: 'umbreon', name: 'Umbreon', rank: 28, candy: 25, buddyKm: 10, time: 'night', quest: true },
        { id: 'leafeon', name: 'Leafeon', rank: 614, candy: 25, item: 'Mossy Lure' },
        { id: 'glaceon', name: 'Glaceon', rank: 784, candy: 25, item: 'Glacial Lure' },
        { id: 'sylveon', name: 'Sylveon', rank: 102, candy: 25, quest: true },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Last Resort', 'Body Slam'],
    greatLeague: { rank: 1023 },
  },
  eldegoss: {
    dex: 830,
    types: ['grass'],
    evolution: [
      [
        { id: 'gossifleur', name: 'Gossifleur' },
      ],
      [
        { id: 'eldegoss', name: 'Eldegoss', current: true, rank: 775, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: { rank: 809 },
    ultraLeague: { rank: 775 },
  },
  empoleon: {
    dex: 395,
    types: ['water', 'steel'],
    evolution: [
      [
        { id: 'piplup', name: 'Piplup', rank: 1077 },
      ],
      [
        { id: 'prinplup', name: 'Prinplup', rank: 811, candy: 25 },
      ],
      [
        { id: 'empoleon', name: 'Empoleon', current: true, rank: 8, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Hydro Cannon'],
    greatLeague: {
      rank: 23,
      moveset: { fast: ['Metal Sound'], charged: ['Hydro Cannon', 'Drill Peck'] },
      beats: ['Corviknight', 'Shadow Ninetales', 'Cramorant'],
      losesTo: ['Melmetal', 'Mimikyu', 'Shadow Quagsire'],
    },
    ultraLeague: {
      rank: 8,
      moveset: { fast: ['Metal Sound'], charged: ['Hydro Cannon', 'Drill Peck'] },
      beats: ['Florges', 'Tinkaton', 'Corviknight'],
      losesTo: ['Snorlax', 'Melmetal', 'Feraligatr'],
    },
    shadow: {
      greatLeague: {
        rank: 24,
        moveset: { fast: ['Metal Sound'], charged: ['Hydro Cannon', 'Drill Peck'] },
        beats: ['Shadow Sableye', 'Vigoroth', 'Thievul'],
        losesTo: ['Melmetal', 'Altaria', 'Corviknight'],
      },
      ultraLeague: {
        rank: 9,
        moveset: { fast: ['Metal Sound'], charged: ['Hydro Cannon', 'Drill Peck'] },
        beats: ['Togekiss', 'Florges', 'Skeledirge'],
        losesTo: ['Virizion', 'Zygarde (Complete Forme)', 'Snorlax'],
      },
    },
  },
  excadrill: {
    dex: 530,
    types: ['ground', 'steel'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'drilbur', name: 'Drilbur', rank: 401 },
      ],
      [
        { id: 'excadrill', name: 'Excadrill', current: true, rank: 361, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: { rank: 534 },
    ultraLeague: { rank: 437 },
    shadow: {
      greatLeague: { rank: 457 },
      ultraLeague: { rank: 361 },
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
        { id: 'fearow', name: 'Fearow', current: true, rank: 25, candy: 50 },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Twister'],
    greatLeague: {
      rank: 25,
      moveset: { fast: ['Peck'], charged: ['Drill Peck', 'Drill Run'] },
      beats: ['Shadow Sableye', 'Jellicent', 'Rillaboom'],
      losesTo: ['Mimikyu', 'Tinkaton', 'Corviknight'],
    },
    ultraLeague: { rank: 303 },
  },
  feraligatr: {
    dex: 160,
    types: ['water'],
    evolution: [
      [
        { id: 'totodile', name: 'Totodile', rank: 846 },
      ],
      [
        { id: 'croconaw', name: 'Croconaw', rank: 224, candy: 25 },
      ],
      [
        { id: 'feraligatr', name: 'Feraligatr', current: true, rank: 14, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Water Gun', 'Hydro Cannon'],
    greatLeague: {
      rank: 30,
      moveset: { fast: ['Shadow Claw'], charged: ['Hydro Cannon', 'Ice Beam'] },
      beats: ['Altaria', 'Tinkaton', 'Corviknight'],
      losesTo: ['Shadow Ninetales', 'Vigoroth', 'Mimikyu'],
    },
    ultraLeague: {
      rank: 15,
      moveset: { fast: ['Shadow Claw'], charged: ['Hydro Cannon', 'Ice Beam'] },
      beats: ['Tinkaton', 'Florges', 'Zygarde (Complete Forme)'],
      losesTo: ['Melmetal', 'Snorlax', 'Giratina (Altered)'],
    },
    shadow: {
      greatLeague: {
        rank: 60,
        moveset: { fast: ['Shadow Claw'], charged: ['Hydro Cannon', 'Ice Beam'] },
        beats: ['Shadow Sableye', 'Annihilape', 'Altaria'],
        losesTo: ['Melmetal', 'Shadow Ninetales', 'Cramorant'],
      },
      ultraLeague: {
        rank: 14,
        moveset: { fast: ['Shadow Claw'], charged: ['Hydro Cannon', 'Ice Beam'] },
        beats: ['Skeledirge', 'Zygarde (Complete Forme)', 'Corviknight'],
        losesTo: ['Snorlax', 'Virizion', 'Mimikyu'],
      },
    },
  },
  flareon: {
    dex: 136,
    types: ['fire'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'eevee', name: 'Eevee', rank: 1023 },
      ],
      [
        { id: 'flareon', name: 'Flareon', current: true, rank: 586, candy: 25 },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Last Resort', 'Heat Wave', 'Superpower'],
    greatLeague: { rank: 690 },
    ultraLeague: { rank: 586 },
  },
  florges: {
    dex: 671,
    types: ['fairy'],
    evolution: [
      [
        { id: 'flabebe', name: 'Flabebe', rank: 1119 },
      ],
      [
        { id: 'floette', name: 'Floette', rank: 784, candy: 25 },
      ],
      [
        { id: 'florges', name: 'Florges', current: true, rank: 11, candy: 100, quest: true },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Chilling Water'],
    greatLeague: {
      rank: 11,
      moveset: { fast: ['Fairy Wind'], charged: ['Chilling Water', 'Moonblast'] },
      beats: ['Altaria', 'Thievul', 'Shadow Sableye'],
      losesTo: ['Tinkaton', 'Mimikyu', 'Cramorant'],
    },
    ultraLeague: {
      rank: 12,
      moveset: { fast: ['Fairy Wind'], charged: ['Chilling Water', 'Disarming Voice'] },
      beats: ['Giratina (Altered)', 'Skeledirge', 'Zygarde (Complete Forme)'],
      losesTo: ['Empoleon', 'Tinkaton', 'Corviknight'],
    },
  },
  forretress: {
    dex: 205,
    types: ['bug', 'steel'],
    evolution: [
      [
        { id: 'pineco', name: 'Pineco', rank: 978 },
      ],
      [
        { id: 'forretress', name: 'Forretress', current: true, rank: 31, candy: 50 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 53,
      moveset: { fast: ['Volt Switch'], charged: ['Sand Tomb', 'Rock Tomb'] },
      beats: ['Cramorant', 'Tinkaton', 'Corviknight'],
      losesTo: ['Shadow Ninetales', 'Altaria', 'Shadow Quagsire'],
    },
    ultraLeague: {
      rank: 31,
      moveset: { fast: ['Volt Switch'], charged: ['Rock Tomb', 'Sand Tomb'] },
      beats: ['Empoleon', 'Corviknight', 'Snorlax'],
      losesTo: ['Zygarde (Complete Forme)', 'Virizion', 'Skeledirge'],
    },
    shadow: {
      greatLeague: {
        rank: 48,
        moveset: { fast: ['Volt Switch'], charged: ['Sand Tomb', 'Rock Tomb'] },
        beats: ['Cramorant', 'Tinkaton', 'Corviknight'],
        losesTo: ['Shadow Ninetales', 'Altaria', 'Shadow Sableye'],
      },
      ultraLeague: {
        rank: 39,
        moveset: { fast: ['Volt Switch'], charged: ['Rock Tomb', 'Sand Tomb'] },
        beats: ['Tinkaton', 'Empoleon', 'Florges'],
        losesTo: ['Skeledirge', 'Zygarde (Complete Forme)', 'Virizion'],
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
        { id: 'furret', name: 'Furret', current: true, rank: 43, candy: 25 },
      ],
    ],
    buddyKm: 1,
    greatLeague: {
      rank: 43,
      moveset: { fast: ['Sucker Punch'], charged: ['Swift', 'Trailblaze'] },
      beats: ['Shadow Quagsire', 'Galarian Corsola', 'Shadow Sableye'],
      losesTo: ['Tinkaton', 'Melmetal', 'Shadow Ninetales'],
    },
    ultraLeague: { rank: 737 },
  },
  corsola_galarian: {
    dex: 222,
    types: ['ghost'],
    evolution: [
      [
        { id: 'corsola_galarian', name: 'Galarian Corsola', current: true, rank: 8 },
      ],
      [
        { id: 'cursola', name: 'Cursola', rank: 680, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 8,
      moveset: { fast: ['Astonish'], charged: ['Night Shade', 'Power Gem'] },
      beats: ['Cramorant', 'Altaria', 'Shadow Ninetales'],
      losesTo: ['Shadow Sableye', 'Mimikyu', 'Tinkaton'],
    },
  },
  moltres_galarian: {
    dex: 146,
    types: ['dark', 'flying'],
    legendary: true,
    buddyKm: 20,
    greatLeague: {
      rank: 71,
      moveset: { fast: ['Sucker Punch'], charged: ['Fly', 'Brave Bird'] },
      beats: ['Thievul', 'Shadow Ninetales', 'Shadow Sableye'],
      losesTo: ['Cramorant', 'Tinkaton', 'Melmetal'],
    },
    ultraLeague: {
      rank: 13,
      moveset: { fast: ['Sucker Punch'], charged: ['Fly', 'Brave Bird'] },
      beats: ['Feraligatr', 'Empoleon', 'Virizion'],
      losesTo: ['Tinkaton', 'Florges', 'Melmetal'],
    },
  },
  stunfisk_galarian: {
    dex: 618,
    types: ['ground', 'steel'],
    buddyKm: 5,
    greatLeague: {
      rank: 86,
      moveset: { fast: ['Mud Shot'], charged: ['Rock Slide', 'Earthquake'] },
      beats: ['Melmetal', 'Tinkaton', 'Corviknight'],
      losesTo: ['Shadow Quagsire', 'Cramorant', 'Shadow Sableye'],
    },
    ultraLeague: { rank: 128 },
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
        { id: 'gardevoir', name: 'Gardevoir', current: true, rank: 648, candy: 100 },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Synchronoise'],
    greatLeague: { rank: 986 },
    ultraLeague: { rank: 648 },
    shadow: {
      greatLeague: { rank: 1007 },
      ultraLeague: { rank: 661 },
    },
  },
  gigalith: {
    dex: 526,
    types: ['rock'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'roggenrola', name: 'Roggenrola', rank: 1089 },
      ],
      [
        { id: 'boldore', name: 'Boldore', rank: 804, candy: 50 },
      ],
      [
        { id: 'gigalith', name: 'Gigalith', current: true, rank: 362, candy: 200, tradeFree: true },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Meteor Beam'],
    greatLeague: { rank: 594 },
    ultraLeague: { rank: 362 },
    shadow: {
      greatLeague: { rank: 644 },
      ultraLeague: { rank: 516 },
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
        { id: 'gothorita', name: 'Gothorita', rank: 881, candy: 25 },
      ],
      [
        { id: 'gothitelle', name: 'Gothitelle', current: true, rank: 528, candy: 100 },
      ],
    ],
    buddyKm: 3,
    greatLeague: { rank: 832 },
    ultraLeague: { rank: 528 },
    shadow: {
      greatLeague: { rank: 933 },
      ultraLeague: { rank: 591 },
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
        { id: 'greedent', name: 'Greedent', current: true, rank: 148, candy: 50 },
      ],
    ],
    buddyKm: 1,
    greatLeague: { rank: 184 },
    ultraLeague: { rank: 148 },
  },
  guzzlord: {
    dex: 799,
    types: ['dark', 'dragon'],
    legendary: true,
    buddyKm: 20,
    greatLeague: {
      rank: 44,
      moveset: { fast: ['Dragon Tail'], charged: ['Brutal Swing', 'Sludge Bomb'] },
      beats: ['Shadow Ninetales', 'Shadow Sableye', 'Shadow Quagsire'],
      losesTo: ['Mimikyu', 'Tinkaton', 'Melmetal'],
    },
    ultraLeague: {
      rank: 19,
      moveset: { fast: ['Dragon Tail'], charged: ['Brutal Swing', 'Sludge Bomb'] },
      beats: ['Jellicent', 'Skeledirge', 'Feraligatr'],
      losesTo: ['Florges', 'Mimikyu', 'Tinkaton'],
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
        { id: 'gyarados', name: 'Gyarados', current: true, rank: 67, candy: 400 },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Dragon Tail', 'Dragon Pulse', 'Aqua Tail'],
    greatLeague: { rank: 276 },
    ultraLeague: {
      rank: 75,
      moveset: { fast: ['Dragon Breath'], charged: ['Aqua Tail', 'Twister'] },
      beats: ['Zygarde (Complete Forme)', 'Feraligatr', 'Corviknight'],
      losesTo: ['Mimikyu', 'Florges', 'Snorlax'],
    },
    shadow: {
      greatLeague: { rank: 259 },
      ultraLeague: {
        rank: 67,
        moveset: { fast: ['Dragon Breath'], charged: ['Aqua Tail', 'Twister'] },
        beats: ['Blastoise', 'Zygarde (Complete Forme)', 'Corviknight'],
        losesTo: ['Mimikyu', 'Empoleon', 'Feraligatr'],
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
        { id: 'hariyama', name: 'Hariyama', current: true, rank: 330, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: { rank: 483 },
    ultraLeague: { rank: 330 },
    shadow: {
      greatLeague: { rank: 439 },
      ultraLeague: { rank: 340 },
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
        { id: 'hattrem', name: 'Hattrem', rank: 695, candy: 25 },
      ],
      [
        { id: 'hatterene', name: 'Hatterene', current: true, rank: 495, candy: 100 },
      ],
    ],
    buddyKm: 5,
    greatLeague: { rank: 723 },
    ultraLeague: { rank: 495 },
  },
  hippowdon: {
    dex: 450,
    types: ['ground'],
    evolution: [
      [
        { id: 'hippopotas', name: 'Hippopotas', rank: 305 },
      ],
      [
        { id: 'hippowdon', name: 'Hippowdon', current: true, rank: 50, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 50,
      moveset: { fast: ['Sand Attack'], charged: ['Weather Ball (Rock)', 'Earth Power'] },
      beats: ['Tinkaton', 'Melmetal', 'Galarian Corsola'],
      losesTo: ['Mimikyu', 'Cramorant', 'Corviknight'],
    },
    ultraLeague: {
      rank: 96,
      moveset: { fast: ['Sand Attack'], charged: ['Weather Ball (Rock)', 'Earth Power'] },
      beats: ['Skeledirge', 'Melmetal', 'Tinkaton'],
      losesTo: ['Corviknight', 'Florges', 'Snorlax'],
    },
    shadow: {
      greatLeague: {
        rank: 61,
        moveset: { fast: ['Sand Attack'], charged: ['Weather Ball (Rock)', 'Earth Power'] },
        beats: ['Tinkaton', 'Melmetal', 'Shadow Ninetales'],
        losesTo: ['Mimikyu', 'Altaria', 'Vigoroth'],
      },
      ultraLeague: {
        rank: 91,
        moveset: { fast: ['Sand Attack'], charged: ['Weather Ball (Rock)', 'Earth Power'] },
        beats: ['Tinkaton', 'Skeledirge', 'Melmetal'],
        losesTo: ['Empoleon', 'Zygarde (Complete Forme)', 'Florges'],
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
        { id: 'electrode_hisuian', name: 'Hisuian Electrode', current: true, rank: 34, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 34,
      moveset: { fast: ['Thunder Shock'], charged: ['Wild Charge', 'Energy Ball'] },
      beats: ['Shadow Quagsire', 'Melmetal', 'Corviknight'],
      losesTo: ['Shadow Ninetales', 'Shadow Sableye', 'Mimikyu'],
    },
    ultraLeague: { rank: 161 },
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
        { id: 'drizzile', name: 'Drizzile', rank: 1066, candy: 25 },
      ],
      [
        { id: 'inteleon', name: 'Inteleon', current: true, rank: 710, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Hydro Cannon'],
    greatLeague: { rank: 861 },
    ultraLeague: { rank: 710 },
  },
  jellicent: {
    dex: 593,
    types: ['water', 'ghost'],
    evolution: [
      [
        { id: 'frillish', name: 'Frillish', rank: 425 },
      ],
      [
        { id: 'jellicent', name: 'Jellicent', current: true, rank: 16, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 22,
      moveset: { fast: ['Hex'], charged: ['Surf', 'Shadow Ball'] },
      beats: ['Tinkaton', 'Shadow Quagsire', 'Altaria'],
      losesTo: ['Shadow Sableye', 'Mimikyu', 'Vigoroth'],
    },
    ultraLeague: {
      rank: 16,
      moveset: { fast: ['Hex'], charged: ['Surf', 'Shadow Ball'] },
      beats: ['Blastoise', 'Empoleon', 'Skeledirge'],
      losesTo: ['Mimikyu', 'Zygarde (Complete Forme)', 'Corviknight'],
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
        { id: 'jumpluff', name: 'Jumpluff', current: true, rank: 55, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Acrobatics'],
    greatLeague: {
      rank: 55,
      moveset: { fast: ['Fairy Wind'], charged: ['Energy Ball', 'Acrobatics'] },
      beats: ['Shadow Quagsire', 'Shadow Sableye', 'Mimikyu'],
      losesTo: ['Shadow Ninetales', 'Melmetal', 'Cramorant'],
    },
    ultraLeague: { rank: 696 },
    shadow: {
      greatLeague: {
        rank: 81,
        moveset: { fast: ['Fairy Wind'], charged: ['Energy Ball', 'Acrobatics'] },
        beats: ['Shadow Quagsire', 'Altaria', 'Shadow Sableye'],
        losesTo: ['Shadow Ninetales', 'Corviknight', 'Melmetal'],
      },
      ultraLeague: { rank: 711 },
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
        { id: 'kilowattrel', name: 'Kilowattrel', current: true, rank: 344, candy: 50 },
      ],
    ],
    buddyKm: 1,
    greatLeague: { rank: 514 },
    ultraLeague: { rank: 344 },
  },
  lanturn: {
    dex: 171,
    types: ['water', 'electric'],
    evolution: [
      [
        { id: 'chinchou', name: 'Chinchou', rank: 1024 },
      ],
      [
        { id: 'lanturn', name: 'Lanturn', current: true, rank: 163, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: { rank: 163 },
    ultraLeague: { rank: 405 },
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
      beats: ['Altaria', 'Shadow Ninetales', 'Mimikyu'],
      losesTo: ['Shadow Sableye', 'Melmetal', 'Vigoroth'],
    },
    ultraLeague: {
      rank: 22,
      moveset: { fast: ['Psywave'], charged: ['Sparkling Aria', 'Ice Beam'] },
      beats: ['Zygarde (Complete Forme)', 'Mimikyu', 'Virizion'],
      losesTo: ['Melmetal', 'Corviknight', 'Tinkaton'],
    },
    shadow: {
      greatLeague: {
        rank: 63,
        moveset: { fast: ['Psywave'], charged: ['Sparkling Aria', 'Ice Beam'] },
        beats: ['Altaria', 'Vigoroth', 'Florges'],
        losesTo: ['Melmetal', 'Shadow Quagsire', 'Mimikyu'],
      },
      ultraLeague: {
        rank: 23,
        moveset: { fast: ['Psywave'], charged: ['Sparkling Aria', 'Ice Beam'] },
        beats: ['Zygarde (Complete Forme)', 'Tinkaton', 'Corviknight'],
        losesTo: ['Galarian Moltres', 'Melmetal', 'Jellicent'],
      },
    },
  },
  lickitung: {
    dex: 108,
    types: ['normal'],
    evolution: [
      [
        { id: 'lickitung', name: 'Lickitung', current: true, rank: 170 },
      ],
      [
        { id: 'lickilicky', name: 'Lickilicky', rank: 100, candy: 100, item: 'Sinnoh Stone' },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Body Slam'],
    greatLeague: { rank: 170 },
  },
  lokix: {
    dex: 920,
    types: ['bug', 'dark'],
    evolution: [
      [
        { id: 'nymble', name: 'Nymble' },
      ],
      [
        { id: 'lokix', name: 'Lokix', current: true, rank: 260, candy: 50 },
      ],
    ],
    buddyKm: 1,
    greatLeague: { rank: 341 },
    ultraLeague: { rank: 260 },
  },
  machamp: {
    dex: 68,
    types: ['fighting'],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'machop', name: 'Machop', rank: 492 },
      ],
      [
        { id: 'machoke', name: 'Machoke', rank: 237, candy: 25 },
      ],
      [
        { id: 'machamp', name: 'Machamp', current: true, rank: 171, candy: 100, tradeFree: true },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Karate Chop', 'Stone Edge', 'Submission', 'Payback'],
    greatLeague: { rank: 245 },
    ultraLeague: { rank: 242 },
    shadow: {
      greatLeague: { rank: 194 },
      ultraLeague: { rank: 171 },
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
        { id: 'malamar', name: 'Malamar', current: true, rank: 42, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 42,
      moveset: { fast: ['Psywave'], charged: ['Superpower', 'Foul Play'] },
      beats: ['Melmetal', 'Corviknight', 'Shadow Ninetales'],
      losesTo: ['Tinkaton', 'Mimikyu', 'Altaria'],
    },
    ultraLeague: {
      rank: 62,
      moveset: { fast: ['Psywave'], charged: ['Superpower', 'Foul Play'] },
      beats: ['Snorlax', 'Jellicent', 'Melmetal'],
      losesTo: ['Corviknight', 'Florges', 'Zygarde (Complete Forme)'],
    },
    shadow: {
      greatLeague: {
        rank: 45,
        moveset: { fast: ['Psywave'], charged: ['Foul Play', 'Superpower'] },
        beats: ['Shadow Quagsire', 'Melmetal', 'Shadow Ninetales'],
        losesTo: ['Shadow Sableye', 'Tinkaton', 'Mimikyu'],
      },
      ultraLeague: {
        rank: 54,
        moveset: { fast: ['Psywave'], charged: ['Foul Play', 'Superpower'] },
        beats: ['Skeledirge', 'Snorlax', 'Virizion'],
        losesTo: ['Tinkaton', 'Florges', 'Mimikyu'],
      },
    },
  },
  mandibuzz: {
    dex: 630,
    types: ['dark', 'flying'],
    evolution: [
      [
        { id: 'vullaby', name: 'Vullaby', rank: 420 },
      ],
      [
        { id: 'mandibuzz', name: 'Mandibuzz', current: true, rank: 51, candy: 50 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 51,
      moveset: { fast: ['Snarl'], charged: ['Dark Pulse', 'Shadow Ball'] },
      beats: ['Shadow Quagsire', 'Corviknight', 'Mimikyu'],
      losesTo: ['Thievul', 'Melmetal', 'Tinkaton'],
    },
    ultraLeague: { rank: 136 },
  },
  mantine: {
    dex: 226,
    types: ['water', 'flying'],
    evolution: [
      [
        { id: 'mantyke', name: 'Mantyke', rank: 749 },
      ],
      [
        { id: 'mantine', name: 'Mantine', current: true, rank: 26, candy: 50 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 26,
      moveset: { fast: ['Wing Attack'], charged: ['Twister', 'Water Pulse'] },
      beats: ['Shadow Ninetales', 'Altaria', 'Shadow Quagsire'],
      losesTo: ['Mimikyu', 'Vigoroth', 'Melmetal'],
    },
    ultraLeague: { rank: 131 },
  },
  marowak: {
    dex: 105,
    types: ['ground'],
    evolution: [
      [
        { id: 'cubone', name: 'Cubone', rank: 937 },
      ],
      [
        { id: 'marowak', name: 'Marowak', current: true, rank: 19, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 19,
      moveset: { fast: ['Mud Slap'], charged: ['Bone Club', 'Rock Slide'] },
      beats: ['Tinkaton', 'Melmetal', 'Shadow Ninetales'],
      losesTo: ['Corviknight', 'Altaria', 'Shadow Quagsire'],
    },
    ultraLeague: { rank: 634 },
    shadow: {
      greatLeague: {
        rank: 77,
        moveset: { fast: ['Mud Slap'], charged: ['Bone Club', 'Rock Slide'] },
        beats: ['Clodsire', 'Tinkaton', 'Morpeko (Full Belly)'],
        losesTo: ['Cramorant', 'Shadow Ninetales', 'Mimikyu'],
      },
      ultraLeague: { rank: 658 },
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
        { id: 'medicham', name: 'Medicham', current: true, rank: 54, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: {
      rank: 54,
      moveset: { fast: ['Psycho Cut'], charged: ['Ice Punch', 'Dynamic Punch'] },
      beats: ['Vigoroth', 'Thievul', 'Altaria'],
      losesTo: ['Mimikyu', 'Shadow Sableye', 'Cramorant'],
    },
  },
  melmetal: {
    dex: 809,
    types: ['steel'],
    legendary: true,
    evolution: [
      [
        { id: 'meltan', name: 'Meltan', rank: 1130, legendary: true },
      ],
      [
        { id: 'melmetal', name: 'Melmetal', current: true, rank: 1, legendary: true, candy: 400 },
      ],
    ],
    buddyKm: 20,
    specialMoves: ['Double Iron Bash'],
    greatLeague: {
      rank: 1,
      moveset: { fast: ['Thunder Shock'], charged: ['Double Iron Bash', 'Dynamic Punch'] },
      beats: ['Mimikyu', 'Corviknight', 'Cramorant'],
      losesTo: ['Shadow Ninetales', 'Shadow Quagsire', 'Shadow Sableye'],
    },
    ultraLeague: {
      rank: 5,
      moveset: { fast: ['Thunder Shock'], charged: ['Double Iron Bash', 'Dynamic Punch'] },
      beats: ['Florges', 'Empoleon', 'Tinkaton'],
      losesTo: ['Skeledirge', 'Zygarde (Complete Forme)', 'Virizion'],
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
        { id: 'floragato', name: 'Floragato', rank: 831, candy: 25 },
      ],
      [
        { id: 'meowscarada', name: 'Meowscarada', current: true, rank: 462, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Frenzy Plant'],
    greatLeague: { rank: 473 },
    ultraLeague: { rank: 462 },
  },
  mimikyu: {
    dex: 778,
    types: ['ghost', 'fairy'],
    buddyKm: 5,
    greatLeague: {
      rank: 6,
      moveset: { fast: ['Shadow Claw'], charged: ['Shadow Sneak', 'Play Rough'] },
      beats: ['Altaria', 'Shadow Ninetales', 'Tinkaton'],
      losesTo: ['Melmetal', 'Vigoroth', 'Morpeko (Full Belly)'],
    },
    ultraLeague: {
      rank: 10,
      moveset: { fast: ['Shadow Claw'], charged: ['Shadow Sneak', 'Play Rough'] },
      beats: ['Virizion', 'Jellicent', 'Tinkaton'],
      losesTo: ['Snorlax', 'Corviknight', 'Melmetal'],
    },
  },
  moltres: {
    dex: 146,
    types: ['fire', 'flying'],
    legendary: true,
    maxForms: ['Dynamax'],
    buddyKm: 20,
    specialMoves: ['Sky Attack'],
    greatLeague: { rank: 668 },
    ultraLeague: { rank: 463 },
    shadow: {
      greatLeague: { rank: 684 },
      ultraLeague: { rank: 490 },
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
        { id: 'ninetales', name: 'Ninetales', current: true, rank: 3, candy: 50 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Ember', 'Fire Blast', 'Flamethrower', 'Energy Ball'],
    greatLeague: {
      rank: 13,
      moveset: { fast: ['Ember'], charged: ['Weather Ball (Fire)', 'Energy Ball'] },
      beats: ['Corviknight', 'Melmetal', 'Tinkaton'],
      losesTo: ['Cramorant', 'Vigoroth', 'Altaria'],
    },
    ultraLeague: {
      rank: 34,
      moveset: { fast: ['Ember'], charged: ['Weather Ball (Fire)', 'Energy Ball'] },
      beats: ['Virizion', 'Corviknight', 'Tinkaton'],
      losesTo: ['Zygarde (Complete Forme)', 'Snorlax', 'Feraligatr'],
    },
    shadow: {
      greatLeague: {
        rank: 3,
        moveset: { fast: ['Ember'], charged: ['Weather Ball (Fire)', 'Energy Ball'] },
        beats: ['Melmetal', 'Corviknight', 'Florges'],
        losesTo: ['Mimikyu', 'Cramorant', 'Altaria'],
      },
      ultraLeague: {
        rank: 64,
        moveset: { fast: ['Ember'], charged: ['Weather Ball (Fire)', 'Energy Ball'] },
        beats: ['Virizion', 'Melmetal', 'Tinkaton'],
        losesTo: ['Feraligatr', 'Zygarde (Complete Forme)', 'Snorlax'],
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
        { id: 'perrserker', name: 'Perrserker', current: true, rank: 214, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: { rank: 497 },
    ultraLeague: { rank: 214 },
  },
  pyroar: {
    dex: 668,
    types: ['fire', 'normal'],
    evolution: [
      [
        { id: 'litleo', name: 'Litleo', rank: 484 },
      ],
      [
        { id: 'pyroar', name: 'Pyroar', current: true, rank: 470, candy: 50, gender: 'male' },
      ],
    ],
    buddyKm: 3,
    greatLeague: { rank: 675 },
    ultraLeague: { rank: 470 },
  },
  quagsire: {
    dex: 195,
    types: ['water', 'ground'],
    evolution: [
      [
        { id: 'wooper', name: 'Wooper' },
      ],
      [
        { id: 'quagsire', name: 'Quagsire', current: true, rank: 12, candy: 50 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Aqua Tail'],
    greatLeague: {
      rank: 14,
      moveset: { fast: ['Mud Shot'], charged: ['Aqua Tail', 'Stone Edge'] },
      beats: ['Melmetal', 'Tinkaton', 'Shadow Sableye'],
      losesTo: ['Mimikyu', 'Shadow Ninetales', 'Altaria'],
    },
    ultraLeague: { rank: 448 },
    shadow: {
      greatLeague: {
        rank: 12,
        moveset: { fast: ['Mud Shot'], charged: ['Aqua Tail', 'Stone Edge'] },
        beats: ['Stunfisk', 'Melmetal', 'Tinkaton'],
        losesTo: ['Mimikyu', 'Cramorant', 'Shadow Sableye'],
      },
      ultraLeague: { rank: 419 },
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
        { id: 'quaxwell', name: 'Quaxwell', rank: 498, candy: 25 },
      ],
      [
        { id: 'quaquaval', name: 'Quaquaval', current: true, rank: 201, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Hydro Cannon'],
    greatLeague: { rank: 283 },
    ultraLeague: { rank: 201 },
  },
  rhyperior: {
    dex: 464,
    types: ['ground', 'rock'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'rhyhorn', name: 'Rhyhorn', rank: 897 },
      ],
      [
        { id: 'rhydon', name: 'Rhydon', rank: 808, candy: 25 },
      ],
      [
        { id: 'rhyperior', name: 'Rhyperior', current: true, rank: 477, candy: 100, item: 'Sinnoh Stone' },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Rock Wrecker'],
    greatLeague: { rank: 679 },
    ultraLeague: { rank: 477 },
    shadow: {
      greatLeague: { rank: 628 },
      ultraLeague: { rank: 485 },
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
        { id: 'thwackey', name: 'Thwackey', rank: 783, candy: 25 },
      ],
      [
        { id: 'rillaboom', name: 'Rillaboom', current: true, rank: 21, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Frenzy Plant'],
    greatLeague: {
      rank: 35,
      moveset: { fast: ['Scratch'], charged: ['Drum Beating', 'Earth Power'] },
      beats: ['Shadow Quagsire', 'Stunfisk', 'Melmetal'],
      losesTo: ['Shadow Ninetales', 'Altaria', 'Mimikyu'],
    },
    ultraLeague: {
      rank: 21,
      moveset: { fast: ['Scratch'], charged: ['Drum Beating', 'Earth Power'] },
      beats: ['Florges', 'Zygarde (Complete Forme)', 'Empoleon'],
      losesTo: ['Skeledirge', 'Giratina (Altered)', 'Corviknight'],
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
      rank: 36,
      moveset: { fast: ['Shadow Claw'], charged: ['Foul Play', 'Power Gem'] },
      beats: ['Galarian Corsola', 'Shadow Ninetales', 'Corviknight'],
      losesTo: ['Tinkaton', 'Altaria', 'Shadow Sableye'],
    },
    shadow: {
      greatLeague: {
        rank: 18,
        moveset: { fast: ['Shadow Claw'], charged: ['Foul Play', 'Drain Punch'] },
        beats: ['Galarian Corsola', 'Shadow Quagsire', 'Melmetal'],
        losesTo: ['Cramorant', 'Tinkaton', 'Altaria'],
      },
    },
  },
  snorlax: {
    dex: 143,
    types: ['normal'],
    maxForms: ['Dynamax', 'Gigantamax'],
    evolution: [
      [
        { id: 'munchlax', name: 'Munchlax', rank: 291 },
      ],
      [
        { id: 'snorlax', name: 'Snorlax', current: true, rank: 3, candy: 50 },
      ],
    ],
    buddyKm: 5,
    specialMoves: ['Yawn'],
    greatLeague: {
      rank: 27,
      moveset: { fast: ['Psywave'], charged: ['Body Slam', 'Earthquake'] },
      beats: ['Galarian Corsola', 'Florges', 'Mimikyu'],
      losesTo: ['Shadow Sableye', 'Melmetal', 'Shadow Ninetales'],
    },
    ultraLeague: {
      rank: 11,
      moveset: { fast: ['Psywave'], charged: ['Body Slam', 'Earthquake'] },
      beats: ['Empoleon', 'Mimikyu', 'Skeledirge'],
      losesTo: ['Corviknight', 'Zygarde (Complete Forme)', 'Virizion'],
    },
    shadow: {
      greatLeague: {
        rank: 40,
        moveset: { fast: ['Psywave'], charged: ['Body Slam', 'Superpower'] },
        beats: ['Melmetal', 'Shadow Ninetales', 'Vigoroth'],
        losesTo: ['Shadow Sableye', 'Tinkaton', 'Corviknight'],
      },
      ultraLeague: {
        rank: 3,
        moveset: { fast: ['Psywave'], charged: ['Body Slam', 'Earthquake'] },
        beats: ['Tinkaton', 'Mimikyu', 'Empoleon'],
        losesTo: ['Melmetal', 'Virizion', 'Galarian Moltres'],
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
        { id: 'staravia', name: 'Staravia', rank: 646, candy: 25 },
      ],
      [
        { id: 'staraptor', name: 'Staraptor', current: true, rank: 458, candy: 100 },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Gust'],
    greatLeague: { rank: 710 },
    ultraLeague: { rank: 507 },
    shadow: {
      greatLeague: { rank: 757 },
      ultraLeague: { rank: 458 },
    },
  },
  stunfisk: {
    dex: 618,
    types: ['ground', 'electric'],
    buddyKm: 5,
    greatLeague: {
      rank: 20,
      moveset: { fast: ['Thunder Shock'], charged: ['Mud Bomb', 'Discharge'] },
      beats: ['Cramorant', 'Altaria', 'Tinkaton'],
      losesTo: ['Shadow Quagsire', 'Mimikyu', 'Shadow Ninetales'],
    },
    ultraLeague: { rank: 132 },
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
        { id: 'marshtomp', name: 'Marshtomp', rank: 406, candy: 25 },
      ],
      [
        { id: 'swampert', name: 'Swampert', current: true, rank: 48, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Hydro Cannon'],
    greatLeague: {
      rank: 78,
      moveset: { fast: ['Mud Shot'], charged: ['Hydro Cannon', 'Earthquake'] },
      beats: ['Shadow Ninetales', 'Shadow Quagsire', 'Melmetal'],
      losesTo: ['Shadow Sableye', 'Altaria', 'Mimikyu'],
    },
    ultraLeague: {
      rank: 48,
      moveset: { fast: ['Mud Shot'], charged: ['Hydro Cannon', 'Earthquake'] },
      beats: ['Tinkaton', 'Empoleon', 'Snorlax'],
      losesTo: ['Virizion', 'Florges', 'Jellicent'],
    },
    shadow: {
      greatLeague: {
        rank: 79,
        moveset: { fast: ['Mud Shot'], charged: ['Hydro Cannon', 'Earthquake'] },
        beats: ['Tinkaton', 'Shadow Ninetales', 'Shadow Quagsire'],
        losesTo: ['Cramorant', 'Thievul', 'Shadow Sableye'],
      },
      ultraLeague: {
        rank: 89,
        moveset: { fast: ['Mud Shot'], charged: ['Hydro Cannon', 'Earthquake'] },
        beats: ['Skeledirge', 'Melmetal', 'Tinkaton'],
        losesTo: ['Mimikyu', 'Snorlax', 'Florges'],
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
        { id: 'thievul', name: 'Thievul', current: true, rank: 15, candy: 50 },
      ],
    ],
    buddyKm: 1,
    specialMoves: ['Icy Wind'],
    greatLeague: {
      rank: 15,
      moveset: { fast: ['Sucker Punch'], charged: ['Night Slash', 'Icy Wind'] },
      beats: ['Galarian Corsola', 'Altaria', 'Shadow Ninetales'],
      losesTo: ['Tinkaton', 'Mimikyu', 'Cramorant'],
    },
    ultraLeague: { rank: 164 },
  },
  tinkaton: {
    dex: 959,
    types: ['fairy', 'steel'],
    evolution: [
      [
        { id: 'tinkatink', name: 'Tinkatink' },
      ],
      [
        { id: 'tinkatuff', name: 'Tinkatuff', rank: 308, candy: 25 },
      ],
      [
        { id: 'tinkaton', name: 'Tinkaton', current: true, rank: 1, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Gigaton Hammer'],
    greatLeague: {
      rank: 5,
      moveset: { fast: ['Fairy Wind'], charged: ['Gigaton Hammer', 'Bulldoze'] },
      beats: ['Thievul', 'Shadow Sableye', 'Altaria'],
      losesTo: ['Corviknight', 'Mimikyu', 'Cramorant'],
    },
    ultraLeague: {
      rank: 1,
      moveset: { fast: ['Fairy Wind'], charged: ['Gigaton Hammer', 'Bulldoze'] },
      beats: ['Florges', 'Giratina (Altered)', 'Shadow Dusknoir'],
      losesTo: ['Corviknight', 'Mimikyu', 'Feraligatr'],
    },
  },
  torterra: {
    dex: 389,
    types: ['grass', 'ground'],
    evolution: [
      [
        { id: 'turtwig', name: 'Turtwig', rank: 1116 },
      ],
      [
        { id: 'grotle', name: 'Grotle', rank: 698, candy: 25 },
      ],
      [
        { id: 'torterra', name: 'Torterra', current: true, rank: 270, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Frenzy Plant'],
    greatLeague: { rank: 551 },
    ultraLeague: { rank: 270 },
    shadow: {
      greatLeague: { rank: 702 },
      ultraLeague: { rank: 329 },
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
        { id: 'toxapex', name: 'Toxapex', current: true, rank: 114, candy: 50 },
      ],
    ],
    buddyKm: 3,
    greatLeague: { rank: 114 },
    ultraLeague: { rank: 766 },
  },
  trevenant: {
    dex: 709,
    types: ['ghost', 'grass'],
    evolution: [
      [
        { id: 'phantump', name: 'Phantump' },
      ],
      [
        { id: 'trevenant', name: 'Trevenant', current: true, rank: 145, candy: 200, tradeFree: true },
      ],
    ],
    buddyKm: 5,
    greatLeague: { rank: 354 },
    ultraLeague: { rank: 154 },
    shadow: {
      greatLeague: { rank: 295 },
      ultraLeague: { rank: 145 },
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
        { id: 'tsareena', name: 'Tsareena', current: true, rank: 624, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['High Jump Kick'],
    greatLeague: { rank: 997 },
    ultraLeague: { rank: 624 },
  },
  tyrantrum: {
    dex: 697,
    types: ['rock', 'dragon'],
    evolution: [
      [
        { id: 'tyrunt', name: 'Tyrunt', rank: 706 },
      ],
      [
        { id: 'tyrantrum', name: 'Tyrantrum', current: true, rank: 568, candy: 50, time: 'day' },
      ],
    ],
    buddyKm: 5,
    greatLeague: { rank: 732 },
    ultraLeague: { rank: 568 },
    shadow: {
      greatLeague: { rank: 755 },
      ultraLeague: { rank: 695 },
    },
  },
  umbreon: {
    dex: 197,
    types: ['dark'],
    maxForms: ['Dynamax'],
    evolution: [
      [
        { id: 'eevee', name: 'Eevee', rank: 1023 },
      ],
      [
        {
          id: 'umbreon',
          name: 'Umbreon',
          current: true,
          rank: 28,
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
      rank: 28,
      moveset: { fast: ['Snarl'], charged: ['Dark Pulse', 'Last Resort'] },
      beats: ['Galarian Corsola', 'Mimikyu', 'Corviknight'],
      losesTo: ['Tinkaton', 'Cramorant', 'Melmetal'],
    },
    ultraLeague: { rank: 119 },
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
        { id: 'bulbasaur', name: 'Bulbasaur', rank: 1065 },
      ],
      [
        { id: 'ivysaur', name: 'Ivysaur', rank: 788, candy: 25 },
      ],
      [
        { id: 'venusaur', name: 'Venusaur', current: true, rank: 211, candy: 100 },
      ],
    ],
    buddyKm: 3,
    specialMoves: ['Frenzy Plant'],
    greatLeague: { rank: 419 },
    ultraLeague: { rank: 211 },
    shadow: {
      greatLeague: { rank: 442 },
      ultraLeague: { rank: 248 },
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
        { id: 'vigoroth', name: 'Vigoroth', current: true, rank: 21, candy: 25 },
      ],
      [
        { id: 'slaking', name: 'Slaking', rank: 843, candy: 100 },
      ],
    ],
    buddyKm: 5,
    greatLeague: {
      rank: 21,
      moveset: { fast: ['Scratch'], charged: ['Body Slam', 'Bulldoze'] },
      beats: ['Shadow Ninetales', 'Florges', 'Mimikyu'],
      losesTo: ['Altaria', 'Corviknight', 'Shadow Sableye'],
    },
    ultraLeague: { rank: 549 },
    shadow: {
      greatLeague: {
        rank: 37,
        moveset: { fast: ['Scratch'], charged: ['Brick Break', 'Rock Slide'] },
        beats: ['Altaria', 'Shadow Quagsire', 'Corviknight'],
        losesTo: ['Tinkaton', 'Cramorant', 'Shadow Sableye'],
      },
      ultraLeague: { rank: 550 },
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
        { id: 'whimsicott', name: 'Whimsicott', current: true, rank: 382, candy: 50, item: 'Sun Stone' },
      ],
    ],
    buddyKm: 1,
    greatLeague: { rank: 382 },
    ultraLeague: { rank: 482 },
  },
};

const PVPOKE_MOVE_TYPES = {
  Acrobatics: 'flying',
  'Air Cutter': 'flying',
  'Aqua Tail': 'water',
  Astonish: 'ghost',
  Bite: 'dark',
  'Blast Burn': 'fire',
  'Body Slam': 'normal',
  'Bone Club': 'ground',
  'Brave Bird': 'flying',
  'Brick Break': 'fighting',
  'Brutal Swing': 'dark',
  Bubble: 'water',
  Bulldoze: 'ground',
  'Chilling Water': 'water',
  Counter: 'fighting',
  'Cross Chop': 'fighting',
  Crunch: 'dark',
  'Dark Pulse': 'dark',
  'Disarming Voice': 'fairy',
  Discharge: 'electric',
  Dive: 'water',
  'Double Iron Bash': 'steel',
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
  'Fire Spin': 'fire',
  Flamethrower: 'fire',
  Fly: 'flying',
  'Foul Play': 'dark',
  'Frenzy Plant': 'grass',
  'Gigaton Hammer': 'steel',
  'Gyro Ball': 'steel',
  Hex: 'ghost',
  'Hydro Cannon': 'water',
  'Hydro Pump': 'water',
  'Ice Beam': 'ice',
  'Ice Punch': 'ice',
  'Icy Wind': 'ice',
  Infestation: 'bug',
  'Iron Head': 'steel',
  'Last Resort': 'normal',
  'Low Kick': 'fighting',
  'Metal Sound': 'steel',
  'Mirror Coat': 'psychic',
  Moonblast: 'fairy',
  'Mud Bomb': 'ground',
  'Mud Shot': 'ground',
  'Mud Slap': 'ground',
  'Night Shade': 'ghost',
  'Night Slash': 'dark',
  Outrage: 'dragon',
  Overheat: 'fire',
  Payback: 'dark',
  Peck: 'flying',
  'Play Rough': 'fairy',
  'Poison Sting': 'poison',
  'Powder Snow': 'ice',
  'Power Gem': 'rock',
  'Psycho Boost': 'psychic',
  'Psycho Cut': 'psychic',
  Psywave: 'psychic',
  'Rage Fist': 'ghost',
  'Rock Slide': 'rock',
  'Rock Throw': 'rock',
  'Rock Tomb': 'rock',
  'Sacred Sword': 'fighting',
  'Sand Attack': 'ground',
  'Sand Tomb': 'ground',
  Scratch: 'normal',
  'Shadow Ball': 'ghost',
  'Shadow Claw': 'ghost',
  'Shadow Punch': 'ghost',
  'Shadow Sneak': 'ghost',
  'Sludge Bomb': 'poison',
  Snarl: 'dark',
  'Sparkling Aria': 'water',
  'Spirit Shackle': 'ghost',
  'Stone Edge': 'rock',
  'Sucker Punch': 'dark',
  Superpower: 'fighting',
  Surf: 'water',
  Swift: 'normal',
  'Thunder Shock': 'electric',
  Thunderbolt: 'electric',
  Trailblaze: 'grass',
  Twister: 'dragon',
  'Vine Whip': 'grass',
  'Volt Switch': 'electric',
  'Water Pulse': 'water',
  Waterfall: 'water',
  'Weather Ball (Fire)': 'fire',
  'Weather Ball (Ice)': 'ice',
  'Weather Ball (Rock)': 'rock',
  'Wild Charge': 'electric',
  'Wing Attack': 'flying',
  'X-Scissor': 'bug',
};
