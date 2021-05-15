import { generateOccupation } from '../js/utils';

export default function renderHeroSmall(hero) {
  if (!hero) {
    return null;
  }
  const template = `
      <div class="${window.styles['hero-card']} ${window.styles['hero-card__small']}" data-id="${
    hero.id
  }" id="hero-card__small">
      <img src="${hero.image}" alt="Photo of ${hero.name}" width="80" class="${
    window.styles['img']
  } ${window.styles['card-img']}  ${window.styles['card-img__small']}" />
      <div class="${window.styles['hero-description']}">
        <h3 class="${window.styles['title']} ${window.styles['card-title']}">${hero.name}</h3>
        <p class="${window.styles['text']} ${window.styles['card-text']}">
          <span class="${window.styles['hero-name']}">${hero.name}</span> was bourn
          <span class="${window.styles['hero-birth-date']}">${hero.dateOfBirth}</span>.
          <span class="${window.styles['hero-occupation']}">${generateOccupation(hero)}</span>
        </p>
      </div>
    </div>`;
  return template;
}
