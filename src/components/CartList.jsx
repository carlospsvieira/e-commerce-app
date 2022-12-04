import React, { useContext }from 'react'
import { Button, Container, Stack } from 'react-bootstrap'
import { Context } from '../data/Context'

export default function CartList() {
  const { cart } = useContext(Context)
  const [cartList, setCartList] = cart

  const removeItem = ({target}) => {
    const { id } = target;
    const wanted = cartList.filter((product) => product.id !== id)
    setCartList(wanted)
  }

  return (
    <Container>
      <Stack>
        { cartList.map((product, index) => (
          <div
            key={index}
            className='d-flex justify-content-between align-items-center'
          >
          <img src={product.img_url} alt={product.title} width='100px' style={{ objectFit: 'cover' }}/>
          <span>{product.title}</span>
          <span className='text-muted'>{`$${product.price}`}</span>
          <Button
            variant='outline-danger'
            style={{ fontSize: '15px'}}
            id={product.id}
            onClick={ removeItem }
          >
            x
          </Button>
          </div>
        )) }
      </Stack>
    </Container>
  )
}
