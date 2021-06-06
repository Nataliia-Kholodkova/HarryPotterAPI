import React from 'react';
import MainHeroCard from '../MainHeroCard/MainHeroCard';
import HeroesList from '../HeroesList/HeroesList';
import { getHero } from '../../utils/utils';
import styles from './styles.css';

function generateButtons(sliderHandler) {
  const buttons = (
    <>
      <button
        type="button"
        className={`btn ${styles['btn-list']} ${styles['btn-list__left']}`}
        data-dir={'1'}
        onClick={event => sliderHandler(event)}
      >
        &lsaquo;
      </button>
      <button
        type="button"
        className={`btn ${styles['btn-list']} ${styles['btn-list__right']}`}
        data-dir={'-1'}
        onClick={event => sliderHandler(event)}
      >
        &rsaquo;
      </button>
    </>
  );
  return buttons;
}

function generateData(error, hero, setHero, setHeroId, heroes) {
  const clickHandler = event => {
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
  };
  let data = null;
  if (!error) {
    data = (
      <>
        <MainHeroCard hero={hero} />
        <div className={styles['hero-list__wrapper']}>
          <div className={styles['hero-list__slider']} id="slider" onClick={clickHandler}>
            <HeroesList heroes={heroes} />
          </div>
        </div>
      </>
    );
  }
  return data;
}

export { generateButtons, generateData };
