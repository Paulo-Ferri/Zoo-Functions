const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.find((element) => element.id === id);
  const responsibleFor = funcionario.responsibleFor[0];
  const animal = data.species.find((element) => element.id === responsibleFor);
  const maiorIdade = animal.residents.map((element) => element.age).sort((a, b) => b - a);
  const resultado = animal.residents.find((element) => element.age === maiorIdade[0]);
  const { name, age, sex } = resultado;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
