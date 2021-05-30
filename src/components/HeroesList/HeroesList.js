/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import HeroCard from '../HeroCard/HeroCard';
import { useAppContext } from '../../context';

export default function HeroesList() {
  const { currentHeroes } = useAppContext();
  return (
    <>
      {currentHeroes.map(hero => (
        <HeroCard hero={hero} />
      ))}
    </>
  );
}
