import React, { useRef, useCallback } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FirstBanner, SecondBanner, Referral } from './elements'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { scrollTo } from '../../utils/common'

const ForProfessional = ({ content }) => {

  const { scrollReference } = useSelector((state: any) => state)
  const section = useRef()

  const secondBanner = useCallback((node) => {
    scrollingReference(node, 'second')
  }, [])

  const scrollingReference = (node, state) => {
    if(scrollReference?.forProReference == state) {
      if(node) scrollTo(node)
    }
  }

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
        <SecondBanner data={content?.thirdBanner} reference={secondBanner}/>
        <Footer />
      </>)
      }
    </div>

  )
}

export default ForProfessional
