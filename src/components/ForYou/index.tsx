import React, { useRef } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FirstBanner, SecondBanner, ThirdBanner, FourthBanner } from './elements'
import Head from 'next/head'
import PayCriptos from './elements/PayCriptos'

const ForYou = ({ content }) => {

  const banner = useRef()

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Para Ti</title>
      </Head>
      <Navbar color='#FFFFFF' />
      {(content) ? (<>
        <FirstBanner data={content?.mainBanner} reference={banner} />
        <SecondBanner data={content?.secondBanner} />
        <ThirdBanner data={content?.thirdBanner} />
        <FourthBanner data={content?.fourthBanner} />
        <Footer />
      </>) : null}
    </div>
  )
}

export default ForYou
