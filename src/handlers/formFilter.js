import createApp from '../framework/framework';
import { useState } from './framework';

export default function formFilterHandler(event) {
  const [, setState] = useState({
    house: null,
    gender: null,
    name: null,
    hogwarts: null,
    isAlive: null,
  });
  const element = event.target.closest('input');
  if (!element) {
    return;
  }
  switch (element.value) {
    case 'all':
      setState(element.name, null);
      break;
    default:
      setState(element.name, element.value);
  }
  createApp();
}
