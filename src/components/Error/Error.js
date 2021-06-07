import React from 'react';
import hat from './img/hat.png';
import Image from '../Image/Image';
import styles from './styles.css';
import { useFormContext, useAppContext } from '../../context';
import { resetHandler } from '../../utils/handlers';

export default function Error() {
  const { house, hogwarts, gender, name, alive } = useFormContext();
  const appState = useAppContext();
  const [error] = appState.error;
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
          onClick={() =>
            resetHandler(appState, name[1], gender[1], house[1], alive[1], hogwarts[1])
          }
        >
          Reload
        </button>
      </div>
    </>
  );
}
