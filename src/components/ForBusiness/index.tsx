import React from 'react'
import  Navbar from '../Navbar'
import { SecondBanner } from './elements'
import Head from 'next/head'

const AboutUs = ({ content }) => {

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Quienes Somos</title>
      </Head>
      <Navbar color='#FFFFFF' />
      <SecondBanner data={content?.secondBanner} />
    </div>
  )
}

export default AboutUs
