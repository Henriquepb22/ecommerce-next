import { GetServerSidePropsContext } from 'next'

import OrdersList, { OrdersListProps } from 'components/OrdersList'
import protectedRoutes from 'utils/protected-routes'
import ordersMock from 'components/OrdersList/mock'
import Profile from 'templates/Profile'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx)

  return {
    props: {
      items: ordersMock,
      session
    }
  }
}
