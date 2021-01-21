import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { StyledNavtext, Wrap, StyledNav } from './styles'

const HeaderComponent = () => {
  return (
    <Wrap>
    <Navbar expand="lg">
      <StyledNavtext href="#home">Movies</StyledNavtext>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <StyledNav as= {Link} to='/'>Home</StyledNav>
          <StyledNav  as= {Link} to='/movies'>Movies</StyledNav>
          <StyledNav  as= {Link} to='/signup'>SignUp</StyledNav>
          <StyledNav  as= {Link} to='/login'>SignIn</StyledNav>
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
