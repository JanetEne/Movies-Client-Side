import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from '../Welcome'
import SignIn from '../SignIn/Signin'
import SignUp from '../SignUp/SignUp'
import AllMovies from '../AllMovies'
import AddMovie from '../AddMovieComponent/AddMovie'
import ViewMovie from '../MovieView/viewMovie'
import Movies from '../MovieViewComponent/Movies'

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
        <AllMovies />
      </Route>
      <Route path="/addmovie">
        <AddMovie />
      </Route>
      <Route path="/movie">
        <ViewMovie />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
    </Switch>
  )
}

export default Routes
