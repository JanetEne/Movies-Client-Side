import { connect } from 'react-redux'
import MyMovies from './MyMovies'
import { fetchUsersMovies } from '../../store/userMovies/actions'
import {removeMovie} from '../../store/movies/actions'

const mapStateToProps = (state) => ({
  movies: state.usersMovies.movies
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchUsersMovies()),
  deleteMovie: (id, history) => dispatch(removeMovie(id, history))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyMovies)
