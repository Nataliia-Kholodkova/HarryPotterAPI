/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import CreateErrorTemplate from './addError';

export default function CreateMain({
  hero,
  heroList,
  cardHandler,
  error,
  errorHandler,
  sliderHandler,
}) {
  const buttons = (
    <>
      <button
        type="button"
        className={[
          window.styles['btn'],
          window.styles['btn-list'],
          window.styles['btn-list__left'],
        ]}
        data-dir="1"
        onClick={event => sliderHandler(event)}
      >
        &lsaquo;
      </button>
      <button
        type="button"
        className={[
          window.styles['btn'],
          window.styles['btn-list'],
          window.styles['btn-list__right'],
        ]}
        data-dir="-1"
        onClick={event => sliderHandler(event)}
      >
        &rsaquo;
      </button>
    </>
  );
  const errorTemplate = <CreateErrorTemplate error={error} reloadHandler={errorHandler} />;
  return (
    <>
      <main className={window.styles.main}>
        <div className={window.styles.results}>
          {buttons}
          <div className={window.styles['hero-list']}>
            {errorTemplate}
            {hero}
          </div>
          <div className={window.styles['hero-list__wrapper']}>
            <div
              className={window.styles['hero-list__slider']}
              onClick={event => cardHandler(event)}
            >
              {heroList}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
