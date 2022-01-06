const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    const arrVazio = [];
    return arrVazio;
  }
  const newArr = [];
  for (let index = 0; index < ids.length; index += 1) {
    const species = data.species.find((element) => element.id === ids[index]);
    newArr.push(species);
  }
  return newArr;
}

module.exports = getSpeciesByIds;
