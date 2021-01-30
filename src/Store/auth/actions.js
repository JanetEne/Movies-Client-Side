import { addUser, addUserError, loginUser, loginUserError } from './actionTypes'
import axios from 'axios'

const apiUrl = 'http://localhost:8080/api/users'

export const postUser = (newUser, history) => async (dispatch) => {
  try {
    const res = await axios.post(`${apiUrl}/signup`, newUser)
    dispatch(addUser(res.data))
    history ? history.push('/login') : window.location.reload()
  } catch (e) {
    dispatch(addUserError())
  }
}

export const loginAUser = (user, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${apiUrl}/signin`,
      user,
    )
    dispatch(loginUser(res.data))
    history ? history.push('/movies') : window.location.reload()
  } catch (e) {
    dispatch(loginUserError())
  }
}