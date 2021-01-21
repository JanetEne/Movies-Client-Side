import React from 'react'
import MoviesCard from '../Common/MoviesCard/MoviesCard'
import { Row } from 'react-bootstrap'
import { StyledContainer, Wrap } from './style'

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
      <Wrap>
        <StyledContainer>
          <Row>
            {movies.map((movie, index) => (
                <MoviesCard movie={movie} key={index} handleDelete={this.handleDelete}/>
            ))}
          </Row>
        </StyledContainer>
      </Wrap>
    )
  }
}

export default Movies
