import { connect } from 'react-redux'
import AllMovies from './AllMoviesComponent'

const mapStateToProps = (state) => ({
  movielist: state.movies
})

export default connect(mapStateToProps, null)(AllMovies)
