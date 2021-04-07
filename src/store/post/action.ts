
import { resource } from '@graphql/query'
import { actionObject, Filter } from '@utils'
import { GET_POSTS } from './action-types'

export const getPosts: any = () => async (dispatch, getState) => {

  const result: any = await resource('posts')
  const outstanding = Filter(result, true, 'outstanding');

  console.log(outstanding)

  dispatch(actionObject(GET_POSTS, { posts: result, outstanding: outstanding }))
}
