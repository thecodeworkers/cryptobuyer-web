import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useStore } from 'react-redux'
import { wrapper } from '@store'
import '@styles/globals.scss'
import Head from 'next/head';
import { Loader } from '@components'
import { useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {

  const { show } = useSelector((state: any)   => state.loader)
  const store: any = useStore()
  const router = useRouter()

  useEffect(() => {
    store.__persistor.persist()
  }, [])

  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    { show && <Loader /> }
    <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(WrappedApp)
