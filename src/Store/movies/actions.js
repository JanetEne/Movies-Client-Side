import axios from 'axios'
import {showAlert, hideAlert} from '../alert/actionTypes'
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
  getMovieRatingsError,
  likeMovie,
  likeMovieError,
  getMovieLikes,
  getMovieLikesError
} from './actionTypes'
import { isFetchingStart, isFetchingEnd } from '../isFetching/actions'

const apiUrl = process.env.REACT_APP_API_URL

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
    dispatch(showAlert('Success!', 'success', 'movie added'))
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
    dispatch(showAlert('Success!', 'success', 'movie edited successfully'))
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

export const fetchMovieRatings = (id) => async (dispatch, getState) => {
  const state = getState()
  const userId = state.auth.id
  try {
    dispatch(isFetchingStart('rating'))
    const res = await axios.get(`${apiUrl}/rating/${id}?${userId ? `userId=${userId}` : ''}`)
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
    const res = await axios.post(`${apiUrl}/rating/${id}`, {rating}, { headers })
    dispatch(rateMovie(res))
    setTimeout(() => {
      dispatch(fetchMovieRatings(id))
    }, 1000)
  } catch (e) {
    dispatch(ratingMovieError())
  }
}

export const fetchMovieLikes = (id) => async (dispatch, getState) => {
  const state = getState()
  const userId = state.auth.id
  try {
    dispatch(isFetchingStart('like'))
    const res = await axios.get(`${apiUrl}/likes/${id}?${userId ? `userId=${userId}` : ''}`)
    dispatch(getMovieLikes(res.data))
    dispatch(isFetchingEnd('like'))
  } catch (e) {
    dispatch(getMovieLikesError())
  }
}

export const likeAMovie = (id) => async (dispatch, getState) => {
  try {
    const state = getState()
    const token = state.auth.token
    const headers = {
      Authorization: `Bearer ${token}`
    }
    const res = await axios.post(`${apiUrl}/likes/${id}`, {}, { headers })
    dispatch(likeMovie(res))
    setTimeout(() => {
      dispatch(fetchMovieLikes(id))
    }, 1000)
  } catch (e) {
    dispatch(likeMovieError())
  }
}

