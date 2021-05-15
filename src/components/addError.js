import hat from '../img/hat.png';

export default function createErrorTemplate(error, reloadHandler) {
  return `
      <div class="${window.styles.error}">
      <img src="${hat}" alt="Sorting hat" class="${window.styles.img} ${window.styles['img-hat']}"/>
      <h1 class "${window.styles.title} ${
    window.styles['title-main'] || 'title-main'
  }" style="color: #2a221e">${error}</h1>
      <button tyle="button" class="${['btn', 'btn-reset']
        .map(_class => window.styles[_class] || _class)
        .join(' ')}" name="reload" onclick="(${reloadHandler})();">Reload</button>
      </div>
      `;
}
