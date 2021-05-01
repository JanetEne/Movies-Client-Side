import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../../Common/Spinner'
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
  Rating,
  StyledHeart,
  Likes,
  AvgRating,
  RateThis,
  StyledButton,
  ButtonContainer,
  EditButton
} from './styles'

class SingleMovie extends React.Component {
  componentDidMount() {
    const {
      getMovie,
      getMovieRating,
      getMovieLikes,
      match: {
        params: { id }
      }
    } = this.props
    getMovie(id)
    getMovieRating(id)
    getMovieLikes(id)
  }

  handleDelete = () => {
    const {
      deleteMovie,
      history,
      match: {
        params: { id }
      }
    } = this.props
    deleteMovie(id, history)
  }

  handleRatings = (selectedRating) => {
    const {
      rateMovies,
      match: {
        params: { id }
      }
    } = this.props
    rateMovies(id, selectedRating)
  }

  handleLikeMovie = () => {
    const {
      likeMovies,
      match: {
        params: { id }
      }
    } = this.props
    likeMovies(id)
  }

  render() {
    const {
      movie,
      ratingData,
      likeData,
      isFetchingMovie,
      isFetchingRating,
      isAuth
    } = this.props
    const { title, genres, writers, cast, plot, year, img } = movie
    if (isFetchingMovie) return <Spinner />
    const { average, count: ratingsCount, myRating } = ratingData
    const { count: likesCount, isLiked } = likeData
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
            <StyledHeart
              icon={faHeart}
              onClick={this.handleLikeMovie}
              isLiked={isLiked}
            />
            <Likes>{`${likesCount} like${likesCount !== 1 ? 's' : ''}`}</Likes>
          </IconContainer>
          <IconContainer>
            <RateThis>Rate this: </RateThis>
            {!isFetchingRating && (
              <Rating>
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  value={myRating}
                  edit={isAuth ? true : false}
                  onChange={this.handleRatings}
                />
              </Rating>
            )}
          </IconContainer>
          <AvgRating>
            {average}/5 ({ratingsCount} user ratings)
          </AvgRating>
          <Plot>{plot}</Plot>
          <Writers>Writers : {writers}</Writers>
          <Cast>Cast : {cast}</Cast>
          <ButtonContainer>
            <StyledButton variant="primary">Watch Now</StyledButton>
            <Link to={`/movie/${movie.id}/edit`}>
              <EditButton>Edit</EditButton>
            </Link>
            <StyledButton variant="secondary" onClick={this.handleDelete}>
              Delete
            </StyledButton>
          </ButtonContainer>
        </ItemContainer>
      </Wrap>
    )
  }
}

export default withRouter(SingleMovie)
