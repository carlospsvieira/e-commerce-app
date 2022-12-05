import React, { useContext } from 'react'
import { Button, Container, Stack } from 'react-bootstrap'
import { Context } from '../data/Context'
import Checkout from '../pages/Checkout'

export default function CartList() {
  const { cart } = useContext(Context)
  const [cartList, setCartList] = cart

  // calculate cart items //
  const itemsPrice = cartList.map(({ price }) => price)
  const totalPrice = itemsPrice.reduce((partialSum, a) => partialSum + a, 0)

  // remove items from the cart //
  const removeItem = ({ target }) => {
    const { id } = target;
    const wanted = cartList.filter((product) => product.id !== id)
    setCartList(wanted)
  }

  const incrementQty = (id) => {
    const item = cartList.find((product) => product.id === id)
    item.quantity += 1;
    const newList = cartList.filter((product) => product.id !== item.id)
    setCartList([...newList, item])
  }

  const decrementQty = (id) => {
    const item = cartList.find((product) => product.id === id)
    item.quantity -= 1;
    const newList = cartList.filter((product) => product.id !== item.id)
    setCartList([...newList, item])
    if (item.quantity <= 0) {
      const wanted = cartList.filter((product) => product.id !== id)
      setCartList(wanted)
    }
  }

  return (
    <Container>
      <Stack gap={2}>
        {cartList.map((product, index) => (
          <div
            key={index}
            className='d-flex justify-content-between align-items-center'
            style={{ border: '1px solid lightgrey', borderRadius: '5px', maxWidth: '343px', maxHeight: '55px' }}
          >
            {/* product image and title */}
            <div className='d-flex align-items-center justify-content-between' style={{ minWidth: '160px' }}>
              <img src={product.img_url} alt={product.title}
                style={{ objectFit: 'cover', maxHeight: '50px', minWidth: '75px' }} />
              <span style={{ fontSize: '14px', alignSelf: 'center' }}>{product.title}</span>
            </div>

            {/* buttons plus and minus for quantity */}
            <div className='d-flex align-items-center justify-content-center'
              style={{ minWidth: '75px', border: '1px solid lightgrey', borderRadius: '5px' }}>
              <Button variant='outline' onClick={() => decrementQty(product.id)}
                style={{ fontSize: '20px', color: 'blue' }}>
                -
              </Button>
              <span style={{ fontSize: '14px' }}>{product.quantity}</span>
              <Button variant='outline' onClick={() => incrementQty(product.id)}
                style={{ fontSize: '20px', color: 'blue' }}>
                +
              </Button>
            </div>

            {/* price and remove button */}
            <div className='d-flex align-items-center justify-content-between'
              style={{ minWidth: '75px' }}>
              <span className='text-muted' style={{ fontSize: '14px' }}>{`$${product.price}`}</span>
              <Button variant='outline' style={{ fontSize: '20px', color: 'red' }}
                id={product.id} onClick={removeItem}>
                x
              </Button>
            </div>
          </div>
        ))}

        {/* condition for total price, otherwise, empty cart */}
        {cartList.length === 0 ? '🗑 Your cart is empty' : (
          <div className='d-flex justify-content-end'>
            <span style={{ marginRight: '0.5rem' }}>Total: </span>
            <span className='text-muted'>{`$${totalPrice}`}</span>
          </div>
        )}
      </Stack>
      <Checkout />
    </Container>
  )
}
