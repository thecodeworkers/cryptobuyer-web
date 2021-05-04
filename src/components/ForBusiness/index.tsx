import React, { useRef } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FirstBanner, SecondBanner, ThirdBanner } from './elements'
import Head from 'next/head'

const ForBusiness = ({ content }) => {

  const banner = useRef()

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Tu Negocio</title>
      </Head>
      <Navbar color='#262833' />
      {content ? (<>
        <FirstBanner data={content?.mainBanner} content={content?.customers} reference={banner} />
         {/* <div ref={banner}>
          <SecondBanner data={content?.thirdBanner} />
        </div>
        <ThirdBanner data={content?.fourthBanner} /> */}
      </>) : null}
      <Footer />
    </div>
  )
}

export default ForBusiness
