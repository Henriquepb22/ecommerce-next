import Highlight, { HightlightProps } from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HightlightProps
  games?: GameCardProps[]
  color?: 'black' | 'white'
}

const Showcase = ({
  title,
  highlight,
  games,
  color = 'white'
}: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
)

export default Showcase
