import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import postReducer from './postReducer'

export default combineReducers({
  posts: postsReducer,
  post: postReducer
})