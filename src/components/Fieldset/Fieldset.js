/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Input from '../Input/Input';
import Legend from '../Legend/Legend';
import styles from './styles.css';

export default function Fieldset({ state, imgNeed, isFieldset, appState }) {
  if (isFieldset) {
    return (
      <>
        <fieldset class={`fieldset ${styles[state.fieldsetClasses]}`}>
          <Legend state={state} />
          <Input state={state} imgNeed={imgNeed} appState={appState.state} />
        </fieldset>
      </>
    );
  }
  return <Input state={state} imgNeed={imgNeed} appState={appState.state} />;
}
