import React from 'react';
import Fieldset from '../Fieldset/Fieldset';
import styles from './styles.css';

export default function Form({
  imgNeed = false,
  isFieldset = false,
  resetNeed = false,
  formState,
  hero,
  setHero,
  heroId,
  setHeroId,
  setHeroes,
  setError,
  appState,
  heroes,
}) {
  return (
    <form className={`form ${styles[formState[0].formClasses]}`}>
      {formState.map((_state, index) => (
        <Fieldset
          state={_state}
          imgNeed={imgNeed}
          isFieldset={isFieldset}
          hero={hero}
          setHero={setHero}
          setHeroes={setHeroes}
          heroId={heroId}
          setHeroId={setHeroId}
          setError={setError}
          appState={appState}
          heroes={heroes}
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
              setHeroId(null);
              setError(null);
              setHero(null);
              setHeroes([]);
              for (let key in appState) {
                const [_, setter] = appState[key];
                key === 'name' ? setter(undefined) : setter('All');
              }
            }}
          >
            Reset
          </button>
        </>
      ) : null}
    </form>
  );
}
