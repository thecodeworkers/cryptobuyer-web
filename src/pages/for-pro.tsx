import React from 'react'
import { useSelector } from 'react-redux'
import { ForProfessional } from '@components'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const ForProfessionalPage = () => {
  const { page: { proPage: { for_pro } } } = useSelector((state: any) => state)
  console.log(for_pro)
  return <ForProfessional content={for_pro } />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('proPage'))
)

export default ForProfessionalPage
