/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import Form from '../Form/Form';
import FORM_STATE from '../../js/buildState';
import styles from './styles.css';

export default function Aside({ setState, appState }) {
  return (
    <aside class={styles.aside}>
      <Form
        formState={FORM_STATE.filter}
        setState={setState}
        imgNeed={false}
        isFieldset={true}
        resetNeed={true}
        appState={appState}
      />
    </aside>
  );
}
