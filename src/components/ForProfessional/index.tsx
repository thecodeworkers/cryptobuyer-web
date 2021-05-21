import React, { useRef, useCallback } from 'react'
import { FirstBanner, SecondBanner, Referral } from './elements'
import { useSelector } from 'react-redux'
import { scrollTo } from '@utils/common'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Head from 'next/head'

const ForProfessional = ({ content }) => {
  const { scrollReference: { forProReference } } = useSelector((state: any) => state)
  const section = useRef()

  const heroRef = useCallback((node) => {
    scrollingReference(node, 'hero')
  }, [forProReference?.hero])

  const secondBanner = useCallback((node) => {
    scrollingReference(node, 'second')
  }, [forProReference?.second])

  const scrollingReference = (node, state) => {
    if(forProReference?.current == state) {
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
        <FirstBanner mainRef={heroRef} reference={section} data={content?.mainBanner}/>
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
