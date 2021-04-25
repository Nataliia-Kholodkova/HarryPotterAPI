import styles from '../css/style.css';
import { FORM_STATE, MODAL_FORM_STATE } from './buildState.js';

function crealeFieldset(fieldsetClass, legendClass = null, legendValue = null) {
  const fieldset = document.createElement('fieldset');
  fieldsetClass.forEach(_class => fieldset.classList.add(styles[_class]));
  if (legendClass && legendValue) {
    const legend = document.createElement('legend');
    legendClass.forEach(_class => legend.classList.add(styles[_class]));
    legend.textContent = legendValue;
    fieldset.appendChild(legend);
  }
  return fieldset;
}

function createInputElements(state, value) {
  const label = document.createElement('label');
  const input = document.createElement('input');
  const span = document.createElement('span');
  state.labelClasses.forEach(_class => label.classList.add(styles[_class]));
  input.type = 'radio';
  state.inputClasses.forEach(_class => input.classList.add(styles[_class]));
  input.value = value;
  input.name = state.name;
  state.spanClasses.forEach(_class => span.classList.add(styles[_class]));
  span.textContent = value.length > 0 ? value : 'None';
  return label, input, span;
}

function createInputModal(state, container) {
  let isChecked = true;
  state.values.forEach(value => {
    const [label, input, span] = createInputElements(state, value);
    if (isChecked) {
      input.checked = true;
      isChecked = false;
    }
    input.dataset.score = state.score;
    label.appendChild(input);
    label.appendChild(span);
    container.appendChild(label);
  });
  return container;
}

function createInput(state, imgNeed, container) {
  state.values.forEach(value => {
    const [label, input, span] = createInputElements(state, value);
    let img = null;
    if (imgNeed) {
      img = document.createElement('img');
      img.src = `${state['imgUrls'][value]}`;
      img.alt = value;
      state.imgClasses.forEach(_class => img.classList.add(styles[_class]));
      img.width = value === 'All' ? '150' : '120';
    }
    label.appendChild(input);
    if (imgNeed) {
      label.appendChild(img);
    }
    label.appendChild(span);
    container.appendChild(label);
  });
  return container;
}

function createForm(state) {
  const form = document.createElement('form');
  state.formClasses.forEach(_class => form.classList.add(styles[_class]));
  return form;
}

function createHeader() {
  const fragment = document.createDocumentFragment();
  const header = document.createElement('header');
  const wrapper = document.createElement('div');
  const headerTitle = document.createElement('h1');
  let form = createForm(FORM_STATE['faculty']);
  header.classList.add(styles.header);
  wrapper.classList.add(styles.wrapper);
  headerTitle.classList.add(styles.title, styles['title-main']);
  headerTitle.textContent = 'Welcome to the magic World of Hogwarts';
  wrapper.appendChild(headerTitle);
  form = createInput(FORM_STATE['faculty'], true, form);
  wrapper.appendChild(form);
  header.appendChild(wrapper);
  fragment.appendChild(header);
  document.querySelector('.container').appendChild(fragment);
}

function createAside() {
  const aside = document.createElement('aside');
  const form = createForm(FORM_STATE['staff']);
  const searchLabel = document.createElement('label');
  const span = document.createElement('span');
  const input = document.createElement('input');
  const buttonReset = document.createElement('button');
  const divAdditional = document.createElement('div');
  const buttonAdditional = document.createElement('button');
  let fieldsetSearch = document.createElement('fieldset');
  let fieldsetStaff = crealeFieldset(
    ['fieldset', 'filter-form__fieldset'],
    ['legend', 'filter-form__legend'],
    'Filter by Staff',
  );
  let fieldsetGender = crealeFieldset(
    ['fieldset', 'filter-form__fieldset'],
    ['legend', 'filter-form__legend'],
    'Filter by Gender',
  );
  let fieldsetAlive = crealeFieldset(
    ['fieldset', 'filter-form__fieldset'],
    ['legend', 'filter-form__legend'],
    'Filter by Destiny',
  );
  aside.classList.add(styles.aside);
  fieldsetStaff = createInput(FORM_STATE['staff'], false, fieldsetStaff);
  form.appendChild(fieldsetStaff);
  fieldsetGender = createInput(FORM_STATE['gender'], false, fieldsetGender);
  form.appendChild(fieldsetGender);
  fieldsetAlive = createInput(FORM_STATE['alive'], false, fieldsetAlive);
  form.appendChild(fieldsetAlive);
  ['fieldset', 'filter-form__fieldset'].forEach(_class =>
    fieldsetSearch.classList.add(styles[_class]),
  );
  ['label', 'form-label', 'filter-form__label', 'form-label__text'].forEach(_class =>
    searchLabel.classList.add(styles[_class]),
  );
  ['input', 'text-input', 'filter-form-input__text'].forEach(_class =>
    input.classList.add(styles[_class]),
  );
  input.type = 'search';
  input.name = 'name';
  input.placeholder = "Hero's name";
  ['label', 'label-search', 'visually-hidden'].forEach(_class =>
    span.classList.add(styles[_class]),
  );
  span.textContent = 'Search';
  fieldsetSearch.appendChild(searchLabel);
  form.appendChild(fieldsetSearch);
  ['btn', 'btn-reset'].forEach(_class => buttonReset.classList.add(styles[_class]));
  buttonReset.type = 'reset';
  buttonReset.name = 'reset';
  buttonReset.textContent = 'Reset';
  form.appendChild(buttonReset);
  aside.appendChild(form);
  divAdditional.classList.add(styles['additional']);
  ['btn', 'btn-find'].forEach(_class => buttonAdditional.classList.add(styles[_class]));
  buttonAdditional.type = 'button';
  buttonAdditional.textContent = 'Find your Hero :)';
  divAdditional.appendChild(buttonAdditional);
  aside.appendChild(divAdditional);
  return aside;
}

