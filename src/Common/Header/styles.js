/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled'
import { Navbar, Nav } from 'react-bootstrap'

export const StyledNavtext = styled(Navbar)`
  font-weight: bold;
  font-size: 25px;
  font-family: Comic Sans MS;
  color: white;
`

export const Wrap = styled.div`
  background-color: black;
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
