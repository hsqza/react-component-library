import styled, { css } from 'styled-components'
import { ButtonColor, ButtonProps, ButtonSize, ButtonVariant } from './Button.types'
import { Colors } from '../../core'

const setupVariantBackgroundColors = (variant: ButtonVariant, color: string, isWhite?: boolean) => {
  let properties = {
    textColor: '#fff',
    backgroundColor: color,
    borderColor: '',
    hoverTextColor: color,
    hoverBackgroundColor: '#fff',
    hoverBorderColor: color,
    hoverBoxShadow: ''
  }

  if (isWhite) {
    properties.textColor = Colors.primary_deep
    properties.backgroundColor = Colors.white
    properties.hoverTextColor = Colors.primary_deep
    properties.hoverBorderColor = Colors.grey_100
    properties.hoverBackgroundColor = Colors.grey_100
  }

  switch (variant) {
    case 'outlined':
      properties.textColor = isWhite ? Colors.primary_deep : color
      properties.backgroundColor = 'transparent'
      properties.hoverTextColor = isWhite ? Colors.primary_deep : color
      properties.hoverBorderColor = color
      properties.borderColor = color
      properties.hoverBoxShadow = `inset 0px 0px 0px 1px ${color}`
      break
    case 'contained':
    default:
      return properties
  }

  return properties
}

const setupBackgroundDependsVariant = (color: string, variant?: ButtonVariant) => {
  let properties
  const selectedColor = Colors[color as ButtonColor]
  const isWhite = color === 'white'

  switch (variant) {
    case 'contained':
    default:
      properties = setupVariantBackgroundColors('contained', selectedColor, isWhite)
      break
    case 'outlined':
      properties = setupVariantBackgroundColors('outlined', selectedColor, isWhite)
      break
  }

  return css`
    background: ${properties.backgroundColor};
    color: ${properties.textColor};
    border-color: ${properties.borderColor};
    :hover {
      background: ${properties.hoverBackgroundColor};
      color: ${properties.hoverTextColor};
      border-color: ${properties.hoverBorderColor};
      box-shadow: ${properties.hoverBoxShadow};
    }
  `
}

const setupSize = (size: ButtonSize) => {
  let padding = '1rem 4rem'

  switch (size) {
    case 'sm':
      padding = '.25rem 1rem'
      break
    case 'md':
    default:
      padding
  }
  return css`
    padding: ${padding};
  `
}

const setupDisable = (color?: ButtonColor, variant?: ButtonVariant) => {
  const hoverOnlyForContainedVariant =
    variant === 'contained'
      ? `
    &:disabled:hover {
      background: ${color ?? 'transparent'};
      color: #fff;
    }
  `
      : ''

  return css`
    :disabled {
      cursor: not-allowed;
      opacity: 0.35;
    }
    ${hoverOnlyForContainedVariant}
  `
}

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  border: 0;
  font-size: 0.75rem;
  line-height: 1.25;
  font-weight: 700;
  border-radius: 3rem;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.25s;
  ${(props) => {
    const properties = []

    if (props.size) {
      properties.push(setupSize(props.size))
    }

    if (props.color) {
      properties.push(setupBackgroundDependsVariant(props.color, props.variant))
    }

    if (props.disabled) {
      const pickedColor = (Colors[props.color as ButtonColor] as ButtonColor) || undefined

      properties.push(setupDisable(pickedColor, props.variant))
    }

    return properties
  }};
`

export default StyledButton
