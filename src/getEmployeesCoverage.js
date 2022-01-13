const data = require('../data/zoo_data');

function coverage(parametro) {
  const dados = data.employees.find((element) => element.id === parametro.id
  || element.firstName === parametro.name || element.lastName === parametro.name);
  if (dados === undefined) {
    throw new Error('Informações inválidas');
  }
  const idAnimais = dados.responsibleFor.map((element) => element);
  const animaisReponsaveis = [];
  for (let index = 0; index < idAnimais.length; index += 1) {
    animaisReponsaveis.push(data.species.find((element) => element.id === idAnimais[index]));
  }
  const localizacoes = animaisReponsaveis.map((element) => element.location);
  const nomeAnimaisReponsaveis = animaisReponsaveis.map((element) => element.name);
  const resultado = { id: dados.id,
    fullName: `${dados.firstName} ${dados.lastName}`,
    species: nomeAnimaisReponsaveis,
    locations: localizacoes,
  };
  return resultado;
}

function employees() {
  const newArr = [];
  data.employees.forEach((element) => newArr.push(coverage(element)));
  return newArr;
}

function getEmployeesCoverage(parametro) {
  if (!parametro) {
    return employees();
  }

  return coverage(parametro);
}

module.exports = getEmployeesCoverage;
