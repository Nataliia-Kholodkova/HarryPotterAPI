/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import hat from '../../img/hat.png';
import Image from '../Image/Image';

export default function Error({ error, reloadHandler }) {
  if (!error) {
    return null;
  }
  return (
    <>
      <div class={window.styles.error}>
        <Image
          value={'Sorting hat'}
          url={hat}
          width={'150'}
          imgClasses={[window.styles.img, window.styles['img-hat']]}
        />
        <h1
          class={[window.styles.title, window.styles['title-main'] || 'title-main']}
          style="color: #2a221e"
        >
          {error}
        </h1>
        <button
          type="button"
          class={['btn', 'btn-reset'].map(_class => window.styles[_class] || _class)}
          name="reload"
          onClick={event => reloadHandler(event)}
        >
          Reload
        </button>
      </div>
    </>
  );
}
