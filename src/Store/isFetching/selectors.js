export const isFetching = (state, isfetching) => {
  const data = state.isFetching.isFetching

  return data.includes(isfetching)
}
