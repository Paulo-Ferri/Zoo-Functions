const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    const objVazio = {};
    return objVazio;
  } const getEmployeeFirstName = data.employees.find((element) =>
    element.firstName === employeeName);
  const getEmployeeLastName = data.employees.find((element) =>
    element.lastName === employeeName);
  if (getEmployeeFirstName) {
    return getEmployeeFirstName;
  }
  return getEmployeeLastName;
}

module.exports = getEmployeeByName;
