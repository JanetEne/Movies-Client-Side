import styled from '@emotion/styled'
import { Container, FormControl, FormCheck } from 'react-bootstrap'

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`

export const SignupText = styled.div`
  color: white;
  font-size: 30px;
  margin-top: 20px;
  text-align: center;
`

export const OuterDiv = styled.div`
  width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const FormContainer = styled.div`
  width: 400px;
  height: 500px;
  background-image: linear-gradient(darkslateblue, mediumorchid);
`

export const StyledContainer = styled(Container)`
  margin-top: 20px;
`

export const BottomText = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
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
  color: white
`