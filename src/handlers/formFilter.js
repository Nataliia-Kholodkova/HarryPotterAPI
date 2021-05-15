export default function formFilterHandler(event) {
  const element = event.target.closest('input');
  if (!element) {
    return;
  }
  switch (element.value) {
    case 'all':
      window.STATE[element.name] = null;
      break;
    default:
      window.STATE[element.name] = element.value;
  }
  window.heroes
    .then(dataHeroes => window.filterFromState(dataHeroes))
    .then(dataHeroes => {
      if (dataHeroes.length === 0) {
        throw new Error('No one magic hero match the parameters. Please, select something else.');
      }
      window.renderApp(
        dataHeroes,
        null,
        null,
        window.formFilterHandler,
        window.cardHandler,
        window.resetFilterHandler,
        window.sliderHandler,
        window.resetFilterHandler,
      );
    })
    .catch(error =>
      window.renderApp(
        [],
        null,
        error,
        window.formFilterHandler,
        window.cardHandler,
        window.resetHandler,
        window.sliderHandler,
        window.resetFilterHandler,
      ),
    );
}
