import React, { FC } from 'react'
import { ButtonProps } from './Button.types'
import StyledButton from './Button.style'

const Button: FC<ButtonProps> = (props) => {
  const {
    size = 'md',
    disabled,
    onClick,
    color = 'primary',
    variant = 'contained',
    children
  } = props

  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      size={size}
      color={color}
      variant={variant}>
      {children}
    </StyledButton>
  )
}

export default Button
