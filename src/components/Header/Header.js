/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import Form from '../Form/Form';
import FORM_STATE from '../../js/buildState';
import styles from './styles.css';

export default function Header({ funcFaculty, state, setStateChanged, setNeedReload }) {
  return (
    <header class={styles.header}>
      <div class={'wrapper'}>
        <h1 class={`title title-main`}>Welcome to the magic World of Hogwarts</h1>
        <Form
          formState={FORM_STATE.faculty}
          listener={funcFaculty}
          imgNeed={true}
          state={state}
          setNeedReload={setNeedReload}
        />
      </div>
    </header>
  );
}
