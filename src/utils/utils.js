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

const isFunction = func => typeof func === 'function';

function calculateSimilarity(dataHeroes, state) {
  let heroes = {};
  state.forEach(([key, val, score]) => {
    const filteredHeroes = dataHeroes.filter(hero => hero[key] === val.toLowerCase());
    filteredHeroes.forEach(hero => {
      if (hero.id in heroes) {
        heroes[hero.id] += score;
      } else {
        heroes[hero.id] = score;
      }
    });
  });
  heroes = Object.entries(heroes);
  heroes.sort((a, b) => b[1] - a[1]);
  heroes = heroes.map(hero => hero[0]);
  heroes = heroes.map(id => dataHeroes.find(hero => hero.id === +id));
  return heroes.slice(0, 10);
}

export { getHero, generateOccupation, isFunction, calculateSimilarity };
