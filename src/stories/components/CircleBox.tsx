import React, { FC } from 'react'
import { Typography } from '../../components'
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
        <Typography variant="body2">{name}</Typography>
        {!hideColorText && <Typography variant="body2">{color}</Typography>}
      </StyledContent>
    </StyledCircleBox>
  )
}

export default CircleBox
