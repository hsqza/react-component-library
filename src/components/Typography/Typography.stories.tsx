import React from 'react'
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react'
import Typography from './Typography'
import { DefaultVariantMapping, TypographyProps } from './Typography.types'

export default {
  title: 'LauncherReactComponentLibrary/components/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => {
  return <Typography {...args} />
}

const commonArgTypes:
  | Partial<ArgTypes<TypographyProps & React.RefAttributes<HTMLElement>>>
  | undefined = {
  as: {
    type: 'function'
  },
  style: {
    type: 'function'
  },
  className: {
    type: 'function'
  }
}

export const h1 = Template.bind({})
h1.args = {
  variant: DefaultVariantMapping.h1,
  children: 'Typography H1'
}

export const h2 = Template.bind({})
h2.args = {
  variant: DefaultVariantMapping.h2,
  children: 'Typography H2'
}

export const h3 = Template.bind({})
h3.args = {
  variant: DefaultVariantMapping.h3,
  children: 'Typography H3'
}

export const h4 = Template.bind({})
h4.args = {
  variant: DefaultVariantMapping.h4,
  children: 'Typography H4'
}

export const h5 = Template.bind({})
h5.args = {
  variant: DefaultVariantMapping.h5,
  children: 'Typography H5'
}

export const h6 = Template.bind({})
h6.args = {
  variant: DefaultVariantMapping.h6,
  children: 'Typography H6'
}

// export const subtitle1 = Template.bind({})
// subtitle1.args = {
//   variant: DefaultVariantMapping.subtitle1,
//   children: 'Typography subtitle1'
// }

// export const subtitle2 = Template.bind({})
// subtitle2.args = {
//   variant: DefaultVariantMapping.subtitle2,
//   children: 'Typography subtitle2'
// }

export const body1 = Template.bind({})
body1.args = {
  variant: 'body1',
  as: DefaultVariantMapping.body1,
  children: 'Typography body1'
}

export const body2 = Template.bind({})
body2.args = {
  variant: 'body2',
  as: DefaultVariantMapping.body2,
  children: 'Typography body2'
}

// export const p = Template.bind({})
// p.args = {
//   variant: DefaultVariantMapping.p,
//   children: 'Typography p'
// }

// export const span = Template.bind({})
// span.args = {
//   variant: DefaultVariantMapping.span,
//   children: 'Typography span'
// }

h1.argTypes = commonArgTypes
h2.argTypes = commonArgTypes
h3.argTypes = commonArgTypes
h4.argTypes = commonArgTypes
h5.argTypes = commonArgTypes
h6.argTypes = commonArgTypes
body1.argTypes = commonArgTypes
body2.argTypes = commonArgTypes
// subtitle1.argTypes = commonArgTypes
// subtitle2.argTypes = commonArgTypes
