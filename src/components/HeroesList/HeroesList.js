import React from 'react';
import HeroCard from '../HeroCard/HeroCard';

export default function HeroesList({ heroes }) {
  if ((heroes.length === 0) | (heroes.length === undefined)) {
    return null;
  }
  return (
    <>
      {heroes.map(hero => (
        <HeroCard hero={hero} key={hero.id} />
      ))}
    </>
  );
}
