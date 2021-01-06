import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getMovies} from '../store/movies/actionTypes'
import MoviesCard from '../Common/MoviesCard/MoviesCard'

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies()
  }
  render() {
    const { movies } = this.props
		
		if(movies.length < 1) return <div>...fetching</div>

    return (
      <div>
        <h6>hello</h6>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ movies: state.movies })

export default connect(mapStateToProps, { getMovies })(Movies)
