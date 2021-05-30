/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import Error from '../Error/Error';
import styles from './styles.css';
import { useAppContext } from '../../context';
import sliderHandler from '../../utils/slider';
import { generateButtons, generateData } from './helpers';

export default function Main({ setState, error, setHeroesState, appState }) {
  const heroesData = useAppContext();
  if (Object.keys(heroesData).length === 0) {
    return null;
  }
  const buttons = generateButtons(sliderHandler);
  const data = generateData(appState, heroesData, setHeroesState, setState, error);
  return (
    <>
      <main class={styles.main}>
        <div class={styles.results}>
          {buttons}
          <div class={styles['hero-list']}>
            <Error error={error} setState={setState} />
            {data}
          </div>
        </div>
      </main>
    </>
  );
}
