const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((person) => person.id === id);
  return Object.values(data.species.find(
    (specie) => specie.id === employee.responsibleFor[0],
  ).residents.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr)));
}

module.exports = getOldestFromFirstSpecies;
