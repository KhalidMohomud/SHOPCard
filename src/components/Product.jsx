import React from 'react'

const Product = ({product}) => {
  return (
     <div  className='cards'
     style={{
        minHeight: "100%",
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${product.image})`,
        backgroundSize: "cover", 
        backgroundRepeat: 'no-repeat'
      }}
      
   >
        <div className='info'>

            <span>{product.name}</span>
            <span>{product.price}</span>
        </div>

         <button className='btn btn-primary'>+</button>
      

     </div>
   
  )
}

export default Product