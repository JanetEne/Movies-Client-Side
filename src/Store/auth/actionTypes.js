export const LOGIN_A_USER = 'ADD_A_USER'
export const LOGIN_A_USER_ERROR = 'ADD_A_USER_ERROR'
export const ADD_A_USER = 'ADD_A_USER'
export const ADD_A_USER_ERROR = 'ADD_A_USER_ERROR'

export const addUser = (payload) => ({
    type: ADD_A_USER,
    payload
  })
  
  export const addUserError = () => ({
    type: ADD_A_USER
  })

  export const loginUser = (payload) => ({
    type: LOGIN_A_USER,
    payload
  })
  
  export const loginUserError = () => ({
    type: LOGIN_A_USER
  })
  
