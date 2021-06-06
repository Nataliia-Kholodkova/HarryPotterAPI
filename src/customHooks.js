import { useEffect, useState } from 'react';
import getHeroesFromServer from './data/getData';
import { getHero } from './utils/utils';
import filterFromState from './data/filterHeroes';

export const useHeroes = () => {
  const [hero, setHero] = useState(null);
  const [heroId, setHeroId] = useState(null);
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(null);
  const [house, setHouse] = useState('All');
  const [hogwarts, setHogwarts] = useState('All');
  const [gender, setGender] = useState('All');
  const [alive, setAlive] = useState('All');
  const [name, setName] = useState(undefined);

  useEffect(() => {
    if (heroes.length === 0 && !error) {
      getHeroesFromServer()
        .then(heroesList => filterFromState(heroesList, 'house', house))
        .then(heroesData => filterFromState(heroesData, 'hogwarts', hogwarts))
        .then(heroesData => filterFromState(heroesData, 'gender', gender))
        .then(heroesData => filterFromState(heroesData, 'alive', alive))
        .then(heroesData => filterFromState(heroesData, 'name', name || ''))
        .then(heroesData => setHeroes(heroesData))
        .catch(errorItem => setError(errorItem));
    }
    if (!hero) {
      setHero(getHero(heroes, heroId));
    }
  }, [hero, heroId, heroes, error, house, hogwarts, gender, alive, name]);
  return {
    hero,
    setHero,
    heroId,
    setHeroId,
    heroes,
    setHeroes,
    error,
    setError,
    house,
    setHouse,
    hogwarts,
    setHogwarts,
    gender,
    setGender,
    alive,
    setAlive,
    name,
    setName,
  };
};
