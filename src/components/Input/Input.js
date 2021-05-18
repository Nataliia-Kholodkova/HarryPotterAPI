/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Image from '../Image/Image';
import styles from './styles.css';

export default function Input({ state, imgNeed, handler }) {
  return (
    <>
      {state['values'].map(value => (
        <label class={`form-label ${state.labelClasses.map(_class => styles[_class]).join(' ')}`}>
          <input
            type={state.type}
            class={`
              ${
                state.inputClasses.includes('visually-hidden') ? 'visually-hidden' : ''
              } ${state.inputClasses.map(_class => styles[_class]).join(' ')}`}
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
              imgClasses={[styles['img-checkbox']]}
            />
          ) : (
            ''
          )}
          <span
            class={`label ${state.spanClasses.includes('visually-hidden') ? 'visually-hidden' : ''}
              ${state.spanClasses.map(_class => styles[_class]).join(' ')}
            `}
          >
            {value.length > 0 ? value : 'None'}
          </span>
        </label>
      ))}
    </>
  );
}
