import { SET_POST } from './action-types'
import { AnyAction } from 'redux'

const initialState = {
  post: []
}

const setPageReducer = (state = initialState, { type, payload }: AnyAction) => {

  switch (type) {
    case SET_POST:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default setPageReducer
