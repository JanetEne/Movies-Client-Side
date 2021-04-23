import { connect } from 'react-redux'
import Movie from './Movie'
import {
  fetchMovie,
  removeMovie,
  fetchMovieRatings,
  rateAMovie
} from '../../store/movies/actions'
import { isFetching } from '../../store/isFetching/selectors'
import { getIsAuth } from '../../store/auth/selectors'

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  ratingData: state.movies.rating,
  isFetchingMovie: isFetching(state, 'movie'),
  isFetchingRating: isFetching(state, 'rating'),
  isAuth: getIsAuth(state)
})

const mapDispatchToProps = (dispatch) => ({
  getMovie: (id) => dispatch(fetchMovie(id)),
  deleteMovie: (id, history) => dispatch(removeMovie(id, history)),
  getMovieRating: (id) => dispatch(fetchMovieRatings(id)),
  rateMovies: (id, rating) => dispatch(rateAMovie(id, rating))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
