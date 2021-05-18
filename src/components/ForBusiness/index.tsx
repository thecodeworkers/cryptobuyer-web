import React, { useCallback, useState, } from 'react'
import { FirstBanner, SecondBanner, ThirdBanner } from './elements'
import { scrollTo } from '@utils/common'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Head from 'next/head'

const ForBusiness = ({ content }) => {
  const { scrollReference: { forBusinessReference } } = useSelector((state: any) => state)
  const [reference, setReference ] = useState(null)

  const payRef = useCallback((node) => {
    scrollingReference(node, 'pay')
    setReference(node)
  }, [forBusinessReference?.pay])

  const atmRef = useCallback((node) => {
    scrollingReference(node, 'atm')
  }, [forBusinessReference?.atm])

  const scrollingReference = (node, state) => {
    if(forBusinessReference?.current == state) {
      if(node) scrollTo(node)
    }
  }

  const scrollDown = () => scrollTo(reference)
  return (
    <div>
      <Head>
        <title>CryptoBuyer - Tu Negocio</title>
      </Head>
      <Navbar color='#262833' />
      {content ? (<>
        <FirstBanner data={content?.mainBanner} content={content?.customers} scrollMethod={scrollDown} />
         <div ref={payRef || reference}>
          <SecondBanner data={content?.thirdBanner} />
        </div>
        <ThirdBanner data={content?.fourthBanner} reference={atmRef} />
      </>) : null}
      <Footer />
    </div>
  )
}

export default ForBusiness
