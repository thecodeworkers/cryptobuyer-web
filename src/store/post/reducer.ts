import { GET_POST } from './action-types'
import { AnyAction } from 'redux'

const initialState = {
  post: []
}

const getPageReducer = (state = initialState, { type, payload }: AnyAction) => {

  switch (type) {
    case GET_POST:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default getPageReducer
