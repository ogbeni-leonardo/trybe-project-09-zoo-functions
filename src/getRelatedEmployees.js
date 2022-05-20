const data = require('../data/zoo_data');

function isManager(id) {
  const managers = [];
  data.employees.forEach((person) => {
    person.managers.forEach((myManager) => {
      if (!managers.includes(myManager)) managers.push(myManager);
    });
  });
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const myPersonsToManager = [];
    data.employees.forEach((person) => {
      if (person.managers.includes(managerId)) {
        myPersonsToManager.push(`${person.firstName} ${person.lastName}`);
      }
    });
    return myPersonsToManager;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
