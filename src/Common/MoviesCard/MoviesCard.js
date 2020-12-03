import React from 'react'
import {
  ImageContainer,
  InnerImageWrap,
  StyledImage,
  Title,
  Container
} from './styles'

const MovieCard = ({ movie }) => {
  const { image, title } = movie
  return (
    <Container>
      <ImageContainer>
        <InnerImageWrap>
          <StyledImage src={image} alt="photo" />
        </InnerImageWrap>
        <Title>{title}</Title>
      </ImageContainer>
    </Container>
  )
}

export default MovieCard
