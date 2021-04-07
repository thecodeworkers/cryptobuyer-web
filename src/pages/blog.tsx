import React from 'react'
import { useSelector } from 'react-redux'
import { Blog } from '@components'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const BlogPage = () => {
  const { page: { aboutPage: { about } } } = useSelector((state: any) => state)
  return <Blog content={about} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('aboutPage'))
)

export default BlogPage
