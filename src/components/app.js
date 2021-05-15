import createMain from './addMain';
import createAside from './addAside';
import createHeader from './addHeader';
import renderHeroesList from './heroesList';
import renderHeroBig from './heroBig';
import { getRandomHero, getHero } from '../js/utils';

function createBodyMain(
  hero,
  heroesList,
  error,
  formHandler,
  cardHandler,
  resetHandler,
  sliderHandler,
  errorHandler,
) {
  return `
    <div class = "${window.styles.wrapper} ${window.styles['main-wrapper'] || 'main-wrapper'}">
      ${createAside(formHandler, resetHandler)}
      ${createMain(hero, heroesList, cardHandler, error, errorHandler, sliderHandler)}
    </div>
    `;
}

export default function renderApp(
  dataHeroes,
  id,
  error,
  formHandler,
  cardHandler,
  resetHandler,
  sliderHandler,
  errorHandler,
) {
  let hero = null;
  let heroesListTemplate = '';
  let heroTemplate = null;
  try {
    if (dataHeroes.length > 0) {
      heroesListTemplate += renderHeroesList(dataHeroes);
    }
    if (id != null) {
      hero = getHero(dataHeroes, id);
    } else {
      hero = getRandomHero(dataHeroes);
    }
    heroTemplate = renderHeroBig(hero);
  } catch {
    heroesListTemplate = '';
  }
  if (heroTemplate === undefined || heroTemplate === null) {
    heroTemplate = '';
  }
  let template = createHeader(formHandler);
  template += createBodyMain(
    heroTemplate,
    heroesListTemplate,
    error,
    formHandler,
    cardHandler,
    resetHandler,
    sliderHandler,
    errorHandler,
  );
  document.querySelector('.container').innerHTML = template;
}
