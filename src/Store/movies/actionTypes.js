export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR'
export const GET_MOVIE = 'GET_MOVIE'
export const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR'
export const ADD_MOVIE = 'ADD_MOVIE'
export const ADD_MOVIE_ERROR = 'ADD_MOVIE_ERROR'
export const DELETE_MOVIE = 'DELETE_MOVIE'
export const DELETE_MOVIE_ERROR = 'DELETE_MOVIE_ERROR'
export const EDIT_MOVIE = 'EDIT_MOVIE'
export const EDIT_MOVIE_ERROR = 'EDIT_MOVIE_ERROR'
export const GET_MY_MOVIES = 'GET_MY_MOVIES'
export const GET_MY_MOVIES_ERROR = 'GET_MY_MOVIES_ERROR'
export const GET_MOVIE_RATINGS = 'GET_MOVIE_RATINGS'
export const GET_MOVIE_RATINGS_ERROR = 'GET_MOVIE_RATINGS_ERROR'
export const RATE_MOVIE = 'RATE_MOVIE'
export const RATE_MOVIE_ERROR = 'RATE_MOVIE_ERROR'

export const getMovies = (payload) => ({
  type: GET_MOVIES,
  payload
})

export const getMoviesError = () => ({
  type: GET_MOVIES_ERROR
})

export const getMovie = (payload) => ({
  type: GET_MOVIE,
  payload
})

export const getMovieError = () => ({
  type: GET_MOVIE_ERROR
})

export const addMovie = (payload) => ({
  type: ADD_MOVIE,
  payload
})

export const addMovieError = () => ({
  type: ADD_MOVIE_ERROR
})

export const deleteMovie = () => ({
  type: DELETE_MOVIE
})

export const deleteMovieError = () => ({
  type: DELETE_MOVIE_ERROR
})

export const editMovie = (payload) => ({
  type: EDIT_MOVIE,
  payload
})

export const editMovieError = () => ({
  type: EDIT_MOVIE_ERROR
})

export const getMyMovies = (payload) => ({
  type: GET_MY_MOVIES,
  payload
})

export const getMyMoviesError = () => ({
  type: GET_MY_MOVIES_ERROR
})

export const getMovieRatings = (payload) => ({
  type: GET_MOVIE_RATINGS,
  payload
})

export const getMovieRatingsError = () => ({
  type: GET_MOVIE_RATINGS_ERROR
})

export const rateMovie = (payload) => ({
  type: RATE_MOVIE,
  payload
})

export const ratingMovieError = () => ({
  type: RATE_MOVIE_ERROR
})
