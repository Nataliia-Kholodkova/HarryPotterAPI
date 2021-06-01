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

export { getHero, generateOccupation, isFunction };
