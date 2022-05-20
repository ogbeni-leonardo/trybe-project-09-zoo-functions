const data = require('../data/zoo_data');

function formattedData(object) {
  if (object === undefined) throw new Error('Informações inválidas');
  const person = {
    id: object.id,
    fullName: `${object.firstName} ${object.lastName}`,
    species: [],
    locations: [],
  };
  const myAnimals = object.responsibleFor.map((specieId) => {
    const specie = data.species.find((specieName) => specieName.id === specieId);
    return specie;
  });
  person.species = myAnimals.map((specie) => specie.name);
  myAnimals.forEach((specie) => {
    person.locations.push(specie.location);
  });
  return person;
}

function getEmployeesCoverage(search) {
  if (search === undefined) {
    const allEmployees = [];
    data.employees.forEach((person) => {
      allEmployees.push(formattedData(person));
    });
    return allEmployees;
  }
  let person;
  if (search.id) {
    person = data.employees.find((personInfo) => personInfo.id === search.id);
  }
  if (search.name && person === undefined) {
    person = data.employees.find((personInfo) => personInfo.firstName === search.name
    || personInfo.lastName === search.name);
  }
  return formattedData(person);
}

module.exports = getEmployeesCoverage;
