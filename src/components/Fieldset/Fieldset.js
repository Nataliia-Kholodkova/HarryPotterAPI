/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Input from '../Input/Input';
import Legend from '../Legend/Legend';

export default function Fieldset({ state, imgNeed, isFieldset }) {
  if (isFieldset) {
    return (
      <>
        <fieldset class={state.fieldsetClasses.map(_class => window.styles[_class] || _class)}>
          <Legend state={state} />
          <Input
            state={state}
            imgNeed={imgNeed}
            // handler={
            //   state.name === 'name'
            //     ? event => {
            //         event.stopPropagation();
            //         listener(event);
            //       }
            //     : null
            // }
          />
        </fieldset>
      </>
    );
  }
  return <Input state={state} imgNeed={imgNeed} />;
}
