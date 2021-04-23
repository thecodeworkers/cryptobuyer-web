import { combineReducers } from 'redux'
import page from './page/reducer'
import loader from './loader/reducer'
import posts from './posts/reducer'
import post from './post/reducer'

const reducers = combineReducers({
  page,
  loader,
  posts,
  post
})

export default reducers
