import React, { useRef } from 'react'
import Navbar from '../Navbar'
import { FirstBanner, SecondBanner } from './elements'
import Head from 'next/head'
import { Footer } from '@components'

const AboutUs = ({ content }) => {

  const banner = useRef()

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Quienes Somos</title>
      </Head>
      <Navbar color='#FFFFFF' />
      <FirstBanner data={content?.mainBanner} reference={banner} />
      <div ref={banner}>
        <SecondBanner data={content?.secondBanner} />
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
