import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import {
  Wrap,
  Title,
  FormInput,
  FileLabel,
  UploadImage,
  StyledContainer,
  StyledButton
} from './styles'
import { Form, Button } from 'react-bootstrap'

class AddMovieComponent extends React.Component {
  state = {
    title: this.props.movie.title,
    writers: this.props.movie.writers,
    plot: this.props.movie.plot,
    cast: this.props.movie.cast,
    year: this.props.movie.year,
    genres: this.props.movie.genres,
    img: this.props.movie.img,
    id: this.props.movie.id
  }

  componentDidMount() {
    this.fetchMovie()
  }

  componentDidUpdate(prevProps) {
    if (this.props.movie.id !== prevProps.movie.id) {
      this.setState({
        title: this.props.movie.title,
        writers: this.props.movie.writers,
        plot: this.props.movie.plot,
        cast: this.props.movie.cast,
        year: this.props.movie.year,
        genres: this.props.movie.genres,
        img: this.props.movie.img,
        id: this.props.movie.id
      })
    }
  }

  fetchMovie = () => {
    if (this.checkIsEdit(this.props.match.url)) {
      const {
        getMovie,
        match: {
          params: { id }
        }
      } = this.props
      getMovie(id)
    }
  }

  checkIsEdit = (url) => {
    return url.split('/').includes('edit')
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleButtonChange = (event) => {
    const { value } = event.target
    this.setState({
      genres: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {
      addMovie,
      updateMovie,
      movie,
      history,
      match: { url }
    } = this.props
    const isEdit = this.checkIsEdit(url)
    const { title, writers, plot, cast, year, genres, img } = this.state
    const newMovie = { title, writers, plot, cast, year, genres, img }
    isEdit ? updateMovie(newMovie, movie.id) : addMovie(newMovie, history)
  }

  render() {
    const {
      match: { url }
    } = this.props
    const isEdit = this.checkIsEdit(url)
    const { title, writers, plot, cast, year, genres, img, id } = this.state
    return (
      <Wrap>
        <StyledContainer>
          <Title>Add a Movie</Title>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Title</Form.Label>
              <FormInput
                type="text"
                name="title"
                value={title}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Writers</Form.Label>
              <FormInput
                type="text"
                name="writers"
                value={writers}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Cast</Form.Label>
              <FormInput
                type="text"
                name="cast"
                value={cast}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupDescription">
              <Form.Label>Plot</Form.Label>
              <FormInput
                as="textarea"
                placeholder="Plot"
                rows="3"
                name="plot"
                value={plot}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Image Url</Form.Label>
              <FormInput
                type="text"
                name="img"
                value={img}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Label>Genre</Form.Label>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Horror"
                  type={type}
                  id={`inline-${type}-1`}
                  value="Horror"
                  checked={genres === 'Horror'}
                  onChange={this.handleButtonChange}
                />
                <Form.Check
                  inline
                  label="Comedy"
                  type={type}
                  id={`inline-${type}-2`}
                  value="Comedy"
                  checked={genres === 'Comedy'}
                  onChange={this.handleButtonChange}
                />
                <Form.Check
                  inline
                  label="Sci-Fi"
                  type={type}
                  id={`inline-${type}-3`}
                  value="Sci-Fi"
                  checked={genres === 'Sci-Fi'}
                  onChange={this.handleButtonChange}
                />
                <Form.Check
                  inline
                  label="Drama"
                  type={type}
                  id={`inline-${type}-3`}
                  value="Drama"
                  checked={genres === 'Drama'}
                  onChange={this.handleButtonChange}
                />
                <Form.Check
                  inline
                  label="Action"
                  type={type}
                  id={`inline-${type}-3`}
                  value="Action"
                  checked={genres === 'Action'}
                  onChange={this.handleButtonChange}
                />
                <Form.Check
                  inline
                  label="Thriller"
                  type={type}
                  id={`inline-${type}-3`}
                  value="Thriller"
                  checked={genres === 'Thriller'}
                  onChange={this.handleButtonChange}
                />
                <Form.Check
                  inline
                  label="Romance"
                  type={type}
                  id={`inline-${type}-3`}
                  value="Romance"
                  checked={genres === 'Romance'}
                  onChange={this.handleButtonChange}
                />
                <Form.Check
                  inline
                  label="Animation"
                  type={type}
                  id={`inline-${type}-3`}
                  value="Animation"
                  checked={genres === 'Animation'}
                  onChange={this.handleButtonChange}
                />
              </div>
            ))}
            <Form.Label>Movie Image</Form.Label>
            <FileLabel for="upload-photo">
              Upload the book front image <br /> Up to 15MB
              <UploadImage
                id="upload-photo"
                label="Custom file input"
                lang="en"
                custom
              />
            </FileLabel>
            <Form.Group controlId="formGroupYear">
              <Form.Label>Year</Form.Label>
              <FormInput
                type="number"
                placeholder="Year"
                name="year"
                value={year}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Button
              variant="info"
              value="submit"
              type="submit"
              style={{ width: '30%', marginTop: '10px', marginLeft: '150px'}}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
            {isEdit && (
              <Link to={`/movies/${id}`}>
                <StyledButton variant="info">View</StyledButton>
              </Link>
            )}
          </Form>
        </StyledContainer>
      </Wrap>
    )
  }
}

export default withRouter(AddMovieComponent)
