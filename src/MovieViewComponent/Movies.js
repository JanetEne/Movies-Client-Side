import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getMovies} from '../Store/actions'

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies()
  }
  render() {
    const { movies } = this.props
		
		if(movies.length < 1) return <div>...fetching</div>

    return (
      <div>
        {movies.map((movie) => (
          <React.Fragment key={movie.id}>
            <h6>{movie.name}</h6>
          </React.Fragment>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ movies: state.movies })

export default connect(mapStateToProps, { getMovies })(Movies)
