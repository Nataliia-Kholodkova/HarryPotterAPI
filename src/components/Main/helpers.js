/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import MainHeroCard from '../MainHeroCard/MainHeroCard';
import HeroesList from '../HeroesList/HeroesList';
import { getHero } from '../../utils/utils';
import styles from './styles.css';

function generateButtons(sliderHandler) {
  const buttons = (
    <>
      <button
        type="button"
        class={`btn ${styles['btn-list']} ${styles['btn-list__left']}`}
        data-dir={'1'}
        onclick={event => sliderHandler(event)}
      >
        &lsaquo;
      </button>
      <button
        type="button"
        class={`btn ${styles['btn-list']} ${styles['btn-list__right']}`}
        data-dir={'-1'}
        onclick={event => sliderHandler(event)}
      >
        &rsaquo;
      </button>
    </>
  );
  return buttons;
}

function generateData(appState, heroesData, setHeroesState, setState, error) {
  const clickHandler = event => {
    const card = event.target.closest(`div.hero-card`);
    let id = null;
    if (!card) {
      heroesData.heroId = null;
      heroesData.hero = null;
      setHeroesState(heroesData);
      return;
    }
    id = +card.dataset.id;
    const hero = getHero(heroesData.currentHeroes, id);
    heroesData.heroId = id;
    heroesData.hero = hero;
    setHeroesState(heroesData);
    appState.needReload = true;
    setState(appState);
  };
  let data = null;
  if (!error) {
    data = (
      <>
        <MainHeroCard />
        <div class={styles['hero-list__wrapper']}>
          <div class={styles['hero-list__slider']} id="slider" onclick={clickHandler}>
            <HeroesList />
          </div>
        </div>
      </>
    );
  }
  return data;
}

export { generateButtons, generateData };
