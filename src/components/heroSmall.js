/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { generateOccupation } from '../js/utils';

export default function RenderHeroSmall({ hero = null }) {
  if (!hero) {
    return null;
  }
  return (
    <>
      <div
        className={[window.styles['hero-card'], window.styles['hero-card__small']]}
        data-id={hero.id}
        id="hero-card__small"
      >
        <img
          src={hero.image}
          alt={hero.name}
          width="80"
          className={[
            window.styles['img'],
            window.styles['card-img'],
            window.styles['card-img__small'],
          ]}
        />
        <div className={window.styles['hero-description']}>
          <h3 className={[window.styles['title'], window.styles['card-title']]}>{hero.name}</h3>
          <p className={[window.styles['text'], window.styles['card-text']]}>
            <span className={window.styles['hero-name']}>{hero.name}</span> was bourn
            <span className={window.styles['hero-birth-date']}>{hero.dateOfBirth}</span>.
            <span className={window.styles['hero-occupation']}>{generateOccupation(hero)}</span>
          </p>
        </div>
      </div>
    </>
  );
}
