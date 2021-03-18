import { useSelector } from 'react-redux'
import { wrapper } from '../store'
import Head from 'next/head'

const Home = () => {

  const { page: { homePage: { home } } } = useSelector(state => state)

  return (
    <div>
      <Head>
        <title>CryptoBuyer</title>
      </Head>
      <p>Hola</p>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => { }
)

export default Home
