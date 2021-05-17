/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import hat from '../img/hat.png';

function CreateErrorTemplate({ error, reloadHandler }) {
  if (!error) {
    return null;
  }
  return (
    <>
      <div class={window.styles.error}>
        <img src={hat} alt="Sorting hat" class="{window.styles.img} {window.styles['img-hat']}" />
        <h1
          className={[window.styles.title, window.styles['title-main'] || 'title-main']}
          style="color: #2a221e"
        >
          {error}
        </h1>
        <button
          type="button"
          className={['btn', 'btn-reset'].map(_class => window.styles[_class] || _class)}
          name="reload"
          onClick={event => reloadHandler(event)}
        >
          Reload
        </button>
      </div>
    </>
  );
}

export default CreateErrorTemplate;
