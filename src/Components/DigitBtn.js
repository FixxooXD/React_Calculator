import React from 'react'

export const DigitBtn = ({digit, btn}) => {
  return (
    <button onClick={()=>btn(digit)} className="border-2">{digit}</button>
  )
}
