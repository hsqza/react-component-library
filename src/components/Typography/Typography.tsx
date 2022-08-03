import React from 'react'
import TypographyRoot from './Typography.style'
import clsx from 'clsx'
import { DefaultVariantMapping, TypographyProps } from './Typography.types'

const Typography = React.forwardRef<HTMLElement, TypographyProps>((props, ref) => {
  const { variant = 'span', children, className, ...other } = props

  return (
    <TypographyRoot
      as={DefaultVariantMapping[variant]}
      ref={ref}
      {...other}
      className={clsx(TypographyRoot, className)}>
      {children}
    </TypographyRoot>
  )
})

Typography.displayName = 'Typography'

export default Typography
