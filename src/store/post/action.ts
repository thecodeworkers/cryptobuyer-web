import { GET_POST } from './action-types'

export const getPost = (post: any) => {

  return {
    type: GET_POST,
    payload: post
  }
}
