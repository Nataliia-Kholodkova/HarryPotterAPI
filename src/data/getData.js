import constructHeroesList from './getHroesList';
const URL_ADDR = 'https://hp-api.herokuapp.com/api/characters';

export default function getHeroesFromServer() {
  return fetch(`${URL_ADDR}`)
    .then(response => {
      return response.json();
    })
    .then(dataHeroes => constructHeroesList(dataHeroes))
    .catch(error => {
      throw new Error('Cannot load the data. Please, reload');
    });
}
