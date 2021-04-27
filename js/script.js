import Hero from './hero.js';
import { FORM_STATE } from './buildState.js';
import styles from '../css/style.css';

const URL = 'https://hp-api.herokuapp.com/api/characters';
window.STATE = {
  house: null,
  gender: null,
  name: null,
  hogwarts: null,
  isAlive: null,
};
window.styles = styles;

function getheroesFromServer(path) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', `${URL}/${path}`);
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
  }).then(dataHeroes => window.constructHeroesList(dataHeroes));
}

window.getheroesFromServer = getheroesFromServer;

function constructHeroesList(dataHeroes) {
  let id = 1;
  const heroes = dataHeroes.map(item => {
    const hero = new Hero(item);
    hero.id = id;
    id += 1;
    return hero;
  });
  return heroes;
}

window.constructHeroesList = constructHeroesList;

function getRandomHero(dataHeroes) {
  const index = Math.floor(Math.random() * dataHeroes.length);
  return dataHeroes[index];
}

window.getRandomHero = getRandomHero;

function getHero(dataHeroes, id) {
  const hero = dataHeroes.find(item => item.id === id);
  return hero;
}

window.getHero = getHero;

function filterFromState(dataHeroes) {
  const fileteredHeroes = Object.entries(window.STATE).reduce(
    (initial, entry) =>
      initial.then(result => {
        if (entry[1] !== null) {
          const [key, value] = entry;
          if (value === 'All') {
            return result;
          }
          const newdataHeroes = result.filter(hero => {
            switch (key) {
              case 'name':
                return hero[key].toLowerCase().includes(value.toLowerCase());
              default:
                return hero[key].toLowerCase() === value.toLowerCase();
            }
          });
          return new Promise((resolve, reject) => resolve(newdataHeroes));
        }
        return new Promise((resolve, reject) => resolve(result));
      }),
    Promise.resolve(dataHeroes),
  );
  return fileteredHeroes.then(resultHeroes => resultHeroes);
}

window.filterFromState = filterFromState;

function generateOccupation(hero) {
  let occupationTemplate = '';
  if (hero.fromHogwarts()) {
    if (hero.hogwartsStaff) {
      occupationTemplate += 'Professor of ';
    } else {
      occupationTemplate += 'Student of ';
    }
  } else {
    occupationTemplate += 'Not from ';
  }
  occupationTemplate += 'Hogwarts';
  if (hero.house) {
    occupationTemplate += `, ${hero.house}`;
  }
  occupationTemplate += '.';
  return occupationTemplate;
}

window.generateOccupation = generateOccupation;

function renderHeroSmall(hero) {
  if (!hero) {
    return;
  }
  const template = `<div class="${styles['hero-card']} ${styles['hero-card__small']}" data-id="${
    hero.id
  }" id="hero-card__small">
  <img src="${hero.image}" alt="Photo of ${hero.name}" width="80" class="${styles['img']} ${
    styles['card-img']
  }  ${styles['card-img__small']}" />
  <div class="${styles['hero-description']}">
    <h3 class="${styles['title']} ${styles['card-title']}">${hero.name}</h3>
    <p class="${styles['text']} ${styles['card-text']}">
      <span class="${styles['hero-name']}">${hero.name}</span> was bourn
      <span class="${styles['hero-birth-date']}">${hero.dateOfBirth}</span>.
      <span class="${styles['hero-occupation']}">${window.generateOccupation(hero)}</span>
    </p>
  </div>
</div>`;
  return template;
}

window.renderHeroSmall = renderHeroSmall;

