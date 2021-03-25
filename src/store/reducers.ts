import { combineReducers } from 'redux'
import page from './page/reducer'
import resource from './resource/reducer'

const reducers = combineReducers({
  page,
  resource,
})

export default reducers
