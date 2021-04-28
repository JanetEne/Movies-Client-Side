import styled from '@emotion/styled'

export const Wrap = styled.div`
  background-color: black;
`

export const WelcomeText = styled.div`
  color: white;
  font-size: 50px;
  text-align: center;
  font weight: bold;
  font-family: Helvetica;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`

export const Text = styled.div`
  color: white;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Helvetica;

  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`
