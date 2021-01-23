import {
  getMovies,
  getMoviesError,
  getMovie,
  getMovieError,
  addMovie,
  addMovieError,
  deleteMovie,
  deleteMovieError,
  editMovie,
  editMovieError,
  loginUser,
  loginUserError
} from './actionTypes'
import axios from 'axios'

const apiUrl = "http://localhost:8080/api/v1" //process.env.REACT_APP_API_URL
console.log(apiUrl)

export const fetchMovies = () => async (dispatch) => {
  try {
    const res = await axios.get(`${apiUrl}/movies`)
    dispatch(getMovies(res.data))
  } catch (e) {
    dispatch(getMoviesError())
  }
}

export const fetchMovie = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiUrl}/movie/${id}`)
    dispatch(getMovie(res.data))
  } catch (e) {
    dispatch(getMovieError())
  }
}

export const postMovie = (newMovie, history) => async (dispatch) => {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ2YW5lc3NhIiwibGFzdE5hbWUiOiJPZ2VueWkiLCJlbWFpbCI6InZhbmVAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTYxMDQ4MjIyOX0.M9MqrGBuY9Rk8yMk3qK7_dgXosvjoih9jOAb_rzyF7U'
    const header = {
      Authorization: `Bearer ${token}`
    }
    const res = await axios.post(
      `${apiUrl}/movies`,
      newMovie,
      header
    )
    dispatch(addMovie(res.data))
    history ? history.push(`/movies/${res.data.id}`) : window.location.reload()
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
    const res = await axios.delete(`${apiUrl}/movies/${id}`, header)
    dispatch(deleteMovie())
    history ? history.push('/movies') : window.location.reload()
  } catch (e) {
    dispatch(deleteMovieError())
  }
}

export const updateMovie = (details,id) => async (dispatch) => {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJ2YW5lc3NhIiwibGFzdE5hbWUiOiJPZ2VueWkiLCJlbWFpbCI6InZhbmVAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTYxMDQ4MjIyOX0.M9MqrGBuY9Rk8yMk3qK7_dgXosvjoih9jOAb_rzyF7U'
    const header = {
      Authorization: `Bearer ${token}`
    }
    const res = await axios.put(
      `${apiUrl}/movies/${id}`,
      details,
      header
    )
    dispatch(editMovie(res.data))
  } catch (e) {
    dispatch(editMovieError())
  }
}

export const loginAUser = (newUser) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:8080/api/users/signin`,
      newUser,
    )
    dispatch(loginUser(res.data))
  } catch (e) {
    dispatch(loginUserError())
  }
}
