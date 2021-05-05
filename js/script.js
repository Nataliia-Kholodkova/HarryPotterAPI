import Hero from './hero.js';
import { FORM_STATE } from './buildState.js';
import styles from '../css/style.css';
import hat from '../img/hat.png';

const URL_ADDR = 'https://hp-api.herokuapp.com/api/characters';
window.STATE = {
  house: null,
  gender: null,
  name: null,
  hogwarts: null,
  isAlive: null,
};
window.ERROR_LOAD = null;
window.styles = styles;

function getheroesFromServer(path) {
  return fetch(`${URL_ADDR}/${path}`)
    .then(response => {
      return response.json();
    })
    .then(dataHeroes => window.constructHeroesList(dataHeroes))
    .catch(error => {
      throw new Error('Cannot load the data. Please, reload');
    });
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
    return null;
  }
  const template = `
  <div class="${window.styles['hero-card']} ${window.styles['hero-card__small']}" data-id="${
    hero.id
  }" id="hero-card__small">
  <img src="${hero.image}" alt="Photo of ${hero.name}" width="80" class="${window.styles['img']} ${
    window.styles['card-img']
  }  ${window.styles['card-img__small']}" />
  <div class="${window.styles['hero-description']}">
    <h3 class="${window.styles['title']} ${window.styles['card-title']}">${hero.name}</h3>
    <p class="${window.styles['text']} ${window.styles['card-text']}">
      <span class="${window.styles['hero-name']}">${hero.name}</span> was bourn
      <span class="${window.styles['hero-birth-date']}">${hero.dateOfBirth}</span>.
      <span class="${window.styles['hero-occupation']}">${window.generateOccupation(hero)}</span>
    </p>
  </div>
</div>`;
  return template;
}

window.renderHeroSmall = renderHeroSmall;

function renderHeroBig(hero) {
  if (!hero) {
    return null;
  }
  const template = `
  <div class="${window.styles['hero-card']} ${
    window.styles['hero-card__big']
  }" id = "hero-card__big">
    <img src="${hero.image}" alt="Photo of ${hero.name}" width="150" class="${
    window.styles['img']
  } ${window.styles['card-img']} ${window.styles['card-img__big']}" />
    <div class="${window.styles['hero-description']}">
      <h2 class="${window.styles['title']} ${window.styles['card-title']}">${hero.name}</h2>
      <p class="${window.styles['text']} ${window.styles['card-text']}">
      <span class="${window.styles['hero-name']}">${hero.name}</span> was bourn
      <span class="${window.styles['hero-birth-date']}">${hero.dateOfBirth}</span>.
      <span class="${window.styles['hero-occupation']}">${window.generateOccupation(hero)}</span>
      </p>
      <p class="${window.styles['text']} ${window.styles['card-text']}">
        Has <span class="${window.styles['hero-hair']}">${hero.hairColour}</span> hair,
        <span class="${window.styles['hero-eyes']}">${hero.eyeColour}</span> eyes. Patronus -
        <span class="${window.styles['hero-patronus']}">${hero.patronus}</span>
      </p>
      <p class="${window.styles['text']} ${window.styles['card-text']}">
        Acted by
        <span class="${window.styles['hero-actor']}">${hero.actor}</span>.
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
    if (heroTemplate) {
      template += heroTemplate;
    }
  });
  return template;
}

window.renderHeroesList = renderHeroesList;

function createImg(value, state) {
  return `<img class="${state.imgClasses.map(_class => window.styles[_class] || _class).join(' ')}"
  src=${state['imgUrls'][value]} alt=${value} width=${value === 'All' ? '150' : '120'}/>`;
}

window.createImg = createImg;

function createInputContainer(state, imgNeed, isFieldset) {
  const label = window.createInput(state, imgNeed);
  if (isFieldset) {
    return `<fieldset class="${state.fieldsetClasses
      .map(_class => window.styles[_class] || _class)
      .join(' ')}">
      <legend class="${state.legendClasses
        .map(_class => window.styles[_class] || _class)
        .join(' ')}">${state.legend}</legend>
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
      .map(_class => window.styles[_class] || _class)
      .join(' ')}">
      <input type="radio" class="${state.inputClasses
        .map(_class => window.styles[_class] || _class)
        .join(' ')}" name="${state.name}" value=${value}></input>
      ${imgNeed === true ? window.createImg(value, state) : ''}
      <span class="${state.spanClasses.map(_class => window.styles[_class] || _class).join(' ')}">${
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
  isSearchNeed,
  resetFilterHandler = null,
) {
  let template = `
  <form class="${formState[0].formClasses
    .map(_class => window.styles[_class] || _class)
    .join(' ')}" onchange="(${listener})(event);">`;
  for (let _state of formState) {
    template += window.createInputContainer(_state, imgNeed, isFieldset);
  }

  if (isSearchNeed) {
    template += `
    <fieldset class="${['fieldset', 'filter-form__fieldset']
      .map(_class => window.styles[_class] || _class)
      .join(' ')}">
    <label class="${['form-label', 'filter-form__label', 'form-label__text']
      .map(_class => window.styles[_class] || _class)
      .join(' ')}">
      <input
        type="search"
        name="name"
        class="${['input', 'text-input', 'filter-form-input__text']
          .map(_class => window.styles[_class] || _class)
          .join(' ')}"
        placeholder="Hero's name" onchange="(event.istopPropagation(); ${listener})(event);"
      />
      <span class="${window.styles['visually-hidden']}">Search</span>
    </label>
  </fieldset>
    `;
  }
  if (resetNeed) {
    template += `
        <button type="reset" class="${['btn', 'btn-reset']
          .map(_class => window.styles[_class] || _class)
          .join(
            ' ',
          )}" name="reset" type="reset" onclick="(${resetFilterHandler})();">Reset</button>`;
  }
  template += `</form>`;
  return template;
}

