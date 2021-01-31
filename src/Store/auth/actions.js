import {
  addUser,
  addUserError,
  loginUser,
  loginUserError,
  logoutUser,
  logoutUserError
} from './actionTypes'
import axios from 'axios'
import localForage from 'localforage'

const apiUrl = 'http://localhost:8080/api/users'

export const signUp = (newUser, history) => async (dispatch) => {
  try {
    const res = await axios.post(`${apiUrl}/signup`, newUser)
    dispatch(addUser(res.data))
    history.push('/login')
  } catch (e) {
    dispatch(addUserError())
  }
}

export const loginAUser = (user, history) => async (dispatch) => {
  try {
    const res = await axios.post(`${apiUrl}/signin`, user)
    dispatch(loginUser(res.data))
    history.push('/movies')
  } catch (e) {
    dispatch(loginUserError())
  }
}

export const logout = (history) => async (dispatch) => {
  try {
    localForage.clear()
    dispatch(logoutUser())
    history.push('/movies')
  } catch (e) {
    dispatch(logoutUserError())
  }
}
