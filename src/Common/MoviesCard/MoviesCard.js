import React from 'react'
import { Link } from 'react-router-dom'
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
          <Link to="/movie">
            <StyledImage src={image} alt="photo" />
          </Link>
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
