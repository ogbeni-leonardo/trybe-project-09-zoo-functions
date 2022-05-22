const data = require('../data/zoo_data');

const schedule = () => {
  const days = {};
  const { hours } = data;
  Object.keys(hours).forEach((day) => {
    days[day] = {
      officeHour: (hours[day].open !== 0)
        ? `Open from ${hours[day].open}am until ${hours[day].close}pm`
        : 'CLOSED',
      exhibition: (hours[day].open !== 0)
        ? [] : 'The zoo will be closed!',
    };
  });
  data.species.forEach((specie) => {
    specie.availability.forEach((availableDay) => {
      days[availableDay].exhibition.push(specie.name);
    });
  });
  return days;
};

function getSchedule(scheduleTarget) {
  const speciesName = data.species.map((specie) => specie.name);
  if (speciesName.includes(scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }
  const allDays = Object.keys(schedule());
  if (allDays.includes(scheduleTarget)) return { [scheduleTarget]: schedule()[scheduleTarget] };
  return schedule();
}

module.exports = getSchedule;
