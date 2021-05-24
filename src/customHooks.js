import { useEffect, useState } from './framework/hooks';
import filterFromState from './data/filterHeroes';
import getHeroesFromServer from './data/getData';
import { getHero } from './js/utils';

export const useHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(null);
  const [heroId, setHeroId] = useState(null);
  const [hero, setHero] = useState(null);
  const [needReload, setNeedReload] = useState(true);
  let [state, setState] = useState({
    house: null,
    gender: null,
    name: null,
    hogwarts: null,
    isAlive: null,
  });
  const resetState = () => {
    state = {
      house: null,
      gender: null,
      name: null,
      hogwarts: null,
      isAlive: null,
    };
    setState(state);
    setNeedReload(true);
  };

  useEffect(() => {
    if (needReload) {
      getHeroesFromServer()
        .then(heroesList => {
          const heroesData = filterFromState(heroesList, state);
          return heroesData;
        })
        .then(heroesData => {
          const heroItemId = heroId || null;
          const heroItem = getHero(heroesData, heroId);
          setHeroes(heroesData);
          setHero(heroItem);
          setHeroId(heroItemId);
          setNeedReload(false);
        })
        .catch(errorItem => {
          setError(errorItem);
          setHeroes([]);
          setHeroId(null);
          setHero(null);
          setNeedReload(false);
        });
    }
  }, [heroes, heroId, hero, error, state, needReload]);

  return {
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
  };
};
