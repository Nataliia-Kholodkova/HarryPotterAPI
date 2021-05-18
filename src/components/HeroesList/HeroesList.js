/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import HeroCard from '../HeroCard/HeroCard';

export default function HeroesList({ heroes }) {
  return (
    <>
      {heroes.map(hero => (
        <HeroCard hero={hero} />
      ))}
    </>
  );
}
