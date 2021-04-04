import React, { useRef } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FirstBanner, SecondBanner } from './elements'
import Head from 'next/head'

const ForProfessional = ({ content }) => {

  const section = useRef()
  console.log(section)

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Para profesionales</title>
      </Head>
      <Navbar color='#FFFFFF' />
      {(content) && (<>
        <FirstBanner reference={section} />
        <SecondBanner />
        <Footer />
      </>)
      }
    </div>

  )
}

export default ForProfessional
