import React, { useState, useContext } from 'react'
import { Button, Offcanvas } from 'react-bootstrap';
import cart_icon from '../../src/images/shopping-cart.png'
import CartList from '../components/CartList';
import { Context } from '../data/Context';

export default function Cart() {
  const [show, setShow] = useState(false);
  const { cart } = useContext(Context)
  const [cartList] = cart

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
        <div
          className='rounded-circle bg-primary d-flex
          justify-content-center align-items-center'
          style={{
            fontSize: '15px',
            color: 'white',
            width: '1.5rem',
            height: '1.5rem',
            position: 'absolute',
            bottom: 0,
            right: 0,
            transform: 'translate(25%, 25%)'
          }}
        >
          {cartList.length}
        </div>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Waiting For You 🛍</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartList />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
