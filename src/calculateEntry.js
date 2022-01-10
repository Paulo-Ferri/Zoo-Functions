const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitantes = entrants.reduce((acc, element) => {
    if (element.age < 18) {
      acc.child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      acc.adult += 1;
    }
    if (element.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
  return visitantes;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult, child, senior } = countEntrants(entrants);
  console.log(adult, child, senior);
  const precos = {
    adult: 49.99,
    senior: 24.99,
    child: 20.99,
  };
  return precos.adult * adult + precos.senior * senior + precos.child * child;
}

module.exports = { calculateEntry, countEntrants };
