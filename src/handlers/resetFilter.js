import createApp from '../framework/framework';

export default function resetFilterHandler() {
  window.STATE = {
    house: null,
    gender: null,
    name: null,
    staff: null,
    isAlive: null,
  };
  createApp();
}
