import React, { FC } from 'react'
import { ComponentStory } from '@storybook/react'
import { Gradients } from './gradients'
import CircleBox from '../../stories/components/CircleBox'

const Box: FC = () => {
  const getGradients = () =>
    Object.entries(Gradients).map(([name, color]) => {
      return <CircleBox key={name} name={name} color={color} hideColorText />
    })

  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{getGradients()}</div>
}

export default {
  title: 'LauncherReactComponentLibrary/Gradients',
  component: Box
}

const Template: ComponentStory<typeof Box> = () => <Box />

export const Palette = Template.bind({})
