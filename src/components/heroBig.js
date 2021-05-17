/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { generateOccupation } from '../js/utils';

export default function RenderHeroBig({ hero = null }) {
  if (!hero) {
    return null;
  }
  return (
    <>
      <div
        className={[window.styles['hero-card'], window.styles['hero-card__big']]}
        id="hero-card__big"
      >
        <img
          src={hero.image}
          alt={hero.name}
          width="150"
          className={[
            window.styles['img'],
            window.styles['card-img'],
            window.styles['card-img__big'],
          ]}
        />
        <div className={window.styles['hero-description']}>
          <h2 className={[window.styles['title'], window.styles['card-title']]}>{hero.name}</h2>
          <p className={[window.styles['text'], window.styles['card-text']]}>
            <span className={window.styles['hero-name']}>{hero.name}</span> was bourn
            <span className={window.styles['hero-birth-date']}>{hero.dateOfBirth}</span>.
            <span className={window.styles['hero-occupation']}>{generateOccupation(hero)}</span>
          </p>
          <p className={[window.styles['text'], window.styles['card-text']]}>
            Has <span className={window.styles['hero-hair']}>{hero.hairColour}</span> hair,
            <span className={window.styles['hero-eyes']}>{hero.eyeColour}</span> eyes. Patronus -
            <span className={window.styles['hero-patronus']}>{hero.patronus}</span>
          </p>
          <p className={[window.styles['text'], window.styles['card-text']]}>
            Acted by
            <span className={window.styles['hero-actor']}>{hero.actor}</span>.
          </p>
        </div>
      </div>
    </>
  );
}
