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
  const params = new URLSearchParams(window.location.search);
  for (let param in state.state) {
    if (!state.state[param]) {
      params.delete(param);
    } else {
      params.set(param, state.state[param]);
    }
  }
  window.history.replaceState({}, '', decodeURIComponent(`${window.location.pathname}?${params}`));
}

const isFunction = func => typeof func === 'function';

export { getHero, generateOccupation, setUrl, isFunction };
