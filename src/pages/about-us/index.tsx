import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from '@components'
import { MainAbout, Team } from './components'
import Head from 'next/head'

const AboutUs = () => {

  const { page: { aboutPage: { about } } } = useSelector((state: any) => state)

  return (
    <div>
      <Head>
        <title>CryptoBuyer - Quienes Somos</title>
      </Head>
      <Navbar color='#FFFFFF' />
      <MainAbout data={about} />
      <Team data={about?.secondBanner} />
    </div>
  )
}

export default AboutUs
