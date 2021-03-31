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
      <Navbar color='#262833' />
      <FirstBanner data={content?.mainBanner} />
      <SecondBanner data={content?.thirdBanner} content={content?.fourthBanner} />
    </div>
  )
}

export default ForBusiness
