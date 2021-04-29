import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { SpinnerWrap } from './styles'

const SimpleSpinner = () => {
  return (
    <SpinnerWrap>
      <Spinner animation="border" variant="info" />
    </SpinnerWrap>
  )
}

export default SimpleSpinner
