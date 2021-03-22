import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  beforeEach(() => {
    renderWithTheme(<UserDropdown username="Henrique" />)
  })

  it('should render the username', () => {
    expect(screen.getByText(/henrique/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    userEvent.click(screen.getByText(/henrique/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
