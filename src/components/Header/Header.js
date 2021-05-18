/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import Form from '../Form/Form';

export default function Header({ funcFaculty }) {
  return (
    <header class={window.styles.header}>
      <div class={window.styles.wrapper}>
        <h1 class={[window.styles.title, window.styles['title-main'] || 'title-main']}>
          Welcome to the magic World of Hogwarts
        </h1>
        <Form formState={window.FORM_STATE.faculty} listener={funcFaculty} imgNeed={true} />
      </div>
    </header>
  );
}
