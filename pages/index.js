import Head from 'next/head'

import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Papers from '../components/Papers'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>First Paper</title>
        <meta name="description" content="Research Paper Recommender System" />
        <link rel="icon" href="/favicon2.png" />
      </Head>

      <Navbar />

      <Main />

      <Papers />

      <About />

      <Contact />
      
      <Footer />

    </div>
  )
}
