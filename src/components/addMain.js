import createErrorTemplate from './addError';

export default function createMain(
  hero,
  heroList,
  cardHandler,
  error,
  errorHandler,
  sliderHandler,
) {
  const buttons = `<button type="button" class="${window.styles['btn']} ${window.styles['btn-list']} ${window.styles['btn-list__left']}" data-dir="1" onclick="(${sliderHandler})(event);">&lsaquo;</button>
                          <button type="button" class="${window.styles['btn']} ${window.styles['btn-list']} ${window.styles['btn-list__right']}" data-dir="-1" onclick="(${sliderHandler})(event);">
                            &rsaquo;
                          </button>`;
  let template = `
      <main class="${window.styles.main}">
        <div class="${window.styles.results}">
        ${!error ? buttons : ''}
          <div class="${window.styles['hero-list']}">
              ${hero ? hero : createErrorTemplate(error, errorHandler) || ''}
          </div>
          <div class="${window.styles['hero-list__wrapper']}">
                <div class="${
                  window.styles['hero-list__slider']
                }" onclick="(${cardHandler})(event);">
                  ${heroList ? heroList : ''}
                </div>
          </div>
        </div>
      </main>
      `;
  return template;
}
