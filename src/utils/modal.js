export function calculateSimilarity(dataHeroes, state) {
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

export function modalFormOpener() {
  const modalWindow = document.getElementById('modal');
  modalWindow.classList.remove('modal-closed');
  modalWindow.classList.add('modal-opened');
}

export function modalFormClose() {
  const modalWindow = document.getElementById('modal');
  modalWindow.classList.add('modal-closed');
  modalWindow.classList.remove('modal-opened');
}

export function modalFormSubmit(event) {
  event.preventDefault();
  const state = [];
  [...event.target.elements].forEach(element => {
    if (element.type === 'radio' && element.checked) {
      state.push([element.name, element.value, +element.dataset.score]);
    }
  });
  modalFormClose();
  return state;
}
