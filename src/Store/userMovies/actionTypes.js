export const GET_USERS_MOVIES = 'GET_USERS_MOVIES'
export const GET_USERS_MOVIES_ERROR = 'GET_USERS_MOVIES_ERROR'

export const getUsersMovies = (payload) => ({
    type: GET_USERS_MOVIES,
    payload
  })
  
  export const getUsersMoviesError = () => ({
    type: GET_USERS_MOVIES_ERROR
  })