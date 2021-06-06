import React from 'react';
import hat from './img/hat.png';
import Image from '../Image/Image';
import styles from './styles.css';

export default function Error({
  error,
  setHero,
  setHeroId,
  setHeroes,
  setError,
  setHouse,
  setHogwarts,
  setGender,
  setAlive,
  setName,
}) {
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
            setAlive('All');
            setGender('All');
            setHogwarts('All');
            setHouse('All');
            setName('');
          }}
        >
          Reload
        </button>
      </div>
    </>
  );
}
