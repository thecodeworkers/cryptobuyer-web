import { useSelector } from 'react-redux'
import { Navbar, Team, MainAbout } from '@components'
import Head from 'next/head'

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

export default AboutUs
