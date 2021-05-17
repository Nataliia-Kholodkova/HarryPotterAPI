/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import CreateForm from './addForm';

function CreateHeader({ funcFaculty }) {
  return (
    <header className={window.styles.header}>
      <div className={window.styles.wrapper}>
        <h1 className={[window.styles.title, window.styles['title-main'] || 'title-main']}>
          Welcome to the magic World of Hogwarts
        </h1>
        <CreateForm formState={window.FORM_STATE.faculty} listener={funcFaculty} imgNeed={true} />
      </div>
    </header>
  );
}

export default CreateHeader;
