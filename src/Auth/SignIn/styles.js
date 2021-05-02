/* eslint-disable import/prefer-default-export */
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

export const LoginText = styled.div`
  color: white;
  font-size: 30px;
  margin-top: 30px;
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
    width: 500px;
    height: 100vh;
  }

  @media only screen and (max-width: 600px) {
    width: 350px;
    height: 91.5vh;
  }
`

export const FormContainer = styled.div`
  width: 400px;
  height: 400px;
  background-image: linear-gradient(darkslateblue, mediumorchid);

  
  @media only screen and (max-width: 768px) {
    width: 500px;
    height: 500px;
  }

  @media only screen and (max-width: 600px) {
    width: 350px;
    height: 400px;
  }
`

export const StyledContainer = styled(Container)`
  margin-top: 30px;
`

export const FormInput = styled(FormControl)`
  background: transparent;
  color: white;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0px;
`

export const DontHaveAccount = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
  margin-top: 50px;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
    margin-top: 90px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    margin-top: 70px;
  }
`

export const CheckboxText = styled(FormCheck)`
  color: white;
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
