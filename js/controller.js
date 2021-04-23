/* eslint-disable indent */
import styles from '../css/style.css';
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.resultDiv = document.querySelector(styles.result);
    this.state = {
      house: null,
      gender: null,
      name: null,
      hogwarts: null,
      isAlive: null,
    };
    this.getHeroes().then(heroes => this.renderHeroCard(heroes));
    this.getHeroes()
      .then(heroes => this.model.getRandomHeroes(heroes))
      .then(heroes => this.renderHeroesList(heroes));
  }

  getHeroes = () => this.model.getHeroes();

  renderHeroesList = dataHeroes => {
    if (dataHeroes.length === 0) {
      return;
    }
    Promise.resolve(dataHeroes)
      .then(heroes => this.view.renderHeroesList(heroes))
      .then(template => this.displayHeroesList(template))
      .catch();
  };

  renderHeroCard = (dataHeroes, id = null) => {
    let promise = null;
    if (id != null) {
      promise = Promise.resolve(dataHeroes).then(heroes => this.model.getHero(heroes, id));
    } else {
      promise = Promise.resolve(dataHeroes).then(heroes => this.model.getRandomHero(heroes));
    }
    promise
      .then(hero => this.view.renderHero('big', hero))
      .then(template => this.displayBigHero(template));
  };

  displayBigHero = template => {
    const heroCardBig = this.resultDiv.querySelector(`.${styles['hero-card__big']}`);
    if (heroCardBig) {
      this.resultDiv.replaceChild(template, heroCardBig);
    } else {
      this.resultDiv.insertAdjacentElement('afterbegin', template);
    }
  };

  displayHeroesList = template => {
    const slider = this.resultDiv.querySelector(`.${styles['hero-list__slider']}`);
    slider.innerHTML = '';
    slider.append(template);
  };

  renderSimilarHeroes = state => {
    const heroes = this.getHeroes().then(dataHeroes =>
      this.model.calculateSimilarity(dataHeroes, state),
    );
    heroes.then(dataHeroes => this.renderHeroCard(dataHeroes, dataHeroes[0].id));
    heroes.then(dataHeroes => this.renderHeroesList(dataHeroes));
  };

  formFilterHandler = element => {
    switch (element.value) {
      case 'all':
        this.state[element.name] = null;
        break;
      default:
        this.state[element.name] = element.value;
    }
    const promise = this.getHeroes().then(dataHeroes =>
      this.model.filterFromState(dataHeroes, this.state),
    );
    promise.then(dataHeroes => this.renderHeroCard(dataHeroes));
    promise.then(dataHeroes => this.renderHeroesList(dataHeroes));
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
    promise.then(dataHeroes => this.renderHeroCard(dataHeroes));
    promise.then(dataHeroes => this.renderHeroesList(dataHeroes));
  };
}

export default Controller;
