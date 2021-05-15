import renderHeroSmall from './heroSmall';

export default function renderHeroesList(heroes) {
  let template = '';
  heroes.forEach(hero => {
    const heroTemplate = renderHeroSmall(hero);
    if (heroTemplate) {
      template += heroTemplate;
    }
  });
  return template;
}
