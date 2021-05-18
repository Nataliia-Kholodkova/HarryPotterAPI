/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Fieldset from '../Fieldset/Fieldset';

export default function Form({
  formState,
  listener,
  imgNeed = false,
  isFieldset = false,
  resetNeed = false,
  resetFilterHandler = null,
}) {
  return (
    <form
      class={formState[0].formClasses.map(_class => window.styles[_class] || _class)}
      onChange={event => listener(event)}
    >
      {formState.map(_state => (
        <Fieldset state={_state} imgNeed={imgNeed} isFieldset={isFieldset} />
      ))}
      {resetNeed ? (
        <>
          <button
            type="reset"
            class={['btn', 'btn-reset'].map(_class => window.styles[_class] || _class)}
            name="reset"
            type="reset"
            onClick={event => resetFilterHandler(event)}
          >
            Reset
          </button>
        </>
      ) : null}
    </form>
  );
}
