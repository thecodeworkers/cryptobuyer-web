import { useSelector } from 'react-redux'
import { AboutUs } from '@components'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const AboutUs = () => {

  const { page: { aboutPage: { about } } } = useSelector(state => state)

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Quienes Somos</title>
      </Head>
      <Navbar color='#FFFFFF' />
      <MainAbout data={about} />
      <Team data={about?.secondBanner} />
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('aboutPage'))
)

export default AboutUsPage
