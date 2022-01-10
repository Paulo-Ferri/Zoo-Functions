const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const allAnimals = data.species.reduce((acc, element) => {
      acc[element.name] = element.residents.length;
      return acc;
    }, {});
    return allAnimals;
  }
  const animalRef = data.species.find((element) =>
    element.name === animal.specie);
  if (Object.keys(animal).includes('sex')) {
    const animalBySex = animalRef.residents.filter((element) =>
      element.sex === animal.sex);
    return animalBySex.length;
  }
  const quantidadeAnimais = animalRef.residents.length;
  return quantidadeAnimais;
}

module.exports = countAnimals;
