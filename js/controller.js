import model from "./model.js";
import view from "./view.js";

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.result = document.querySelector(".results");
        this.state = {
            house: null,
            gender: null,
            name: null,
            hogwarts: null,
            isAlive: null,
        };
        this.model.heroes.then((data) =>
            this.renderPage(Promise.resolve(data))
        );
    }

    renderPage = (data) => {
        if (data.length === 0) {
            return
        }
        Promise.resolve(data).then(data => this.model.getRandomHero(data)).then(hero => this.view.renderHero("big", hero)).then((template) => this.displayBigHero(template));
        Promise.resolve(data).then((heroes) => this.view.renderHeroesList(heroes))
            .then((template) => this.displayHeroesList(template)).catch();
    };

    renderHeroCard = (id) => {
        this.model.heroes.then((data) => this.model.getHero(data, id)).then(hero => this.view.renderHero("big", hero)).then((template) => this.displayBigHero(template));
    }

    displayBigHero = (template) => {
        const heroCardBig = this.result.querySelector(".hero-card__big");
        if (heroCardBig) {
            this.result.replaceChild(template, heroCardBig);
        } else {
            this.result.insertAdjacentElement("afterbegin", template);
        }
    };

    displayHeroesList = (template) => {
        const slider = this.result.querySelector(".hero-list__slider");
        slider.innerHTML = "";
        slider.append(template);
    };

    formFilterHandler = (element) => {
        switch (element.value) {
            case "all":
                this.state[element.name] = null;
                break;
            default:
                this.state[element.name] = element.value;
        }
        this.model.heroes
            .then((data) => this.model.filterFromState(data, this.state))
            .then((data) => this.renderPage(data));
    };

    resetFilter = () => {
        this.state = {
            house: null,
            gender: null,
            name: null,
            staff: null,
            isAlive: null,
        };
        this.model.heroes.then((data) =>
            this.renderPage(Promise.resolve(data))
        );
    };
}

class Slider {
    constructor() {
        this.sliderButtons = document.querySelectorAll(".btn-list");
        this.slider = document.querySelector(".hero-list__slider");
        this.sliderWidth = this.slider.offsetWidth;
    }

    sliderMove = (element) => {
        const cardWidth = this.slider.querySelector(".hero-card__small").offsetWidth + 10;
        const direction = +element.dataset.dir;
        const cardsPerSlider = Math.floor(this.sliderWidth / cardWidth);
        const totalSliderWidth = cardWidth * this.slider.children.length;
        let left = this.slider.style.left ? parseInt(this.slider.style.left) : 0;
        if (Math.abs(left + direction * cardWidth) > totalSliderWidth - cardsPerSlider * cardWidth) {
            this.slider.style.left = "0px";
        } else if (left + direction * cardWidth > 0) {
            this.slider.style.left = `-${
                (this.slider.children.length * cardWidth - cardsPerSlider * cardWidth) * direction
            }px`;
        } else {
            this.slider.style.left = `${left + cardWidth * direction}px`;
        }
    }

    cardHandler = (target, controller) => {
        const card = target.closest('div');
        if (!card.classList.contains('hero-card__small')) {
            return
        }
        const id = +card.dataset.id;
        controller.renderHeroCard(id);
    }
}

class ModalForm {
    constructor() {
        this.modalWindow = document.querySelector(".modal");
        this.findButton = document.querySelector(".btn-find");
    }

     modalFormHandler = () => {
        this.modalWindow.classList.remove("modal-closed");
        this.modalWindow.classList.add("modal-open");
        this.modalWindow
            .querySelector(".btn-modal")
            .addEventListener("click", function () {
                this.modalWindow.classList.add("modal-closed");
                this.modalWindow.classList.remove("modal-open");
            });
    }
}

class App {
    constructor() {
        this.controller = new Controller(model, view);
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
        this.slider.sliderButtons.forEach((btn) => btn.addEventListener("click", ({ target }) => {
            this.slider.sliderMove(target);
    })
        );
        this.slider.slider.addEventListener('click', ({ target }) => {
            this.slider.cardHandler(target, this.controller)
        });
        this.modalWindow.findButton.addEventListener('click', this.modalWindow.modalFormHandler);
    }

    filterFormHandler = ({ target }) => {
        this.controller.formFilterHandler(target)
    }

    resetHandler = () => {
        this.controller.resetFilter();
    }

}

const app = new App();
export default app;
