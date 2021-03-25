import { useSelector } from 'react-redux'
import { wrapper } from '../store'
import { Navbar, Footer, FirstBanner, Metrics, SecondBanner, CommercesSlider } from '../components'
import { getResources } from '../store/actions'
import Head from 'next/head'

const Home = () => {

  const { page: { homePage: { home } } } = useSelector(state => state)

console.log(home);

  return (
    <div>
      <Head>
        <title>CryptoBuyer</title>
      </Head>
      <Navbar />
      <FirstBanner data={home?.mainBanner} />
      <Metrics data={home?.counter} />
      <SecondBanner section={home?.publicityBanner} content={home?.secondBanner} />
      <CommercesSlider section={home?.allies} />

    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default Home
