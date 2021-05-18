/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import { generateOccupation } from '../../js/utils';
import Image from '../Image/Image';
import styles from './styles.css';

export default function HeroCard({ hero = null }) {
  if (!hero) {
    return null;
  }
  return (
    <>
      <div class={`hero-card ${styles['hero-card__small']}`} data-id={hero.id}>
        <Image
          value={hero.name}
          url={hero.image}
          width={'150'}
          imgClasses={['card-img', styles['card-img__small']]}
        />
        <div class={styles['hero-description']}>
          <h3 class={`title card-title`}>{hero.name}</h3>
          <p class={`text card-text`}>
            <span class={'hero-name'}>{hero.name}</span> was bourn
            <span class={'hero-birth-date'}>{hero.dateOfBirth}</span>.
            <span class={'hero-occupation'}>{generateOccupation(hero)}</span>
          </p>
        </div>
      </div>
    </>
  );
}
