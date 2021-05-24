/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import styles from './styles.css';
import sliderHandler from '../../handlers/slider';
import { setUrl, updateStateFromUrl } from '../../js/utils';
import { useHeroes } from '../../customHooks';

export default function App() {
  const {
    heroes,
    heroId,
    hero,
    error,
    setState,
    setHero,
    setHeroId,
    resetState,
    state,
    setNeedReload,
  } = useHeroes();
  setUrl(state);
  const template = (
    <>
      <Header funcFaculty={setState} state={state} setNeedReload={setNeedReload} />
      <div class={`wrapper ${styles['main-wrapper']}`}>
        <Aside
          filterHandler={setState}
          resetHandler={resetState}
          state={state}
          setNeedReload={setNeedReload}
        />
        <Main
          hero={hero}
          heroList={heroes}
          idHandler={setHeroId}
          heroHandler={setHero}
          error={error}
          errorHandler={resetState}
          sliderHandler={sliderHandler}
          state={state}
          setNeedReload={setNeedReload}
        />
      </div>
    </>
  );
  return template;
}
