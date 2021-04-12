import { useSelector } from 'react-redux'
import { wrapper } from '@store'
import { getPages } from '@store/actions'
import { Home } from '@components'

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
  ({ store }) => store.dispatch(getPages('homePage'))
)

export default Home
