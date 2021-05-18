/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';

export default function Legend(state) {
  if (!state.legend) {
    return null;
  }
  return (
    <legend class={state.legendClasses.map(_class => window.styles[_class] || _class)}>
      {state.legend}
    </legend>
  );
}
