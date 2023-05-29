import Layout from 'components/Layout'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Shreyas Hariharan</title>
        <meta property="og:title" content="Shreyas Hariharan" key="title" />
        <meta property="twitter:title" content="Shreyas Hariharan" key="title" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
