import { connect } from 'react-redux'
import AllMovies from './AllMovies'
import { fetchMovies } from '../store/movies/actions'

const mapStateToProps = (state) => ({
  movies: state.movies.movies
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies)
