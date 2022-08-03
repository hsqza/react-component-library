import React, { FC } from 'react'
import { ButtonProps } from './Button.types'
import StyledButton from './Button.style'

const Button: FC<ButtonProps> = (props) => {
  const { size, primary, disabled, onClick, children } = props

  return (
    <StyledButton type="button" onClick={onClick} primary={primary} disabled={disabled} size={size}>
      {children}
    </StyledButton>
  )
}

export default Button
