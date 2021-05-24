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
  state,
  setNeedReload,
}) {
  return (
    <form
      class={`form ${styles[formState[0].formClasses]}`}
      onChange={event => {
        const element = event.target.closest('input');
        if (!element) {
          return;
        }
        switch (element.value) {
          case 'all':
            state[element.name] = null;
            break;
          default:
            state[element.name] = element.value;
        }
        listener(state);
        setNeedReload(true);
      }}
    >
      {formState.map(_state => (
        <Fieldset state={_state} imgNeed={imgNeed} isFieldset={isFieldset} stateApp={state} />
      ))}
      {resetNeed ? (
        <>
          <button
            type="reset"
            class={`btn btn-reset`}
            name="reset"
            type="reset"
            onClick={event => resetFilterHandler()}
          >
            Reset
          </button>
        </>
      ) : null}
    </form>
  );
}
