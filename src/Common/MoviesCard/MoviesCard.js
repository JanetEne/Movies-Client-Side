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
  const { img, title, plot } = movie
  return (
    <Container>
      <ImageContainer>
        <InnerImageWrap>
            <StyledImage src={img} alt="a quiet place" />
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
