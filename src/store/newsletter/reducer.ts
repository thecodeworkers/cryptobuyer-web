import { AnyAction } from 'redux'
import { SUBSCRIBE_USER } from './action-types'

const initialState = {
  userSubscribe: false
}

const newsletterReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SUBSCRIBE_USER:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default newsletterReducer
