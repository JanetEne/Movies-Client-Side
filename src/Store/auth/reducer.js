import { ADD_A_USER, LOGIN, LOGOUT } from './actionTypes'

const initialState = {
  isAuth: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_A_USER:
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        ...action.payload
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default reducer
