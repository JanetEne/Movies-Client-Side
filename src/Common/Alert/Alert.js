import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Alert from 'react-bootstrap/Alert'
import { getShowAlert, getAlertDetails } from '../../Store/alert/selectors'
import { hideAlert } from '../../Store/alert/actionTypes'
import { AlertContainer } from './styles'

const SimpleAlert = () => {
  const dispatch = useDispatch()
  const show = useSelector(getShowAlert)
  const { title, message, variant } = useSelector(getAlertDetails)

  if (show) {
    setTimeout(() => {
      dispatch(hideAlert())
    }, 5000)
  }
  return (
    <AlertContainer>
      <Alert
        show={show}
        variant={variant}
        onClose={() => dispatch(hideAlert())}
        dismissible
      >
        <Alert.Heading>{title}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    </AlertContainer>
  )
}

export default SimpleAlert
