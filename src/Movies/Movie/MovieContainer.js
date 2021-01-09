import { connect } from 'react-redux'
import Movie from './Movie'
import { fetchMovie } from '../../store/movies/actions'

const mapStateToProps = (state) => ({
  movie: state.movies.movie
})

const mapDispatchToProps = (dispatch) => ({
  getMovie: (id) => dispatch(fetchMovie(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie)