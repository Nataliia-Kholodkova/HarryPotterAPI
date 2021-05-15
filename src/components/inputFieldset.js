import createInput from './inputField';

export default function createInputContainer(state, imgNeed, isFieldset) {
  const label = createInput(state, imgNeed);
  if (isFieldset) {
    return `<fieldset class="${state.fieldsetClasses
      .map(_class => window.styles[_class] || _class)
      .join(' ')}">
          <legend class="${state.legendClasses
            .map(_class => window.styles[_class] || _class)
            .join(' ')}">${state.legend}</legend>
            ${label}
        </fieldset>`;
  }
  return label;
}
