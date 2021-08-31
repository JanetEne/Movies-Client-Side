import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { getIsAuth } from '../Store/auth/selectors'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(getIsAuth)
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  )
}

export default PrivateRoute
