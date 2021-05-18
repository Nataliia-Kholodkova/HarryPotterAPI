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

function getRandomHero(dataHeroes) {
  const index = Math.floor(Math.random() * dataHeroes.length);
  return dataHeroes[index];
}

function getHero(dataHeroes, id) {
  const hero = dataHeroes.find(item => item.id === id);
  return hero;
}

function setUrl() {
  const url = new URL(window.location.href);
  url.search = '';
  for (let param in window.STATE) {
    if (window.STATE[param] === null || window.STATE[param] === '') {
      url.searchParams.delete(param);
    } else {
      url.searchParams.set(param, window.STATE[param]);
    }
  }
  window.history.pushState({}, '', url);
}

export { getHero, generateOccupation, getRandomHero, setUrl };
