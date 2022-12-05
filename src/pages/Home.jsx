import React from 'react'
import { Container } from 'react-bootstrap'
import Hats from '../components/ProductsCategory/Hats'
import Pants from '../components/ProductsCategory/Pants'
import Shirts from '../components/ProductsCategory/Shirts'
import Shoes from '../components/ProductsCategory/Shoes'

export default function Home() {
  return (
    <Container className='mt-5'>
      <Shoes />
      <Shirts />
      <Pants />
      <Hats />
    </Container>
  )
}
