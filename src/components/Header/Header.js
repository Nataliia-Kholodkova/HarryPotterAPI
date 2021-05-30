/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import Form from '../Form/Form';
import styles from './styles.css';
import FORM_STATE from '../../utils/buildState';
import { HeaderFormContext } from '../../context';

export default function Header({ setState, appState }) {
  return (
    <header class={styles.header}>
      <div class={'wrapper'}>
        <h1 class={`title title-main`}>Welcome to the magic World of Hogwarts</h1>
        <Form
          setState={setState}
          imgNeed={true}
          appState={appState}
          formState={FORM_STATE.faculty}
        />
      </div>
    </header>
  );
}
