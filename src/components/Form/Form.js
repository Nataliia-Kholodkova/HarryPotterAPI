/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Fieldset from '../Fieldset/Fieldset';
import styles from './styles.css';

export default function Form({
  setState,
  imgNeed = false,
  isFieldset = false,
  resetNeed = false,
  appState,
  formState,
}) {
  const formHandler = (event, appState) => {
    const element = event.target.closest('input');
    if (!element) {
      return;
    }
    switch (element.value) {
      case 'all':
        appState.state[element.name] = null;
        break;
      default:
        appState.state[element.name] = element.value;
    }
    appState.needReload = true;
    return appState;
  };
  return (
    <form
      class={`form ${styles[formState[0].formClasses]}`}
      onChange={event => {
        setState(formHandler(event, appState));
      }}
    >
      {formState.map(_state => (
        <Fieldset state={_state} imgNeed={imgNeed} isFieldset={isFieldset} appState={appState} />
      ))}
      {resetNeed ? (
        <>
          <button
            type="reset"
            class={`btn btn-reset`}
            name="reset"
            type="reset"
            onClick={event =>
              setState({
                state: {
                  house: null,
                  gender: null,
                  name: null,
                  hogwarts: null,
                  isAlive: null,
                },
                needReload: true,
              })
            }
          >
            Reset
          </button>
        </>
      ) : null}
    </form>
  );
}
