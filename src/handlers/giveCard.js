import createApp from '../framework/framework';

export default function cardHandler(event) {
  const card = event.target.closest(`div.${window.styles['hero-card__small']}`);
  let id = false;
  if (!card) {
    return;
  }
  id = +card.dataset.id;
  if (Object.values(window.STATE).some(value => !!value)) {
    random = null;
  }
  createApp(id);
}
