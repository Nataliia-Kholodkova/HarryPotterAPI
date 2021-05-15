import createForm from './addForm';

export default function createHeader(funcFaculty) {
  return `
      <header class="${window.styles.header}">
        <div class="${window.styles.wrapper}">
          <h1 class "${window.styles.title} ${
    window.styles['title-main'] || 'title-main'
  }">Welcome to the magic World of Hogwarts</h1>
          ${createForm(FORM_STATE.faculty, funcFaculty, true)}
        </div>
      </header>
      `;
}
