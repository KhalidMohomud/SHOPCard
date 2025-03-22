import React from 'react'

import { Link } from 'react-router-dom'
import useShop from '../ShopContext'

const Header = () => {
        const {products}       =useShop()
  return (
    <div className='menus'>
<Link  to='/' className='logo'> Khaalid </Link>

  <div className='items'>
    <Link to = '/'>Home</Link>
    <Link to = '/About'>About</Link>
    <Link to = '/contact'>contact</Link>
    <Link to = '/Cart'>Cart </Link>
  </div>
  <Link to = '/Cart'> <span className='card'>{products.length}</span></Link>
    </div>
    // <div className='menu'>
    //    <a href="">Logo</a>
    //    <ul>
    //     <li><a href="#">Home</a></li>
    //     <li><a href="About">About</a></li>
    //     <li><a href="contact">contact</a></li>
    //     <li><a href="Cart">Card</a></li>
           
    //    </ul>
    //    <a href="">{cart}</a>
    // </div>
  )
}

export default Header