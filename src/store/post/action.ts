import { blog, resource } from '@graphql/query'
import { GET_PAGES } from '@store/page/action-types'
import { actionObject, Filter } from '@utils'
import { GET_POSTS, SET_POST } from './action-types'

export const getPosts: any = () => async (dispatch, getState) => {

  const result: any = await blog()

  const { page } = getState()
  let data = page

  data['blogPage'] = result.blogPage

  const outstanding = Filter(result.posts, true, 'outstanding');

  dispatch(actionObject(GET_POSTS, { posts: result.posts, outstanding: outstanding }))
  dispatch(actionObject(GET_PAGES, data))
}

export const setPost: any = (id) => async (dispatch) => {
  const result: any = await resource('post', id)
  dispatch(actionObject(SET_POST, result))
}

