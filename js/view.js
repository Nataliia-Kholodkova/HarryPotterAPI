/* eslint-disable indent */
import { doc } from 'prettier';
import styles from '../css/style.css';

class View {
  generateOccupation = hero => View.generateOccupation(hero);

  static generateOccupation(hero) {
    let occupationTemplate = '';
    if (hero.fromHogwarts()) {
      if (hero.hogwartsStaff) {
        occupationTemplate += 'Professor of ';
      } else {
        occupationTemplate += 'Student of ';
      }
    } else {
      occupationTemplate += 'Not from ';
    }
    occupationTemplate += 'Hogwarts';
    if (hero.house) {
      occupationTemplate += `, ${hero.house}`;
    }
    occupationTemplate += '.';
    return occupationTemplate;
  }

  renderHeroSmall = (hero, template) => View.renderHeroeSmall(hero, template);

  static renderHeroSmall(hero) {
    if (!hero) {
      return;
    }
    const template = `<div class="${styles['hero-card']} ${styles['hero-card__small']}" data-id="${
      hero.id
    }" id="hero-card__small">
    <img src="${hero.image}" alt="Photo of ${hero.name}" width="80" class="${styles['img']} ${
      styles['card-img']
    }  ${styles['card-img__small']}" />
    <div class="${styles['hero-description']}">
      <h3 class="${styles['title']} ${styles['card-title']}">${hero.name}</h3>
      <p class="${styles['text']} ${styles['card-text']}">
        <span class="${styles['hero-name']}">${hero.name}</span> was bourn
        <span class="${styles['hero-birth-date']}">${hero.dateOfBirth}</span>.
        <span class="${styles['hero-occupation']}">${View.generateOccupation(hero)}</span>
      </p>
    </div>
  </div>`;
    return template;
  }

  renderHeroBig = hero => View.renderHeroBig(hero);

  static renderHeroBig(hero) {
    if (!hero) {
      return;
    }
    const template = `
    <img src="${hero.image}" alt="Photo of ${hero.name}" width="150" class="${styles['img']} ${
      styles['card-img']
    }  ${styles['card-img__big']}" />
    <div class="${styles['hero-description']}">
      <h2 class="${styles['title']} ${styles['card-title']}">${hero.name}</h2>
      <p class="${styles['text']} ${styles['card-text']}">
      <span class="${styles['hero-name']}">${hero.name}</span> was bourn
      <span class="${styles['hero-birth-date']}">${hero.dateOfBirth}</span>.
      <span class="${styles['hero-occupation']}">${View.generateOccupation(hero)}</span>
      </p>
      <p class="${styles['text']} ${styles['card-text']}">
        Has <span class="${styles['hero-hair']}">${hero.hairColour}</span> hair,
        <span class="${styles['hero-eyes']}">${hero.eyeColour}</span> eyes. Patronus -
        <span class="${styles['hero-patronus']}">${hero.patronus}</span>
      </p>
      <p class="${styles['text']} ${styles['card-text']}">
        Acted by
        <span class="${styles['hero-actor']}">${hero.actor}</span>.
      </p>
    </div>`;
    return template;
  }

  renderHeroesList = heroes => View.renderHeroesList(heroes);

  static renderHeroesList(heroes) {
    let template = '';
    heroes.forEach(hero => {
      const heroTemplate = View.renderHeroSmall(hero);
      template += heroTemplate;
    });
    return template;
  }
}

export default View;
