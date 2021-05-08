import { AnyAction } from 'redux'
import { GET_POSTS, SET_POST } from './action-types'

const initialState = {
  posts: [],
  outstanding: [],
  post: {}
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, ...payload }
    case SET_POST:
      return { ...state, post: payload }
    default:
      return state
  }
}

export default pageReducer
