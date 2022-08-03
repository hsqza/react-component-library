import React, { MouseEventHandler } from 'react'

export interface ButtonProps {
  children: React.ReactNode
  primary?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  onClick: MouseEventHandler<HTMLButtonElement>
}
