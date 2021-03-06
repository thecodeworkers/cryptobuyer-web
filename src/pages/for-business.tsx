import React from 'react'
import { useSelector } from 'react-redux'
import { ForBusiness } from '@components'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const ForBusinessPage = () => {
  const { page: { forBusinessPage: { for_business } } } = useSelector((state: any) => state)

  return <ForBusiness content={for_business} />
}

export const getStaticProps = wrapper.getStaticProps(
  ({ store }) => store.dispatch(getPages('forBusinessPage'))
)

export default ForBusinessPage
