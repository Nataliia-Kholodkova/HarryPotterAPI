import React from 'react';
import { generateOccupation } from '../../utils/utils';
import Image from '../Image/Image';
import styles from './styles.css';

export default function MainHeroCard({ hero }) {
  if (!hero) {
    return null;
  }
  return (
    <>
      <div className={`hero-card ${styles['hero-card__big']}`} id="hero-card__big">
        <Image
          value={hero.name}
          url={hero.image}
          width={'150'}
          imgClasses={['card-img', styles['card-img__big']]}
        />
        <div className={styles['hero-description']}>
          <h2 className={`title card-title`}>{hero.name}</h2>
          <p className={`text card-text`}>
            <span className={'hero-name'}>{hero.name}</span> was bourn
            <span className={'hero-birth-date'}>{hero.dateOfBirth}</span>.
            <span className={'hero-occupation'}>{generateOccupation(hero)}</span>
          </p>
          <p className={`text card-text`}>
            Has <span className={'hero-hair'}>{hero.hairColour}</span> hair,
            <span className={'hero-eyes'}>{hero.eyeColour}</span> eyes. Patronus -
            <span className={'hero-patronus'}>{hero.patronus}</span>
          </p>
          <p className={`text card-text`}>
            Acted by
            <span className={'hero-actor'}>{hero.actor}</span>.
          </p>
        </div>
      </div>
    </>
  );
}
