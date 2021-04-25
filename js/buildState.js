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

  eyes: {
    name: 'hairColour',
    values: ['Alive', 'Dead', 'All'],
    inputClasses: ['input radio-input', 'filter-form-input__radio', 'visually-hidden'],
    imgClasses: [],
    labelClasses: ['form-label', 'filter-form__label'],
    formClasses: ['form', 'filter-form'],
    spanClasses: ['label', 'label-radio'],
  },

  hair: {
    name: 'alive',
    values: ['Alive', 'Dead', 'All'],
    inputClasses: ['input radio-input', 'filter-form-input__radio', 'visually-hidden'],
    imgClasses: [],
    labelClasses: ['form-label', 'filter-form__label'],
    formClasses: ['form', 'filter-form'],
    spanClasses: ['label', 'label-radio'],
  },
};

const MODAL_FORM_STATE = {
  eyes: {
    name: 'eyeColour',
    values: ['Black', 'Brown', 'Red', 'Green', 'Grey', 'Blue', 'Yellow'],
    inputClasses: ['input radio-input', 'similarity-form-input__radio', 'visually-hidden'],
    labelClasses: ['form-label', 'similarity-form__label'],
    formClasses: ['form', 'similarity-form'],
    spanClasses: ['label', 'label-radio'],
    score: '4',
  },

  hair: {
    name: 'hairColour',
    values: ['Black', 'Brown', 'Red', 'Blonde', 'Grey', 'Bald'],
    inputClasses: ['input radio-input', 'similarity-form-input__radio', 'visually-hidden'],
    labelClasses: ['form-label', 'similarity-form__label'],
    formClasses: ['form', 'similarity-form'],
    spanClasses: ['label', 'label-radio'],
    score: '5',
  },

  gender: {
    name: 'gender',
    values: ['Male', 'Female', 'All'],
    inputClasses: ['input radio-input', 'similarity-form-input__radio', 'visually-hidden'],
    labelClasses: ['form-label', 'similarity-form__label'],
    formClasses: ['form', 'similarity-form'],
    spanClasses: ['label', 'label-radio'],
    score: '2',
  },
};

export { FORM_STATE, MODAL_FORM_STATE };
