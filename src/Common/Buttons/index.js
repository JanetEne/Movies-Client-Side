import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComponent = (props) => {
  const { variant, size, disabled, text, style } = props
  return (
    <Button variant={variant} size={size} disabled={disabled} style={style}>
      text={text}
    </Button>
  )
}

export default ButtonComponent
