const data = require('../data/zoo_data');

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
  try {
    let total = 0;
    const entrantsOfZoo = countEntrants(entrants);
    Object.keys(entrantsOfZoo).forEach((group) => {
      if (entrantsOfZoo[group] !== 0) {
        total += data.prices[group] * entrantsOfZoo[group];
      }
    });
    return total;
  } catch (error) { return 0; }
}

module.exports = { calculateEntry, countEntrants };
