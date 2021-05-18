/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Error from '../Error/Error';
import MainHeroCard from '../MainHeroCard/MainHeroCard';
import HeroesList from '../HeroesList/HeroesList';

export default function Main({ hero, heroList, cardHandler, error, errorHandler, sliderHandler }) {
  const buttons = (
    <>
      <button
        type="button"
        class={[window.styles['btn'], window.styles['btn-list'], window.styles['btn-list__left']]}
        data-dir="1"
        onClick={event => sliderHandler(event)}
      >
        &lsaquo;
      </button>
      <button
        type="button"
        class={[window.styles['btn'], window.styles['btn-list'], window.styles['btn-list__right']]}
        data-dir="-1"
        onClick={event => sliderHandler(event)}
      >
        &rsaquo;
      </button>
    </>
  );
  return (
    <>
      <main class={window.styles.main}>
        <div class={window.styles.results}>
          {buttons}
          <div class={window.styles['hero-list']}>
            <Error error={error} reloadHandler={errorHandler} />
            <MainHeroCard hero={hero} />
            <div class={window.styles['hero-list__wrapper']}>
              <div class={window.styles['hero-list__slider']} onlick={event => cardHandler(event)}>
                <HeroesList heroes={heroList} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
