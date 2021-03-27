import { useSelector } from 'react-redux'
import { wrapper } from '@store'
import { getResources } from '@store/actions'
import Head from 'next/head'
import {
  Navbar,
  Footer, FirstBanner,
  Metrics,
  ThirdBanner,
  SecondBanner,
  CommercesSlider,
  Partnership
 } from '@components'

const Home = () => {

  const { page: { homePage: { home } } } = useSelector(state => state)

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
      <ThirdBanner data={home?.thirdBanner} />
      <Partnership data={home?.patnership} />
      <Footer />
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default Home
