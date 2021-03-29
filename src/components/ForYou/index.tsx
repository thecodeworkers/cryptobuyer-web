import React from 'react'
import  Navbar from '../Navbar'
import { SecondBanner, FirstBanner } from './elements'
import Head from 'next/head'

const ForYou = ({ content }) => {

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Quienes Somos</title>
      </Head>
      <FirstBanner />
      <SecondBanner data={content?.secondBanner} />
    </div>
  )
}

export default ForYou
