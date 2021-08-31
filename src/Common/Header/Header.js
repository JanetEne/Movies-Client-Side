import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getIsAuth } from '../../Store/auth/selectors'
import { StyledNavtext, StyledNav, StyledButton } from './styles'

const HeaderComponent = () => {
  const isAuth = useSelector(getIsAuth)

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <StyledNavtext href="#home">Movies</StyledNavtext>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <StyledNav as={Link} to='/'>Home</StyledNav>
          <StyledNav as={Link} to='/movies'>Movies</StyledNav>
          {!isAuth && <StyledNav as={Link} to='/signup'>SignUp</StyledNav>}
          {!isAuth && <StyledNav as={Link} to='/login'>SignIn</StyledNav>}
          {isAuth && <StyledNav as={Link} to='/movie/add'>Add a Movie</StyledNav>}
          {isAuth && <StyledNav as={Link} to='/my-movies'>My Movies</StyledNav>}
          {isAuth && <StyledNav as={Link} to='/logout'>Logout</StyledNav>}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <StyledButton variant="outline-success">Search</StyledButton>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeaderComponent
