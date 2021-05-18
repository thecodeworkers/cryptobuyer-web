import { AnyAction } from 'redux'
import { SET_REFERENCE } from './action-types'

const initialState = {
  forYouReference: {
    current: '',
    visa: false,
    pay: false,
    atm: false
  },
  forBusinessReference: {
    current: '',
    pay: false,
    atm: false
  },
  forProReference: {
    current: '',
    second: false
  }
}

const pageReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_REFERENCE:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default pageReducer
