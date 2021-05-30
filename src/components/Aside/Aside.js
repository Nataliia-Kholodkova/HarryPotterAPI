/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import Form from '../Form/Form';
import FORM_STATE from '../../utils/buildState';
import styles from './styles.css';

export default function Aside({ setState, appState, setHeroesState }) {
  return (
    <aside class={styles.aside}>
      <Form
        setState={setState}
        imgNeed={false}
        isFieldset={true}
        resetNeed={true}
        appState={appState}
        formState={FORM_STATE.filter}
        setHeroesState={setHeroesState}
      />
    </aside>
  );
}
