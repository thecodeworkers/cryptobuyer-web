import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { SecondBanner, ThirdBanner } from './elements'
import Head from 'next/head'

const ForBusiness = ({ content }) => {


  return (
    <div>
      <Head>
        <title>CryptoBuyer - Quienes Somos</title>
      </Head>
      <Navbar color='#262833' />
      {content ? (<>

      <SecondBanner data={content?.thirdBanner}  />
      <ThirdBanner data={content?.fourthBanner}  />
      </>) : null}
      <Footer />
    </div>
  )
}

export default ForBusiness
