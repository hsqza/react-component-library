import React, { MouseEventHandler } from 'react'
import { ColorTypes } from '../../core/Colors/Colors'

type ButtonSize = 'sm' | 'md'
type ButtonVariant = 'contained' | 'outlined'

export interface ButtonProps {
  children: React.ReactNode
  color?: ColorTypes
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}
