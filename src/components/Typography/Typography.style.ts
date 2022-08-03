import styled, { css } from 'styled-components'
import { HTMLVariants, TypographyProps } from './Typography.types'

const h1 = css`
  font-size: 2.5rem;
  line-height: 1.5;
`
const h2 = css`
  font-size: 2rem;
  line-height: 1.45;
`

const renderStyles = (type: HTMLVariants) => {
  switch (type) {
    case 'h1':
      return h1
    case 'h2':
      return h2
    default:
      return ''
  }
}

const TypographyRoot = styled.span<TypographyProps>`
  margin: 0;

  background: ${(props) => {
    if (props.as === 'h1') {
      return 'lightblue'
    } else if (props.as === 'h2') {
      return 'lightblue'
    }
    return undefined
  }};
`
// ${(props) => renderStyles(props.as as HTMLVariants)};

export default TypographyRoot
