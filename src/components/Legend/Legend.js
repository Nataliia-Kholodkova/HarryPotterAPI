import React from 'react';
import styles from './styles.css';

export default function Legend({ state }) {
  if (!state.legend) {
    return null;
  }
  return <legend className={`legend ${styles[state.legendClasses]}`}>{state.legend}</legend>;
}
