/* eslint-disable indent */

const CARD_MARGIN = 15;

class Slider {
    constructor() {
        this.sliderButtons = document.querySelectorAll('.btn-list');
        this.slider = document.querySelector('.hero-list__slider');
        this.sliderWidth = this.slider.offsetWidth;
    }

    sliderMove = (element) => {
        const cardWidth = this.slider.querySelector('.hero-card__small').offsetWidth + CARD_MARGIN;
        const direction = +element.dataset.dir;
        const cardsPerSlider = Math.round(this.sliderWidth / cardWidth);
        const totalSliderWidth = cardWidth * this.slider.children.length;
        const left = this.slider.style.left
            ? parseInt(this.slider.style.left, 10)
            : 0;
        if (
            Math.abs(left + direction * cardWidth)
            > totalSliderWidth - (
                cardsPerSlider === 1 ? cardsPerSlider : cardsPerSlider - 1) * cardWidth
        ) {
            this.slider.style.left = '0px';
        } else if (left + direction * cardWidth > 0) {
            this.slider.style.left = `-${
                (this.slider.children.length * cardWidth
                    - cardsPerSlider * cardWidth)
                * direction
            }px`;
        } else {
            this.slider.style.left = `${left + cardWidth * direction}px`;
        }
    };

    cardHandler = (target) => {
        const card = target.closest('div');
        if (!card.classList.contains('hero-card__small')) {
            return false;
        }
        return +card.dataset.id;
    };
}

export default Slider;
