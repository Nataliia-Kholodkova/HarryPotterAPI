/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import styles from './styles.css';
import sliderHandler from '../../handlers/slider';
import { setUrl } from '../../js/utils';
import { useHeroes } from '../../customHooks';

export default function App() {
  const { state, heroes, hero, error, setState, setHero, setHeroId } = useHeroes();
  setUrl(state);
  const template = (
    <>
      <Header setState={setState} appState={state} />
      <div class={`wrapper ${styles['main-wrapper']}`}>
        <Aside setState={setState} appState={state} />
        <Main
          hero={hero}
          heroList={heroes}
          setHeroId={setHeroId}
          setHero={setHero}
          error={error}
          setState={setState}
          sliderHandler={sliderHandler}
          appState={state}
        />
      </div>
    </>
  );
  return template;
}
