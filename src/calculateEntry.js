const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  let [child, adult, senior] = [0, 0, 0];
  entrants.forEach((person) => {
    if (person.age < 18) child += 1;
    else if (person.age >= 18 && person.age < 50) adult += 1;
    else senior += 1;
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0 || entrants === []) return 0;
  return Object.entries(countEntrants(entrants))
    .reduce((acc, categoryAndAge) => acc + categoryAndAge[1] * prices[categoryAndAge[0]], 0);
}

module.exports = { calculateEntry, countEntrants };
