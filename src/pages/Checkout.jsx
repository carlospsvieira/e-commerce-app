import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CheckoutForm from '../components/ProductsCategory/CheckoutForm';

export default function Checkout() {
  const [open, setOpen] = useState(false);

  return (
    <Container className='mt-5'>
      <Button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className='w-100'
        variant='outline-primary'
      >
        Checkout
      </Button>
      <Collapse in={open}>
        <div className='mt-4'>
          <CheckoutForm />
        </div>
      </Collapse>
    </Container>
  );
}
