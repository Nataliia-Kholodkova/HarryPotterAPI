/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';

export default function Image({ value, url, width, imgClasses }) {
  return (
    <>
      <img
        class={imgClasses.join(' ')}
        src={url}
        alt={value}
        width={value === 'All' ? '150' : width}
      />
    </>
  );
}
