export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR'
export const GET_MOVIE = 'GET_MOVIE'
export const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR'
export const ADD_MOVIE = 'ADD_MOVIE'
export const ADD_MOVIE_ERROR = 'ADD_MOVIE_ERROR'
export const DELETE_MOVIE = 'DELETE_MOVIE'
export const DELETE_MOVIE_ERROR = 'DELETE_MOVIE_ERROR'


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
