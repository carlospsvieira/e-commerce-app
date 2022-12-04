import React, { useContext, useState } from 'react'
import products from '../../data/products.json'
import { Button, Card, CardImg, Collapse, Row } from 'react-bootstrap';
import { Context } from '../../data/Context';

export default function Shoes() {
  const { shoes } = products
  const [open, setOpen] = useState(false);
  const [validation, setValidation] = useState(false)
  const [btnText, setBtnText ] = useState('Add To Cart')
  const { cart } = useContext(Context)
  const [cartList, setCartList] = cart

  const getItem = (id) => {
    const item = shoes.find((shoe) => shoe.id === id)
    setCartList([...cartList, item])
  }

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className='w-100'
        variant='light'
        style={{ border: '1px solid lightgrey' }}
      >
        Shoes | 👟
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
                <Button
                  className='w-100'
                  onClick={() => getItem(id)}
                  disabled={ validation }
                >
                  {btnText}
                </Button>
              </Card.Body>
            </Card>
          )) }
        </Row>
      </Collapse>
    </>
  )
}
