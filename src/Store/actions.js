import { GET_MOVIES, MOVIES_ERROR } from './actionTypes'
import axios from 'axios'

export const getMovies = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/movies`)
    dispatch({
      type: GET_MOVIES,
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: MOVIES_ERROR,
      payload: console.log(e)
    })
  }
}

