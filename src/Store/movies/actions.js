import {
  getMovies,
  getMoviesError,
  getMovie,
  getMovieError,
  addMovie,
  addMovieError,
  deleteMovie,
  deleteMovieError
} from './actionTypes'
import axios from 'axios'

export const fetchMovies = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/movies`)
    dispatch(getMovies(res.data))
  } catch (e) {
    dispatch(getMoviesError())
  }
}

export const fetchMovie = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/movie/${id}`)
    dispatch(getMovie(res.data))
  } catch (e) {
    dispatch(getMovieError())
  }
}

export const postMovie = (newMovie) => async (dispatch) => {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ2YW5lc3NhIiwibGFzdE5hbWUiOiJPZ2VueWkiLCJlbWFpbCI6InZhbmVAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTYxMDQ4MjIyOX0.M9MqrGBuY9Rk8yMk3qK7_dgXosvjoih9jOAb_rzyF7U'
    const header = {
      Authorization: `Bearer ${token}`
    }
    const res = await axios.post(
      `http://localhost:8080/api/v1/movies`,
      newMovie,
      header
    )
    dispatch(addMovie(res.data))
  } catch (e) {
    dispatch(addMovieError())
  }
}

export const removeMovie = (id, history) => async (dispatch) => {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ2YW5lc3NhIiwibGFzdE5hbWUiOiJPZ2VueWkiLCJlbWFpbCI6InZhbmVAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTYxMDQ4MjIyOX0.M9MqrGBuY9Rk8yMk3qK7_dgXosvjoih9jOAb_rzyF7U'
    const header = {
      Authorization: `Bearer ${token}`
    }
    const res = await axios.delete(`http://localhost:8080/api/v1/movies/${id}`, header)
    dispatch(deleteMovie())
    history ? history.push('/movies') :  window.location.reload()
  } catch (e) {
    dispatch(deleteMovieError())
  }
}
