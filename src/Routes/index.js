import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from '../Welcome'
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'
import Logout from '../Auth/Logout'
import Movies from '../Movies'
import AddMovie from '../Movies/AddMovie'
import Movie from '../Movies/Movie'
import PrivateRoute from './privateRoute'
import UsersMovies from '../UsersMovies'

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
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/users/movies" exact>
        <UsersMovies />
      </Route>
      <PrivateRoute path="/movie/add" component={AddMovie} />
      <PrivateRoute path="/movie/:id/edit" component={AddMovie} />
      <Route path="/movies/:id" component={Movie} />
    </Switch>
  )
}

export default Routes
