const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return Object.fromEntries(
      species.map((specie) => [specie.name, specie.residents.length]),
    );
  }
  const selectedSpecie = species.find((specie) => specie.name === animal.specie).residents;
  if (animal.sex) return selectedSpecie.filter((specie) => specie.sex === animal.sex).length;
  return selectedSpecie.length;
}

module.exports = countAnimals;
