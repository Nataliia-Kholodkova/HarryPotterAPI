import React from 'react';
import Form from '../Form/Form';
import FORM_STATE from '../../utils/buildState';
import styles from './styles.css';
import { modalFormOpener } from '../../utils/modal';

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <Form
        imgNeed={false}
        isFieldset={true}
        resetNeed={true}
        formState={FORM_STATE.filter}
        needSubmit={false}
      />
      <div className={styles.additional}>
        <button type="button" className={`btn btn-find`} onClick={modalFormOpener}>
          Find your Hero :)
        </button>
      </div>
    </aside>
  );
}
