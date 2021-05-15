import createImg from './addImg';

export default function createInput(state, imgNeed) {
  let templateInput = ``;
  state['values'].forEach(value => {
    const label = `<label class="${state.labelClasses
      .map(_class => window.styles[_class] || _class)
      .join(' ')}">
          <input type="radio" class="${state.inputClasses
            .map(_class => window.styles[_class] || _class)
            .join(' ')}" name="${state.name}" value=${value}></input>
          ${imgNeed === true ? createImg(value, state) : ''}
          <span class="${state.spanClasses
            .map(_class => window.styles[_class] || _class)
            .join(' ')}">${value.length > 0 ? value : 'None'}</span>
        </label>
        `;
    templateInput += label;
  });
  return templateInput;
}
