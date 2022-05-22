const data = require('../data/zoo_data');

function formattedData(object) {
  if (object === undefined) throw new Error('Informações inválidas');
  const person = {
    id: object.id,
    fullName: `${object.firstName} ${object.lastName}`,
    species: object.responsibleFor.map(
      (specieId) => data.species.find((specie) => specie.id === specieId).name,
    ),
    locations: object.responsibleFor.map(
      (specieId) => data.species.find((specie) => specie.id === specieId).location,
    ),
  };
  return person;
}

function getEmployeesCoverage(search) {
  if (search === undefined) return data.employees.map((person) => formattedData(person));
  let employee;
  if (search.id) employee = data.employees.find((employeeInfo) => employeeInfo.id === search.id);
  if (search.name && employee === undefined) {
    employee = data.employees.find((employeeInfo) => (
      employeeInfo.firstName === search.name || employeeInfo.lastName === search.name));
  }
  return formattedData(employee);
}

module.exports = getEmployeesCoverage;
