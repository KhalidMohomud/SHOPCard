
import { useState , useEffect} from 'react';
import useShop from '../ShopContext';

const Product = ({product}) => {

    
    
            const {addToCart , deleteFromCart ,products,total}  = useShop();
            const [isInCard , setisInCard]   = useState(false);

            // useEffect(() => {
            //     const productInCart = products.filter(p => p.id === product.id);
            //     setisInCard(productInCart);
            //   }, [products, product.id]);

              useEffect(()=>{
                  const IsCard  =  products.filter(p => p.id == product.id)
                  console.log(IsCard);
                    if(IsCard.length > 0){
                        setisInCard(true);
                    }else{
                        setisInCard(false);
                    }
              }, [products]);
     const Handlechange =()=> {
          
        deleteFromCart(product)
        if(isInCard){
            deleteFromCart(product)
            
        }else{
            addToCart(product);
        }
          
        // console.log(products);
       
    }
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

         {/* <button className= {` btn ${isInCard? 'btn-primary' :  'btn-secondary' }`} 
         onClick={Handlechange}>
             {isInCard ? '-': '+'}
             </button> */}

<button
        className={`btn ${isInCard ? 'btn-primary' : 'btn-secondary'}`}
        onClick={Handlechange}
      >
        {isInCard ? '-' : '+'}
      </button>
      

     </div>
   
  )
}

export default Product





// import { useState, useEffect } from 'react';
// import useShop from '../ShopContext';

// const Product = ({ product }) => {
//   const { addToCart, deleteFromCart, products } = useShop();
//   const [isInCard, setIsInCard] = useState(false);

//  // useEffect to update `isInCard` when `products` change
//   useEffect(() => {
//     const productInCart = products.some(p => p.id === product.id);
//     setIsInCard(productInCart);
//   }, [products, product.id]);

//   const handleChange = () => {
//     if (isInCard) {
//       deleteFromCart(product); // Remove from cart
//     } else {
//       addToCart(product); // Add to cart
//     }
//   };

//   return (
//     <div
//       className="cards"
//       style={{
//         minHeight: "100%",
//         background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${product.image})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="info">
//         <span>{product.name}</span>
//         <span>{product.price}</span>
//       </div>

//       <button
//         className={`btn ${isInCard ? 'btn-primary' : 'btn-secondary'}`}
//         onClick={handleChange}
//       >
//         {isInCard ? '-' : '+'}
//       </button>
//     </div>
//   );
// };

// export default Product;
