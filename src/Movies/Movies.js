import React from 'react'
import MoviesCard from '../Common/MoviesCard/MoviesCard'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { StyledContainer } from './style'

class Movies extends React.Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    const { movies } = this.props

    if (movies.length < 1) return <div>...fetching</div>

    return (
      <div>
        <StyledContainer>
          <Row>
            {movies.map((movie, index) => (
              <Link to={`movies/${movie.id}`}>
                <MoviesCard movie={movie} key={index} />
              </Link>
            ))}
          </Row>
        </StyledContainer>
      </div>
    )
  }
}
export default Movies
