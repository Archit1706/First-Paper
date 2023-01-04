import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Signup from './Signup'
import Login from './Login'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    {/* <Signup /> */}
    {/* <Login /> */}
    <Component {...pageProps} />
  </>
}

export default MyApp
