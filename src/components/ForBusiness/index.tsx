import React, { useCallback, useState, } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FirstBanner, SecondBanner, ThirdBanner } from './elements'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { scrollTo } from '../../utils/common'

const ForBusiness = ({ content }) => {

  const { scrollReference } = useSelector((state: any) => state)
  const [reference, setReference ] = useState(null)

  const payRef = useCallback((node) => {
    scrollingReference(node, 'pay')
    setReference(node)
  }, [])

  const atmRef = useCallback((node) => {
    scrollingReference(node, 'atm')
  }, [])

  const scrollingReference = (node, state) => {
    if(scrollReference?.forBusinessReference == state) {
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
