import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HightlightProps } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: item
} as Meta

export const Default: Story<HightlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HightlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
