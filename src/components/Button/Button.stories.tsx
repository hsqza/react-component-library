import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'LauncherReactComponentLibrary/components/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: 'Primary button',
  variant: 'contained',
  size: 'md',
  disabled: false
}
Primary.argTypes = {
  onClick: {
    type: 'function'
  },
  style: {
    type: 'function'
  },
  className: {
    type: 'function'
  }
}
