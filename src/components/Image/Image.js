/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';

export default function Image({ value, url, width, imgClasses }) {
  return (
    <>
      <img
        class={imgClasses.map(_class => window.styles[_class] || _class)}
        src={url}
        alt={value}
        width={value === 'All' ? '150' : width}
      />
    </>
  );
}
