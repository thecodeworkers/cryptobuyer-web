import { SET_POST } from './action-types'

export const setPost = (post: any) => {

  return {
    type: SET_POST,
    payload: post
  }
}
