import React from 'react'
import { useSelector } from 'react-redux'
import { Blog } from '@components'
import { wrapper } from '@store'
import { getPages } from '@store/actions'

const BlogPage = () => {
  const { page: { posts: { posts } } } = useSelector((state: any) => state)
  console.log(posts)
  return <Blog content={posts} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPages('posts'))
)

export default BlogPage
