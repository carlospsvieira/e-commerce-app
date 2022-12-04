import React from 'react'
import { Container } from 'react-bootstrap'
import Shoes from '../components/ProductsCategory/Shoes'

export default function Home() {
  return (
    <Container className='mt-5'>
      <Shoes />
    </Container>
  )
}
