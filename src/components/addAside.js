/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import CreateForm from './addForm';

function CreateAside({ filterHandler, resetHandler }) {
  return (
    <aside className={window.styles.aside}>
      (
      <CreateForm
        formState={window.FORM_STATE.filter}
        listener={filterHandler}
        imgNeed={false}
        isFieldset={true}
        resetNeed={true}
        isSearchNeed={true}
        resetFilterHandler={resetHandler}
      />
      )
    </aside>
  );
}

export default CreateAside;
