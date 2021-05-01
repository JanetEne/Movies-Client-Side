import React from 'react'
import { Link } from 'react-router-dom'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import {
  ImageContainer,
  InnerImageWrap,
  StyledImage,
  Container,
  IconContainer,
  StyledIcon
} from './styles'

const MovieCard = ({ movie, handleDelete, showIcons }) => {
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
        {showIcons && (
          <IconContainer>
            <StyledIcon
              icon={faTrashAlt}
              onClick={() => handleDelete(id)}
              style={{ color: 'red' }}
            />
            <Link to={`/movie/${movie.id}/edit`}>
              <StyledIcon icon={faEdit} />
            </Link>
          </IconContainer>
        )}
      </Container>
    </div>
  )
}

export default MovieCard
