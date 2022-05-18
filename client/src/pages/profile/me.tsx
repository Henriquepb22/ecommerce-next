import { GetServerSidePropsContext } from 'next'

import protectedRoutes from 'utils/protected-routes'
import FormProfile from 'components/FormProfile'
import Profile from 'templates/Profile'

export default function Me() {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx)

  return {
    props: { session }
  }
}
