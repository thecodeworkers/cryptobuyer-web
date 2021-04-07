import React, { useRef } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FirstBanner, Referral } from './elements'
import Head from 'next/head'

const ForProfessional = ({ content }) => {

  const section = useRef()

  console.log(content)
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
      </>)
      }
    </div>

  )
}

export default ForProfessional
