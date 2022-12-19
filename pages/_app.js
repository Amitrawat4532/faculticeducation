import { useRouter } from 'next/router'
import { useEffect } from 'react';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {

  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Component {...pageProps} />
}

export default MyApp
