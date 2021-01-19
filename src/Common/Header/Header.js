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
          <NavDropdown title="Genres" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Comedy
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Animation</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
          </NavDropdown>
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
