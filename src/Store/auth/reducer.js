import { ADD_A_USER, LOGIN_A_USER } from './actionTypes'

const initialState = {
  token: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_A_USER:
      return {
        ...state,
        token: action.payload
      }
    case LOGIN_A_USER:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}

export default reducer
