/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import Form from '../Form/Form';
import FORM_STATE from '../../js/buildState';

export default function Aside({ filterHandler, resetHandler }) {
  return (
    <aside class={window.styles.aside}>
      <Form
        formState={FORM_STATE.filter}
        listener={filterHandler}
        imgNeed={false}
        isFieldset={true}
        resetNeed={true}
        resetFilterHandler={resetHandler}
      />
    </aside>
  );
}
