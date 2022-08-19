import React, { FC, forwardRef } from 'react'
import { ButtonProps } from './Button.types'
import StyledButton from './Button.style'

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { size = 'md', color = 'primary', variant = 'contained', children, ...other } = props

  return (
    <StyledButton ref={ref} type="button" size={size} color={color} variant={variant} {...other}>
      {children}
    </StyledButton>
  )
})

export default Button
