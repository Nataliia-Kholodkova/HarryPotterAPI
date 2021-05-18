import { FORM_STATE } from '../js/buildState.js';
import styles from '../css/style.css';
import filterFromState from '../data/filterHeroes';
import renderApp from '../components/app';
import getHeroesFromServer from '../data/getData';
import constructHeroesList from '../data/getHroesList';
import formFilterHandler from '../handlers/formFilter';
import cardHandler from '../handlers/giveCard';
import sliderHandler from '../handlers/slider';
import resetFilterHandler from '../handlers/resetFilter';
import { getRandomHero, getHero } from '../js/utils';

export default function createApp(id = null) {
  window.heroes
    .then(heroes => window.filterFromState(heroes))
    .then(heroes => {
      const hero = id ? window.getHero(heroes, id) : window.getRandomHero(heroes);
      window.renderApp(
        heroes,
        hero,
        null,
        window.formFilterHandler,
        window.cardHandler,
        window.resetFilterHandler,
        window.sliderHandler,
        window.resetFilterHandler,
      );
    })
    .catch(error =>
      window.renderApp(
        [],
        null,
        error,
        window.formFilterHandler,
        window.cardHandler,
        window.resetFilterHandler,
        window.sliderHandler,
        window.resetFilterHandler,
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
window.FORM_STATE = FORM_STATE;
window.constructHeroesList = constructHeroesList;
window.filterFromState = filterFromState;
window.renderApp = renderApp;
window.resetFilterHandler = resetFilterHandler;
window.cardHandler = cardHandler;
window.formFilterHandler = formFilterHandler;
window.sliderHandler = sliderHandler;
window.createApp = createApp;
window.getHeroesFromServer = getHeroesFromServer;
window.getRandomHero = getRandomHero;
window.getHero = getHero;
