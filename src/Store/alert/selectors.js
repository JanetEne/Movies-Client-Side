export const getShowAlert = (state) => state.alert.show

export const getAlertDetails = (state) => {
  const title = state.alert.title
  const message = state.alert.message
  const variant = state.alert.variant
  return {
    title,
    message,
    variant
  }
}
