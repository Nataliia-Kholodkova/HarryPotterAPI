import React from 'react';
import Image from '../Image/Image';
import styles from './styles.css';
import filterFromState from '../../data/filterHeroes';

export default function Input({
  state,
  imgNeed,
  setHero,
  setHeroes,
  setHeroId,
  setError,
  appState,
  heroes,
}) {
  const inputHandler = event => {
    const [, setter] = appState[event.target.name];
    setter(event.target.value);
    setHeroId(null);
    setHero(null);
    setError(null);
    if (heroes.length === 0) {
      return;
    }
    try {
      setHeroes(filterFromState(heroes, event.target.name, event.target.value));
    } catch (error) {
      setError(error);
      setHeroes([]);
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
            checked={appState[state.name][0] === value}
            onChange={inputHandler}
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
