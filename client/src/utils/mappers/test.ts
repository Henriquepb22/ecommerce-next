import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryGames_games } from 'graphql/generated/QueryGames'

import { bannerMapper, cartMapper, gamesMapper, highlightMapper } from '.'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      image: {
        url: '/image.jpeg'
      },
      title: 'Banner title',
      subtitle: 'Banner subtitle',
      button: {
        label: 'button label',
        link: 'button link'
      },
      ribbon: {
        text: 'ribbon text',
        color: 'primary',
        size: 'small'
      }
    } as QueryHome_banners

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: `http://localhost:1337/image.jpeg`,
        title: 'Banner title',
        subtitle: 'Banner subtitle',
        buttonLabel: 'button label',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there is no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should return the correct format when mapped', () => {
    const game = {
      id: '1',
      name: 'Game name',
      slug: 'gameslug',
      developers: [{ name: 'game developer' }],
      cover: { url: '/gamecover.jpeg' },
      price: 25
    } as QueryGames_games

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'Game name',
        slug: 'gameslug',
        developer: 'game developer',
        img: `http://localhost:1337/gamecover.jpeg`,
        price: 25
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should return the correct format when mapped', () => {
    const highlight = {
      title: 'Highlight title',
      subtitle: 'Highlight subtitle',
      background: {
        url: '/background.jpeg'
      },
      floatImage: {
        url: '/float.jpeg'
      },
      buttonLabel: 'highlight button',
      buttonLink: 'highlight link',
      alignment: 'left'
    } as QueryHome_sections_freeGames_highlight

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'Highlight title',
      subtitle: 'Highlight subtitle',
      backgroundImage: `http://localhost:1337/background.jpeg`,
      floatImage: `http://localhost:1337/float.jpeg`,
      buttonLabel: 'highlight button',
      buttonLink: 'highlight link',
      alignment: 'left'
    })
  })
})

describe('cartMapper()', () => {
  it('should return empty array if no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return the correct format when mapped', () => {
    const game = {
      id: '1',
      cover: {
        url: '/image.jpg'
      },
      name: 'game',
      price: 10
    } as QueryGames_games

    expect(cartMapper([game])).toStrictEqual([
      {
        id: '1',
        img: 'http://localhost:1337/image.jpg',
        title: 'game',
        price: '$10.00'
      }
    ])
  })
})
