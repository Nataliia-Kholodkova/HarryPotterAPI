/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import styles from './styles.css';

export default function Legend({ state }) {
  if (!state.legend) {
    return null;
  }
  return <legend class={`legend ${styles[state.legendClasses]}`}>{state.legend}</legend>;
}
