const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, idade) {
  const allSameAnimals = data.species.find((element) => element.name === animal);
  const isHigher = allSameAnimals.residents.every((element) => element.age >= idade);
  return isHigher;
}

module.exports = getAnimalsOlderThan;
