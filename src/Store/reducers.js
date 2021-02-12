import { combineReducers } from 'redux'
import movies from './movies/reducer'
import auth from './auth/reducer'
import usersMovies from './userMovies/reducer'

export default combineReducers({
  movies, auth, usersMovies
})
