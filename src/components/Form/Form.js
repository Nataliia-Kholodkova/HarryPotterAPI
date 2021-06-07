import React from 'react';
import Fieldset from '../Fieldset/Fieldset';
import styles from './styles.css';
import { useFormContext, useAppContext } from '../../context';
import { modalFormSubmit, resetHandler } from '../../utils/handlers';

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
            onClick={() =>
              resetHandler(appState, name[1], gender[1], house[1], alive[1], hogwarts[1])
            }
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
