import React from 'react';
import Form from '../Form/Form';
import FORM_STATE from '../../utils/buildState';
import styles from './styles.css';

export default function Aside({
  hero,
  setHero,
  heroId,
  setHeroId,
  heroes,
  setHeroes,
  setError,
  appState,
}) {
  return (
    <aside className={styles.aside}>
      <Form
        imgNeed={false}
        isFieldset={true}
        resetNeed={true}
        formState={FORM_STATE.filter}
        hero={hero}
        setHero={setHero}
        heroId={heroId}
        setHeroId={setHeroId}
        setHeroes={setHeroes}
        setError={setError}
        appState={appState}
        heroes={heroes}
      />
    </aside>
  );
}
