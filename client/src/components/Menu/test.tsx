import { screen, render, fireEvent } from 'utils/test-utils'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    const { container } = render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should handle the open/close mobile menu', () => {
    render(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    render(<Menu />)

    expect(screen.getByText(/sign in now/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    render(<Menu username="henrique" />)

    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)
    expect(screen.getAllByText(/my profile/i)).toHaveLength(2)
  })

  it('should not show sign ir or dropdownUser if loading', () => {
    render(<Menu username="henrique" loading />)

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/henrique/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
  })
})
