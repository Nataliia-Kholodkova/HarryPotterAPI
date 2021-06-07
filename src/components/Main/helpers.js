import React from 'react';
import MainHeroCard from '../MainHeroCard/MainHeroCard';
import HeroesList from '../HeroesList/HeroesList';
import styles from './styles.css';
import { sliderHandler, clickCardHandler } from '../../utils/handlers';

function generateButtons() {
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
  let data = null;
  if (!error) {
    data = (
      <>
        <MainHeroCard hero={hero} />
        <div className={styles['hero-list__wrapper']}>
          <div
            className={styles['hero-list__slider']}
            id="slider"
            onClick={event => clickCardHandler(event, heroes, setHeroId, setHero)}
          >
            <HeroesList heroes={heroes} />
          </div>
        </div>
      </>
    );
  }
  return data;
}

export { generateButtons, generateData };
