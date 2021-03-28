import React from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {
  FirstBanner,
  Metrics,
  ThirdBanner,
  SecondBanner,
  CommercesSlider,
  Partnership
} from './elements'

const Home = ({ content }) => {
  return (
    <div>
      <Head>
        <title>CryptoBuyer</title>
      </Head>
      <Navbar />
      <FirstBanner data={content?.mainBanner} />
      <Metrics data={content?.counter} />
      <SecondBanner data={content?.publicityBanner} content={content?.secondBanner} />
      <CommercesSlider data={content?.allies} />
      <ThirdBanner data={content?.thirdBanner} />
      <Partnership data={content?.patnership} />
      <Footer />
    </div>
  )
}

export default Home
