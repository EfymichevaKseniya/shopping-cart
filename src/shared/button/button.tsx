import React from 'react'
import { ButtonP } from './button.options'
import './button.css'

function Button({ title, children, onClick, ...p }: ButtonP) {
  return (
    <div
      className='button_wrapper'
      onClick={onClick}
      {...p}
    >
      <div className='button__text'>{title || children}</div>
    </div>
  )
}

export default Button
