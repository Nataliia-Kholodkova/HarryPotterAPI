import styles from '../css/style.css';
import filterFromState from '../data/filterHeroes';
import renderApp from '../components/app';
import getHeroesFromServer from '../data/getData';
import formFilterHandler from '../handlers/formFilter';
import cardHandler from '../handlers/giveCard';
import sliderHandler from '../handlers/slider';
import resetFilterHandler from '../handlers/resetFilter';
import { getRandomHero, getHero, setUrl } from '../js/utils';

export default function createApp(id = null) {
  setUrl();
  getHeroesFromServer()
    .then(heroes => filterFromState(heroes))
    .then(heroes => {
      const hero = id ? getHero(heroes, id) : getRandomHero(heroes);
      renderApp(
        heroes,
        hero,
        null,
        formFilterHandler,
        cardHandler,
        resetFilterHandler,
        sliderHandler,
        resetFilterHandler,
      );
    })
    .catch(error =>
      renderApp(
        [],
        null,
        error,
        formFilterHandler,
        cardHandler,
        resetFilterHandler,
        sliderHandler,
        resetFilterHandler,
      ),
    );
}

window.STATE = {
  house: null,
  gender: null,
  name: null,
  hogwarts: null,
  isAlive: null,
};
window.styles = styles;
