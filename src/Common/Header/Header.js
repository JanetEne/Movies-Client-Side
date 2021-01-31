import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getIsAuth } from '../../store/auth/selectors'
import { StyledNavtext, Wrap, StyledNav } from './styles'

const HeaderComponent = () => {
  const isAuth = useSelector(getIsAuth)

  return (
    <Wrap>
    <Navbar expand="lg">
      <StyledNavtext href="#home">Movies</StyledNavtext>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <StyledNav as= {Link} to='/'>Home</StyledNav>
          <StyledNav  as= {Link} to='/movies'>Movies</StyledNav>
          {!isAuth && <StyledNav  as= {Link} to='/signup'>SignUp</StyledNav>}
          {!isAuth && <StyledNav  as= {Link} to='/login'>SignIn</StyledNav>}
          {isAuth && <StyledNav  as= {Link} to='/logout'>Logout</StyledNav>}
          <StyledNav  as= {Link} to='/movie/add'>Add a Movie</StyledNav>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </Wrap>
  )
}

export default HeaderComponent
