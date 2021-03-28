import React from 'react'
import { useSelector } from 'react-redux'
import { AboutUs } from '@components'

const AboutUsPage = () => {
  const { page: { aboutPage: { about } } } = useSelector((state: any) => state)
  return <AboutUs content={about} />
}

export default AboutUsPage
