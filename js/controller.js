/* eslint-disable indent */
import styles from '../css/style.css';
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.resultDiv = document.querySelector(`.${styles.results}`);
    this.state = {
      house: null,
      gender: null,
      name: null,
      hogwarts: null,
      isAlive: null,
    };
    this.getHeroes('').then(heroes => this.renderHeroCard(heroes));
    this.getHeroes('')
      .then(heroes => this.model.getRandomHeroes(heroes))
      .then(heroes => this.renderHeroesList(heroes));
  }

  getHeroes = path => this.model.getHeroes(path);

  renderHeroesList = dataHeroes => {
    if (dataHeroes.length === 0) {
      this.displayHeroesList(null);
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
      .then(hero => this.view.renderHeroBig(hero))
      .then(template => this.displayBigHero(template));
  };

  displayBigHero = template => {
    const heroContainer = document.createElement('div');
    heroContainer.classList.add(styles['hero-card'], styles['hero-card__big']);
    heroContainer.id = 'hero-card__big';
    heroContainer.innerHTML = template || '';
    try {
      this.resultDiv.replaceChild(
        heroContainer,
        document.querySelector(`.${styles['hero-card__big']}`),
      );
    } catch {
      this.resultDiv.insertAdjacentElement('afterbegin', heroContainer);
    }
  };

  displayHeroesList = template => {
    const slider = this.resultDiv.querySelector(`.${styles['hero-list__slider']}`);
    slider.innerHTML = '';
    if (!template) {
      return;
    }
    slider.innerHTML = template;
  };

  renderSimilarHeroes = state => {
    const heroes = this.getHeroes('').then(dataHeroes =>
      this.model.calculateSimilarity(dataHeroes, state),
    );
    heroes.then(dataHeroes => this.renderHeroCard(dataHeroes, dataHeroes[0].id));
    heroes.then(dataHeroes => this.renderHeroesList(dataHeroes));
  };

  getPathOnFilter = () => {
    if (this.state.house) {
      switch (this.state.house) {
        case 'All':
          return '';
        default:
          return `house/${this.state.house}`;
      }
    } else {
      if (this.state.hogwarts) {
        switch (this.state.hogwarts) {
          case 'Student':
            return `${this.state.hogwarts.toLowerCase()}s`;
          case 'Staff':
            return `${this.state.hogwarts.toLowerCase()}`;
          default:
            return '';
        }
      }
    }
    return '';
  };

  formFilterHandler = element => {
    switch (element.value) {
      case 'all':
        this.state[element.name] = null;
        break;
      default:
        this.state[element.name] = element.value;
    }
    this.getHeroes(this.getPathOnFilter())
      .then(dataHeroes => this.model.filterFromState(dataHeroes, this.state))
      .then(dataHeroes => {
        this.renderHeroCard(dataHeroes);
        this.renderHeroesList(dataHeroes);
      });
  };

  resetFilter = () => {
    this.state = {
      house: null,
      gender: null,
      name: null,
      staff: null,
      isAlive: null,
    };
    this.getHeroes('').then(dataHeroes => {
      this.renderHeroCard(dataHeroes);
      this.renderHeroesList(dataHeroes);
    });
  };
}

export default Controller;
