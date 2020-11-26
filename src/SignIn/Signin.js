import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {
  Wrap,
  LoginText,
  OuterDiv,
  FormContainer,
  StyledContainer,
  FormInput,
  DontHaveAccount,
  CheckboxText
} from './style'

const SignInComponent = () => {
  return (
    <Wrap>
      <OuterDiv>
        <FormContainer>
          <LoginText>Account Login</LoginText>
          <StyledContainer>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <FormInput type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <FormInput type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <CheckboxText type="checkbox" label="Remember Me" />
              </Form.Group>
              <Button variant="light" type="submit" block>
                Submit
              </Button>
            </Form>
          </StyledContainer>
          <DontHaveAccount>
            Don't have an account? Sign up here!
          </DontHaveAccount>
        </FormContainer>
      </OuterDiv>
    </Wrap>
  )
}

export default SignInComponent