/* eslint-disable indent */

class ModalForm {
  constructor() {
    this.modalWindow = document.querySelector('.modal');
    this.form = this.modalWindow.querySelector('.similarity-form');
    this.findButton = document.querySelector('.btn-find');
  }

  modalFormHandler = () => {
    this.modalWindow.classList.remove('modal-closed');
    this.modalWindow.classList.add('modal-open');
    this.modalWindow.querySelector('.btn-modal').addEventListener('click', () => this.closeModal());
  };

  closeModal = () => {
    this.modalWindow.classList.add('modal-closed');
    this.modalWindow.classList.remove('modal-open');
  };

  modalFormSubmit = () => {
    const state = {};
    [...this.form.elements].forEach(element => {
      if (element.type === 'radio' && element.checked) {
        state[element.name] = [element.value, +element.dataset.score];
      }
    });
    return state;
  };
}

export default ModalForm;
