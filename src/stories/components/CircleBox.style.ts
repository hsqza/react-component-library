import styled from 'styled-components'
import { CircleBoxProps } from './CircleBox'

const StyledCircleBox = styled.div<CircleBoxProps>`
  position: relative;
  width: 6rem;
  height: 6rem;
  margin: 2rem;
  border-radius: 50%;
  background: ${({ color }) => color};
  border: ${({ name }) => (name === 'white' ? '1px solid #000' : undefined)};
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
`

export default StyledCircleBox
