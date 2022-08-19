import React, { FC } from 'react'
import { ComponentStory } from '@storybook/react'
import { Colors } from './colors'
import CircleBox from '../../stories/components/CircleBox'

const Box: FC = () => {
  const getColors = () =>
    Object.entries(Colors).map(([name, color]) => (
      <CircleBox key={name} name={name} color={color} />
    ))

  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{getColors()}</div>
}

export default {
  title: 'LauncherReactComponentLibrary/Colors',
  component: Box
}

const Template: ComponentStory<typeof Box> = () => <Box />

export const Palette = Template.bind({})
