/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable indent */
class View {
    renderHero = (templateIdMark, hero) => View.renderHero(templateIdMark, hero)

    static renderHero(templateIdMark, hero) {
        let template = document
        .querySelector(`#${templateIdMark}Hero`)
            .content.querySelector(`.hero-card__${templateIdMark}`).cloneNode(true);
        template = View.renderHeroSmall(hero, template);
        if (templateIdMark === 'big') {
            template = View.renderHeroBig(hero, template);
        }
        template.dataset.id = hero.id;
        return template;
    }

    generateOccupation = (hero) => View.generateOccupation(hero)

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

    renderHeroSmall = (hero, template) => View.renderHeroSmall(hero, template)

    static renderHeroSmall(hero, template) {
        const templateImg = template.querySelector('.card-img');
        templateImg.src = hero.image;
        templateImg.alt = hero.name;
        template.querySelector('.card-title').textContent = hero.name;
        template.querySelector('.hero-name').textContent = hero.name;
        template.querySelector('.hero-birth-date').textContent = hero.dateOfBirth;
        template.querySelector('.hero-occupation').textContent = View.generateOccupation(hero);
        return template;
    }

    renderHeroBig = (hero, template) => View.renderHeroBig(hero, template)

    static renderHeroBig(hero, template) {
        template.querySelector('.hero-eyes').textContent = hero.eyeColour;
        template.querySelector('.hero-hair').textContent = hero.hairColour;
        template.querySelector('.hero-patronus').textContent = hero.patronus;
        template.querySelector('.hero-actor').textContent = hero.actor;
        return template;
    }

    renderHeroesList = (heroes) => View.renderHeroesList(heroes)

    static renderHeroesList(heroes) {
        const template = document.createDocumentFragment();
        heroes.forEach((hero) => template.append(View.renderHero('small', hero)));
        return template;
    }
}

export default View;
