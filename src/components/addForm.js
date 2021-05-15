import createInputContainer from './inputFieldset';

export default function createForm(
  formState,
  listener,
  imgNeed = false,
  isFieldset = false,
  resetNeed = false,
  isSearchNeed = false,
  resetFilterHandler = null,
) {
  let template = `
      <form class="${formState[0].formClasses
        .map(_class => window.styles[_class] || _class)
        .join(' ')}" onchange="(${listener})(event);">`;
  for (let _state of formState) {
    template += createInputContainer(_state, imgNeed, isFieldset);
  }
  if (isSearchNeed) {
    template += `
        <fieldset class="${['fieldset', 'filter-form__fieldset']
          .map(_class => window.styles[_class] || _class)
          .join(' ')}">
        <label class="${['form-label', 'filter-form__label', 'form-label__text']
          .map(_class => window.styles[_class] || _class)
          .join(' ')}">
          <input
            type="search"
            name="name"
            class="${['input', 'text-input', 'filter-form-input__text']
              .map(_class => window.styles[_class] || _class)
              .join(' ')}"
            placeholder="Hero's name" onchange="(event.istopPropagation(); ${listener})(event)";
          />
          <span class="${window.styles['visually-hidden']}">Search</span>
        </label>
      </fieldset>
        `;
  }
  if (resetNeed) {
    template += `
            <button type="reset" class="${['btn', 'btn-reset']
              .map(_class => window.styles[_class] || _class)
              .join(
                ' ',
              )}" name="reset" type="reset" onclick="(${resetFilterHandler})();">Reset</button>`;
  }
  template += `</form>`;
  return template;
}
