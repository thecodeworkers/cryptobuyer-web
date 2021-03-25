import { useSelector } from 'react-redux'
import { Navbar, Team, MainAbout } from '../components'
import Head from 'next/head'

const AboutUs = () => {

  const { page: { aboutPage: { about } } } = useSelector(state => state)

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Quienes Somos</title>
      </Head>
      <Navbar />
      {/* <div style={{ backgroundColor: '#EFEFEF', width: '100%', height: '100vh', margin: 0, padding: 0 }}> */}
        <MainAbout data={about} />
        <Team data={about?.secondBanner} />
      {/* </div> */}
    </div>
  )
}

export default AboutUs
