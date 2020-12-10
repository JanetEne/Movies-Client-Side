import React from 'react'
import MoviesCard from '../Common/MoviesCard/MoviesCard'
import { Row } from 'react-bootstrap'
import { StyledContainer } from './style'

const AllMovies = (props) => {
  const { movielist } = props
  return (
    <div>
      <StyledContainer>
        <Row>
          {movielist.map((movie, index) => (
            <MoviesCard movie={movie} key={index} />
          ))}
        </Row>
      </StyledContainer>
    </div>
  )
}

export default AllMovies
