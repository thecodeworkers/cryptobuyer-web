import { blog } from '@graphql/query'
import { GET_PAGES } from '@store/page/action-types'
import { actionObject, Filter } from '@utils'
import { GET_POSTS } from './action-types'

export const getPosts: any = () => async (dispatch, getState) => {

  const result: any = await blog()

  const { page } = getState()
  let data = page

  data['blogPage'] = result.blogPage

  const outstanding = Filter(result.posts, true, 'outstanding');

  dispatch(actionObject(GET_POSTS, { posts: result.posts, outstanding: outstanding }))
  dispatch(actionObject(GET_PAGES, data))
}
