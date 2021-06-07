import React from 'react';
import Image from '../Image/Image';
import styles from './styles.css';
import filterFromState from '../../data/filterHeroes';

export default function Input({ state, imgNeed, appState, appInputsState, needSubmit }) {
  const inputHandler = event => {
    const [, setter] = appInputsState[event.target.name];
    setter(event.target.value);
    appState.heroId[1](null);
    appState.hero[1](null);
    appState.error[1](null);
    if (appState.heroes[0].length === 0) {
      return;
    }
    try {
      setHeroes(filterFromState(appState.heroes[0], event.target.name, event.target.value));
    } catch (error) {
      appState.error[1](null);
      appState.heroes[1]([]);
    }
  };
  return (
    <>
      {state['values'].map((value, index) => (
        <label
          className={`form-label ${state.labelClasses.map(_class => styles[_class]).join(' ')}`}
          key={index}
        >
          <input
            type={state.type}
            className={`
              ${
                state.inputClasses.includes('visually-hidden') ? 'visually-hidden' : ''
              } ${state.inputClasses.map(_class => styles[_class]).join(' ')}`}
            value={state.placeholder ? undefined : value}
            name={state.name}
            placeholder={state.placeholder || null}
            checked={!needSubmit ? appInputsState[state.name][0] === value : undefined}
            onChange={
              !needSubmit
                ? inputHandler
                : function () {
                    return false;
                  }
            }
          />
          {imgNeed === true ? (
            <Image
              value={value}
              url={state['imgUrls'][value]}
              width={'120px'}
              imgClasses={[styles['img-checkbox']]}
            />
          ) : (
            ''
          )}
          <span
            className={`label ${
              state.spanClasses.includes('visually-hidden') ? 'visually-hidden' : ''
            }
              ${state.spanClasses.map(_class => styles[_class]).join(' ')}
            `}
          >
            {value.length > 0 ? value : 'None'}
          </span>
        </label>
      ))}
    </>
  );
}
