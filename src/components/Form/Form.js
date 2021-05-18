/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Fieldset from '../Fieldset/Fieldset';
import styles from './styles.css';

export default function Form({
  formState,
  listener,
  imgNeed = false,
  isFieldset = false,
  resetNeed = false,
  resetFilterHandler = null,
}) {
  return (
    <form class={`form ${styles[formState[0].formClasses]}`} onChange={event => listener(event)}>
      {formState.map(_state => (
        <Fieldset state={_state} imgNeed={imgNeed} isFieldset={isFieldset} />
      ))}
      {resetNeed ? (
        <>
          <button
            type="reset"
            class={`btn btn-reset`}
            name="reset"
            type="reset"
            onClick={event => resetFilterHandler(event)}
          >
            Reset
          </button>
        </>
      ) : null}
    </form>
  );
}
