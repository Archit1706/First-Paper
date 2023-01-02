import '../styles/globals.css'


import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Papers from '../components/Papers'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />

    <Main />

    <Papers />

    <About />

    <Contact />

    <Footer />
    <Component {...pageProps} />
  </>
}

export default MyApp
