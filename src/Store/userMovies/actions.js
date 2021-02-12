import { getUsersMovies, getUsersMoviesError } from './actionTypes'
import axios from 'axios'

const apiUrl = 'http://localhost:8080/api/v1'

export const fetchUsersMovies = () => async (dispatch, getState) => {
  try {
    const state = getState()
    const token = state.auth.token
    const headers = {
      authorization: `Bearer ${token}`
    }
    const res = await axios.get(`${apiUrl}/movies/user`, { headers })
    dispatch(getUsersMovies(res.data))
  } catch (e) {
    dispatch(getUsersMoviesError())
  }
}
