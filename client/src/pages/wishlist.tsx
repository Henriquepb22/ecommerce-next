import { GetServerSidePropsContext } from 'next'

import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import gamesMock from 'components/GameCardSlider/mock'
import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()
  const session = await protectedRoutes(ctx)

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
      session
    }
  }
}
