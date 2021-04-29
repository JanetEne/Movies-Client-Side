export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'

export const showAlert = (title, variant, message) => ({
  type: SHOW_ALERT,
  title,
  variant,
  message
})

export const hideAlert = () => ({
  type: HIDE_ALERT
})
