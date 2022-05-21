const data = require('../data/zoo_data');

const getAnimalNames = (animalData, sort = false) => {
  const names = animalData.map((myAnimal) => myAnimal.name);
  if (sort) names.sort();
  return names;
};

const getAnimalsBySex = (specie, sex) => specie.residents.filter((animal) => animal.sex === sex);

const getAnimalsByLocation = (location, options) => {
  const animals = [];
  data.species.forEach((specie) => {
    if (specie.location === location && options.includeNames) {
      let getData;
      if (options.sex) {
        getData = getAnimalNames(getAnimalsBySex(specie, options.sex), options.sorted);
      } else {
        getData = getAnimalNames(specie.residents, options.sorted);
      }
      animals.push({ [specie.name]: getData });
    }
  });
  return animals;
};

function getAnimalMap(options) {
  const animalsMap = { NE: [], NW: [], SE: [], SW: [] };
  if (options === undefined || options === {} || !options.includeNames) {
    data.species.forEach((specie) => {
      animalsMap[specie.location].push(specie.name);
    });
    return animalsMap;
  }
  Object.keys(animalsMap).forEach((location) => {
    const result = getAnimalsByLocation(location, options);
    animalsMap[location].push(...result);
  });
  return animalsMap;
}

module.exports = getAnimalMap;
