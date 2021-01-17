import { connect } from 'react-redux'
import AddMovie from './AddMovie'
import { postMovie, updateMovie } from '../../store/movies/actions'

const mapDispatchToProps = (dispatch) => ({
  addMovie: (newMovie) => dispatch(postMovie(newMovie)),
  editMovie: (newMovie) => dispatch(updateMovie(newMovie))
})

export default connect(null, mapDispatchToProps)(AddMovie)