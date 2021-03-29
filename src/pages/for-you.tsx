import React from 'react'
import { useSelector } from 'react-redux'
import { ForYou } from '@components'

const ForYouPage = () => {
  const { page: { aboutPage: { about } } } = useSelector((state: any) => state)
  return <ForYou content={about} />
}

export default ForYouPage
