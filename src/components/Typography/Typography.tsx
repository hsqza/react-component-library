import React from 'react'
import TypographyRoot from './Typography.style'
import { DefaultVariantMapping, TypographyProps } from './Typography.types'

const Typography = React.forwardRef<HTMLElement, TypographyProps>((props, ref) => {
  const { variant = 'span', children, ...other } = props

  return (
    <TypographyRoot
      as={DefaultVariantMapping[variant]}
      variant={variant}
      data-test={variant}
      ref={ref}
      {...other}>
      {children}
    </TypographyRoot>
  )
})

Typography.displayName = 'Typography'

export default Typography