function renderHeroBig(hero) {
  if (!hero) {
    return;
  }
  const template = `
  <div class="${styles['hero-card']} ${styles['hero-card__big']}" id = "hero-card__big">
    <img src="${hero.image}" alt="Photo of ${hero.name}" width="150" class="${styles['img']} ${
    styles['card-img']
  } ${styles['card-img__big']}" />
    <div class="${styles['hero-description']}">
      <h2 class="${styles['title']} ${styles['card-title']}">${hero.name}</h2>
      <p class="${styles['text']} ${styles['card-text']}">
      <span class="${styles['hero-name']}">${hero.name}</span> was bourn
      <span class="${styles['hero-birth-date']}">${hero.dateOfBirth}</span>.
      <span class="${styles['hero-occupation']}">${window.generateOccupation(hero)}</span>
      </p>
      <p class="${styles['text']} ${styles['card-text']}">
        Has <span class="${styles['hero-hair']}">${hero.hairColour}</span> hair,
        <span class="${styles['hero-eyes']}">${hero.eyeColour}</span> eyes. Patronus -
        <span class="${styles['hero-patronus']}">${hero.patronus}</span>
      </p>
      <p class="${styles['text']} ${styles['card-text']}">
        Acted by
        <span class="${styles['hero-actor']}">${hero.actor}</span>.
      </p>
    </div>
  </div>`;
  return template;
}

window.renderHeroBig = renderHeroBig;

function renderHeroesList(heroes) {
  let template = '';
  heroes.forEach(hero => {
    const heroTemplate = window.renderHeroSmall(hero);
    template += heroTemplate;
  });
  return template;
}

window.renderHeroesList = renderHeroesList;

function createImg(value, state) {
  return `<img class="${state.imgClasses.map(_class => styles[_class] || _class).join(' ')}" 
  src=${state['imgUrls'][value]} alt=${value} width=${value === 'All' ? '150' : '120'}/>`;
}

window.createImg = createImg;

function createInputContainer(state, imgNeed, isFieldset) {
  const label = window.createInput(state, imgNeed);
  if (isFieldset) {
    return `<fieldset class="${state.fieldsetClasses
      .map(_class => styles[_class] || _class)
      .join(' ')}">
      <legend class="${state.legendClasses.map(_class => styles[_class] || _class).join(' ')}">${
      state.legend
    }</legend>
        ${label}
    </fieldset>`;
  }
  return label;
}

window.createInputContainer = createInputContainer;

function createInput(state, imgNeed) {
  let templateInput = ``;
  state['values'].forEach(value => {
    const label = `<label class="${state.labelClasses
      .map(_class => styles[_class] || _class)
      .join(' ')}">
      <input type="radio" class="${state.inputClasses
        .map(_class => styles[_class] || _class)
        .join(' ')}" name="${state.name}" value=${value}></input>
      ${imgNeed === true ? window.createImg(value, state) : ''}
      <span class="${state.spanClasses.map(_class => styles[_class] || _class).join(' ')}">${
      value.length > 0 ? value : 'None'
    }</span>
    </label>
    `;
    templateInput += label;
  });
  return templateInput;
}

window.createInput = createInput;

function createForm(
  formState,
  listener,
  imgNeed = false,
  isFieldset = false,
  resetNeed = false,
  resetFilterHandler = null,
) {
  let template = `
  <form class="${formState[0].formClasses
    .map(_class => styles[_class] || _class)
    .join(' ')}" onclick="(${listener})(event);">`;
  for (let _state of formState) {
    template += window.createInputContainer(_state, imgNeed, isFieldset);
  }

  if (resetNeed) {
    template += `
        <button type="reset" class="${['btn', 'btn-reset']
          .map(_class => styles[_class] || _class)
          .join(
            ' ',
          )}" name="reset" type="reset"  onclick="(${resetFilterHandler})(event);">Reset</button>`;
  }
  template += `</form>`;
  return template;
}

window.createForm = createForm;

function createHeader(funcFaculty) {
  return `
  <header class="${styles.header}">
    <div class="${styles.wrapper}">
      <h1 class "${styles.title} ${
    styles['title-main']
  }">Welcome to the magic World of Hogwarts</h1>
      ${window.createForm(FORM_STATE.faculty, funcFaculty, true)}
    </div>
  </header>
  `;
}

