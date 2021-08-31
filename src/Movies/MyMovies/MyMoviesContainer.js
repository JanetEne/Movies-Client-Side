import { connect } from 'react-redux'
import MyMovies from './MyMovies'
import { fetchMyMovies } from '../../Store/movies/actions'
import { removeMovie } from '../../Store/movies/actions'

const mapStateToProps = (state) => ({
  movies: state.movies.myMovies
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMyMovies()),
  deleteMovie: (id, history) => dispatch(removeMovie(id, history))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyMovies)
