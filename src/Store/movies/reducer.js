import {
  GET_MOVIES,
  GET_MOVIE,
  ADD_MOVIE,
  GET_MY_MOVIES,
  GET_MOVIE_RATINGS,
  RATE_MOVIE,
  LIKE_MOVIE,
  GET_MOVIE_LIKES
} from './actionTypes'

const initialState = {
  movies: [],
  movie: {},
  myMovies: [],
  rating: {
    average: undefined
  },
  likes: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload
      }
    case ADD_MOVIE:
      return {
        ...state,
        addMovie: action.payload
      }
    case GET_MY_MOVIES:
      return {
        ...state,
        myMovies: action.payload
      }
    case GET_MOVIE_RATINGS:
      return {
        ...state,
        rating: action.payload
      }
    case RATE_MOVIE:
      return {
        ...state,
        rateMovie: action.payload
      }
      case GET_MOVIE_LIKES:
        return {
          ...state,
          likes: action.payload
        }
      case LIKE_MOVIE:
        return {
          ...state,
          likeMovie: action.payload
        }
    default:
      return state
  }
}

export default reducer
