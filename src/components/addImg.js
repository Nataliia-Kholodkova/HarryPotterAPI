export default function createImg(value, state) {
  return `<img class="${state.imgClasses.map(_class => window.styles[_class] || _class).join(' ')}"
      src=${state['imgUrls'][value]} alt=${value} width=${value === 'All' ? '150' : '120'}/>`;
}
