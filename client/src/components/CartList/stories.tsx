import { Story, Meta } from '@storybook/react/types-6-0'
import CartList from '.'
import items from './mock'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    cartContextValue: {
      type: ''
    },
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

Default.args = {
  total: 'R$ 330,00',
  cartContextValue: { items }
}

export const WithButton: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)

WithButton.args = {
  total: 'R$ 330,00',
  cartContextValue: { items }
}

export const Loading: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)

Loading.args = {
  cartContextValue: { loading: true }
}

export const Empty: Story = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
