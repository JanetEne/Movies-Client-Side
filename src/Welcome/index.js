import React from 'react'
import { useSelector } from 'react-redux'
import AllMovies from '../AllMovies/AllMoviesComponent'

const Welcome = () => {
  const movies = useSelector(state => state.movies)
  return (
  <AllMovies movielist={movies}/>
  )
}

export default Welcome
