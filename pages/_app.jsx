import '../styles/globals.css';
import  AppContext  from '../components/Menu';
function MyApp({ Component, pageProps }) {

  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  )
}

export default MyApp
