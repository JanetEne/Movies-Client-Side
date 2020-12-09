import React from 'react'
import {
  ImageContainer,
  InnerImageWrap,
  StyledImage,
  TitleContainer,
  Container,
  Title,
  DescriptionContainer
} from './styles'

const MovieCard = ({ movie }) => {
  const { image, title, plot } = movie
  return (
    <Container>
      <ImageContainer>
        <InnerImageWrap>
          <StyledImage src={image} alt="photo" />
        </InnerImageWrap>
        <TitleContainer>
          <Title>{title}</Title>
          <DescriptionContainer>{plot}</DescriptionContainer>
        </TitleContainer>
      </ImageContainer>
    </Container>
  )
}

export default MovieCard
