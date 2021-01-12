import React from 'react'
import {
  Wrap,
  Title,
  FormInput,
  FileLabel,
  UploadImage,
  StyledContainer
} from './styles'
import { Form } from 'react-bootstrap'
import Button from '../../Common/Buttons'

class AddMovieComponent extends React.Component {
  state = {
    title: '',
    writers: '',
    plot: '',
    cast: '',
    year: '',
    genres: '',
    img: ''
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
    event.preventDefault();
    const { addMovie } = this.props
    const { title, writers, plot, cast, year, genres, img } = this.state
    const newMovie = { title, writers, plot, cast, year, genres, img }
    addMovie(newMovie)
  }

  render() {
    const { title, writers, plot, cast, year, genres, img } = this.state
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
              <Form.Group controlId="formGroupDescription">
              <Form.Label>Image Url</Form.Label>
              <FormInput
                as="textarea"
                placeholder="Image Url"
                rows="3"
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
            <input value="submit" type='submit' />
          </Form>
        </StyledContainer>
      </Wrap>
    )
  }
}

export default AddMovieComponent
