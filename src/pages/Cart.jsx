import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import cart_icon from '../../src/images/shopping-cart.png'
export default function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="light"
        onClick={handleShow}
        className="me-2"
        style={{ border: '1px solid lightgrey', position: 'relative' }}
      >
        <img src={cart_icon} alt="cart" style={{ width: "2rem" }} />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
