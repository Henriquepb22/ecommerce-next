import Base from 'templates/Base'

import { HightlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGamesTitle: string
  newGames: GameCardProps[]
  mostPopularGamesTitle: string
  mostPopularHighlight: HightlightProps
  mostPopularGames: GameCardProps[]
  upcomingGamesTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighligth: HightlightProps
  freeGamesTitle: string
  freeGames: GameCardProps[]
  freeHighlight: HightlightProps
}

const Home = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGamesTitle,
  upcomingGames,
  upcomingHighligth,
  freeGamesTitle,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      games={mostPopularGames}
      highlight={mostPopularHighlight}
    />

    <Showcase
      title={upcomingGamesTitle}
      games={upcomingGames}
      highlight={upcomingHighligth}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
)

export default Home
