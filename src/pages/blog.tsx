import React from 'react'
import { useSelector } from 'react-redux'
import { Blog } from '@components'
import { wrapper } from '@store'
import { getPosts } from '@store/actions'

const BlogPage = () => {
  const { post: { posts, outstanding }, page: { blogPage } } = useSelector((state: any) => state)
  return <Blog content={{posts, outstanding, blogPage}} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPosts())
)

export default BlogPage
