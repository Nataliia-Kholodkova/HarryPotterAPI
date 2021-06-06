export default function filterFromState(dataHeroes, key, value) {
  const fileteredHeroes = dataHeroes.filter(hero => {
    if (value === 'All') {
      return hero;
    }
    switch (key) {
      case 'name':
        return hero[key].toLowerCase().includes(value.toLowerCase());
      default:
        return hero[key].toLowerCase() === value.toLowerCase();
    }
  });
  if (fileteredHeroes.length === 0) {
    throw new Error(
      'No magic heros matching current parameters. Please, reload or select other search parameters.',
    );
  }
  return fileteredHeroes;
}
