import Hero from '../js/hero';

export default function constructHeroesList(dataHeroes) {
  let id = 1;
  const heroes = dataHeroes.map(item => {
    const hero = new Hero(item);
    hero.id = id;
    id += 1;
    return hero;
  });
  return heroes;
}
