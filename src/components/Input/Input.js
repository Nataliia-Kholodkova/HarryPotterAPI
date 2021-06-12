import React from 'react';
import Image from '../Image/Image';
import styles from './styles.css';
import { inputHandler, scrollToHeroes } from '../../utils/handlers';

export default function Input({ state, imgNeed, appState, appInputsState, needSubmit }) {
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
                ? event => {
                    inputHandler(event, appState, appInputsState);
                    scrollToHeroes();
                  }
                : function () {
                    return false;
                  }
            }
            data-score={state['data-score']}
          />
          {imgNeed === true ? (
            <Image
              value={value}
              url={state['imgUrls'][value]}
              width={'100px'}
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
