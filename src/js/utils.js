import { useState } from '../framework/hooks';

function generateOccupation(hero) {
  let occupationTemplate = '';
  if (hero.fromHogwarts()) {
    if (hero.hogwartsStaff) {
      occupationTemplate += 'Professor of ';
    } else {
      occupationTemplate += 'Student of ';
    }
  } else {
    occupationTemplate += 'Not from ';
  }
  occupationTemplate += 'Hogwarts';
  if (hero.house) {
    occupationTemplate += `, ${hero.house}`;
  }
  occupationTemplate += '.';
  return occupationTemplate;
}

function getHero(dataHeroes, id) {
  const hero = id
    ? dataHeroes.find(item => item.id === id)
    : dataHeroes[Math.floor(Math.random() * dataHeroes.length)];
  return hero;
}

function setUrl(state) {
  const url = new URL(window.location.href);
  url.search = '';
  for (let param in state) {
    if (state[param] === null || state[param] === '') {
      url.searchParams.delete(param);
    } else {
      url.searchParams.set(param, state[param]);
    }
  }
  window.history.pushState({}, '', url);
}

function updateStateFromUrl(state, setState) {
  const url = new URL(window.location.href);
  for (let param in state) {
    let searchParam = url.searchParams.get(param);
    try {
      state[param] = searchParam;
    } catch {
      state[param] = null;
    }
  }
  window.history.pushState({}, '', url);
  setState(state);
}

const isFunction = func => typeof func === 'function';

export { getHero, generateOccupation, setUrl, updateStateFromUrl, isFunction };
