/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import styles from './styles.css';
import { useHeroes } from '../../customHooks';
import { AppContext } from '../../context';

export default function App() {
  const { state, error, heroesState, setState, setHeroesState } = useHeroes();
  const template = (
    <>
      <Header setState={setState} appState={state} setHeroesState={setHeroesState} />
      <div class={`wrapper ${styles['main-wrapper']}`}>
        <Aside setState={setState} appState={state} setHeroesState={setHeroesState} />
        <AppContext.Provider value={heroesState}>
          <Main
            error={error}
            setState={setState}
            appState={state}
            setHeroesState={setHeroesState}
          />
        </AppContext.Provider>
      </div>
    </>
  );
  return template;
}
