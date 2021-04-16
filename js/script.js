/* eslint-disable import/extensions */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import Controller from './controller.js';
import model from './model.js';
import View from './view.js';
import Slider from './slider.js';
import ModalForm from './modalForm.js';

class App {
    constructor() {
        this.controller = new Controller(model, new View());
        this.slider = new Slider();
        this.modalWindow = new ModalForm();
        this.facultyForm = document.querySelector('.faculty-form');
        this.filterForm = document.querySelector('.filter-form');
        this.resetBtn = document.querySelector('.btn-reset');
    }

    addListeners = () => {
        this.facultyForm.addEventListener('input', this.filterFormHandler);
        this.filterForm.addEventListener('input', this.filterFormHandler);
        this.resetBtn.addEventListener('click', this.resetHandler);
        this.slider.sliderButtons.forEach((btn) => btn.addEventListener('click', ({ target }) => {
            this.slider.sliderMove(target);
    }));
        this.slider.slider.addEventListener('click', ({ target }) => {
            const id = this.slider.cardHandler(target, this);
            this.controller.getHeroes().then((data) => this.controller.renderHeroCard(data, id));
        });
        this.modalWindow.findButton.addEventListener('click', this.modalWindow.modalFormHandler);
        this.modalWindow.form.addEventListener('submit', (event) => {
            event.preventDefault();
            const state = this.modalWindow.modalFormSubmit(this.controller);
            this.controller.renderSimilarHeroes(state);
            this.modalWindow.closeModal();
        });
    }

    filterFormHandler = ({ target }) => {
        this.controller.formFilterHandler(target);
    }

    resetHandler = () => {
        this.controller.resetFilter();
    }
}
const app = new App();
app.addListeners();
