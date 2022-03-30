import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { CartProvider } from 'hooks/use-cart'
import { AppProps } from 'next/app'

import { useApollo } from 'utils/apollo'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  // Cache from hydrated pages
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Head>
            <title>Won Games</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="The best Game Stores in the world"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
