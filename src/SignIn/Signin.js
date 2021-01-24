import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  Wrap,
  LoginText,
  OuterDiv,
  FormContainer,
  StyledContainer,
  FormInput,
  DontHaveAccount,
  CheckboxText
} from './styles'

class SignInComponent extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { loginUser } = this.props
    const { email, password } = this.state
    const user = { email, password }
    loginUser(user)
  }

  render() {
    const { email, password } = this.state
    return (
      <Wrap>
        <OuterDiv>
          <FormContainer>
            <LoginText>Account Login</LoginText>
            <StyledContainer>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <FormInput
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <FormInput
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <CheckboxText type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button
                  variant="light"
                  type="submit"
                  block
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            </StyledContainer>
            <DontHaveAccount>
              Don't have an account? <Link to="/signup">Sign up here!</Link>
            </DontHaveAccount>
          </FormContainer>
        </OuterDiv>
      </Wrap>
    )
  }
}

export default SignInComponent
