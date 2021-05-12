import React, { useRef, useEffect, useCallback } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FirstBanner, SecondBanner, ThirdBanner, FourthBanner, MiddleBanner } from './elements'
import Head from 'next/head'
import { scrollTo } from '../../utils/common'
import { useSelector } from 'react-redux'

const ForYou = ({ content }) => {

  const { scrollReference } = useSelector((state: any) => state)

  const payRef = useCallback((node) => {
    scrollingReference(node, 'pay')
  }, [])

  const visaRef = useCallback((node) => {
    scrollingReference(node, 'visa')
  }, [])

  const atmRef = useCallback((node) => {
    scrollingReference(node, 'atm')
  }, [])

  const scrollingReference = (node, state) => {
    if(scrollReference?.forYouReference == state) {
      if(node) scrollTo(node)
    }
  }

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Para Ti</title>
      </Head>
      <Navbar color='#FFFFFF' />
      {(content) ? (<>
        <FirstBanner data={content?.mainBanner} reference={payRef} />
        <SecondBanner data={content?.secondBanner} reference={payRef} />
        <MiddleBanner data={content?.customers}  />
        <ThirdBanner data={content?.thirdBanner} reference={visaRef} />
        <FourthBanner data={content?.fourthBanner} reference={atmRef}/>
        <Footer />
      </>) : null}
    </div>
  )
}

export default ForYou
