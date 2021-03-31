import React, { useRef } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FirstBanner } from './elements'
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
        <FirstBanner reference={section} />
        <div ref={section}></div>

      </>)
      }
    </div>

  )
}

export default ForProfessional
