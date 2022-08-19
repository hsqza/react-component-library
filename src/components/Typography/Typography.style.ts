import styled, { css } from 'styled-components'
import { TypographyProps, VariantKeyValues } from './Typography.types'
import '../../assets/fonts/Montserrat/font.css'

const h1 = css`
  font-family: 'Montserrat-Regular';
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 1.2;
`
const h2 = css`
  font-family: 'Montserrat-Medium';
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.2;
`
const h3 = css`
  font-family: 'Montserrat-Medium';
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.25;
`
const h4 = css`
  font-family: 'Montserrat-SemiBold';
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.2;
`
const h5 = css`
  font-family: 'Montserrat-Bold';
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25;
`
const h6 = css`
  font-family: 'Montserrat-Bold';
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.125;
`

const body1 = css`
  font-family: 'Montserrat-Regular';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
`
const body2 = css`
  font-family: 'Montserrat-Regular';
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.25;
`

const renderStyles = (type: VariantKeyValues) => {
  switch (type) {
    case 'h1':
      return h1
    case 'h2':
      return h2
    case 'h3':
      return h3
    case 'h4':
      return h4
    case 'h5':
      return h5
    case 'h6':
      return h6
    case 'body1':
      return body1
    case 'body2':
      return body2
    default:
      return ''
  }
}

const TypographyRoot = styled.span<TypographyProps>`
  margin: 0;
  ${(props) => renderStyles(props.variant)};
`

export default TypographyRoot
