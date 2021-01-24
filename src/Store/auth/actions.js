import { addUser, addUserError, loginUser, loginUserError } from './actionTypes'
import axios from 'axios'

const apiUrl = 'http://localhost:8080/api/users'

export const postUser = (newUser) => async (dispatch) => {
  try {
    const res = await axios.post(`${apiUrl}/signup`, newUser)
    dispatch(addUser(res.data))
  } catch (e) {
    dispatch(addUserError())
  }
}

export const loginAUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${apiUrl}/signin`,
      user,
    )
    dispatch(loginUser(res.data))
  } catch (e) {
    dispatch(loginUserError())
  }
}