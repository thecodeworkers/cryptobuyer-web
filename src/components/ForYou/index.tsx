import React, { useRef } from 'react'
import { Navbar } from '@components'
import { SecondBanner, FirstBanner } from './elements'
import Head from 'next/head'

const ForYou = ({ content }) => {

  const banner = useRef(null);

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Quienes Somos</title>
      </Head>
      <Navbar color='#FFFFFF' />
      <FirstBanner reference={banner}/>
      <div ref={banner}></div>
      <SecondBanner data={content?.secondBanner} />
    </div>
  )
}

export default ForYou
