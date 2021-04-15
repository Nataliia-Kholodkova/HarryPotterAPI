class View {
    generateOccupation(hero) {
        let occupationTemplate = ``;
        if (hero.fromHogwarts()) {
            if (hero.hogwartsStaff) {
                occupationTemplate += "Professor of ";
            } else {
                occupationTemplate += "Student of ";
            }
        } else {
            occupationTemplate += "Not from ";
        }
        occupationTemplate += "Hogwarts";
        if (hero.house) {
            occupationTemplate += `, ${hero.house}`;
        }
        occupationTemplate += ".";
        return occupationTemplate;
    }

    renderHero(templateIdMark, hero) {
        let template = document
        .querySelector(`#${templateIdMark}Hero`)
            .content.querySelector(`.hero-card__${templateIdMark}`).cloneNode(true);
        template = this.renderHeroSmall(hero, template);
        if (templateIdMark === 'big') {
            template = this.renderHeroBig(hero, template)
        }
        template.dataset.id = hero.id;
        return template
    }

    renderHeroSmall(hero, template) {
        const templateImg = template.querySelector('.card-img');
        templateImg.src = hero.image;
        templateImg.alt = hero.name;
        template.querySelector(".card-title").textContent = hero.name;
        template.querySelector(".hero-name").textContent = hero.name;
        template.querySelector(".hero-birth-date").textContent =
            hero.dateOfBirth;
        template.querySelector(
            ".hero-occupation"
        ).textContent = this.generateOccupation(hero);
        return template
    }

    renderHeroBig(hero, template) {
        template.querySelector(".hero-eyes").textContent = hero.eyeColour;
        template.querySelector(".hero-hair").textContent = hero.hairColour;
        template.querySelector(".hero-patronus").textContent = hero.patronus;
        template.querySelector(".hero-actor").textContent = hero.actor;
        return template;
    }

    renderHeroesList(heroes) {
        let template = document.createDocumentFragment();
        heroes.forEach(hero => template.append(this.renderHero('small', hero)));
        return template
    }
}

export default View;
