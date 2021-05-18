/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Image from '../Image/Image';

export default function Input({ state, imgNeed, handler }) {
  return (
    <>
      {state['values'].map(value => (
        <label class={state.labelClasses.map(_class => window.styles[_class] || _class || '')}>
          <input
            type={state.type}
            class={state.inputClasses.map(_class => window.styles[_class] || _class)}
            value={state.placeholder ? window.STATE[state.name] || '' : value}
            name={state.name}
            placeholder={state.placeholder || null}
            checked={window.STATE[state.name] === value}
          />
          {imgNeed === true ? (
            <Image
              value={value}
              url={state['imgUrls'][value]}
              width={'120px'}
              imgClasses={state.imgClasses}
            />
          ) : (
            ''
          )}
          <span class={state.spanClasses.map(_class => window.styles[_class] || _class)}>
            {value.length > 0 ? value : 'None'}
          </span>
        </label>
      ))}
    </>
  );
}
