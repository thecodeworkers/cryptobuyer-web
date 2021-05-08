import React from 'react'
import { useSelector } from 'react-redux'
import { ForProfessional } from '@components'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const ForProfessionalPage = () => {
  const { page: { proPage: { pro } } } = useSelector((state: any) => state)

  return <ForProfessional content={pro} />
}

export const getStaticProps = wrapper.getStaticProps(
  ({ store }) => store.dispatch(getPages('proPage'))
)

export default ForProfessionalPage
