/* eslint-disable indent */
import { doc } from 'prettier';
import styles from '../css/style.css';
class View {
  static updateTemplateClasses(template) {
    if (template) {
      const classes = {};
      template.classList.forEach(_class => {
        classes[_class] = styles[_class];
      });
      for (let _class in classes) {
        template.classList.remove(_class);
        template.classList.add(styles[_class]);
      }
      [...template.children].forEach(child => View.updateTemplateClasses(child));
    }
  }

  renderHero = (templateIdMark, hero) => View.renderHero(templateIdMark, hero);

  static renderHero(templateIdMark, hero) {
    if (!hero) {
      return;
    }
    let template = document
      .querySelector(`#${templateIdMark}Hero`)
      .content.querySelector(`#hero-card__${templateIdMark}`)
      .cloneNode(true);
    View.updateTemplateClasses(template);
    template = View.renderHeroeSmall(hero, template, templateIdMark);
    if (templateIdMark === 'big') {
      template = View.renderHeroBig(hero, template);
    }
    template.dataset.id = hero.id;
    return template;
  }

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

  renderHeroeSmall = (hero, template) => View.renderHeroeSmall(hero, template);

  static renderHeroeSmall(hero, template, templateIdMark) {
    if (!hero) {
      return;
    }
    const newTemplate = template.cloneNode(true);
    const templateImg = newTemplate.querySelector('img');
    templateImg.classList.add(
      styles.img,
      styles['card-img'],
      styles[`card-img__${templateIdMark}`],
    );
    templateImg.src = hero.image;
    templateImg.alt = hero.name;
    newTemplate.querySelector(`.${styles['card-title']}`).textContent = hero.name;
    newTemplate.querySelector(`.${styles['hero-name']}`).textContent = hero.name;
    newTemplate.querySelector(`.${styles['hero-birth-date']}`).textContent = hero.dateOfBirth;
    newTemplate.querySelector(
      `.${styles['hero-occupation']}`,
    ).textContent = View.generateOccupation(hero);
    return newTemplate;
  }

  renderHeroBig = (hero, template) => View.renderHeroBig(hero, template);

  static renderHeroBig(hero, template) {
    if (!hero) {
      return;
    }
    const newTemplate = template.cloneNode(true);
    newTemplate.querySelector(`.${styles['hero-eyes']}`).textContent = hero.eyeColour;
    newTemplate.querySelector(`.${styles['hero-hair']}`).textContent = hero.hairColour;
    newTemplate.querySelector(`.${styles['hero-patronus']}`).textContent = hero.patronus;
    newTemplate.querySelector(`.${styles['hero-actor']}`).textContent = hero.actor;
    return newTemplate;
  }

  renderHeroesList = heroes => View.renderHeroesList(heroes);

  static renderHeroesList(heroes) {
    const template = document.createDocumentFragment();
    heroes.forEach(hero => template.append(View.renderHero('small', hero)));
    return template;
  }
}

export default View;
