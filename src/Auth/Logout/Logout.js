import { React, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { logout } from '../../Store/auth/actions'

const Logout = () => {
  const dispatch = useDispatch()
  let history = useHistory()

  useEffect(() => {
    dispatch(logout(history))
  })

  return <div>LOGOUT</div>
}

export default Logout
