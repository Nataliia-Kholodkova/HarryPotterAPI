import Hero from './hero.js'

const URL = 'http://hp-api.herokuapp.com/api/characters'

class Model {
    constructor(url) {
        this.url = url;
        this.getHeros();
    }

    getHeros() {
        this.heroes = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('GET', this.url);
            xhr.onload = function () {
                if (xhr.status != 200) {
                    alert(`Cannot load data ${xhr.status}: ${xhr.statusText}. Please, reload`);
                    reject();
                }
                resolve(xhr.response)
            };

            xhr.onerror = function () {
                alert(`Cannot load data ${xhr.status}: ${xhr.statusText}. Please, reload`);
                reject();
            };
            xhr.send();
        }).then(data => this.constructHeroesList(data));
    }

    constructHeroesList(data) {
        let id = 1;
        const heros = data.map(item => {
            const hero = new Hero(item);
            hero.id = id;
            id++;
            return hero;
        })
        return heros;
    }

    getRandomHero(data) {
        const index = Math.floor(Math.random() * data.length);
        return data[index];
    }

    getRandomHeros(data) {
        const heros = new Set();
        while (heros.size < 5) {
            const index = Math.floor(Math.random() * data.length);
            heros.add(data[index]);
        }
        return Array.from(heros);
    }

    getHero(data, id) {
        const hero = data.find(hero => hero.id === id);
        return hero
    }

    filterFromState = (data, state) => {
        const res = Object.entries(state).reduce((initial, entry) => {
            return initial.then((data) => {
                if (entry[1] !== null) {
                    let [key, value] = entry;
                    const newData = data.filter((hero) => {
                        if (key === 'alive') {
                            return hero[key] === !!value
                        } else if (key === 'name') {
                            return hero[key].toLowerCase().includes(value.toLowerCase())
                        }
                        return hero[key].toLowerCase() === value.toLowerCase()
                    });
                    return new Promise((resolve, reject) => resolve(newData));
                }
                return new Promise((resolve, reject) => resolve(data));
            })
        }, Promise.resolve(data));
        return res.then(data => data);
    }

    filterByHouse(data, faculty) {
        if (faculty === 'hogwards') {
            return data
        }
        const newData = data.filter(hero => hero.house === 'faculty');
        return newData;
    }

    filterByHogwarts(data, hogwarts) {
        let newData = [];
        if (hogwarts === "") {
            newData = data.filter(hero => !hero.fromHogwarts());
        } else {
            newData = data.filter(hero => hero.hogwarts)
        }
        return newData;
    }

    filterByGender(data, gender) {
        let newData = data.filter(hero => hero.gender === gender);
        return newData;
    }

    filterByName(data, name) {
        if (name === '') {
            return data
        }
        const newData = data.filter(hero => hero.name.toLowerCase().includes(name.toLowerCase()));
        return newData;
    }
}

const model = new Model(URL);
export default model;
