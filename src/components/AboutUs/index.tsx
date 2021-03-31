import React from 'react'
import  Navbar from '../Navbar'
import { FirstBanner, SecondBanner } from './elements'
import Head from 'next/head'

const AboutUs = ({ content }) => {
// console.log(content, "about us content");

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Quienes Somos</title>
      </Head>
      <Navbar color='#FFFFFF' />
      <FirstBanner data={content?.mainBanner}/>
      <SecondBanner data={content?.secondBanner} />
    </div>
  )
}

export default AboutUs
