import React from 'react';
import { generateOccupation } from '../../utils/utils';
import Image from '../Image/Image';
import styles from './styles.css';

export default function HeroCard({ hero = null }) {
  if (!hero) {
    return null;
  }
  return (
    <>
      <div className={`hero-card ${styles['hero-card__small']}`} data-id={hero.id} key={hero.id}>
        <Image
          value={hero.name}
          url={hero.image}
          width={'150'}
          imgClasses={['card-img', styles['card-img__small']]}
        />
        <div className={styles['hero-description']}>
          <h3 className={`title card-title`}>{hero.name}</h3>
          <p className={`text card-text`}>
            <span className={'hero-name'}>{hero.name}</span> was bourn
            <span className={'hero-birth-date'}>{hero.dateOfBirth}</span>.
            <span className={'hero-occupation'}>{generateOccupation(hero)}</span>
          </p>
        </div>
      </div>
    </>
  );
}
