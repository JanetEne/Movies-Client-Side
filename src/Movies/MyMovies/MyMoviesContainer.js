import { connect } from 'react-redux'
import MyMovies from './MyMovies'
import { fetchMyMovies } from '../../store/movies/actions'
import { removeMovie } from '../../store/movies/actions'

const mapStateToProps = (state) => ({
  movies: state.movies.myMovies
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMyMovies()),
  deleteMovie: (id, history) => dispatch(removeMovie(id, history))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyMovies)
