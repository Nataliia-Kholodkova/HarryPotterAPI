import React from 'react';
import styles from './styles.css';
import { scrollToHeroes } from '../../utils/handlers';

export default function Main() {
  return (
    <>
      <button type="button" className={`btn ${styles['tip']}`} name="tip" onClick={scrollToHeroes}>
        Push me to see today's Heroes
      </button>
    </>
  );
}
