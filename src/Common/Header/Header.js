import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { StyledNavtext } from './styles'

const HeaderComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <StyledNavtext href="#home">Movies</StyledNavtext>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as= {Link} to='/'>Home</Nav.Link>
          <Nav.Link  as= {Link} to='/movies'>Movies</Nav.Link>
          <Nav.Link  as= {Link} to='/signup'>SignUp</Nav.Link>
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
  )
}

export default HeaderComponent
