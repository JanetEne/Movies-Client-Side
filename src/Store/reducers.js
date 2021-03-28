import { combineReducers } from 'redux'
import movies from './movies/reducer'
import auth from './auth/reducer'
import isFetching from './isFetching/reducer'

export default combineReducers({
  movies, auth, isFetching
})
