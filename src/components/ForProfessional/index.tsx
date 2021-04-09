import React, { useRef } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FirstBanner, SecondBanner, Referral } from './elements'
import Head from 'next/head'

const ForProfessional = ({ content }) => {

  const section = useRef()

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Para profesionales</title>
      </Head>
      <Navbar color='#FFFFFF' />
      {(content) && (<>
        <FirstBanner reference={section} data={content?.mainBanner}/>
        <div ref={section}>
          <Referral data={content?.secondBanner} />
        </div>
        <SecondBanner data={content?.thirdBanner} />
        <Footer />
      </>)
      }
    </div>

  )
}

export default ForProfessional
