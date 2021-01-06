import { getMovies, MOVIES_ERROR } from './actionTypes'
import axios from 'axios'

export const fetchMovies = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/movies`)
    dispatch(getMovies(res.data))
  } catch (e) {
    dispatch({
      type: MOVIES_ERROR,
      payload: console.log(e)
    })
  }
}

