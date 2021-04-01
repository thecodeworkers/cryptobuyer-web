import React, { useRef } from 'react'
import { Navbar } from '@components'
import { SecondBanner, FirstBanner } from './elements'
import Head from 'next/head'
import PayCriptos from './elements/PayCriptos'

const ForYou = ({ content }) => {

  const banner = useRef();
  console.log(content)
  return (
    <div>
      <Head>
        <title>CryptoBuyer - Para Ti</title>
      </Head>
      <Navbar color='#FFFFFF' />
      <FirstBanner data={content?.mainBanner} reference={banner} />
      <div ref={banner}></div>
      <PayCriptos data={content?.secondBanner} />
      <SecondBanner data={content?.thirdBanner} />
    </div>
  )
}

export default ForYou
