import { LOADER } from './actions-types'
import { AnyAction } from 'redux'

const initialState = {
	show: false
}

 const setLoaderReducer = (state = initialState, { type, payload }: AnyAction) => {

  switch(type) {
    case LOADER:
    console.log('ENTER REDUCER', payload)
    return { ...state, show: payload }

    default:
    return state;
  }
}

export default setLoaderReducer
