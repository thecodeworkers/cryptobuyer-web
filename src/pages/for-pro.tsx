import React from 'react'
import { useSelector } from 'react-redux'
import { ForProfessional } from '@components'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const ForProfessionalPage = () => {
  const { page: { forBusinessPage: { for_business } } } = useSelector((state: any) => state)
  return <ForProfessional content={for_business} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('forBusinessPage'))
)

export default ForProfessionalPage
