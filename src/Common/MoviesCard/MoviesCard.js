import React from 'react'
import {
  ImageContainer,
  InnerImageWrap,
  StyledImage,
  Title,
  Container
} from './styles'

const MovieCard = () => {
  return (
    <Container>
      <ImageContainer>
        <InnerImageWrap>
          <StyledImage
            src="https://cdn.theatlantic.com/thumbor/VQhcb1fR1ooLI1wHEJkADHBraDc=/0x84:1600x984/720x405/media/img/mt/2015/01/liamneeson/original.jpg"
            alt="photo"
          />
        </InnerImageWrap>
        <Title>
          TAKEN
          <br />A retired CIA agent travels across Europe and relies on his old
          skills to save his estranged daughter, who has been kidnapped while on
          a trip to paris
        </Title>
      </ImageContainer>
    </Container>
  )
}

export default MovieCard
