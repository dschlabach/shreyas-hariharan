import Layout from 'components/Layout'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shreyas Hariharan</title>
        <meta property="og:title" content="Shreyas Hariharan" />
        <meta property="twitter:title" content="Shreyas Hariharan" />
        <meta property="og:site_name" content="Shreyas Hariharan" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
