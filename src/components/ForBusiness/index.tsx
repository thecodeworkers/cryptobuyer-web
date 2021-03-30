import React from 'react'
import  Navbar from '../Navbar'
import { FirstBanner, SecondBanner } from './elements'
import Head from 'next/head'

const ForBusiness = ({ content }) => {

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Tu Negocio</title>
      </Head>
      <Navbar color='#FFFFFF' />
      <FirstBanner data={content?.firstBanner} />
      <SecondBanner data={content?.secondBanner} />
    </div>
  )
}

export default ForBusiness
