import React, { useContext }from 'react'
import { Container, Stack } from 'react-bootstrap'
import { Context } from '../data/Context'

export default function CartList() {
  const { cart } = useContext(Context)
  const [cartList, setCartList] = cart

  return (
    <Container>
      <Stack>
        { cartList.map((product, index) => (
          <div key={index}>
          <img src={product.img_url} alt={product.title} width='100px' style={{ objectFit: 'cover' }}/>
          <span>{product.title}</span>
          <span>{`$${product.price}`}</span>
          </div>
        )) }
      </Stack>
    </Container>
  )
}
