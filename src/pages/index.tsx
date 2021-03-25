import { useSelector } from 'react-redux'
import { wrapper } from '../store'
import { Navbar, Footer, FirstBanner, Metrics, GeneralButton, ThirdBanner, SecondBanner, CommercesSlider, Affiliates } from '../components'
import { getResources } from '../store/actions'
import Head from 'next/head'

const Home = () => {

  const { page: { homePage: { home } } } = useSelector(state => state)

  console.log(home)

  return (
    <div>
      <Head>
        <title>CryptoBuyer</title>
      </Head>
      <Navbar />
      <FirstBanner data={home?.mainBanner} />
      <Metrics data={home?.counter} />
      <ThirdBanner data={home?.thirdBanner} />
      {/* <Affiliates data={home?.allies}/> */}
      {/* <GeneralButton height={3.125} backgroundColor='#212121' textColor='#ffffff' text='click!' /> */}
      <SecondBanner section={home?.publicityBanner} content={home?.secondBanner} />
      <CommercesSlider section={home?.allies} />

    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default Home
