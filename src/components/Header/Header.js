import React from 'react';
import Form from '../Form/Form';
import styles from './styles.css';
import FORM_STATE from '../../utils/buildState';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={'wrapper'}>
        <h1 className={`title title-main`}>Welcome to the magic World of Hogwarts</h1>
        <Form imgNeed={true} formState={FORM_STATE.faculty} />
      </div>
    </header>
  );
}
