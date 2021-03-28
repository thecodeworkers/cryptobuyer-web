import React from 'react'
import  Navbar from '../Navbar'
import { FirstBanner, SecondBanner } from './elements'
import Head from 'next/head'

const AboutUs = ({ content }) => {

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Quienes Somos</title>
      </Head>
      <Navbar color='#FFFFFF' />
      <FirstBanner data={content?.mainBanner}  subtitle={content?.subtitle}/>
      <SecondBanner data={content?.secondBanner} />
    </div>
  )
}

export default AboutUs