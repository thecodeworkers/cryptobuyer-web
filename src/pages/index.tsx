import { useSelector } from 'react-redux'
import { wrapper } from '../store'
import { Navbar } from '../components'
import Head from 'next/head'

const Home = () => {

  const { page: { homePage: { home } } } = useSelector(state => state)

  return (
    <div>
      <Head>
        <title>CryptoBuyer</title>
      </Head>
      <Navbar />
      <div style={{backgroundColor: '#EFEFEF', width: '100%', height: '100vh', margin: 0, padding: 0}}>

      </div>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => { }
)

export default Home
