import { SHOW_ALERT, HIDE_ALERT } from './actionTypes'

const initialState = {
  show: false,
  title: '',
  message: '',
  variant: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        show: true,
        title: action.title,
        message: action.message,
        variant: action.variant ? action.variant : 'primary'
      }
    case HIDE_ALERT:
      return initialState
    default:
      return state
  }
}

export default reducer
