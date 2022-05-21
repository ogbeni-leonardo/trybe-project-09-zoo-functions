const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((myPerson) => myPerson.id === id);
  const specie = person.responsibleFor[0];
  const getAnimals = data.species.find((mySpecie) => mySpecie.id === specie).residents;
  const oldestAnimal = getAnimals.reduce((acc, curr) => {
    if (acc.age < curr.age) {
      return curr;
    }
    return acc;
  });
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
