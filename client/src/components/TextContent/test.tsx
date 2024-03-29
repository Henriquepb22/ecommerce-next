import { screen, render } from 'utils/test-utils'

import TextContent from '.'

const props = { title: 'Description', content: `<h1>Content</h1>` }

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    const { container } = render(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without title', () => {
    render(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
  })

  it('should render the correct text colors', () => {
    render(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', { name: /description/i })
      .parentElement

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })
})
