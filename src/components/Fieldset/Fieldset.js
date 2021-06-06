import React from 'react';
import Input from '../Input/Input';
import Legend from '../Legend/Legend';
import styles from './styles.css';
import { useFormContext, useAppContext } from '../../context';

export default function Fieldset({ state, imgNeed, isFieldset }) {
  const appInputsState = useFormContext();
  const appState = useAppContext();
  if (isFieldset) {
    return (
      <>
        <fieldset className={`fieldset ${styles[state.fieldsetClasses]}`}>
          <Legend state={state} />
          <Input
            state={state}
            imgNeed={imgNeed}
            appInputsState={appInputsState}
            appState={appState}
          />
        </fieldset>
      </>
    );
  }
  return (
    <Input state={state} imgNeed={imgNeed} appInputsState={appInputsState} appState={appState} />
  );
}
