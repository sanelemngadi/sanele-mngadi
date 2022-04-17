import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sanele Mngadi</title>
        <meta name="description" content="my portfolio website" />
        <link rel="icon" href="/assets/SMLOGO192.png" />

      </Head>
      <main>
        <Layout />
      </main>
    </div>
  )
}

export default Home
