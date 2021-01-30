import { ADD_A_USER, LOGIN_A_USER } from './actionTypes'

const initialState = {
  token: '',
  isAuth: false
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
        token: action.payload,
        isAuth: true
      }
    default:
      return state
  }
}

export default reducer
