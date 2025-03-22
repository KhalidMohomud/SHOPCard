import React from 'react'
import useShop from '../ShopContext'

const CardProducts = () => {
    const {deleteFromCart ,products,total}= useShop();
  return (
    <div className="Cart-products">
        <h2>Cart Products</h2>
        {products.map((product)=> (
             <div className="cart-pro">
                <div className="cart-title-umg">
                    <img src={product.image} alt=""  />
                    <span>{product.name}</span>
                </div>
                <h5>{product.price}</h5>
                <span className='delete'  onClick={()=> deleteFromCart(product)}>DELETE</span>

                 
             </div>

                    
                 
             
        )
        
        )}
           <div>
                 <h5 className='total'>Totalprice:${total}</h5>
                 </div>
    </div>
  )
}

export default CardProducts