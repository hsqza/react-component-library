import styled, { css } from 'styled-components'
import { HTMLVariants, TypographyProps } from './Typography.types'

const h1 = css`
  font-size: 2.5rem;
  line-height: 1.5;
  background: lightgreen;
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
  border-bottom: 1px solid green;

  ${(props) => renderStyles(props.as as HTMLVariants)};
`

export default TypographyRoot
