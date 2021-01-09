import { getMovies, getMoviesError, getMovie, getMovieError } from './actionTypes'
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

