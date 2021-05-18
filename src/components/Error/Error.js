/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import hat from './img/hat.png';
import Image from '../Image/Image';
import styles from './styles.css';

export default function Error({ error, reloadHandler }) {
  if (!error) {
    return null;
  }
  return (
    <>
      <div class={styles.error}>
        <Image value={'Sorting hat'} url={hat} width={'150'} imgClasses={['']} />
        <h1 class={'title-main'} style="color: #2a221e">
          {error}
        </h1>
        <button
          type="button"
          class={`btn ${styles['btn-reset']}`}
          name="reload"
          onClick={event => reloadHandler(event)}
        >
          Reload
        </button>
      </div>
    </>
  );
}
