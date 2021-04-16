/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable indent */

import Hero from './hero.js';

const URL = 'http://hp-api.herokuapp.com/api/characters';

class Model {
    constructor(url) {
        this.url = url;
        this.heroes = this.getHerosFromServer();
    }

    getHeroes = () => this.heroes;

    getHerosFromServer() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('GET', this.url);
            xhr.addEventListener('load', () => {
                if (xhr.status !== 200) {
                    alert(`Cannot load data ${xhr.status}: ${xhr.statusText}. Please, reload`);
                    reject();
                }
                resolve(xhr.response);
            });

            xhr.addEventListener('error', () => {
                alert(`Cannot load data ${xhr.status}: ${xhr.statusText}. Please, reload`);
                reject();
            });
            xhr.send();
        }).then((data) => this.constructHeroesList(data));
    }

    constructHeroesList = (data) => Model.$constructHeroesList(data)

    static $constructHeroesList(data) {
        let id = 1;
        const heros = data.map((item) => {
            const hero = new Hero(item);
            hero.id = id;
            id += 1;
            return hero;
        });
        return heros;
    }

    getRandomHero = (data) => Model.getRandomHero(data)

    static getRandomHero(data) {
        const index = Math.floor(Math.random() * data.length);
        return data[index];
    }

    getRandomHeros = (data) => Model.getRandomHeros(data)

    static getRandomHeros(data) {
        const heros = new Set();
        while (heros.size < 5) {
            const index = Math.floor(Math.random() * data.length);
            heros.add(data[index]);
        }
        return Array.from(heros);
    }

    getHero = (data, id) => Model.getHero(data, id)

    static getHero(data, id) {
        const hero = data.find((item) => item.id === id);
        return hero;
    }

    filterFromState = (data, state) => {
        const res = Object.entries(state).reduce((initial, entry) => initial.then((result) => {
                if (entry[1] !== null) {
                    const [key, value] = entry;
                    const newData = result.filter((hero) => {
                        if (key === 'alive') {
                            return hero[key] === !!value;
                        }
                        if (key === 'name') {
                            return hero[key].toLowerCase().includes(value.toLowerCase());
                        }
                        return hero[key].toLowerCase() === value.toLowerCase();
                    });
                    return new Promise((resolve, reject) => resolve(newData));
                }
                return new Promise((resolve, reject) => resolve(data));
            }), Promise.resolve(data));
        return res.then((result) => result);
    }

    filterByHouse = (data, faculty) => Model.filterByHouse(data, faculty)

    static filterByHouse(data, faculty) {
        if (faculty === 'hogwards') {
            return data;
        }
        const newData = data.filter((hero) => hero.house === 'faculty');
        return newData;
    }

    filterByHogwarts = (data, hogwarts) => Model.filterByHogwarts(data, hogwarts)

    static filterByHogwarts(data, hogwarts) {
        let newData = [];
        if (hogwarts === '') {
            newData = data.filter((hero) => !hero.fromHogwarts());
        } else {
            newData = data.filter((hero) => hero.hogwarts);
        }
        return newData;
    }

    filterByGender = (data, gender) => Model.filterByGender(data, gender)

    static filterByGender(data, gender) {
        const newData = data.filter((hero) => hero.gender === gender);
        return newData;
    }

    filterByName = (data, name) => Model.filterByName(data, name)

    static filterByName(data, name) {
        if (name === '') {
            return data;
        }
        const newData = data.filter((hero) => hero.name.toLowerCase().includes(name.toLowerCase()));
        return newData;
    }

    calculateSimilarity = (data, state) => Model.calculateSimilarity(data, state)

    static calculateSimilarity(data, state) {
        let heroes = {};
        Object.entries(state).forEach(([key, [val, score]]) => {
            const filteredHeroes = data.filter((hero) => hero[key] === val);
            filteredHeroes.forEach((hero) => {
                if (hero.id in heroes) {
                    heroes[hero.id] += score;
                } else {
                    heroes[hero.id] = score;
                }
            });
        });
        heroes = Object.entries(heroes);
        heroes.sort((a, b) => b[1] - a[1]);
        heroes = heroes.map((hero) => hero[0]);
        heroes = heroes.map((id) => data.find((hero) => hero.id === +id));
        return heroes.slice(0, 6);
    }
}

const model = new Model(URL);
export default model;
