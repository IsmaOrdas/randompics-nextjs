import '../styles/globals.scss';
import AppLayout from '../componentes/AppLayout';

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
