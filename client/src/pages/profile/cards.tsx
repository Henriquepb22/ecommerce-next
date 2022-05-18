import { GetServerSidePropsContext } from 'next'

import CardsList, { CardsListProps } from 'components/CardsList'
import cardsMock from 'components/PaymentOptions/mock'
import protectedRoutes from 'utils/protected-routes'
import Profile from 'templates/Profile'

export default function Cards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx)

  return {
    props: {
      cards: cardsMock,
      session
    }
  }
}
