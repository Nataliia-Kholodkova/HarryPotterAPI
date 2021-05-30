/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import styles from './styles.css';
import { setUrl } from '../../utils/utils';
import { useHeroes } from '../../customHooks';
import { AppContext } from '../../context';

export default function App() {
  const { state, error, heroesState, setState, setHeroesState } = useHeroes();
  setUrl(state);
  const template = (
    <>
      <Header setState={setState} appState={state} />
      <div class={`wrapper ${styles['main-wrapper']}`}>
        <Aside setState={setState} appState={state} />
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
