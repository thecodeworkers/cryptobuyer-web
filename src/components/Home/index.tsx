import React from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {
  FirstBanner,
  Metrics,
  ThirdBanner,
  SecondBanner,
  Partnership
} from './elements'

const Home = ({ content }) => {
  return (
    <div>
      <Head>
        <title>CryptoBuyer</title>
      </Head>
      <Navbar />
      {content ? (<>
        <FirstBanner data={content?.mainBanner} />
        <Metrics data={content?.counter} />
        <SecondBanner data={content?.publicityBanner} content={content?.secondBanner} slider={content?.allies} />
        <ThirdBanner data={content?.thirdBanner} />
        <Partnership data={content?.patnership} />
        </>) : null}
        <Footer />


    </div>
  )
}

export default Home
