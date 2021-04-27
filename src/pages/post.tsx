import React from 'react'
import { Post } from '@components'
import { useRouter } from 'next/router'
import { wrapper } from '@store';
import { setPost } from '@store/actions';
import { useSelector } from 'react-redux';


const PostPage = () => {

  const { post: { post } } = useSelector((state: any) => state)

  return <Post post={post} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store, query }) => {
    const { id } = query;
    return store.dispatch(setPost(id))
  }
)

export default PostPage