window.createHeader = createHeader;

function createAside(filterHandler, resetHandler) {
  return `
  <aside class="${styles.aside}">
  ${window.createForm(FORM_STATE.filter, filterHandler, false, true, true, resetHandler)}
  </aside>
  `;
}

window.createAside = createAside;

function createMain(hero, heroList, cardHandler) {
  let template = `
  <main class="${styles.main}">
    <div class="${styles.results}">
      <div class="${styles['hero-list']}">
          ${hero}
          <div class="${styles['hero-list__wrapper']}">
            <div class="${styles['hero-list__slider']}" onclick="(${cardHandler})(event);">
              ${heroList}
            </div>
          </div>
      </div>
    </div>
  </main>
  `;
  return template;
}

window.createMain = createMain;

function createBodyMain(hero, heroesList, formHandler, cardHandler, resetHandler) {
  return `
  <div class = "${styles.wrapper} ${styles['main-wrapper'] || 'main-wrapper'}">
    ${window.createAside(formHandler, resetHandler)}
    ${window.createMain(hero, heroesList, cardHandler)}
  </div>
  `;
}

window.createBodyMain = createBodyMain;

function renderApp(dataHeroes, id) {
  let hero = null;
  let heroesListTemplate = '';
  let heroTemplate = null;
  if (dataHeroes.length > 0) {
    heroesListTemplate += window.renderHeroesList(dataHeroes);
  }
  if (id != null) {
    hero = window.getHero(dataHeroes, id);
  } else {
    hero = window.getRandomHero(dataHeroes);
  }
  heroTemplate = window.renderHeroBig(hero);
  let template = window.createHeader(formFilterHandler);
  template += window.createBodyMain(
    heroTemplate,
    heroesListTemplate,
    formFilterHandler,
    cardHandler,
    resetFilterHandler,
  );
  document.querySelector('.container').innerHTML = template;
}

window.renderApp = renderApp;

function getPathOnFilter() {
  if (window.STATE.house) {
    switch (window.STATE.house) {
      case 'All':
        return '';
      default:
        return `house/${window.STATE.house}`;
    }
  } else {
    if (window.STATE.hogwarts) {
      switch (window.STATE.hogwarts) {
        case 'Student':
          return `${window.STATE.hogwarts.toLowerCase()}s`;
        case 'Staff':
          return `${window.STATE.hogwarts.toLowerCase()}`;
        default:
          return '';
      }
    }
  }
  return '';
}

window.getPathOnFilter = getPathOnFilter;

function formFilterHandler(event) {
  const element = event.target.closest('input');
  if (!element) {
    return;
  }
  switch (element.value) {
    case 'all':
      window.STATE[element.name] = null;
      break;
    default:
      window.STATE[element.name] = element.value;
  }
  window
    .getheroesFromServer(window.getPathOnFilter())
    .then(dataHeroes => window.filterFromState(dataHeroes))
    .then(dataHeroes => {
      window.renderApp(dataHeroes);
    });
}

function resetFilterHandler() {
  window.STATE = {
    house: null,
    gender: null,
    name: null,
    staff: null,
    isAlive: null,
  };
  window.getheroesFromServer('').then(dataHeroes => {
    window.renderApp(dataHeroes, null);
  });
}

function createApp(id = null) {
  window
    .getheroesFromServer('')
    .then(heroes => window.filterFromState(heroes))
    .then(heroes => window.renderApp(heroes, id));
}

window.createApp = createApp;

function cardHandler(event) {
  const card = event.target.closest(`div.${window.styles['hero-card__small']}`);
  let id = false;
  if (!card) {
    return;
  }
  id = +card.dataset.id;
  if (Object.values(window.STATE).some(value => !!value)) {
    random = null;
  }
  window.createApp(id);
}

createApp();
