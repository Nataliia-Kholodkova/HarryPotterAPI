/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import Main from './Main/Main';
import Aside from './Aside/Aside';
import Header from './Header/Header';

export default function renderApp(
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
      <div class={[window.styles.wrapper, window.styles['main-wrapper'] || 'main-wrapper']}>
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
