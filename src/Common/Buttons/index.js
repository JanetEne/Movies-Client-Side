import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComponent = (props) => {
  const { variant, size, disabled, text } = props
  return (
    <Button variant={variant} size={size} disabled={disabled} style= {{width: '20%', marginTop: '20px'}}>
      {text}
    </Button>
  )
}

export default ButtonComponent