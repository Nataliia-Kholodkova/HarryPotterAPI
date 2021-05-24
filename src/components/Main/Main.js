/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Error from '../Error/Error';
import MainHeroCard from '../MainHeroCard/MainHeroCard';
import HeroesList from '../HeroesList/HeroesList';
import { getHero } from '../../js/utils';
import styles from './styles.css';

export default function Main({
  hero,
  heroList,
  idHandler,
  heroHandler,
  error,
  errorHandler,
  sliderHandler,
  state,
  setNeedReload,
}) {
  const buttons = (
    <>
      <button
        type="button"
        class={`btn ${styles['btn-list']} ${styles['btn-list__left']}`}
        data-dir={'1'}
        onclick={event => sliderHandler(event)}
      >
        &lsaquo;
      </button>
      <button
        type="button"
        class={`btn ${styles['btn-list']} ${styles['btn-list__right']}`}
        data-dir={'-1'}
        onclick={event => sliderHandler(event)}
      >
        &rsaquo;
      </button>
    </>
  );
  return (
    <>
      <main class={styles.main}>
        <div class={styles.results}>
          {buttons}
          <div class={styles['hero-list']}>
            <Error error={error} reloadHandler={errorHandler} />
            <MainHeroCard hero={hero} />
            <div class={styles['hero-list__wrapper']}>
              <div
                class={styles['hero-list__slider']}
                id="slider"
                onclick={event => {
                  const card = event.target.closest(`div.hero-card`);
                  let id = null;
                  if (!card) {
                    idHandler(null);
                    heroHandler(null);
                    return;
                  }
                  id = +card.dataset.id;
                  idHandler(id);
                  const hero = getHero(heroList, id);
                  heroHandler(hero);
                  setNeedReload(true);
                }}
              >
                <HeroesList heroes={heroList} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
