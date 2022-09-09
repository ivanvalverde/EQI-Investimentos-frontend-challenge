import React from 'react'

interface ITitleH2Props {
    text: string,
}

export const TitleH2 = ({ text}: ITitleH2Props) => {
  return (
    <h2 className='font-bold text-2xl p-2 mb-4 ml-5'>{text}</h2>
  )
}
