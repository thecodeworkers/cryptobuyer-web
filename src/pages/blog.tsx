import React from 'react'
import { useSelector } from 'react-redux'
import { Blog } from '@components'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const BlogPage = () => {
  const { page: { posts } } = useSelector((state: any) => state)
  console.log(useSelector((state: any) => state))
  return <Blog content={posts} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('posts'))
)

export default BlogPage
