import createApp from './framework/framework';

window.heroes = window.getHeroesFromServer();
window.createApp = createApp;
window.createApp();
