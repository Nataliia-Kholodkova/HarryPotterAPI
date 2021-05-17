/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import CreateInputContainer from './inputFieldset';

function CreateForm({
  formState,
  listener,
  imgNeed = false,
  isFieldset = false,
  resetNeed = false,
  isSearchNeed = false,
  resetFilterHandler = null,
}) {
  return (
    <form
      className={formState[0].formClasses.map(_class => window.styles[_class] || _class)}
      onChange={event => listener(event)}
    >
      {formState.map(_state => (
        <CreateInputContainer state={_state} imgNeed={imgNeed} isFieldset={isFieldset} />
      ))}
      {isSearchNeed ? (
        <>
          <fieldset
            className={['fieldset', 'filter-form__fieldset'].map(
              _class => window.styles[_class] || _class,
            )}
          >
            <label
              className={['form-label', 'filter-form__label', 'form-label__text'].map(
                _class => window.styles[_class] || _class,
              )}
            >
              <input
                type="search"
                name="name"
                className={['input', 'text-input', 'filter-form-input__text'].map(
                  _class => window.styles[_class] || _class,
                )}
                placeholder="Hero's name"
                onChange={event => {
                  event.stopPropagation();
                  listener(event);
                }}
              />
              <span className={window.styles['visually-hidden']}>Search</span>
            </label>
          </fieldset>
        </>
      ) : (
        <></>
      )}
      {resetNeed ? (
        <>
          <button
            type="reset"
            className={['btn', 'btn-reset'].map(_class => window.styles[_class] || _class)}
            name="reset"
            type="reset"
            onClick={event => resetFilterHandler(event)}
          >
            Reset
          </button>
        </>
      ) : (
        <></>
      )}
    </form>
  );
}

export default CreateForm;