function createMain() {
  const main = document.createElement('main');
  const resultDiv = document.createElement('div');
  const heroList = document.createElement('div');
  const buttonLeft = document.createElement('button');
  const buttonRight = document.createElement('button');
  const heroListWrapper = document.createElement('div');
  const slider = document.createElement('div');
  main.classList.add(styles.main);
  resultDiv.classList.add(styles.results);
  heroList.classList.add(styles['hero-list']);
  ['btn', 'btn-list', 'btn-list__left'].forEach(_class => buttonLeft.classList.add(styles[_class]));
  buttonLeft.type = 'button';
  buttonLeft.innerHTML = '&lsaquo;';
  buttonLeft.dataset.dir = '1';
  ['btn', 'btn-list', 'btn-list__right'].forEach(_class =>
    buttonRight.classList.add(styles[_class]),
  );
  buttonRight.type = 'button';
  buttonRight.innerHTML = '&rsaquo;';
  buttonRight.dataset.dir = '-1';
  heroListWrapper.classList.add(styles['hero-list__wrapper']);
  slider.classList.add(styles['hero-list__slider']);
  heroListWrapper.appendChild(slider);
  heroList.appendChild(buttonLeft);
  heroList.appendChild(buttonRight);
  heroList.appendChild(heroListWrapper);
  resultDiv.appendChild(heroList);
  main.appendChild(resultDiv);
  return main;
}

function createBodyMain() {
  const fragment = document.createDocumentFragment();
  const wrapper = document.createElement('div');
  wrapper.classList.add(styles.wrapper, styles['main-wrapper']);
  wrapper.appendChild(createAside());
  wrapper.appendChild(createMain());
  fragment.appendChild(wrapper);
  document.querySelector('.container').appendChild(fragment);
}

function createModalForm() {
  const fragment = document.createDocumentFragment();
  const modal = document.createElement('div');
  const closeModelButton = document.createElement('button');
  const buttonSubmit = document.createElement('button');
  const form = createForm(MODAL_FORM_STATE['hair']);
  let fieldsetHair = crealeFieldset(
    ['fieldset', 'similarity-form__fieldset'],
    ['legend', 'similarity-form__legend'],
    'Select color of your hair',
  );
  let fieldsetEyes = crealeFieldset(
    ['fieldset', 'similarity-form__fieldset'],
    ['legend', 'similarity-form__legend'],
    'Select color of your eyes',
  );
  let fieldsetGender = crealeFieldset(
    ['fieldset', 'similarity-form__fieldset'],
    ['legend', 'similarity-form__legend'],
    'Select your gender',
  );
  ['modal', 'modal-closed'].forEach(_class => modal.classList.add(styles[_class]));
  ['btn', 'btn-modal'].forEach(_class => closeModelButton.classList.add(styles[_class]));
  closeModelButton.type = 'button';
  modal.appendChild(closeModelButton);
  fieldsetHair = createInputModal(MODAL_FORM_STATE['hair'], fieldsetHair);
  form.appendChild(fieldsetHair);
  fieldsetEyes = createInputModal(MODAL_FORM_STATE['eyes'], fieldsetEyes);
  form.appendChild(fieldsetEyes);
  fieldsetGender = createInputModal(MODAL_FORM_STATE['gender'], fieldsetGender);
  form.appendChild(fieldsetGender);
  buttonSubmit.type = 'submit';
  buttonSubmit.name = 'submit';
  buttonSubmit.value = 'submit';
  buttonSubmit.textContent = 'Submit';
  ['btn', 'btn-submit'].forEach(_class => buttonSubmit.classList.add(styles[_class]));
  form.appendChild(buttonSubmit);
  modal.appendChild(form);
  fragment.appendChild(modal);
  document.querySelector('body').insertBefore(fragment, document.querySelector('script'));
}

createHeader();
createBodyMain();
createModalForm();
