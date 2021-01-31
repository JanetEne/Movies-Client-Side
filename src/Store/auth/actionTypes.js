export const LOGIN = 'LOGIN'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const ADD_A_USER = 'ADD_A_USER'
export const ADD_A_USER_ERROR = 'ADD_A_USER_ERROR'
export const LOGOUT = 'LOGOUT'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'

export const addUser = (payload) => ({
    type: ADD_A_USER,
    payload
  })
  
  export const addUserError = () => ({
    type: ADD_A_USER
  })

  export const loginUser = (payload) => ({
    type: LOGIN,
    payload
  })
  
  export const loginUserError = () => ({
    type: LOGIN_ERROR
  })
  
  export const logoutUser = () => ({
    type: LOGOUT
  })
  
  export const logoutUserError = () => ({
    type: LOGOUT_ERROR
  })