window.createForm = createForm;

function createHeader(funcFaculty) {
  return `
  <header class="${window.styles.header}">
    <div class="${window.styles.wrapper}">
      <h1 class "${window.styles.title} ${
    window.styles['title-main'] || 'title-main'
  }">Welcome to the magic World of Hogwarts</h1>
      ${window.createForm(FORM_STATE.faculty, funcFaculty, true)}
    </div>
  </header>
  `;
}

window.createHeader = createHeader;

function createAside(filterHandler, resetHandler) {
  return `
  <aside class="${window.styles.aside}">
  ${window.createForm(FORM_STATE.filter, filterHandler, false, true, true, true, resetHandler)}
  </aside>
  `;
}

window.createAside = createAside;

function createMain(hero, heroList, cardHandler, error) {
  let template = `
  <main class="${window.styles.main}">
    <div class="${window.styles.results}">
      <div class="${window.styles['hero-list']}">
          ${hero ? hero : window.createErrorTemplate(error) || ''}
          <div class="${window.styles['hero-list__wrapper']}">
            <div class="${window.styles['hero-list__slider']}" onclick="(${cardHandler})(event);">
              ${heroList ? heroList : ''}
            </div>
          </div>
      </div>
    </div>
  </main>
  `;
  return template;
}

window.createMain = createMain;

function createErrorTemplate(error) {
  return `
  <div class="${window.styles.error}">
  <img src="${hat}" alt="Sorting hat" class="${window.styles.img} ${window.styles['img-hat']}"/>
  <h1 class "${window.styles.title} ${
    window.styles['title-main'] || 'title-main'
  }" style="color: #2a221e">${error}</h1>
  <button tyle="button" class="${['btn', 'btn-reset']
    .map(_class => window.styles[_class] || _class)
    .join(' ')}" name="reload" onclick="(${reloadApp})();">Reload</button>
  </div>
  `;
}

window.createErrorTemplate = createErrorTemplate;

function createBodyMain(hero, heroesList, formHandler, cardHandler, resetHandler, error) {
  return `
  <div class = "${window.styles.wrapper} ${window.styles['main-wrapper'] || 'main-wrapper'}">
    ${window.createAside(formHandler, resetHandler)}
    ${window.createMain(hero, heroesList, cardHandler, error)}
  </div>
  `;
}

window.createBodyMain = createBodyMain;

function renderApp(dataHeroes, id, error) {
  let hero = null;
  let heroesListTemplate = '';
  let heroTemplate = null;
  try {
    if (dataHeroes.length > 0) {
      heroesListTemplate += window.renderHeroesList(dataHeroes);
    }
    if (id != null) {
      hero = window.getHero(dataHeroes, id);
    } else {
      hero = window.getRandomHero(dataHeroes);
    }
    heroTemplate = window.renderHeroBig(hero);
  } catch {
    heroesListTemplate = '';
  }
  if (heroTemplate === undefined || heroTemplate === null) {
    heroTemplate = '';
  }
  let template = window.createHeader(formFilterHandler);
  template += window.createBodyMain(
    heroTemplate,
    heroesListTemplate,
    formFilterHandler,
    cardHandler,
    resetFilterHandler,
    error,
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

function updateUrl() {
  const url = new URL(window.location.href);
  for (let param in window.STATE) {
    let searchParam = url.searchParams.get(param);
    try {
      window.STATE[param] = searchParam;
    } catch {
      window.STATE[param] = null;
    }
  }
  window.history.pushState({}, '', url);
}

window.updateUrl = updateUrl;

function setUrl() {
  const url = new URL(window.location.href);
  url.search = '';
  for (let param in window.STATE) {
    if (window.STATE[param] === null) {
      url.searchParams.delete(param);
    } else {
      url.searchParams.set(param, window.STATE[param]);
    }
  }
  window.history.pushState({}, '', url);
}

window.setUrl = setUrl;

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
  window.setUrl();
  window
    .getheroesFromServer(window.getPathOnFilter())
    .then(dataHeroes => window.filterFromState(dataHeroes))
    .then(dataHeroes => {
      if (dataHeroes.length === 0) {
        throw new Error('No one magic hero match the parameters. Please, select something else.');
      }
      window.renderApp(dataHeroes);
    })
    .catch(error => window.renderApp([], null, error));
}

function resetFilterHandler() {
  window.STATE = {
    house: null,
    gender: null,
    name: null,
    staff: null,
    isAlive: null,
  };
  window.setUrl();
  window.getheroesFromServer('').then(dataHeroes => {
    window.renderApp(dataHeroes, null);
  });
}

window.resetFilterHandler = resetFilterHandler;

function createApp(id = null) {
  window
    .getheroesFromServer('')
    .then(heroes => window.filterFromState(heroes))
    .then(heroes => window.renderApp(heroes, id))
    .catch(error => window.renderApp([], null, error));
  window.updateUrl();
}

window.createApp = createApp;

function reloadApp() {
  window.resetFilterHandler();
}

window.reloadApp = reloadApp;

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
