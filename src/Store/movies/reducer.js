import { GET_MOVIES, GET_MOVIE, ADD_MOVIE } from './actionTypes'

const initialState = {
  movies: [],
  movie: {},

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
    default:
      return state
  }
}

export default reducer
