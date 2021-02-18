import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, withRouter, Redirect } from 'react-router-dom'
import {
  Wrap,
  LoginText,
  OuterDiv,
  FormContainer,
  StyledContainer,
  FormInput,
  DontHaveAccount,
  CheckboxText,
  StyledFormContainer,
  Icon
} from './styles'
import { faEye } from "@fortawesome/free-solid-svg-icons"

class SignInComponent extends React.Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { loginUser, history } = this.props
    const { email, password } = this.state
    const user = { email, password }
    loginUser(user, history)
  }

  togglePasswordVisiblity = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword});
  }

  render() {
    const eye = <Icon icon={faEye} />
    const { email, password, showPassword } = this.state
    const { isAuth } = this.props
    if (isAuth) return <Redirect to="/movies" />
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

                <StyledFormContainer controlId="formBasicPassword">
                  <FormInput
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleInputChange}
                  />
                  <i onClick={this.togglePasswordVisiblity}>{eye}</i>
                </StyledFormContainer>
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

export default withRouter(SignInComponent)
