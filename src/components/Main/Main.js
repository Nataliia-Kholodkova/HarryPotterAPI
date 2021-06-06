import React from 'react';
import Error from '../Error/Error';
import styles from './styles.css';
import sliderHandler from '../../utils/slider';
import { generateButtons, generateData } from './helpers';

export default function Main({
  error,
  hero,
  setHero,
  heroId,
  setHeroId,
  heroes,
  setHeroes,
  setError,
  setHouse,
  setHogwarts,
  setGender,
  setAlive,
  setName,
}) {
  const buttons = generateButtons(sliderHandler);
  const data = generateData(error, hero, setHero, setHeroId, heroes);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.results}>
          {buttons}
          <div className={styles['hero-list']}>
            <Error
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
            {data}
          </div>
        </div>
      </main>
    </>
  );
}
