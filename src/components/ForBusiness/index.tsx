import React from 'react'
import  Navbar from '../Navbar'
import { SecondBanner, ThirdBanner } from './elements'
import Head from 'next/head'

const ForBusiness = ({ content }) => {


  return (
    <div>
      <Head>
        <title>CryptoBuyer - Quienes Somos</title>
      </Head>
      <Navbar color='#262833' />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <SecondBanner data={content?.thirdBanner}  />
      <ThirdBanner data={content?.fourthBanner}  />
    </div>
  )
}

export default ForBusiness
