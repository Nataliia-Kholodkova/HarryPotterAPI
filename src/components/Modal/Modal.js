import React from 'react';
import styles from './styles.css';
import FORM_STATE from '../../utils/buildState';
import { modalFormClose } from '../../utils/handlers';
import Form from '../Form/Form';

export default function Modal({ setSimilarityItems }) {
  const template = (
    <>
      <div className={`modal modal-closed`} id={'modal'}>
        <button
          type="button"
          className={`btn ${styles['btn-modal']}`}
          id={'modalCloseBtn'}
          onClick={modalFormClose}
        ></button>
        <Form
          imgNeed={false}
          formState={FORM_STATE.similarity}
          needSubmit={true}
          isFieldset={true}
          setSimilarityItems={setSimilarityItems}
        />
      </div>
    </>
  );
  return template;
}
