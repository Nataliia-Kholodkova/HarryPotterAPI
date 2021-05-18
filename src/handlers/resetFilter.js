export default function resetFilterHandler() {
  window.STATE = {
    house: null,
    gender: null,
    name: null,
    staff: null,
    isAlive: null,
  };
  window.heroes.then(dataHeroes => {
    const hero = window.getRandomHero(heroes);
    window.renderApp(
      dataHeroes,
      hero,
      null,
      window.formFilterHandler,
      window.cardHandler,
      window.resetFilterHandler,
      window.sliderHandler,
      window.resetFilterHandler,
    );
  });
}
