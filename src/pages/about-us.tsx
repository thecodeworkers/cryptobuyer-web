import React from 'react'
import { useSelector } from 'react-redux'
import { AboutUs } from '@components'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const AboutUsPage = () => {

  const state = useSelector(state => state)

  console.log(state)

  const { page: { aboutPage: { about } } } = useSelector((state: any) => state)
  return <AboutUs content={about} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('aboutPage'))
)

export default AboutUsPage
