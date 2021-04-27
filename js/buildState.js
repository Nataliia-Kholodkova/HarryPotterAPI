import allUrl from '../img/all.png';
import gryffindorUrl from '../img/gryffindor.png';
import hufflepuffUrl from '../img/hufflepuff.png';
import ravenclawUrl from '../img/ravenclaw.png';
import slytherinUrl from '../img/slytherin.png';

const FORM_STATE = {
  faculty: [
    {
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
  ],

  filter: [
    {
      name: 'hogwarts',
      values: ['Staff', 'Student', '', 'All'],
      inputClasses: ['input radio-input', 'filter-form-input__radio', 'visually-hidden'],
      imgClasses: [],
      labelClasses: ['form-label', 'filter-form__label'],
      formClasses: ['form', 'filter-form'],
      spanClasses: ['label', 'label-radio'],
      fieldsetClasses: ['fieldset', 'filter-form__fieldset'],
      legendClasses: ['legend', 'filter-form__legend'],
      legend: 'Filter by Staff',
    },

    {
      name: 'gender',
      values: ['Male', 'Female', 'All'],
      inputClasses: ['input radio-input', 'filter-form-input__radio', 'visually-hidden'],
      imgClasses: [],
      labelClasses: ['form-label', 'filter-form__label'],
      formClasses: ['form', 'filter-form'],
      spanClasses: ['label', 'label-radio'],
      fieldsetClasses: ['fieldset', 'filter-form__fieldset'],
      legendClasses: ['legend', 'filter-form__legend'],
      legend: 'Filter by Gender',
    },

    {
      name: 'alive',
      values: ['Alive', 'Dead', 'All'],
      inputClasses: ['input radio-input', 'filter-form-input__radio', 'visually-hidden'],
      imgClasses: [],
      labelClasses: ['form-label', 'filter-form__label'],
      formClasses: ['form', 'filter-form'],
      spanClasses: ['label', 'label-radio'],
      fieldsetClasses: ['fieldset', 'filter-form__fieldset'],
      legendClasses: ['legend', 'filter-form__legend'],
      legend: 'Filter by Destiny',
    },
  ],

  random: [
    {
      name: 'random',
      values: ['Get random heroes'],
      inputClasses: ['input radio-input', 'filter-form-input__radio', 'visually-hidden'],
      imgClasses: [],
      labelClasses: ['form-label', 'filter-form__label'],
      formClasses: ['form', 'filter-form'],
      spanClasses: ['label', 'label-radio'],
      fieldsetClasses: ['fieldset', 'filter-form__fieldset'],
      legendClasses: ['legend', 'filter-form__legend'],
      legend: 'Gnerate random Heroes',
    },
  ],
};

export { FORM_STATE };
