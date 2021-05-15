import createForm from './addForm';

export default function createAside(filterHandler, resetHandler) {
  return `
      <aside class="${window.styles.aside}">
      ${createForm(FORM_STATE.filter, filterHandler, false, true, true, true, resetHandler)}
      </aside>
      `;
}
