import { GET_MOVIES, GET_MOVIE, ADD_MOVIE, ADD_A_USER } from './actionTypes'

const initialState = {
  movies: [],
  movie: {},
  user: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      }
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      }
      case ADD_MOVIE:
      return {
        ...state,
        addMovie: action.payload,
      }
      case ADD_A_USER:
      return {
        ...state,
        addUser: action.payload,
      }
    default:
      return state
  }
}

export default reducer
