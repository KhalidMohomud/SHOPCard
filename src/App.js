import React, { useState } from 'react'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import  Cart  from  './components/Pages/Cart'
import './Header.css'
const App = () => {
      const [cart , SetCart]   = useState(5);
  return (
    <div className='container'>
        <Header  cart = {cart} SetCart  = {SetCart}/>

        <Routes>
          <Route  path='/' element= {<Home/>}/>
          <Route  path='/About' element= {<About/>}/>
          <Route  path='/Cart' element= {<Cart SetCart={SetCart} />}/>
            

        </Routes>
    </div>
  )
}

export default App