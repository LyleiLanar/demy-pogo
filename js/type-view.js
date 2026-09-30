// Típusikonok, érzékenység / ellenállás és a típustáblázat (TYPES).

function typeStyle(type) {
  return `--type-color:${type.color}`;
}

// Csak az ikon látszik; koppintásra buborékban jelenik meg a név (setupTooltip).
// A multipleLabel a többszörös hatás leírása: ilyenkor felkiáltójel kerül az ikon mellé.
function renderTypeBadge(typeKey, multipleLabel = '') {
  const type = TYPES[typeKey];
  const label = multipleLabel ? `${type.name} (${multipleLabel})` : type.name;
  const marker = multipleLabel ? '<span class="type-multiple" aria-hidden="true">❗</span>' : '';
  return `<button type="button" class="type" style="${typeStyle(type)}" data-tooltip="${label}" aria-label="${label}">`
    + `<span aria-hidden="true">${type.icon}</span>${marker}</button>`;
}

// A típustáblázat soraiban az ikon mellett a név is látszik, hogy az ikonok megtanulhatók legyenek.
function renderTypeLabel(typeKey) {
  const type = TYPES[typeKey];
  return `<span class="type type-label" style="${typeStyle(type)}"><span aria-hidden="true">${type.icon}</span> ${type.name}</span>`;
}

function renderTypeBadges(typeKeys) {
  return typeKeys.map((typeKey) => renderTypeBadge(typeKey)).join(' ');
}

// Mennyit sebez egy támadó típus a megadott típusú védekezőn (a típusok szorzata).
function damageMultiplier(attackType, defenseTypes) {
  return defenseTypes.reduce((multiplier, defenseType) => {
    const traits = TYPES[defenseType];
    if (traits.weakTo.includes(attackType)) return multiplier * TYPE_MULTIPLIERS.weak;
    if (traits.resists.includes(attackType)) return multiplier * TYPE_MULTIPLIERS.resist;
    if (traits.immuneTo.includes(attackType)) return multiplier * TYPE_MULTIPLIERS.immune;
    return multiplier;
  }, 1);
}

function renderMatchupRow(label, matchups, isMultiple, multipleLabel) {
  if (matchups.length === 0) return '';
  const badges = matchups
    .map(({ attackType, multiplier }) => renderTypeBadge(attackType, isMultiple(multiplier) ? multipleLabel : ''))
    .join(' ');
  return `<p class="mon-weak"><span class="mon-weak-label">${label}</span> ${badges}</p>`;
}

// Mire érzékeny és minek ellenálló a faj; a többszöröset előre véve.
function renderDefense(defenseTypes) {
  if (defenseTypes.length === 0) return '';
  const matchups = Object.keys(TYPES)
    .map((attackType) => ({ attackType, multiplier: damageMultiplier(attackType, defenseTypes) }));
  const weaknesses = matchups.filter(({ multiplier }) => multiplier > 1).sort((a, b) => b.multiplier - a.multiplier);
  const resistances = matchups.filter(({ multiplier }) => multiplier < 1).sort((a, b) => a.multiplier - b.multiplier);
  return renderMatchupRow('Érzékeny:', weaknesses, (m) => m > TYPE_MULTIPLIERS.weak, 'duplán érzékeny')
    + renderMatchupRow('Ellenálló:', resistances, (m) => m < TYPE_MULTIPLIERS.resist, 'duplán ellenálló');
}

function attackingTraits(attackType) {
  const defenders = Object.keys(TYPES);
  return {
    strongAgainst: defenders.filter((defender) => TYPES[defender].weakTo.includes(attackType)),
    weakAgainst: defenders.filter((defender) => TYPES[defender].resists.includes(attackType)),
    noEffectOn: defenders.filter((defender) => TYPES[defender].immuneTo.includes(attackType)),
  };
}

function renderTypeFact(label, typeKeys) {
  return typeKeys.length ? `<dt>${label}</dt><dd>${renderTypeBadges(typeKeys)}</dd>` : '';
}

function renderTypeRow(typeKey) {
  const attack = attackingTraits(typeKey);
  const defense = TYPES[typeKey];
  return `
    <div class="type-row">
      <div class="type-row-head">${renderTypeLabel(typeKey)}</div>
      <dl class="type-facts">
        ${renderTypeFact('Támadva erős', attack.strongAgainst)}
        ${renderTypeFact('Támadva gyenge', attack.weakAgainst)}
        ${renderTypeFact('Szinte hatástalan', attack.noEffectOn)}
        ${renderTypeFact('Érzékeny', defense.weakTo)}
        ${renderTypeFact('Ellenálló', [...defense.resists, ...defense.immuneTo])}
      </dl>
    </div>`;
}

function renderTypeChart() {
  return Object.keys(TYPES).map(renderTypeRow).join('');
}
