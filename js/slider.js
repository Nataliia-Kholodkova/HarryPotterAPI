/* eslint-disable consistent-return */
/* eslint-disable radix */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
class Slider {
    constructor() {
        this.sliderButtons = document.querySelectorAll('.btn-list');
        this.slider = document.querySelector('.hero-list__slider');
        this.sliderWidth = this.slider.offsetWidth;
    }

    sliderMove = (element) => {
        const cardWidth = this.slider.querySelector('.hero-card__small').offsetWidth + 10;
        const direction = +element.dataset.dir;
        const cardsPerSlider = Math.floor(this.sliderWidth / cardWidth);
        const totalSliderWidth = cardWidth * this.slider.children.length;
        const left = this.slider.style.left ? parseInt(this.slider.style.left) : 0;
        if (Math.abs(
            left + direction * cardWidth) > totalSliderWidth - cardsPerSlider * cardWidth) {
            this.slider.style.left = '0px';
        } else if (left + direction * cardWidth > 0) {
            this.slider.style.left = `-${
                (this.slider.children.length * cardWidth - cardsPerSlider * cardWidth) * direction
            }px`;
        } else {
            this.slider.style.left = `${left + cardWidth * direction}px`;
        }
    }

    cardHandler = (target) => {
        const card = target.closest('div');
        if (!card.classList.contains('hero-card__small')) {
            return;
        }
        return +card.dataset.id;
    }
}

export default Slider;
