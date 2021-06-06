import React from 'react';
import Input from '../Input/Input';
import Legend from '../Legend/Legend';
import styles from './styles.css';

export default function Fieldset({
  state,
  imgNeed,
  isFieldset,
  setHero,
  setHeroId,
  setHeroes,
  setError,
  appState,
  heroes,
}) {
  if (isFieldset) {
    return (
      <>
        <fieldset className={`fieldset ${styles[state.fieldsetClasses]}`}>
          <Legend state={state} />
          <Input
            state={state}
            imgNeed={imgNeed}
            setHero={setHero}
            setHeroId={setHeroId}
            setHeroes={setHeroes}
            setError={setError}
            appState={appState}
            heroes={heroes}
          />
        </fieldset>
      </>
    );
  }
  return (
    <Input
      state={state}
      imgNeed={imgNeed}
      setHero={setHero}
      setHeroId={setHeroId}
      setError={setError}
      setHeroes={setHeroes}
      appState={appState}
      heroes={heroes}
    />
  );
}
