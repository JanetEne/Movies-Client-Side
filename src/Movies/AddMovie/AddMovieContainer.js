import { connect } from 'react-redux'
import AddMovie from './AddMovie'
import { postMovie, updateMovie, fetchMovie } from '../../store/movies/actions'

const mapStateToProps = (state) => ({
  movie: state.movies.movie
})

const mapDispatchToProps = (dispatch) => ({
  addMovie: (newMovie, history) => dispatch(postMovie(newMovie, history)),
  getMovie: (id) => dispatch(fetchMovie(id)),
  updateMovie: (details, id) => dispatch(updateMovie(details, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie)