import styles from '../css/style.css';

class ModalForm {
  constructor() {
    this.modalWindow = document.querySelector(`.${styles.modal}`);
    this.form = this.modalWindow.querySelector(`.${styles['similarity-form']}`);
    this.findButton = document.querySelector(`.${styles['btn-find']}`);
  }

  modalFormHandler = () => {
    this.modalWindow.classList.remove(`${styles['modal-closed']}`);
    this.modalWindow.classList.add(`${styles['modal-open']}` || 'modal-open');
    this.modalWindow
      .querySelector(`.${styles['btn-modal']}`)
      .addEventListener('click', () => this.closeModal());
  };

  closeModal = () => {
    this.modalWindow.classList.add(`${styles['modal-closed']}`);
    this.modalWindow.classList.remove(`${styles['modal-open']}`);
  };

  modalFormSubmit = () => {
    const state = {};
    [...this.form.elements].forEach(element => {
      if (element.type === 'radio' && element.checked) {
        state[element.name] = [element.value.toLowerCase(), +element.dataset.score];
      }
    });
    return state;
  };
}

export default ModalForm;
