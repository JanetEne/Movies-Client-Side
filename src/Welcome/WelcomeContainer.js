import { connect } from 'react-redux'
import Welcome from './Welcome'
import { fetchMovies } from '../Store/movies/actions'
import { getSliderData } from '../Store/movies/selectors'

const mapStateToProps = (state) => ({
  sliderData: getSliderData(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
