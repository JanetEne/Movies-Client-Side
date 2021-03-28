import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
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
  Likes
} from './styles'

class SingleMovie extends React.Component {
  componentDidMount() {
    const {
      getMovie,
      getMovieRating,
      match: {
        params: { id }
      }
    } = this.props
    getMovie(id)
    getMovieRating(id)
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

  render() {
    const { movie, rating, isFetchingMovie, isFetchingRating } = this.props
    const { title, genres, writers, cast, plot, year, likes, img } = movie
    if (isFetchingMovie || isFetchingRating) return <Spinner />
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
            <Rating>
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                value={rating}
              />
            </Rating>
          </IconContainer>
          <Plot>{plot}</Plot>
          <Writers>Writers : {writers}</Writers>
          <Cast>Cast : {cast}</Cast>
          <IconContainer>
            <StyledHeart icon={faHeart} />
            <Likes>{likes}</Likes>
          </IconContainer>
          <Button variant="primary" style={{ width: '30%', marginTop: '20px' }}>
            Watch Now
          </Button>
          <Link to={`/movie/${movie.id}/edit`}>
            <Button variant="light" style={{ width: '30%', marginTop: '20px' }}>
              Edit
            </Button>
          </Link>
          <Button
            variant="secondary"
            style={{ width: '30%', marginTop: '20px' }}
            onClick={this.handleDelete}
          >
            Delete
          </Button>
        </ItemContainer>
      </Wrap>
    )
  }
}

export default withRouter(SingleMovie)
