import React from 'react'

export const Operator = ({operator, operation}) => {
  return (
    <button onClick={() => operation(operator)} className="border-2">{operator}</button>
  )
}
