import { combineReducers } from 'redux'
import page from './page/reducer'
import loader from './loader/reducer'
import post from './post/reducer'
import newsletter from './newsletter/reducer'

const reducers = combineReducers({
  page,
  loader,
  post,
  newsletter
})

export default reducers
