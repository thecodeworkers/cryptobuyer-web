import React from 'react'
import { useSelector } from 'react-redux'
import { ForBusiness } from '@components'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const ForBusinessPage = () => {
  const { page: { forBusinessPage: { forBusiness } } } = useSelector((state: any) => state)
  return <ForBusiness content={forBusiness} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('forBusinessPage'))
)

export default ForBusinessPage
