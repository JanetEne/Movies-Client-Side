import axios from 'axios'
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
  getMyMovies,
  getMyMoviesError,
  rateMovie,
  ratingMovieError,
  getMovieRatings,
  getMovieRatingsError
} from './actionTypes'
import { isFetchingStart, isFetchingEnd } from '../isFetching/actions'

const apiUrl = 'http://localhost:8080/api/v1'
const ratingUrl = 'http://localhost:8080/api/rating' //process.env.REACT_APP_API_URL

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
    dispatch(isFetchingStart('movie'))
    const res = await axios.get(`${apiUrl}/movie/${id}`)
    dispatch(getMovie(res.data))
    dispatch(isFetchingEnd('movie'))
  } catch (e) {
    dispatch(getMovieError())
  }
}

export const postMovie = (newMovie, history) => async (dispatch, getState) => {
  try {
    const state = getState()
    const token = state.auth.token
    const headers = {
      authorization: `Bearer ${token}`
    }
    const res = await axios.post(`${apiUrl}/movies`, newMovie, { headers })
    dispatch(addMovie(res.data))
    history ? history.push(`/movies/${res.data.id}`) : window.location.reload()
  } catch (e) {
    dispatch(addMovieError())
  }
}

export const removeMovie = (id, history) => async (dispatch, getState) => {
  try {
    const state = getState()
    const token = state.auth.token
    const headers = {
      authorization: `Bearer ${token}`
    }
    const res = await axios.delete(`${apiUrl}/movies/${id}`, { headers })
    dispatch(deleteMovie())
    history ? history.push('/movies') : window.location.reload()
  } catch (e) {
    dispatch(deleteMovieError())
  }
}

export const updateMovie = (details, id) => async (dispatch, getState) => {
  try {
    const state = getState()
    const token = state.auth.token
    const headers = {
      authorization: `Bearer ${token}`
    }
    const res = await axios.put(`${apiUrl}/movies/${id}`, details, { headers })
    dispatch(editMovie(res.data))
  } catch (e) {
    dispatch(editMovieError())
  }
}

export const fetchMyMovies = () => async (dispatch, getState) => {
  try {
    const state = getState()
    const token = state.auth.token
    const headers = {
      authorization: `Bearer ${token}`
    }
    const res = await axios.get(`${apiUrl}/movies/user`, { headers })
    dispatch(getMyMovies(res.data))
  } catch (e) {
    dispatch(getMyMoviesError())
  }
}

export const fetchMovieRatings = (id) => async (dispatch) => {
  try {
    dispatch(isFetchingStart('rating'))
    const res = await axios.get(`${ratingUrl}/${id}`)
    dispatch(getMovieRatings(res.data))
    dispatch(isFetchingEnd('rating'))
  } catch (e) {
    dispatch(getMovieRatingsError())
  }
}

export const rateAMovie = (id, rating) => async (dispatch, getState) => {
  try {
    const state = getState()
    const token = state.auth.token
    const headers = {
      Authorization: `Bearer ${token}`
    }
    const res = await axios.post(`${ratingUrl}/${id}`, rating, { headers })
    dispatch(rateMovie(res.data))
  } catch (e) {
    dispatch(ratingMovieError())
  }
}
