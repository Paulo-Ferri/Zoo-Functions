const data = require('../data/zoo_data');

function getAnimalMap(options) {
  if (options) { //aqui mora o problema :(
    if(Object.keys(options).includes('includeNames')){
    const animalsByRegionsAndNames = data.species.reduce((acc, element) => {
      acc[element.location] = data.species
        .filter((index) => index.location === element.location)
        .reduce((acumulador, animal) => {
          acumulador[animal.name] = animal.residents
          .map((animaisEspecies) => animaisEspecies.name)
          return acumulador
        }
        , [])
        return acc;
      }
      , {})
      return animalsByRegionsAndNames;
    }
  } 
  const animalsByRegion = data.species.reduce((acc, element) => {
    acc[element.location] = data.species
      .filter((index) => index.location === element.location)
      .map((animais) => animais.name);
     return acc;
    }
    , {})
    return animalsByRegion;
}

module.exports = getAnimalMap;
