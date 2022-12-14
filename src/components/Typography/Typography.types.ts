import { ComponentInterface } from '../component.types'

export type HTMLVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export enum DefaultVariantMapping {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  subtitle1 = 'h6',
  subtitle2 = 'h6',
  body1 = 'p',
  body2 = 'p',
  p = 'p',
  span = 'span'
}

export type VariantKeyValues = keyof typeof DefaultVariantMapping

export interface TypographyProps extends ComponentInterface {
  as?: HTMLVariants
  variant: VariantKeyValues
}
