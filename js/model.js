/* eslint-disable import/extensions */
/* eslint-disable indent */

import Hero from './hero.js';

const URL = 'https://hp-api.herokuapp.com/api/characters';

class Model {
  constructor(url) {
    this.url = url;
    this.heroes = this.getheroesFromServer();
  }

  getHeroes = () => this.heroes;

  getheroesFromServer() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('GET', this.url);
      xhr.addEventListener('load', () => {
        if (xhr.status !== 200) {
          alert(`Cannot load dataHeroes ${xhr.status}: ${xhr.statusText}. Please, reload`);
          reject();
        }
        resolve(xhr.response);
      });

      xhr.addEventListener('error', () => {
        alert(`Cannot load dataHeroes ${xhr.status}: ${xhr.statusText}. Please, reload`);
        reject();
      });
      xhr.send();
    }).then(dataHeroes => this.constructHeroesList(dataHeroes));
  }

  constructHeroesList = dataHeroes => Model.$constructHeroesList(dataHeroes);

  static $constructHeroesList(dataHeroes) {
    let id = 1;
    const heroes = dataHeroes.map(item => {
      const hero = new Hero(item);
      hero.id = id;
      id += 1;
      return hero;
    });
    return heroes;
  }

  getRandomHero = dataHeroes => Model.getRandomHero(dataHeroes);

  static getRandomHero(dataHeroes) {
    const index = Math.floor(Math.random() * dataHeroes.length);
    return dataHeroes[index];
  }

  getRandomHeroes = dataHeroes => Model.getRandomHeroes(dataHeroes);

  static getRandomHeroes(dataHeroes) {
    const heroes = new Set();
    while (heroes.size < 5) {
      const index = Math.floor(Math.random() * dataHeroes.length);
      heroes.add(dataHeroes[index]);
    }
    return Array.from(heroes);
  }

  getHero = (dataHeroes, id) => Model.getHero(dataHeroes, id);

  static getHero(dataHeroes, id) {
    const hero = dataHeroes.find(item => item.id === id);
    return hero;
  }

  filterFromState = (dataHeroes, state) => {
    const fileteredHeroes = Object.entries(state).reduce(
      (initial, entry) =>
        initial.then(result => {
          if (entry[1] !== null) {
            const [key, value] = entry;
            const newdataHeroes = result.filter(hero => {
              switch (key) {
                case 'alive':
                  return hero[key] === !!value;
                case 'name':
                  return hero[key].toLowerCase().includes(value.toLowerCase());
                default:
                  return hero[key].toLowerCase() === value.toLowerCase();
              }
            });
            return new Promise((resolve, reject) => resolve(newdataHeroes));
          }
          return new Promise((resolve, reject) => resolve(dataHeroes));
        }),
      Promise.resolve(dataHeroes),
    );
    return fileteredHeroes;
    // .then((resultHeroes) => resultHeroes);
  };

  filterByHouse = (dataHeroes, faculty) => Model.filterByHouse(dataHeroes, faculty);

  static filterByHouse(dataHeroes, faculty) {
    if (faculty === 'hogwards') {
      return dataHeroes;
    }
    const newdataHeroes = dataHeroes.filter(hero => hero.house === 'faculty');
    return newdataHeroes;
  }

  filterByHogwarts = (dataHeroes, hogwarts) => Model.filterByHogwarts(dataHeroes, hogwarts);

  static filterByHogwarts(dataHeroes, hogwarts) {
    let newdataHeroes = [];
    if (hogwarts === '') {
      newdataHeroes = dataHeroes.filter(hero => !hero.fromHogwarts());
    } else {
      newdataHeroes = dataHeroes.filter(hero => hero.hogwarts);
    }
    return newdataHeroes;
  }

  filterByGender = (dataHeroes, gender) => Model.filterByGender(dataHeroes, gender);

  static filterByGender(dataHeroes, gender) {
    const newdataHeroes = dataHeroes.filter(hero => hero.gender === gender);
    return newdataHeroes;
  }

  filterByName = (dataHeroes, name) => Model.filterByName(dataHeroes, name);

  static filterByName(dataHeroes, name) {
    if (name === '') {
      return dataHeroes;
    }
    const newdataHeroes = dataHeroes.filter(hero =>
      hero.name.toLowerCase().includes(name.toLowerCase()),
    );
    return newdataHeroes;
  }

  calculateSimilarity = (dataHeroes, state) => Model.calculateSimilarity(dataHeroes, state);

  static calculateSimilarity(dataHeroes, state) {
    let heroes = {};
    Object.entries(state).forEach(([key, [val, score]]) => {
      const filteredHeroes = dataHeroes.filter(hero => hero[key] === val);
      filteredHeroes.forEach(hero => {
        if (hero.id in heroes) {
          heroes[hero.id] += score;
        } else {
          heroes[hero.id] = score;
        }
      });
    });
    heroes = Object.entries(heroes);
    heroes.sort((a, b) => b[1] - a[1]);
    heroes = heroes.map(hero => hero[0]);
    heroes = heroes.map(id => dataHeroes.find(hero => hero.id === +id));
    return heroes.slice(0, 6);
  }
}

const model = new Model(URL);
export default model;
