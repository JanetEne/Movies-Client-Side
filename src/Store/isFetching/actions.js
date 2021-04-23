export const IS_FETCHING_START = 'IS_FETCHING_START'
export const IS_FETCHING_END = 'IS_FETCHING_END'

export const isFetchingStart = (payload) => ({
  type: IS_FETCHING_START,
  payload
})

export const isFetchingEnd = (payload) => ({
  type: IS_FETCHING_END,
  payload
})
