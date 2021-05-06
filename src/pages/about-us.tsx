import React from 'react'
import { useSelector } from 'react-redux'
import { AboutUs } from '@components'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const AboutUsPage = () => {
  const { page: { aboutPage: { about } } } = useSelector((state: any) => state)

  return <AboutUs content={about} />
}

export const getStaticProps = wrapper.getStaticProps(
  ({ store }) => store.dispatch(getPages('aboutPage'))
)

export default AboutUsPage
