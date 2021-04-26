import React from 'react'
import { Post } from '@components'
import { useRouter } from 'next/router'


const PostPage = () => {

  const router = useRouter();

  const { id } = router.query;

  return <Post id={id} />
}

export default PostPage
