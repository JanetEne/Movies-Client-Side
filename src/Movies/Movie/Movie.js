import React from 'react'
import {
  faStarHalfAlt,
  faStar,
  faHeart
} from '@fortawesome/free-solid-svg-icons'
import {
  Wrap,
  StyledImage,
  ItemContainer,
  Title,
  GenreContainer,
  Genre,
  Year,
  Plot,
  Writers,
  Cast,
  IconContainer,
  StyledIcon,
  Rating,
  StyledHeart,
  Likes
} from './styles'
import ButtonComponent from '../../Common/Buttons'

class SingleMovie extends React.Component {
  componentDidMount() {
    const {
      getMovie,
      match: {
        params: { id }
      }
    } = this.props
    getMovie(id)
  }

  render() {
    const { movie } = this.props
    const {
      title,
      genres,
      writers,
      cast,
      plot,
      year,
      likes,
      ratings,
      img
    } = movie
    return (
      <Wrap>
        <StyledImage src={img} alt="hello"></StyledImage>
        <ItemContainer>
          <Title>{title}</Title>
          <GenreContainer>
            <Genre>{genres}</Genre>
            <Year>({year})</Year>
          </GenreContainer>
          <IconContainer>
            <StyledIcon icon={faStar} size="sm" />
            <StyledIcon icon={faStar} size="sm" />
            <StyledIcon icon={faStar} size="sm" />
            <StyledIcon icon={faStar} size="sm" />
            <StyledIcon icon={faStar} size="sm" />
            <StyledIcon icon={faStarHalfAlt} size="sm" />
            <Rating>({ratings})</Rating>
          </IconContainer>
          <Plot>{plot}</Plot>
          <Writers>Writers : {writers}</Writers>
          <Cast>Cast : {cast}</Cast>
          <IconContainer>
            <StyledHeart icon={faHeart} />
            <Likes>{likes}</Likes>
          </IconContainer>
          <ButtonComponent variant="primary" text="Watch Now" />
        </ItemContainer>
      </Wrap>
    )
  }
}

export default SingleMovie
