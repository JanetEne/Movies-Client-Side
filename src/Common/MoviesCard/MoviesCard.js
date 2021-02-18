import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  ImageContainer,
  InnerImageWrap,
  StyledImage,
  Container
} from './styles'

const MovieCard = ({ movie, handleDelete }) => {
  const { img, id } = movie

  return (
    <div>
      <Container>
        <Link to={`movies/${movie.id}`}>
          <ImageContainer>
            <InnerImageWrap>
              <StyledImage src={img} alt="picture display" />
            </InnerImageWrap>
          </ImageContainer>
        </Link>
      </Container>
      <Button
        variant="secondary"
        style={{
          width: '30%',
          marginTop: '50px',
          marginBottom: '50px',
        }}
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>
      <Link to={`/movie/${movie.id}/edit`}>
        <Button variant="light" style={{ width: '30%', marginLeft: '20px' }}>
          Edit
        </Button>
      </Link>
    </div>
  )
}

export default MovieCard
