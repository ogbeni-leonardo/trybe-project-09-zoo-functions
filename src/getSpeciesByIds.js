const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = [];
  ids.forEach((id) => {
    const animalTheSameId = data.species.find((animal) => animal.id === id);
    if (animalTheSameId) animals.push(animalTheSameId);
  });
  return animals;
}

module.exports = getSpeciesByIds;
