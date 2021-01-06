export const GET_MOVIES = 'GET_MOVIES'
export const MOVIES_ERROR = 'MOVIES_ERROR'

export const getMovies = (payload) => ({
  type: GET_MOVIES,
  payload
})
