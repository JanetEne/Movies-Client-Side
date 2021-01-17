import { connect } from 'react-redux'
import Movie from './Movie'
import { fetchMovie, removeMovie } from '../../store/movies/actions'

const mapStateToProps = (state) => ({
  movie: state.movies.movie
})

const mapDispatchToProps = (dispatch) => ({
  getMovie: (id) => dispatch(fetchMovie(id)),
  deleteMovie: (id, history) => dispatch(removeMovie(id, history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie)