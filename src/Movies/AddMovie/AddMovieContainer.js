import { connect } from 'react-redux'
import AddMovie from './AddMovie'
import { postMovie } from '../../store/movies/actions'

const mapDispatchToProps = (dispatch) => ({
  addMovie: (newMovie) => dispatch(postMovie(newMovie))
})

export default connect(null, mapDispatchToProps)(AddMovie)