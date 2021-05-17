/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import CreateImg from './addImg';

export default function CreateInput({ state, imgNeed }) {
  return (
    <>
      {state['values'].map(value => (
        <label className={state.labelClasses.map(_class => window.styles[_class] || _class)}>
          <input
            type="radio"
            className={state.inputClasses.map(_class => window.styles[_class] || _class)}
            value={value}
            name={state.name}
          />
          {imgNeed === true ? <CreateImg value={value} state={state} /> : ''}
          <span className={state.spanClasses.map(_class => window.styles[_class] || _class)}>
            {value.length > 0 ? value : 'None'}
          </span>
        </label>
      ))}
    </>
  );
}
