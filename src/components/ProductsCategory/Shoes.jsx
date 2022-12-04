import React, { useState } from 'react'
import { useContext } from 'react';
import { Button, Card, CardImg, Collapse, Row } from 'react-bootstrap';
import { Context } from '../../data/Context';

export default function Shoes() {
  const [open, setOpen] = useState(false);
  const products = useContext(Context)
  const { shoes } = products;

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Shoes
      </Button>
      <Collapse in={open}>
        <Row>
          { shoes.map(({ title, id, img_url, price}) => (
            <Card key={id}>
              <CardImg src={img_url} alt={title}
                variant='top'
                height='300px'
                style={{ objectFit: 'cover' }}
              />
              <Card.Body>
              <Card.Title
                  className='d-flex
                  justify-content-between
                  align-items-baseline'>
                  <span>{title}</span>
                  <span className='text-muted'>{`$${price}`}</span>
                </Card.Title>
              </Card.Body>
            </Card>
          )) }
        </Row>
      </Collapse>
    </>
  )
}
