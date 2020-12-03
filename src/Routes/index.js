import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from '../Welcome'
import SignIn from '../SignIn/Signin'
import SignUp from '../SignUp/SignUp'
import MoviePage from '../MoviesPage/MoviesPage'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <SignIn />
      </Route>
      <Route path="/allMovies">
        <MoviePage />
      </Route>
    </Switch>
  )
}

export default Routes
