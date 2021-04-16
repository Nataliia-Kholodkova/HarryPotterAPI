/* eslint-disable linebreak-style */
/* eslint-disable indent */

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.result = document.querySelector('.results');
        this.state = {
            house: null,
            gender: null,
            name: null,
            hogwarts: null,
            isAlive: null,
        };
        this.getHeroes().then((data) => this.renderHeroCard(data));
        this.getHeroes().then((data) => this.renderHeroesList(data));
    }

    getHeroes = () => this.model.getHeroes()

    renderHeroesList = (data) => {
        if (data.length === 0) {
            return;
        }
        Promise.resolve(data).then((heroes) => this.view.renderHeroesList(heroes))
            .then((template) => this.displayHeroesList(template)).catch();
    };

    renderHeroCard = (data, id = null) => {
        let promise = null;
        if (id != null) {
            promise = Promise.resolve(data).then((data) => this.model.getHero(data, id));
        } else {
            promise = Promise.resolve(data).then((data) => this.model.getRandomHero(data));
        }
        promise.then((hero) => this.view.renderHero('big', hero)).then((template) => this.displayBigHero(template));
    }

    displayBigHero = (template) => {
        const heroCardBig = this.result.querySelector('.hero-card__big');
        if (heroCardBig) {
            this.result.replaceChild(template, heroCardBig);
        } else {
            this.result.insertAdjacentElement('afterbegin', template);
        }
    };

    displayHeroesList = (template) => {
        const slider = this.result.querySelector('.hero-list__slider');
        slider.innerHTML = '';
        slider.append(template);
    };

    renderSimilarHeroes = (state) => {
        const heroes = this.getHeroes().then((data) => this.model.calculateSimilarity(data, state));
        heroes.then((data) => this.renderHeroCard(data, data[0].id));
        heroes.then((data) => this.renderHeroesList(data));
    }

    formFilterHandler = (element) => {
        switch (element.value) {
            case 'all':
                this.state[element.name] = null;
                break;
            default:
                this.state[element.name] = element.value;
        }
        const promise = this.getHeroes()
            .then((data) => this.model.filterFromState(data, this.state));
        promise.then((data) => this.renderHeroCard(data));
        promise.then((data) => this.renderHeroesList(data));
    };

    resetFilter = () => {
        this.state = {
            house: null,
            gender: null,
            name: null,
            staff: null,
            isAlive: null,
        };
        const promise = this.getHeroes();
        promise.then((data) => this.renderHeroCard(data));
        promise.then((data) => this.renderHeroesList(data));
    };
}

export default Controller;
