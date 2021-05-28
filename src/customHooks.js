import { useEffect, useState } from './framework/hooks';
import filterFromState from './data/filterHeroes';
import getHeroesFromServer from './data/getData';
import { getHero } from './js/utils';

export const useHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(null);
  const [heroId, setHeroId] = useState(null);
  const [hero, setHero] = useState(null);
  let [state, setState] = useState({
    state: {
      house: null,
      gender: null,
      name: null,
      hogwarts: null,
      isAlive: null,
    },
    needReload: true,
  });
  useEffect(() => {
    if (state.needReload) {
      getHeroesFromServer()
        .then(heroesList => {
          const heroesData = filterFromState(heroesList, state.state);
          return heroesData;
        })
        .then(heroesData => {
          const heroItemId = heroId || null;
          const heroItem = getHero(heroesData, heroId);
          state.needReload = false;
          setHeroes(heroesData);
          setHero(heroItem);
          setHeroId(heroItemId);
          setState(state);
          setError(null);
        })
        .catch(errorItem => {
          state.needReload = false;
          setError(errorItem);
          setHeroes([]);
          setHeroId(null);
          setHero(null);
          setState(state);
        });
    }
  }, [heroes, heroId, hero, error, state]);

  return {
    state,
    heroes,
    hero,
    error,
    setState,
    setHero,
    setHeroId,
  };
};
