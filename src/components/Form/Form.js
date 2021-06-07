import React from 'react';
import Fieldset from '../Fieldset/Fieldset';
import styles from './styles.css';
import { useFormContext, useAppContext } from '../../context';
import { modalFormSubmit } from '../../utils/modal';

export default function Form({
  imgNeed = false,
  isFieldset = false,
  resetNeed = false,
  formState,
  needSubmit,
  setSimilarityItems,
}) {
  const { house, hogwarts, gender, name, alive } = useFormContext();
  const appState = useAppContext();
  return (
    <form
      className={`form ${styles[formState[0].formClasses]}`}
      onSubmit={event => {
        needSubmit ? setSimilarityItems(modalFormSubmit(event)) : false;
      }}
    >
      {formState.map((_state, index) => (
        <Fieldset
          state={_state}
          imgNeed={imgNeed}
          isFieldset={isFieldset}
          needSubmit={needSubmit}
          key={index}
        />
      ))}
      {resetNeed ? (
        <>
          <button
            type="reset"
            className={`btn btn-reset`}
            name="reset"
            type="reset"
            onClick={() => {
              appState.heroId[1](null);
              appState.error[1](null);
              appState.hero[1](null);
              appState.heroes[1](null);
              name[1]('');
              gender[1]('All');
              house[1]('All');
              alive[1]('All');
              hogwarts[1]('All');
            }}
          >
            Reset
          </button>
        </>
      ) : null}
      {needSubmit ? (
        <button type="submit" className={`btn ${styles['btn-submit']}`} name="submit">
          Submit
        </button>
      ) : null}
    </form>
  );
}
