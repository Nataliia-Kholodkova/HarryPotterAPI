export default function filterFromState(dataHeroes) {
  const fileteredHeroes = Object.entries(window.STATE).reduce(
    (initial, entry) =>
      initial.then(result => {
        if (entry[1] !== null) {
          const [key, value] = entry;
          if (value === 'All') {
            return result;
          }
          const newdataHeroes = result.filter(hero => {
            switch (key) {
              case 'name':
                return hero[key].toLowerCase().includes(value.toLowerCase());
              default:
                return hero[key].toLowerCase() === value.toLowerCase();
            }
          });
          return new Promise((resolve, reject) => resolve(newdataHeroes));
        }
        return new Promise((resolve, reject) => resolve(result));
      }),
    Promise.resolve(dataHeroes),
  );
  return fileteredHeroes.then(resultHeroes => resultHeroes);
}
