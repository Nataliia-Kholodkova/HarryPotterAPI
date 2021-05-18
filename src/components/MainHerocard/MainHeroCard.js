/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import { generateOccupation } from '../../js/utils';
import Image from '../Image/Image';
import styles from './styles.css';

export default function MainHeroCard({ hero = null }) {
  if (!hero) {
    return null;
  }
  return (
    <>
      <div class={`hero-card ${styles['hero-card__big']}`} id="hero-card__big">
        <Image
          value={hero.name}
          url={hero.image}
          width={'150'}
          imgClasses={['card-img', styles['card-img__big']]}
        />
        <div class={styles['hero-description']}>
          <h2 class={`title card-title`}>{hero.name}</h2>
          <p class={`text card-text`}>
            <span class={'hero-name'}>{hero.name}</span> was bourn
            <span class={'hero-birth-date'}>{hero.dateOfBirth}</span>.
            <span class={'hero-occupation'}>{generateOccupation(hero)}</span>
          </p>
          <p class={`text card-text`}>
            Has <span class={'hero-hair'}>{hero.hairColour}</span> hair,
            <span class={'hero-eyes'}>{hero.eyeColour}</span> eyes. Patronus -
            <span class={'hero-patronus'}>{hero.patronus}</span>
          </p>
          <p class={`text card-text`}>
            Acted by
            <span class={'hero-actor'}>{hero.actor}</span>.
          </p>
        </div>
      </div>
    </>
  );
}
