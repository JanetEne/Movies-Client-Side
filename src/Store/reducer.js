import { GET_MOVIES } from './actionTypes'

const initialState = {
  movies: [],
  loading: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default reducer
