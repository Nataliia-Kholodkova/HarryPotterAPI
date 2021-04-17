/* eslint-disable indent */

class View {
  renderHero = (templateIdMark, hero) => View.renderHero(templateIdMark, hero);

  static renderHero(templateIdMark, hero) {
    let template = document
      .querySelector(`#${templateIdMark}Hero`)
      .content.querySelector(`.hero-card__${templateIdMark}`)
      .cloneNode(true);
    template = View.renderHeroeSmall(hero, template);
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

  static renderHeroeSmall(hero, template) {
    const newTemplate = template.cloneNode(true);
    const templateImg = newTemplate.querySelector('.card-img');
    templateImg.src = hero.image;
    templateImg.alt = hero.name;
    newTemplate.querySelector('.card-title').textContent = hero.name;
    newTemplate.querySelector('.hero-name').textContent = hero.name;
    newTemplate.querySelector('.hero-birth-date').textContent = hero.dateOfBirth;
    newTemplate.querySelector('.hero-occupation').textContent = View.generateOccupation(hero);
    return newTemplate;
  }

  renderHeroBig = (hero, template) => View.renderHeroBig(hero, template);

  static renderHeroBig(hero, template) {
    const newTemplate = template.cloneNode(true);
    newTemplate.querySelector('.hero-eyes').textContent = hero.eyeColour;
    newTemplate.querySelector('.hero-hair').textContent = hero.hairColour;
    newTemplate.querySelector('.hero-patronus').textContent = hero.patronus;
    newTemplate.querySelector('.hero-actor').textContent = hero.actor;
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
