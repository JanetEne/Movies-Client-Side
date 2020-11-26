import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {
  FormContainer,
  Wrap,
  OuterDiv,
  SignupText,
  StyledContainer,
  BottomText,
  FormInput,
  CheckboxText
} from './styles'

const SignupComponent = () => {
  return (
    <Wrap>
      <OuterDiv>
        <FormContainer>
          <SignupText>Sign Up</SignupText>
          <StyledContainer>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <FormInput type="email" placeholder="Enter Firstname" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <FormInput type="email" placeholder="Enter Lastname" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <FormInput type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <FormInput type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <FormInput type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <CheckboxText
                  type="checkbox"
                  label="I agree to the terms and conditions."
                />
              </Form.Group>
              <Button variant="light" type="submit" block>
                Submit
              </Button>
            </Form>
          </StyledContainer>
          <BottomText>Already have an account? Login here.</BottomText>
        </FormContainer>
      </OuterDiv>
    </Wrap>
  )
}

export default SignupComponent
