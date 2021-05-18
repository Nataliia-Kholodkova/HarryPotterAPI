import createApp from '../framework/framework';

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
  createApp();
}
