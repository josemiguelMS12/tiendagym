import '../styles/globals.css'
import { TiendaProvider } from '../context/TiendaProvider'

function MyApp({ Component, pageProps }) {
  return(
    <TiendaProvider>
      <Component {...pageProps} />
    </TiendaProvider>


  )
}

export default MyApp
