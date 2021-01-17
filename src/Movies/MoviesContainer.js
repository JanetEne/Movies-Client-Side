import { connect } from 'react-redux'
import Movies from './Movies'
import { fetchMovies, removeMovie } from '../store/movies/actions'

const mapStateToProps = (state) => ({
  movies: state.movies.movies
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
  deleteMovie: (id, history) => dispatch(removeMovie(id, history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
