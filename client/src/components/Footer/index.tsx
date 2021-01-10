import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading lineBottom lineColor="secondary" color="black" size="small">
          Contact us
        </Heading>
        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>
      <S.Column>
        <Heading lineBottom lineColor="secondary" color="black" size="small">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            rel="noopener, noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            rel="noopener, noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            rel="noopener, noreferrer"
            target="_blank"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            rel="noopener, noreferrer"
            target="_blank"
          >
            Facebook
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading lineBottom lineColor="secondary" color="black" size="small">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>
      <S.Column aria-labelledby="footer-contact">
        <Heading lineBottom lineColor="secondary" color="black" size="small">
          Location
        </Heading>
        <span>Lorem, ipsum dolor.</span>
        <span>Lorem, ipsum.</span>
        <span>Lorem ipsum dolor sit.</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2021 &copy; All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
