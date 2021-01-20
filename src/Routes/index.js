import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Welcome from '../Welcome'
import SignIn from '../SignIn/Signin'
import SignUp from '../SignUp/SignUp'
import Movies from '../Movies'
import AddMovie from '../Movies/AddMovie'
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
      <Route path="/movie/add" component={AddMovie} />
      <Route path="/movie/:id/edit" component={AddMovie} />
      <Route path="/movies/:id" component={Movie} />
    </Switch>
  )
}

export default Routes
