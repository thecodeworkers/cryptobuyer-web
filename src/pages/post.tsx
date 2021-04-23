import React from 'react'
import { useSelector } from 'react-redux'
import { Post } from '@components'
import { wrapper } from '@store'
import { getPosts } from '@store/actions'

const PostPage = () => {

  return <Post />
}

/* export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getPosts())
) */

export default PostPage
