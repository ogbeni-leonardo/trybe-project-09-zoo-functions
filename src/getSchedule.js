const data = require('../data/zoo_data');

const getHours = () => {
  const values = {};
  const { hours } = data;
  Object.keys(hours).forEach((day) => {
    values[day] = {
      officeHour: (hours[day].open !== 0)
        ? `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`
        : 'CLOSED',
      exhibition: (hours[day].open !== 0)
        ? [] : 'The zoo will be closed!',
    };
  });
  data.species.forEach((animalGroup) => {
    animalGroup.availability.forEach((available) => {
      values[available].exhibition.push(animalGroup.name);
    });
  });
  return values;
};

function getSchedule(scheduleTarget) {
  const allAnimalsGroup = data.species.map((specie) => specie.name);
  if (allAnimalsGroup.includes(scheduleTarget)) {
    return data.species.filter(
      (specie) => specie.name === scheduleTarget,
    )[0].availability;
  }
  const allDays = Object.keys(getHours());
  if (allDays.includes(scheduleTarget)) {
    const result = {};
    result[scheduleTarget] = getHours()[scheduleTarget];
    return result;
  }
  return getHours();
}

module.exports = getSchedule;
