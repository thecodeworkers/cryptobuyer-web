import { combineReducers } from 'redux'
import page from './page/reducer'
import loader from './loader/reducer'

const reducers = combineReducers({
  page,
  loader
})

export default reducers
