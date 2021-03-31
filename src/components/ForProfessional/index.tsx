import React, { useRef } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FirstBanner } from './elements'
import Head from 'next/head'

const ForProfessional = ({ content }) => {

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Para profesionales</title>
      </Head>
      <Navbar color='#FFFFFF' />
      {(content) && (<>
        <FirstBanner />
      </>)
      }
    </div>

  )
}

export default ForProfessional
