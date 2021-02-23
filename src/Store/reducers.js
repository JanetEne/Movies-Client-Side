import { combineReducers } from 'redux'
import movies from './movies/reducer'
import auth from './auth/reducer'

export default combineReducers({
  movies, auth
})
