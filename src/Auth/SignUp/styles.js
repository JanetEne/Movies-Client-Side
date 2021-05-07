import styled from '@emotion/styled'
import { Container, FormControl, FormCheck, FormGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`

export const SignupText = styled.div`
  color: white;
  font-size: 30px;
  margin-top: 20px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`

export const OuterDiv = styled.div`
  width: 400px;
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 550px;
    height: 93vh;
  }

  @media only screen and (max-width: 600px) {
    width: 350px;
    height: 91.5vh;
  }
`

export const FormContainer = styled.div`
  width: 400px;
  height: 500px;
  background-image: linear-gradient(darkslateblue, mediumorchid);

  @media only screen and (max-width: 768px) {
    width: 550px;
    height: 560px;
  }

  @media only screen and (max-width: 600px) {
    width: 350px;
    height: 460px;
  }
`

export const StyledContainer = styled(Container)`
  margin-top: 20px;
`

export const BottomText = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
  margin-top: 12px;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
    margin-top: 70px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin-top: 12px;
  }
`
export const FormInput = styled(FormControl)`
  background: transparent;
  color: white;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0px;
`

export const CheckboxText = styled(FormCheck)`
  color: white;
`

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-bottom: 8px;
`

export const StyledFormContainer = styled(FormGroup)`
  position: relative;
  display: flex;
  margin-bottom: 14px;
`

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 34%;
  right: 5%;

  &:hover {
    color: mediumorchid;
    cursor: pointer;
  }
`
