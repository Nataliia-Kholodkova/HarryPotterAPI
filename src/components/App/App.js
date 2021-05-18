/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import styles from './styles.css';

export default function App(
  dataHeroes,
  hero,
  error,
  formHandler,
  cardHandler,
  resetHandler,
  sliderHandler,
  errorHandler,
) {
  const template = (
    <>
      <Header funcFaculty={formHandler} />
      <div class={`wrapper ${styles['main-wrapper']}`}>
        <Aside filterHandler={formHandler} resetHandler={resetHandler} />
        <Main
          hero={hero}
          heroList={dataHeroes}
          cardHandler={cardHandler}
          error={error}
          errorHandler={errorHandler}
          sliderHandler={sliderHandler}
        />
      </div>
    </>
  );
  const target = document.querySelector('.container');
  target.innerHTML = '';
  target.appendChild(template);
}
