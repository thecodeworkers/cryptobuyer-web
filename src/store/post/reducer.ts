import { AnyAction } from 'redux'
import { GET_POSTS } from './action-types'

const initialState = {
  posts: [],
  outstanding: []
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default pageReducer
