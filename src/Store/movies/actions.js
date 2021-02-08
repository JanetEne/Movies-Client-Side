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
  editMovieError
} from './actionTypes'
import axios from 'axios'

const apiUrl = "http://localhost:8080/api/v1" //process.env.REACT_APP_API_URL


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

export const postMovie = (newMovie, history) => async (dispatch, getState) => {
  try {
    const state = getState() 
    const token = state.auth.token
    const headers = {
      Authorization: `Bearer ${token}`
    }
    const res = await axios.post(
      `${apiUrl}/movies`,
      newMovie,
      {headers}
    )
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
    const header = {
      authorization: `Bearer ${token}`
    }
    const res = await axios.delete(`${apiUrl}/movies/${id}`, {header})
    dispatch(deleteMovie())
    history ? history.push('/movies') : window.location.reload()
  } catch (e) {
    dispatch(deleteMovieError())
  }
}

export const updateMovie = (details,id) => async (dispatch, getState) => {
  try {
    const state = getState() 
    const token = state.auth.token
    const header = {
      authorization: `Bearer ${token}`
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

