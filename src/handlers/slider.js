export default function sliderMove(event) {
  const slider = document.querySelector(`.${window.styles['hero-list__slider']}`);
  const sliderWidth = slider.offsetWidth;
  const cardWidth =
    document.querySelector(`.${window.styles['hero-card__small']}`).offsetWidth + 15;
  const direction = +event.target.dataset.dir;
  const cardsPerSlider = Math.round(sliderWidth / cardWidth);
  const totalSliderWidth = cardWidth * slider.children.length;
  const left = slider.style.left ? parseInt(slider.style.left, 10) : 0;
  if (
    Math.abs(left + direction * cardWidth) >
    totalSliderWidth - (cardsPerSlider === 1 ? cardsPerSlider : cardsPerSlider - 1) * cardWidth
  ) {
    slider.style.left = '0px';
  } else if (left + direction * cardWidth > 0) {
    slider.style.left = `-${
      (slider.children.length * cardWidth - cardsPerSlider * cardWidth) * direction
    }px`;
  } else {
    slider.style.left = `${left + cardWidth * direction}px`;
  }
}
