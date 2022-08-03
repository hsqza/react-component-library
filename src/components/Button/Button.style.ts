import styled from 'styled-components'
import { ButtonProps } from './Button.types'

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 4px;
  display: inline-block;
  padding: ${(props) =>
    props.size === 'sm' ? '8px 16px' : props.size === 'md' ? '12px 24px' : '18px 16px'};
  color: ${(props) => (props.primary ? 'white' : 'aquamarine')};
  background-color: ${(props) => (props.primary ? 'blue' : 'green')};
  opacity: ${(props) => (props.disabled ? 0.35 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgreen')};
  }
`
export default StyledButton
