const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getSpecie = data.species.find((specie) => specie.name === animal);
  return getSpecie.residents.every((myAnimal) => myAnimal.age >= age);
}

module.exports = getAnimalsOlderThan;
