import React, { useCallback, useState } from 'react'
import { FirstBanner, SecondBanner, ThirdBanner, FourthBanner, MiddleBanner } from './elements'
import { scrollTo } from '@utils/common'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'

const ForYou = ({ content }) => {
  const { scrollReference: { forYouReference } } = useSelector((state: any) => state)
  const [ reference, setReference ] = useState()

  const payRef = useCallback((node) => {
    scrollingReference(node, 'pay')
    setReference(node)
  }, [forYouReference?.pay])

  const visaRef = useCallback((node) => {
    scrollingReference(node, 'visa')
  }, [forYouReference?.visa])

  const atmRef = useCallback((node) => {
    scrollingReference(node, 'atm')
  }, [forYouReference?.atm])

  const scrollingReference = (node, state) => {
    if(forYouReference?.current == state) {
      if(node) scrollTo(node)
    }
  }

  const scrollDown = () => scrollTo(reference)

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Para Ti</title>
      </Head>
      <Navbar color='#FFFFFF' />
      {(content) ? (<>
        <FirstBanner data={content?.mainBanner} reference={payRef} scrollMethod={scrollDown}/>
        <SecondBanner data={content?.secondBanner} reference={payRef || reference} />
        <MiddleBanner data={content?.customers}  />
        <ThirdBanner data={content?.thirdBanner} reference={visaRef} />
        <FourthBanner data={content?.fourthBanner} reference={atmRef}/>
        <Footer />
      </>) : null}
    </div>
  )
}

export default ForYou
