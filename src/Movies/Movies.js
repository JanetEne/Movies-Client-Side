import React from 'react'
import MoviesCard from '../Common/MoviesCard/MoviesCard'
import { Row } from 'react-bootstrap'
import { StyledContainer } from './style'

class Movies extends React.Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  handleDelete = (id) => {
    const {
      deleteMovie
    } = this.props
    deleteMovie(id)
}

  render() {
    const { movies } = this.props

    if (movies.length < 1) return <div>...fetching</div>

    return (
      <div>
        <StyledContainer>
          <Row>
            {movies.map((movie, index) => (
                <MoviesCard movie={movie} key={index} handleDelete={this.handleDelete}/>
            ))}
          </Row>
        </StyledContainer>
      </div>
    )
  }
}

export default Movies
