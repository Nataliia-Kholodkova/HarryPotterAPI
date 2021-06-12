import React from 'react';
import Error from '../Error/Error';
import styles from './styles.css';
import { generateButtons, generateData } from './helpers';
import { useAppContext } from '../../context';

export default function Main() {
  const appContext = useAppContext();
  const [error] = appContext.error;
  const [hero, setHero] = appContext.hero;
  const [, setHeroId] = appContext.heroId;
  const [heroes] = appContext.heroes;
  const buttons = generateButtons();
  const data = generateData(error, hero, setHero, setHeroId, heroes);
  return (
    <>
      <main className={styles.main} id={'main'}>
        <div className={styles.results}>
          {buttons}
          <div className={styles['hero-list']}>
            <Error />
            {data}
          </div>
        </div>
      </main>
    </>
  );
}
