import { useSelector } from 'react-redux'
import { wrapper } from '../store'
import { Navbar, FirstBanner } from '../components'
import { getResources } from '../store/actions'
import Head from 'next/head'

const Home = () => {

  const { page: { homePage: { home } } } = useSelector(state => state)
  return (
    <div>
      <Head>
        <title>CryptoBuyer</title>
      </Head>
      <Navbar />
      <FirstBanner data={home?.mainBanner}/>
      <div style={{backgroundColor: '#EFEFEF', width: '100%', height: '100vh', margin: 0, padding: 0}}>

      </div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default Home
