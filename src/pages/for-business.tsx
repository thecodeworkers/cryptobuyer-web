import React from 'react'
import { useSelector } from 'react-redux'
import { ForBusiness } from '@components'

const ForBusinessPage = () => {
  const { page: { aboutPage: { about } } } = useSelector((state: any) => state)
  return <ForBusiness content={about} />
}

export default ForBusinessPage
