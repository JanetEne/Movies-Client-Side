import React from 'react'
import MoviesCard from '../../Common/MoviesCard/MoviesCard'
import { Row } from 'react-bootstrap'
import swal from 'sweetalert'
import Spinner from '../../Common/Spinner'
import { StyledContainer, Wrap } from './styles'

class MyMovies extends React.Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  handleDelete = (id) => {
    const { deleteMovie } = this.props
    swal({
      title: 'Are you sure you want to delete this movie?',
      text: 'Once deleted, you will not be able to recover this movie!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        deleteMovie(id)
        swal('Poof! Your movie has been deleted!', {
          icon: 'success'
        })
      } else {
        swal('Your movie is safe!')
      }
    })
  }

  render() {
    const { movies } = this.props

    if (movies.length < 1) return <Spinner />

    return (
      <Wrap>
        <StyledContainer>
          <Row>
            {movies.map((movie, index) => (
              <MoviesCard
                movie={movie}
                key={index}
                handleDelete={this.handleDelete}
                showIcons={true}
              />
            ))}
          </Row>
        </StyledContainer>
      </Wrap>
    )
  }
}

export default MyMovies
