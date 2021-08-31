import { connect } from 'react-redux'
import Movies from './Movies'
import { fetchMovies } from '../Store/movies/actions'

const mapStateToProps = (state) => ({
  movies: state.movies.movies
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
