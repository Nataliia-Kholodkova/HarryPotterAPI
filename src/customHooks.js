import { useEffect, useState } from './framework/hooks';
import filterFromState from './data/filterHeroes';
import getHeroesFromServer from './data/getData';
import { getHero } from './utils/utils';

export const useHeroes = () => {
  const [heroesState, setHeroesState] = useState({
    heroId: null,
    hero: null,
    heroes: [],
    currentHeroes: [],
  });
  const [error, setError] = useState(null);
  let [state, setState] = useState({
    state: {
      house: null,
      gender: null,
      name: null,
      hogwarts: null,
      alive: null,
    },
    needReload: true,
  });
  useEffect(() => {
    if (heroesState.heroes.length === 0) {
      getHeroesFromServer()
        .then(heroesList => {
          heroesState.heroes = heroesList;
          heroesState.currentHeroes = heroesList;
          const heroItemId = heroesState.heroId || null;
          const heroItem = getHero(heroesList, heroItemId);
          heroesState.heroId = heroItemId;
          heroesState.hero = heroItem;
          setHeroesState(heroesState);
        })
        .catch(errorItem => {
          state.needReload = false;
          setError(errorItem);
        })
        .finally(() => {
          state.needReload = false;
          setState(state);
        });
    } else {
      if (state.needReload) {
        try {
          const heroesData = filterFromState(heroesState.heroes, state.state);
          const heroItemId = heroesState.heroId || null;
          const heroItem = getHero(heroesData, heroItemId);
          heroesState.heroId = heroItemId;
          heroesState.hero = heroItem;
          heroesState.currentHeroes = heroesData;
          setHeroesState(heroesState);
        } catch (errorItem) {
          setError(errorItem);
        } finally {
          state.needReload = false;
          setState(state);
        }
      }
    }
  }, [heroesState, error, state]);

  return {
    state,
    error,
    heroesState,
    setState,
    setHeroesState,
  };
};
