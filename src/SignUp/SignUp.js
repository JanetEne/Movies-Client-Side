import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  FormContainer,
  Wrap,
  OuterDiv,
  SignupText,
  StyledContainer,
  BottomText,
  FormInput,
  CheckboxText,
  ErrorMessage
} from './styles'

class SignupComponent extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkPassword: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleCheckPassword = () => {
    const { password, confirmPassword } = this.state
    this.setState({ checkPassword: password !== confirmPassword })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { addUser } = this.props
    const { firstName, lastName, email, password, confirmPassword } = this.state
    const newUser = { firstName, lastName, email, password, confirmPassword }
    this.handleCheckPassword()
    addUser(newUser)
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword, checkPassword } = this.state
    return (
      <Wrap>
        <OuterDiv>
          <FormContainer>
            <SignupText>Sign Up</SignupText>
            <StyledContainer>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <FormInput
                    type="email"
                    placeholder="Enter Firstname"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <FormInput
                    type="email"
                    placeholder="Enter Lastname"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
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
                <Form.Group controlId="formBasicPassword">
                  <FormInput
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                {checkPassword && <ErrorMessage>Passwords do not match!</ErrorMessage>}
                <Form.Group controlId="formBasicCheckbox">
                  <CheckboxText
                    type="checkbox"
                    label="I agree to the terms and conditions."
                  />
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
            <BottomText>
              Already have an account? <Link to="login"> Login here.</Link>
            </BottomText>
          </FormContainer>
        </OuterDiv>
      </Wrap>
    )
  }
}

export default SignupComponent
