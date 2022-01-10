const data = require('../data/zoo_data');

function isManager(id) {
  const manager = data.employees.some((element) => element.managers.includes(id));
  return manager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const manager = data.employees.filter((element) =>
      element.managers.includes(managerId));
    const colaboradores = manager.reduce((acc, element) =>
      acc.concat(`${element.firstName} ${element.lastName}`), []);
    return colaboradores;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
