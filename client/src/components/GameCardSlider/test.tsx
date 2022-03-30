import 'match-media-mock'
import { screen, render } from 'utils/test-utils'

import gamesMock from './mock'
import GameCardSlider from '.'

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = render(<GameCardSlider items={gamesMock} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    render(<GameCardSlider items={gamesMock} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
