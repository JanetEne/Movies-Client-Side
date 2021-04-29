import React from 'react'
import MoviesCard from '../Common/MoviesCard/MoviesCard'
import { Row } from 'react-bootstrap'
import Spinner from '../Common/Spinner'
import { StyledContainer, Wrap } from './style'

class Movies extends React.Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    const { movies } = this.props

    if (movies.length < 1) return <Spinner />

    return (
      <Wrap>
        <StyledContainer>
          <Row>
            {movies.map((movie, index) => (
                <MoviesCard movie={movie} key={index}/>
            ))}
          </Row>
        </StyledContainer>
      </Wrap>
    )
  }
}

export default Movies
