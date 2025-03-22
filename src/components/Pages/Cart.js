import React from 'react'
import CardProducts from '../CardProducts'
import Payments from '../Payments'

const Cart = () => {
   
  return (
    <div className='Container-products '>
        <CardProducts/>
        <Payments/>
    </div>
  )
}

export default Cart