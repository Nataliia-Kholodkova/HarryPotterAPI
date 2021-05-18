import createApp from '../framework/framework';
import styles from '../components/HeroCard/styles.css';
export default function cardHandler(event) {
  const card = event.target.closest(`div.${styles['hero-card__small']}`);
  let id = false;
  if (!card) {
    return;
  }
  id = +card.dataset.id;
  createApp(id);
}
