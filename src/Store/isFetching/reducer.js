import { IS_FETCHING_START, IS_FETCHING_END } from './actions'

const initialState = {
  isFetching: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING_START: {
      return {
        ...state,
        isFetching: [...state.isFetching, action.payload]
      }
    }
    case IS_FETCHING_END: {
      return {
        ...state,
        isFetching: state.isFetching.filter(
          (fetching) => fetching !== action.payload
        )
      }
    }
    default:
      return state
  }
}

export default reducer
