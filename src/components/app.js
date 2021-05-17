/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import CreateMain from './addMain';
import CreateAside from './addAside';
import CreateHeader from './addHeader';
import RenderHeroesList from './heroesList';
import RenderHeroBig from './heroBig';
import { getRandomHero, getHero } from '../js/utils';

function CreateBodyMain({
  hero,
  heroesList,
  error,
  formHandler,
  cardHandler,
  resetHandler,
  sliderHandler,
  errorHandler,
}) {
  return (
    <div className={[window.styles.wrapper, window.styles['main-wrapper'] || 'main-wrapper']}>
      <CreateAside filterHandler={formHandler} resetHandler={resetHandler} />
      <CreateMain
        hero={hero}
        heroList={heroesList}
        cardHandler={cardHandler}
        error={error}
        errorHandler={errorHandler}
        sliderHandler={sliderHandler}
      />
    </div>
  );
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
  let heroesListTemplate = null;
  let heroTemplate = null;
  try {
    if (dataHeroes.length > 0) {
      heroesListTemplate = RenderHeroesList(dataHeroes);
    }
    if (id != null) {
      hero = getHero(dataHeroes, id);
    } else {
      hero = getRandomHero(dataHeroes);
    }
    heroTemplate = RenderHeroBig({ hero });
  } catch {
    heroesListTemplate = null;
  }
  if (heroTemplate === undefined || heroTemplate === null) {
    heroTemplate = null;
  }
  const template = (
    <>
      <CreateHeader funcFaculty={formHandler} />
      <CreateBodyMain
        hero={heroTemplate}
        heroesList={heroesListTemplate}
        error={error}
        formHandler={formHandler}
        cardHandler={cardHandler}
        resetHandler={resetHandler}
        sliderHandler={sliderHandler}
        errorHandler={errorHandler}
      />
    </>
  );
  const target = document.querySelector('.container');
  target.innerHTML = '';
  target.appendChild(template);
}
