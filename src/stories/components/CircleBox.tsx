import React, { FC } from 'react'
import StyledCircleBox, { StyledContent } from './CircleBox.style'

export interface CircleBoxProps {
  name: string
  color?: string
  hideColorText?: boolean
}

const CircleBox: FC<CircleBoxProps> = ({ name, color, hideColorText }) => {
  return (
    <StyledCircleBox name={name} color={color}>
      <StyledContent>
        <span>{name}</span>
        {!hideColorText && <span>{color}</span>}
      </StyledContent>
    </StyledCircleBox>
  )
}

export default CircleBox
