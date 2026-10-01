// GENERÁLT FÁJL, ne szerkeszd kézzel. Frissítés: node tools/sync-pvpoke.mjs
// Forrás: github.com/pvpoke/pvpoke (gamemaster és rankings-1500/2500).
// dex: a Pokédex-szám (a regionális formáknak ugyanaz, mint az alapfajnak)
// megaForms: a faj Mega formái a típusukkal (csak raidben számítanak)
// maxForms: Dynamax / Gigantamax formák (a játék game masteréből, PokeMiners)
// evolution: a fejlődési ág fokonként (elágazásnál egy fokon több faj); a current a faj maga,
//   candy és a többi mező az előző fokról ide fejlődés ára és feltételei (game master)
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
        { name: 'Honedge' },
      ],
      [
        { name: 'Doublade', candy: 25 },
      ],
      [
        { name: 'Aegislash (Shield)', current: true, candy: 100 },
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
        { name: 'Abra' },
      ],
      [
        { name: 'Kadabra', candy: 25 },
      ],
      [
        { name: 'Alakazam', current: true, candy: 100, tradeFree: true },
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
        { name: 'Alolan Vulpix' },
      ],
      [
        { name: 'Alolan Ninetales', current: true, candy: 50 },
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
        { name: 'Swablu' },
      ],
      [
        { name: 'Altaria', current: true, candy: 400 },
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
        { name: 'Mareep' },
      ],
      [
        { name: 'Flaaffy', candy: 25 },
      ],
      [
        { name: 'Ampharos', current: true, candy: 100 },
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
        { name: 'Mankey' },
      ],
      [
        { name: 'Primeape', candy: 50 },
      ],
      [
        { name: 'Annihilape', current: true, candy: 100, quest: true },
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
        { name: 'Dewpider' },
      ],
      [
        { name: 'Araquanid', current: true, candy: 50 },
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
        { name: 'Azurill' },
      ],
      [
        { name: 'Marill', candy: 25 },
      ],
      [
        { name: 'Azumarill', current: true, candy: 25 },
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
        { name: 'Shieldon' },
      ],
      [
        { name: 'Bastiodon', current: true, candy: 50 },
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
        { name: 'Frigibax' },
      ],
      [
        { name: 'Arctibax', candy: 25 },
      ],
      [
        { name: 'Baxcalibur', current: true, candy: 100 },
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
        { name: 'Torchic' },
      ],
      [
        { name: 'Combusken', candy: 25 },
      ],
      [
        { name: 'Blaziken', current: true, candy: 100 },
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
        { name: 'Happiny' },
      ],
      [
        { name: 'Chansey', candy: 25, buddyKm: 15, quest: true },
      ],
      [
        { name: 'Blissey', current: true, candy: 50 },
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
        { name: 'Charmander' },
      ],
      [
        { name: 'Charmeleon', candy: 25 },
      ],
      [
        { name: 'Charizard', current: true, candy: 100 },
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
        { name: 'Grubbin' },
      ],
      [
        { name: 'Charjabug', current: true, candy: 25 },
      ],
      [
        { name: 'Vikavolt', candy: 100, item: 'Magnetic Lure' },
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
        { name: 'Cherubi' },
      ],
      [
        { name: 'Cherrim (Overcast)', current: true, candy: 50 },
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
        { name: 'Scorbunny' },
      ],
      [
        { name: 'Raboot', candy: 25 },
      ],
      [
        { name: 'Cinderace', current: true, candy: 100 },
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
        { name: 'Paldean Wooper' },
      ],
      [
        { name: 'Clodsire', current: true, candy: 50 },
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
        { name: 'Rookidee' },
      ],
      [
        { name: 'Corvisquire', candy: 25 },
      ],
      [
        { name: 'Corviknight', current: true, candy: 100 },
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
        { name: 'Darumaka' },
      ],
      [
        { name: 'Darmanitan (Standard)', current: true, candy: 50 },
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
        { name: 'Rowlet' },
      ],
      [
        { name: 'Dartrix', candy: 25 },
      ],
      [
        { name: 'Decidueye', current: true, candy: 100 },
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
        { name: 'Fennekin' },
      ],
      [
        { name: 'Braixen', candy: 25 },
      ],
      [
        { name: 'Delphox', current: true, candy: 100 },
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
        { name: 'Honedge' },
      ],
      [
        { name: 'Doublade', current: true, candy: 25 },
      ],
      [
        { name: 'Aegislash (Shield)', candy: 100 },
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
        { name: 'Drifloon' },
      ],
      [
        { name: 'Drifblim', current: true, candy: 50 },
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
        { name: 'Wooloo' },
      ],
      [
        { name: 'Dubwool', current: true, candy: 50 },
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
        { name: 'Duskull' },
      ],
      [
        { name: 'Dusclops', current: true, candy: 25 },
      ],
      [
        { name: 'Dusknoir', candy: 100, item: 'Sinnoh Stone' },
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
  eldegoss: {
    dex: 830,
    types: ['grass'],
    evolution: [
      [
        { name: 'Gossifleur' },
      ],
      [
        { name: 'Eldegoss', current: true, candy: 50 },
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
        { name: 'Piplup' },
      ],
      [
        { name: 'Prinplup', candy: 25 },
      ],
      [
        { name: 'Empoleon', current: true, candy: 100 },
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
        { name: 'Drilbur' },
      ],
      [
        { name: 'Excadrill', current: true, candy: 50 },
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
        { name: 'Spearow' },
      ],
      [
        { name: 'Fearow', current: true, candy: 50 },
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
        { name: 'Totodile' },
      ],
      [
        { name: 'Croconaw', candy: 25 },
      ],
      [
        { name: 'Feraligatr', current: true, candy: 100 },
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
        { name: 'Eevee' },
      ],
      [
        { name: 'Flareon', current: true, candy: 25 },
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
        { name: 'Flabebe' },
      ],
      [
        { name: 'Floette', candy: 25 },
      ],
      [
        { name: 'Florges', current: true, candy: 100, quest: true },
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
        { name: 'Pineco' },
      ],
      [
        { name: 'Forretress', current: true, candy: 50 },
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
        { name: 'Sentret' },
      ],
      [
        { name: 'Furret', current: true, candy: 25 },
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
        { name: 'Galarian Corsola', current: true },
      ],
      [
        { name: 'Cursola', candy: 50 },
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
        { name: 'Ralts' },
      ],
      [
        { name: 'Kirlia', candy: 25 },
      ],
      [
        { name: 'Gardevoir', current: true, candy: 100 },
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
        { name: 'Roggenrola' },
      ],
      [
        { name: 'Boldore', candy: 50 },
      ],
      [
        { name: 'Gigalith', current: true, candy: 200, tradeFree: true },
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
        { name: 'Gothita' },
      ],
      [
        { name: 'Gothorita', candy: 25 },
      ],
      [
        { name: 'Gothitelle', current: true, candy: 100 },
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
        { name: 'Skwovet' },
      ],
      [
        { name: 'Greedent', current: true, candy: 50 },
      ],
    ],
    buddyKm: 1,
    greatLeague: { rank: 184 },
    ultraLeague: { rank: 148 },
  },
  guzzlord: {
    dex: 799,
    types: ['dark', 'dragon'],
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
        { name: 'Magikarp' },
      ],
      [
        { name: 'Gyarados', current: true, candy: 400 },
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
        { name: 'Makuhita' },
      ],
      [
        { name: 'Hariyama', current: true, candy: 50 },
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
        { name: 'Hatenna' },
      ],
      [
        { name: 'Hattrem', candy: 25 },
      ],
      [
        { name: 'Hatterene', current: true, candy: 100 },
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
        { name: 'Hippopotas' },
      ],
      [
        { name: 'Hippowdon', current: true, candy: 50 },
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
        { name: 'Hisuian Voltorb' },
      ],
      [
        { name: 'Hisuian Electrode', current: true, candy: 50 },
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
        { name: 'Sobble' },
      ],
      [
        { name: 'Drizzile', candy: 25 },
      ],
      [
        { name: 'Inteleon', current: true, candy: 100 },
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
        { name: 'Frillish' },
      ],
      [
        { name: 'Jellicent', current: true, candy: 50 },
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
        { name: 'Hoppip' },
      ],
      [
        { name: 'Skiploom', candy: 25 },
      ],
      [
        { name: 'Jumpluff', current: true, candy: 100 },
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
        { name: 'Wattrel' },
      ],
      [
        { name: 'Kilowattrel', current: true, candy: 50 },
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
        { name: 'Chinchou' },
      ],
      [
        { name: 'Lanturn', current: true, candy: 50 },
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
        { name: 'Lickitung', current: true },
      ],
      [
        { name: 'Lickilicky', candy: 100, item: 'Sinnoh Stone' },
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
        { name: 'Nymble' },
      ],
      [
        { name: 'Lokix', current: true, candy: 50 },
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
        { name: 'Machop' },
      ],
      [
        { name: 'Machoke', candy: 25 },
      ],
      [
        { name: 'Machamp', current: true, candy: 100, tradeFree: true },
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
        { name: 'Inkay' },
      ],
      [
        { name: 'Malamar', current: true, candy: 50 },
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
        { name: 'Vullaby' },
      ],
      [
        { name: 'Mandibuzz', current: true, candy: 50 },
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
        { name: 'Mantyke' },
      ],
      [
        { name: 'Mantine', current: true, candy: 50 },
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
        { name: 'Cubone' },
      ],
      [
        { name: 'Marowak', current: true, candy: 50 },
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
        { name: 'Meditite' },
      ],
      [
        { name: 'Medicham', current: true, candy: 50 },
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
    evolution: [
      [
        { name: 'Meltan' },
      ],
      [
        { name: 'Melmetal', current: true, candy: 400 },
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
        { name: 'Sprigatito' },
      ],
      [
        { name: 'Floragato', candy: 25 },
      ],
      [
        { name: 'Meowscarada', current: true, candy: 100 },
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
        { name: 'Vulpix' },
      ],
      [
        { name: 'Ninetales', current: true, candy: 50 },
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
        { name: 'Galarian Meowth' },
      ],
      [
        { name: 'Perrserker', current: true, candy: 50 },
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
        { name: 'Litleo' },
      ],
      [
        { name: 'Pyroar', current: true, candy: 50, gender: 'male' },
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
        { name: 'Wooper' },
      ],
      [
        { name: 'Quagsire', current: true, candy: 50 },
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
        { name: 'Quaxly' },
      ],
      [
        { name: 'Quaxwell', candy: 25 },
      ],
      [
        { name: 'Quaquaval', current: true, candy: 100 },
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
        { name: 'Rhyhorn' },
      ],
      [
        { name: 'Rhydon', candy: 25 },
      ],
      [
        { name: 'Rhyperior', current: true, candy: 100, item: 'Sinnoh Stone' },
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
        { name: 'Grookey' },
      ],
      [
        { name: 'Thwackey', candy: 25 },
      ],
      [
        { name: 'Rillaboom', current: true, candy: 100 },
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
        { name: 'Munchlax' },
      ],
      [
        { name: 'Snorlax', current: true, candy: 50 },
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
        { name: 'Starly' },
      ],
      [
        { name: 'Staravia', candy: 25 },
      ],
      [
        { name: 'Staraptor', current: true, candy: 100 },
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
        { name: 'Mudkip' },
      ],
      [
        { name: 'Marshtomp', candy: 25 },
      ],
      [
        { name: 'Swampert', current: true, candy: 100 },
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
        { name: 'Nickit' },
      ],
      [
        { name: 'Thievul', current: true, candy: 50 },
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
        { name: 'Tinkatink' },
      ],
      [
        { name: 'Tinkatuff', candy: 25 },
      ],
      [
        { name: 'Tinkaton', current: true, candy: 100 },
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
        { name: 'Turtwig' },
      ],
      [
        { name: 'Grotle', candy: 25 },
      ],
      [
        { name: 'Torterra', current: true, candy: 100 },
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
        { name: 'Mareanie' },
      ],
      [
        { name: 'Toxapex', current: true, candy: 50 },
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
        { name: 'Phantump' },
      ],
      [
        { name: 'Trevenant', current: true, candy: 200, tradeFree: true },
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
        { name: 'Bounsweet' },
      ],
      [
        { name: 'Steenee', candy: 25 },
      ],
      [
        { name: 'Tsareena', current: true, candy: 100 },
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
        { name: 'Tyrunt' },
      ],
      [
        { name: 'Tyrantrum', current: true, candy: 50, time: 'day' },
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
        { name: 'Eevee' },
      ],
      [
        { name: 'Umbreon', current: true, candy: 25, buddyKm: 10, time: 'night', quest: true },
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
        { name: 'Bulbasaur' },
      ],
      [
        { name: 'Ivysaur', candy: 25 },
      ],
      [
        { name: 'Venusaur', current: true, candy: 100 },
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
        { name: 'Slakoth' },
      ],
      [
        { name: 'Vigoroth', current: true, candy: 25 },
      ],
      [
        { name: 'Slaking', candy: 100 },
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
        { name: 'Cottonee' },
      ],
      [
        { name: 'Whimsicott', current: true, candy: 50, item: 'Sun Stone' },
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
