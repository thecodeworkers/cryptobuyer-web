import React from 'react'
import { useSelector } from 'react-redux'
import { ForYou } from '@components'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const ForYouPage = () => {
  const { page: { aboutPage: { about } } } = useSelector((state: any) => state)
  return <ForYou content={about} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('forYouPage'))
)

export default ForYouPage
