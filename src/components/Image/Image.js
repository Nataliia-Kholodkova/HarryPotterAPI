import React from 'react';

export default function Image({ value, url, width, imgClasses }) {
  return (
    <>
      <img className={imgClasses.join(' ')} src={url} alt={value} width={width} />
    </>
  );
}
