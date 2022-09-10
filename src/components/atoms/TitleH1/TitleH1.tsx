import React from 'react';

interface ITitleH1Props {
    text: string,
}

export const TitleH1 = ({ text }: ITitleH1Props): JSX.Element => {
  return (
    <h1 className='font-bold text-4xl text-center p-2 mb-10 pt-5'>{text}</h1>
  )
}
