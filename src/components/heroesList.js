/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import RenderHeroSmall from './heroSmall';

export default function RenderHeroesList(heroes) {
  return (
    <>
      {heroes.map(hero => (
        <RenderHeroSmall hero={hero} />
      ))}
    </>
  );
}
