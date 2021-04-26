import { combineReducers } from 'redux'
import page from './page/reducer'
import loader from './loader/reducer'
import post from './post/reducer'

const reducers = combineReducers({
  page,
  loader,
  post
})

export default reducers
