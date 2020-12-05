import React from 'react'
import { Wrap, Title, FormInput, FileLabel, UploadImage, StyledContainer } from './styles'
import { Form } from 'react-bootstrap'

const AddMovieComponent = () => {
  return (
    <Wrap>
      <StyledContainer>
        <Title>Add a Movie</Title>
        <Form>
          <Form.Group controlId="formGroupTitle">
            <Form.Label>Title</Form.Label>
            <FormInput type="text" />
          </Form.Group>
          <Form.Group controlId="formGroupTitle">
            <Form.Label>Writers</Form.Label>
            <FormInput type="text" />
          </Form.Group>
          <Form.Group controlId="formGroupDescription">
            <Form.Label>Plot</Form.Label>
            <FormInput as="textarea" placeholder="Plot" rows="3" />
          </Form.Group>
          <Form.Label>Genre</Form.Label>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Horror"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Comedy"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Sci-Fi"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Drama"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Action"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Drama"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Romance"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Animation"
                type={type}
                id={`inline-${type}-3`}
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
            <FormInput type="number" placeholder="Year" />
          </Form.Group>
        </Form>
      </StyledContainer>
    </Wrap>
  )
}

export default AddMovieComponent
