import React from 'react'
import { Navbar as NavBoot, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Cart from '../pages/Cart'

export default function Navbar() {
  return (
    <NavBoot bg="light" variant="light" sticky='top'>
      <Container>
        <Nav className="me-auto">
          <Nav.Link to='/' as={NavLink}>Clothing</Nav.Link>
          <Nav.Link to='/about' as={NavLink}>About Me</Nav.Link>
        </Nav>
      </Container>
      <Cart />
    </NavBoot>
  )
}
