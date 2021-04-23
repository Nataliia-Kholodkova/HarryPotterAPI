import styles from '../css/style.css';
import allUrl from '../img/all.png';
import gryffindorUrl from '../img/gryffindor.png';
import hufflepuffUrl from '../img/hufflepuff.png';
import ravenclawUrl from '../img/ravenclaw.png';
import slytherinUrl from '../img/slytherin.png';

const FORM_STATE = {
  faculty: {
    name: 'house',
    values: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin', 'All'],
    inputClasses: ['faculty-form__box', 'visually-hidden'],
    imgClasses: ['img-checkbox'],
    labelClasses: [],
    formClasses: ['form', 'faculty-form'],
    spanClasses: ['visually-hidden'],
    imgUrls: {
      Gryffindor: gryffindorUrl,
      Hufflepuff: hufflepuffUrl,
      Ravenclaw: ravenclawUrl,
      Slytherin: slytherinUrl,
      All: allUrl,
    },
  },

  staff: {
    name: 'hogwarts',
    values: ['Staff', 'Student', '', 'All'],
    inputClasses: ['input radio-input', 'filter-form-input__radio', 'visually-hidden'],
    imgClasses: [],
    labelClasses: ['form-label', 'filter-form__label'],
    formClasses: ['form', 'filter-form'],
    spanClasses: ['label', 'label-radio'],
  },

  gender: {
    name: 'gender',
    values: ['Male', 'Female', 'All'],
    inputClasses: ['input radio-input', 'filter-form-input__radio', 'visually-hidden'],
    imgClasses: [],
    labelClasses: ['form-label', 'filter-form__label'],
    formClasses: ['form', 'filter-form'],
    spanClasses: ['label', 'label-radio'],
  },

  alive: {
    name: 'alive',
    values: ['Alive', 'Dead', 'All'],
    inputClasses: ['input radio-input', 'filter-form-input__radio', 'visually-hidden'],
    imgClasses: [],
    labelClasses: ['form-label', 'filter-form__label'],
    formClasses: ['form', 'filter-form'],
    spanClasses: ['label', 'label-radio'],
  },
};

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

function createInput(state, labelString, container) {
  state.values.forEach(value => {
    const label = document
      .querySelector(`#${labelString}Label`)
      .content.querySelector('label')
      .cloneNode(true);
    state.labelClasses.forEach(_class => label.classList.add(styles[_class]));
    const input = label.querySelector('input');
    state.inputClasses.forEach(_class => input.classList.add(styles[_class]));
    input.value = value;
    input.name = state.name;
    const img = label.querySelector('img');
    if (img) {
      img.src = `${state['imgUrls'][value].slice(1)}`;
      img.alt = value;
      state.imgClasses.forEach(_class => img.classList.add(styles[_class]));
      img.width = value === 'All' ? '150' : '120';
    }
    const span = label.querySelector('span');
    state.spanClasses.forEach(_class => span.classList.add(styles[_class]));
    span.textContent = value.length > 0 ? value : 'None';
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
  header.classList.add(styles.header);
  const wrapper = document.createElement('div');
  wrapper.classList.add(styles.wrapper);
  const headerTitle = document.createElement('h1');
  headerTitle.classList.add(styles.title, styles['title-main']);
  headerTitle.textContent = 'Welcome to the magic World of Hogwarts';
  wrapper.appendChild(headerTitle);
  let form = createForm(FORM_STATE['faculty']);
  form = createInput(FORM_STATE['faculty'], 'faculty', form);
  wrapper.appendChild(form);
  header.appendChild(wrapper);
  fragment.appendChild(header);
  document.querySelector('body').insertBefore(fragment, document.querySelector('script'));
}

function createAside() {
  const aside = document.createElement('aside');
  aside.classList.add(styles.aside);
  const form = createForm(FORM_STATE['staff']);
  let fieldsetStaff = crealeFieldset(
    ['fieldset', 'filter-form__fieldset'],
    ['legend', 'filter-form__legend'],
    'Filter by Staff',
  );
  fieldsetStaff = createInput(FORM_STATE['staff'], 'filter', fieldsetStaff);
  form.appendChild(fieldsetStaff);
  let fieldsetGender = crealeFieldset(
    ['fieldset', 'filter-form__fieldset'],
    ['legend', 'filter-form__legend'],
    'Filter by Gender',
  );
  fieldsetGender = createInput(FORM_STATE['gender'], 'filter', fieldsetGender);
  form.appendChild(fieldsetGender);
  let fieldsetAlive = crealeFieldset(
    ['fieldset', 'filter-form__fieldset'],
    ['legend', 'filter-form__legend'],
    'Filter by Destiny',
  );
  fieldsetAlive = createInput(FORM_STATE['alive'], 'filter', fieldsetAlive);
  form.appendChild(fieldsetAlive);
  let fieldsetSearch = document.createElement('fieldset');
  ['fieldset', 'filter-form__fieldset'].forEach(_class =>
    fieldsetSearch.classList.add(styles[_class]),
  );
  const searchLabel = document
    .querySelector(`#searchLabel`)
    .content.querySelector('label')
    .cloneNode(true);
  ['label', 'form-label', 'filter-form__label', 'form-label__text'].forEach(_class =>
    searchLabel.classList.add(styles[_class]),
  );
  const input = searchLabel.querySelector('input');
  ['input', 'text-input', 'filter-form-input__text'].forEach(_class =>
    input.classList.add(styles[_class]),
  );
  input.name = 'name';
  input.placeholder = "Hero's name";
  const span = searchLabel.querySelector('span');
  ['label', 'label-search', 'visually-hidden'].forEach(_class =>
    span.classList.add(styles[_class]),
  );
  span.textContent = 'Search';
  fieldsetSearch.appendChild(searchLabel);
  form.appendChild(fieldsetSearch);
  aside.appendChild(form);
  const divAdditional = document.createElement('div');
  divAdditional.classList.add(styles['additional']);
  const buttonAdditional = document.createElement('button');
  ['btn', 'btn-find'].forEach(_class => buttonAdditional.classList.add(styles[_class]));
  buttonAdditional.type = 'button';
  buttonAdditional.textContent = 'Find your Hero :)';
  divAdditional.appendChild(buttonAdditional);
  aside.appendChild(divAdditional);
  return aside;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add(styles.main);
  const resultDiv = document.createElement('div');
  resultDiv.classList.add(styles.results);
  const heroList = document.createElement('div');
  heroList.classList.add(styles['hero-list']);
  const buttonLeft = document.createElement('button');
  ['btn', 'btn-list', 'btn-list__left'].forEach(_class => buttonLeft.classList.add(styles[_class]));
  buttonLeft.type = 'button';
  buttonLeft.innerHTML = '&lsaquo;';
  buttonLeft.dataset.dir = '1';
  const buttonRight = document.createElement('button');
  ['btn', 'btn-list', 'btn-list__right'].forEach(_class =>
    buttonRight.classList.add(styles[_class]),
  );
  buttonRight.type = 'button';
  buttonRight.innerHTML = '&rsaquo;';
  buttonRight.dataset.dir = '-1';
  const heroListWrapper = document.createElement('div');
  heroListWrapper.classList.add(styles['hero-list__wrapper']);
  const slider = document.createElement('div');
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
  document.querySelector('body').insertBefore(fragment, document.querySelector('script'));
}

createHeader();
createBodyMain();
