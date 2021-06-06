import React from 'react';
import hat from './img/hat.png';
import Image from '../Image/Image';
import styles from './styles.css';
import { useFormContext, useAppContext } from '../../context';

export default function Error() {
  const inputsState = useFormContext();
  const appContext = useAppContext();
  const [error, setError] = appContext.error;
  const [, setHero] = appContext.hero;
  const [, setHeroId] = appContext.heroId;
  const [, setHeroes] = appContext.heroes;
  if (!error) {
    return null;
  }

  return (
    <>
      <div className={styles.error}>
        <Image value={'Sorting hat'} url={hat} width={'150'} imgClasses={['']} />

        <h1 className={'title-main'} style={{ color: '#2a221e' }}>
          {typeof error === 'object' ? error.toString() : error}
        </h1>
        <button
          type="button"
          className={`btn ${styles['btn-reset']}`}
          name="reload"
          onClick={() => {
            setHero(null);
            setError(null);
            setHeroId(null);
            setHeroes([]);
            for (let key in inputsState) {
              const [_, setter] = inputsState[key];
              key === 'name' ? setter(undefined) : setter('All');
            }
          }}
        >
          Reload
        </button>
      </div>
    </>
  );
}
