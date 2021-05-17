/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function CreateImg({ value, state }) {
  return (
    <>
      <img
        className={state.imgClasses.map(_class => window.styles[_class] || _class)}
        src={state['imgUrls'][value]}
        alt={value}
        width={value === 'All' ? '150' : '120'}
      />
    </>
  );
}
