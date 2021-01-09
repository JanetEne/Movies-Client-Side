import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from '../Welcome'
import SignIn from '../SignIn/Signin'
import SignUp from '../SignUp/SignUp'
import Movies from '../Movies'
import AddMovie from '../AddMovieComponent/AddMovie'
import Movie from '../Movies/Movie'

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
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/addmovie">
        <AddMovie />
      </Route>
      <Route path="/movies/:id" component={Movie} />
    </Switch>
  )
}

export default Routes
