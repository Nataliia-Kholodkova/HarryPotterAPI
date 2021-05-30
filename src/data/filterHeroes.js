export default function filterFromState(dataHeroes, state) {
  const fileteredHeroes = Object.entries(state).reduce((initial, entry) => {
    if (entry[1] !== null) {
      const [key, value] = entry;
      if (value === 'All') {
        return initial;
      }
      const newdataHeroes = initial.filter(hero => {
        switch (key) {
          case 'name':
            return hero[key].toLowerCase().includes(value.toLowerCase());
          default:
            return hero[key].toLowerCase() === value.toLowerCase();
        }
      });
      return newdataHeroes;
    }
    return initial;
  }, dataHeroes);
  if (fileteredHeroes.length === 0) {
    throw new Error(
      'No magic heros matching current parameters. Please, reload or select other search parameters.',
    );
  }
  return fileteredHeroes;
}
