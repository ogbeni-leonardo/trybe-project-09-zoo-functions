const data = require('../data/zoo_data');

const getAnimalNames = (animalData, sort = false) => {
  const names = animalData.map((myAnimal) => myAnimal.name);
  if (sort) names.sort();
  return names;
};

const getAnimalsBySex = (specie, sex) => specie.residents.filter(
  (animal) => animal.sex === sex,
);

function getAnimalMap(options) {
  const animalsMap = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((specie) => {
    if (options === undefined || options === {} || !options.includeNames) {
      animalsMap[specie.location].push(specie.name);
      return animalsMap;
    }
    let animalsName;
    if (options.sex) {
      animalsName = getAnimalNames(getAnimalsBySex(specie, options.sex), options.sorted);
    } else animalsName = getAnimalNames(specie.residents, options.sorted);
    animalsMap[specie.location].push({ [specie.name]: animalsName });
  });
  return animalsMap;
}

module.exports = getAnimalMap;
