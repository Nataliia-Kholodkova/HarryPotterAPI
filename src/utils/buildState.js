import allUrl from './img/all.png';
import gryffindorUrl from './img/gryffindor.png';
import hufflepuffUrl from './img/hufflepuff.png';
import ravenclawUrl from './img/ravenclaw.png';
import slytherinUrl from './img/slytherin.png';

const FORM_STATE = {
  faculty: [
    {
      name: 'house',
      values: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin', 'All'],
      inputClasses: ['faculty-form__box', 'visually-hidden'],
      imgClasses: ['img-checkbox'],
      labelClasses: [],
      legendClasses: '',
      formClasses: 'faculty-form',
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
      inputClasses: ['radio-input', 'visually-hidden'],
      imgClasses: [],
      labelClasses: ['filter-form__label'],
      formClasses: 'filter-form',
      spanClasses: ['label', 'label-radio'],
      fieldsetClasses: 'filter-form__fieldset',
      legendClasses: 'filter-form__legend',
      legend: 'Filter by Staff',
      placeholder: '',
      type: 'radio',
    },

    {
      name: 'gender',
      values: ['Male', 'Female', 'All'],
      inputClasses: ['radio-input', 'visually-hidden'],
      imgClasses: [],
      labelClasses: ['filter-form__label'],
      formClasses: 'filter-form',
      spanClasses: ['label', 'label-radio'],
      fieldsetClasses: 'filter-form__fieldset',
      legendClasses: 'filter-form__legend',
      legend: 'Filter by Gender',
      placeholder: '',
      type: 'radio',
    },

    {
      name: 'alive',
      values: ['Alive', 'Dead', 'All'],
      inputClasses: ['radio-input', 'visually-hidden'],
      imgClasses: [],
      labelClasses: ['filter-form__label'],
      formClasses: 'filter-form',
      spanClasses: ['label', 'label-radio'],
      fieldsetClasses: 'filter-form__fieldset',
      legendClasses: 'filter-form__legend',
      legend: 'Filter by Destiny',
      placeholder: '',
      type: 'radio',
    },

    {
      name: 'name',
      values: [''],
      inputClasses: ['text-input'],
      imgClasses: [],
      labelClasses: ['filter-form__label', 'form-label__text'],
      formClasses: 'filter-form',
      spanClasses: ['visually-hidden'],
      fieldsetClasses: 'filter-form__fieldset',
      legendClasses: 'filter-form__legend',
      legend: '',
      placeholder: "Hero's name",
      type: 'search',
    },
  ],
};

export default FORM_STATE;
