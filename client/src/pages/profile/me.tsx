import { GetServerSidePropsContext } from 'next'

import { QueryProfileMe } from 'graphql/generated/QueryProfileMe'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import protectedRoutes from 'utils/protected-routes'
import FormProfile, { FormProfileProps } from 'components/FormProfile'
import { initializeApollo } from 'utils/apollo'
import Profile from 'templates/Profile'

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  })

  return {
    props: { session, username: data.me?.username, email: data.me?.email }
  }
}
