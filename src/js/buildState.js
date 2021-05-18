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
      legend: '',
      placeholder: '',
      type: 'radio',
    },
  ],

  filter: [
    {
      name: 'hogwarts',
      values: ['Staff', 'Student', '', 'All'],
      inputClasses: ['input, radio-input', 'filter-form-input__radio', 'visually-hidden'],
      imgClasses: [],
      labelClasses: ['form-label', 'filter-form__label'],
      formClasses: ['form', 'filter-form'],
      spanClasses: ['label', 'label-radio'],
      fieldsetClasses: ['fieldset', 'filter-form__fieldset'],
      legendClasses: ['legend', 'filter-form__legend'],
      legend: 'Filter by Staff',
      placeholder: '',
      type: 'radio',
    },

    {
      name: 'gender',
      values: ['Male', 'Female', 'All'],
      inputClasses: ['input, radio-input', 'filter-form-input__radio', 'visually-hidden'],
      imgClasses: [],
      labelClasses: ['form-label', 'filter-form__label'],
      formClasses: ['form', 'filter-form'],
      spanClasses: ['label', 'label-radio'],
      fieldsetClasses: ['fieldset', 'filter-form__fieldset'],
      legendClasses: ['legend', 'filter-form__legend'],
      legend: 'Filter by Gender',
      placeholder: '',
      type: 'radio',
    },

    {
      name: 'alive',
      values: ['Alive', 'Dead', 'All'],
      inputClasses: ['input, radio-input', 'filter-form-input__radio', 'visually-hidden'],
      imgClasses: [],
      labelClasses: ['form-label', 'filter-form__label'],
      formClasses: ['form', 'filter-form'],
      spanClasses: ['label', 'label-radio'],
      fieldsetClasses: ['fieldset', 'filter-form__fieldset'],
      legendClasses: ['legend', 'filter-form__legend'],
      legend: 'Filter by Destiny',
      placeholder: '',
      type: 'radio',
    },

    {
      name: 'name',
      values: [''],
      inputClasses: ['input', 'text-input', 'filter-form-input__text'],
      imgClasses: [],
      labelClasses: ['form-label', 'filter-form__label', 'form-label__text'],
      formClasses: ['form', 'filter-form'],
      spanClasses: ['visually-hidden'],
      fieldsetClasses: ['fieldset', 'filter-form__fieldset'],
      legendClasses: ['legend', 'filter-form__legend'],
      legend: '',
      placeholder: "Hero's name",
      type: 'search',
    },
  ],

  random: [
    {
      name: 'random',
      values: ['Get random heroes'],
      inputClasses: ['input, radio-input', 'filter-form-input__radio', 'visually-hidden'],
      imgClasses: [],
      labelClasses: ['form-label', 'filter-form__label'],
      formClasses: ['form', 'filter-form'],
      spanClasses: ['label', 'label-radio'],
      fieldsetClasses: ['fieldset', 'filter-form__fieldset'],
      legendClasses: ['legend', 'filter-form__legend'],
      legend: 'Gnerate random Heroes',
      placeholder: '',
      type: 'radio',
    },
  ],
};

export { FORM_STATE };
