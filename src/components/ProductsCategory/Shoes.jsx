import React, { useContext, useState } from 'react'
import products from '../../data/products.json'
import { Button, Card, CardImg, Collapse, Row } from 'react-bootstrap';
import { Context } from '../../data/Context';

export default function Shoes() {
  const { shoes } = products
  const [open, setOpen] = useState(false);
  const { cart } = useContext(Context)
  const [cartList, setCartList] = cart
  console.log("🚀 ~ file: Shoes.jsx:11 ~ Shoes ~ cartList", cartList)

  const getItem = ({ target }) => {
    const { id } = target;
    const item = shoes.find((product) => product.id === id)
    const duplicate = cartList.some((product) => product.id === id)
    
    // add item to cart and count duplicates adding quantity //
    if (!duplicate) {
      item.quantity = 1;
      setCartList([...cartList, item])

    } else {
      item.quantity += 1;
      const newList = cartList.filter((product) => product.id !== item.id)
      setCartList([...newList, item])
    }
  }


  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className='w-100 mb-3'
        variant='light'
        style={{ border: '1px solid lightgrey' }}
      >
        Shoes | 👟
      </Button>
      <Collapse in={open}>
        <Row>
          {shoes.map(({ title, id, img_url, price }) => (
            <Card key={id} className='mb-3'>
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
                  id={id}
                  onClick={ getItem }
                >
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Collapse>
    </>
  )
}
