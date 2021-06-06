import React from 'react';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import styles from './styles.css';
import { useHeroes } from '../../customHooks';
import { getHero } from '../../utils/utils';

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

  const template = (
    <>
      <Header
        hero={hero}
        setHero={setHero}
        heroId={heroId}
        setHeroId={setHeroId}
        setHeroes={setHeroes}
        setError={setError}
        appState={appState}
        heroes={heroes}
      />
      <div className={`wrapper ${styles['main-wrapper']}`}>
        <Aside
          hero={hero}
          setHero={setHero}
          heroId={heroId}
          setHeroId={setHeroId}
          setHeroes={setHeroes}
          setError={setError}
          appState={appState}
          heroes={heroes}
        />
        <Main
          error={error}
          hero={hero}
          setHero={setHero}
          heroId={heroId}
          setHeroId={setHeroId}
          heroes={heroes}
          setHeroes={setHeroes}
          setError={setError}
          setHouse={setHouse}
          setHogwarts={setHogwarts}
          setGender={setGender}
          setAlive={setAlive}
          setName={setName}
        />
      </div>
    </>
  );
  return template;
}
