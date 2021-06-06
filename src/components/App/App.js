import React from 'react';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import styles from './styles.css';
import { useHeroes } from '../../customHooks';
import { AppContext, FormContext } from '../../context';

export default function App() {
  const {
    hero,
    setHero,
    heroId,
    setHeroId,
    heroes,
    setHeroes,
    error,
    setError,
    house,
    setHouse,
    hogwarts,
    setHogwarts,
    gender,
    setGender,
    alive,
    setAlive,
    name,
    setName,
  } = useHeroes();

  const appState = {
    house: [house, setHouse],
    hogwarts: [hogwarts, setHogwarts],
    gender: [gender, setGender],
    alive: [alive, setAlive],
    name: [name, setName],
  };

  const heroesState = {
    hero: [hero, setHero],
    heroId: [heroId, setHeroId],
    heroes: [heroes, setHeroes],
    error: [error, setError],
  };

  const template = (
    <>
      <AppContext.Provider value={heroesState}>
        <FormContext.Provider value={appState}>
          <Header />
          <div className={`wrapper ${styles['main-wrapper']}`}>
            <Aside />
            <Main />
          </div>
        </FormContext.Provider>
      </AppContext.Provider>
    </>
  );
  return template;
}
