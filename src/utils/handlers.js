import filterFromState from '../data/filterHeroes';
import { getHero } from './utils';

export function modalFormOpener() {
  const modalWindow = document.getElementById('modal');
  modalWindow.classList.remove('modal-closed');
  modalWindow.classList.add('modal-opened');
}

export function modalFormClose() {
  const modalWindow = document.getElementById('modal');
  modalWindow.classList.add('modal-closed');
  modalWindow.classList.remove('modal-opened');
}

export function modalFormSubmit(event) {
  event.preventDefault();
  const state = [];
  [...event.target.elements].forEach(element => {
    if (element.type === 'radio' && element.checked) {
      state.push([element.name, element.value, +element.dataset.score]);
    }
  });
  modalFormClose();
  return state;
}

export function inputHandler(event, appState, appInputsState) {
  const [, setter] = appInputsState[event.target.name];
  setter(event.target.value);
  appState.heroId[1](null);
  appState.hero[1](null);
  appState.error[1](null);
  if (appState.heroes[0].length === 0) {
    return;
  }
  try {
    setHeroes(filterFromState(appState.heroes[0], event.target.name, event.target.value));
  } catch (error) {
    appState.error[1](null);
    appState.heroes[1]([]);
  }
}

export function resetHandler(appState, name, gender, house, alive, hogwarts) {
  appState.heroId[1](null);
  appState.error[1](null);
  appState.hero[1](null);
  appState.heroes[1]([]);
  name('');
  gender('All');
  house('All');
  alive('All');
  hogwarts('All');
}

export function sliderHandler(event) {
  const slider = document.querySelector('#slider');
  const sliderWidth = slider.offsetWidth;
  const cardWidth = slider.querySelector(`div`).offsetWidth + 15;
  const direction = +event.target.dataset.dir;
  const cardsPerSlider = Math.round(sliderWidth / cardWidth);
  const totalSliderWidth = cardWidth * slider.children.length;
  const left = slider.style.left ? parseInt(slider.style.left, 10) : 0;
  if (
    Math.abs(left + direction * cardWidth) >
    totalSliderWidth - (cardsPerSlider === 1 ? cardsPerSlider : cardsPerSlider - 1) * cardWidth
  ) {
    slider.style.left = '0px';
  } else if (left + direction * cardWidth > 0) {
    slider.style.left = `-${
      (slider.children.length * cardWidth - cardsPerSlider * cardWidth) * direction
    }px`;
  } else {
    slider.style.left = `${left + cardWidth * direction}px`;
  }
}

export function clickCardHandler(event, heroes, setHeroId, setHero) {
  const card = event.target.closest(`div.hero-card`);
  let id = null;
  if (!card) {
    setHeroId(null);
    setHero(null);
    return null;
  }
  id = +card.dataset.id;
  const hero = getHero(heroes, id);
  setHeroId(id);
  setHero(hero);
}

export function scrollToHeroes() {
  const main = document.getElementById('main');
  const position = main.getBoundingClientRect().top;
  window.scrollBy({
    top: position,
    behavior: 'smooth',
  });
}
