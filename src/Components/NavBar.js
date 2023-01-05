import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container style={{backgroundColor:"#909090"}}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home Page</Nav.Link>
            <Nav.Link as={Link} to="/movies">More details about the movie</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar