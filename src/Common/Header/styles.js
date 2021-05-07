/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled'
import { Navbar, Nav, Button } from 'react-bootstrap'

export const StyledNavtext = styled(Navbar)`
  font-weight: bold;
  font-size: 25px;
  font-family: Comic Sans MS;
  color: white;
`

export const StyledNav = styled(Nav)`
  color: white;
  font-size: 20px;
  margin-left: 15px;
  margin-top: 6px;

  &:hover {
    color: thistle;
    text-decoration: none;
  }
`

export const StyledButton = styled(Button)`
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`
