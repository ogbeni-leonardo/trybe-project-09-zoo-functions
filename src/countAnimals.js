const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animalsOfZoo = {};
    data.species.forEach((animalType) => {
      animalsOfZoo[animalType.name] = animalType.residents.length;
    });
    return animalsOfZoo;
  }
  const mySpecie = data.species.find((specie) => specie.name === animal.specie)
    .residents;
  if (animal.sex) {
    return mySpecie.filter((specie) => specie.sex === animal.sex).length;
  }
  return mySpecie.length;
}

module.exports = countAnimals;
