const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const myPerson = data.employees.find(
    (person) => person.firstName === employeeName || person.lastName === employeeName,
  );
  return (myPerson !== undefined) ? myPerson : {};
}

module.exports = getEmployeeByName;
