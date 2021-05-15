import { generateOccupation } from '../js/utils';

export default function renderHeroBig(hero) {
  if (!hero) {
    return null;
  }
  const template = `
      <div class="${window.styles['hero-card']} ${
    window.styles['hero-card__big']
  }" id = "hero-card__big">
        <img src="${hero.image}" alt="Photo of ${hero.name}" width="150" class="${
    window.styles['img']
  } ${window.styles['card-img']} ${window.styles['card-img__big']}" />
        <div class="${window.styles['hero-description']}">
          <h2 class="${window.styles['title']} ${window.styles['card-title']}">${hero.name}</h2>
          <p class="${window.styles['text']} ${window.styles['card-text']}">
          <span class="${window.styles['hero-name']}">${hero.name}</span> was bourn
          <span class="${window.styles['hero-birth-date']}">${hero.dateOfBirth}</span>.
          <span class="${window.styles['hero-occupation']}">${generateOccupation(hero)}</span>
          </p>
          <p class="${window.styles['text']} ${window.styles['card-text']}">
            Has <span class="${window.styles['hero-hair']}">${hero.hairColour}</span> hair,
            <span class="${window.styles['hero-eyes']}">${hero.eyeColour}</span> eyes. Patronus -
            <span class="${window.styles['hero-patronus']}">${hero.patronus}</span>
          </p>
          <p class="${window.styles['text']} ${window.styles['card-text']}">
            Acted by
            <span class="${window.styles['hero-actor']}">${hero.actor}</span>.
          </p>
        </div>
      </div>`;
  return template;
}
