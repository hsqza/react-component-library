import React, { MouseEventHandler } from 'react'
import { ComponentInterface } from '../component.types'
import { ColorTypes } from '../../core/Colors/colors'

export type ButtonColor = ColorTypes
export type ButtonSize = 'sm' | 'md'
export type ButtonVariant = 'contained' | 'outlined'

export interface ButtonProps extends ComponentInterface {
  children: React.ReactNode
  color?: ButtonColor
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}
