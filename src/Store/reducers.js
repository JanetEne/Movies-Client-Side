import { combineReducers } from 'redux'
import movies from './movies/reducer'
import auth from './auth/reducer'
import alert from './alert/reducer'

export default combineReducers({
  alert, auth, movies
})
