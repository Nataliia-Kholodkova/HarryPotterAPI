/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import CreateInput from './inputField';

function CreateInputContainer({ state, imgNeed, isFieldset }) {
  if (isFieldset) {
    return (
      <>
        <fieldset className={state.fieldsetClasses.map(_class => window.styles[_class] || _class)}>
          <legend className={state.legendClasses.map(_class => window.styles[_class] || _class)}>
            {state.legend}
          </legend>
          <CreateInput state={state} imgNeed={imgNeed} />
        </fieldset>
      </>
    );
  }
  return <CreateInput state={state} imgNeed={imgNeed} />;
}

export default CreateInputContainer;
