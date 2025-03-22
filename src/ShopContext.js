// import { createContext, useContext, useReducer } from "react";
// import ShopReducer, { intialState } from "./ShopReducer";

// // Create context
// const ShopContext = createContext();

// export const ShopProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(ShopReducer, intialState);

//   const addToCart = (product) => {
//     // Fix the typo: concat instead of cocat
//     const updatedProducts = state.products.concat(product);

//     dispatch({
//       type: "ADD_TO_CART",
//       payload: {
//         products: updatedProducts,  
//       },
//     });

// };
  
//   const   deleteTOCart=(product) =>{
//     const Deleteproducts=state.products.filter(p => p.id  !==  product.id);

//         dispatch({
//             type: "REMOVE_FROM_CART",
//             payload: {
//                 products: Deleteproducts,
//             },

//         });
//     };

//   const values = {
//     products: state.products,
//     total: state.total,
//     addToCart,
//     deleteTOCart,
    
//   };

//   return <ShopContext.Provider value={values}>
//     {children}
//     </ShopContext.Provider>;
// };

// const useShop = () => {
//   const context = useContext(ShopContext);
//   if (context === undefined) {
//     throw new Error("useShop must be used within a ShopProvider");
//   }
//   return context;
// };

// export default useShop;


// intialState


import { createContext, useContext, useReducer } from "react";
import ShopReducer, {intialState  } from "./ShopReducer"; // Fixed typo for initialState

// Create context
const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShopReducer, intialState); // Fixed typo for initialState

  const addToCart = (product) => {
    const updatedProducts = state.products.concat(product); // Adds the product to the cart

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProducts,  
      },
    });
  };

  const deleteFromCart = (product) => { // Renamed deleteTOCart to deleteFromCart for consistency
    const updatedProducts = state.products.filter(p => p.id !== product.id); // Filter out the product

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedProducts, // Dispatch the updated products array
      },
    });
  };

  const values = {
    products: state.products,
    total: state.total,
    addToCart,
    deleteFromCart, // Exported the correct function
  };

  return (
    <ShopContext.Provider value={values}>
      {children}
    </ShopContext.Provider>
  );
};

const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};

export default useShop;











// import  {  useReducer,useContext, createContext} from "react";
// import ShopReducer, {intialState } from "./ShopReducer";






// const ShopContext = createContext(intialState);

//  export const ShopProvider  = ({children}) =>{
    

//         const [state , dispatch]   = useReducer(ShopReducer , intialState);

//    const addToCart = (product) =>{
//             const updateProduct  =  state.products.concat(product);

//             dispatch({
//                 type: "ADD_TO_CART",
//                 payload: {
//                     Products: updateProduct
//                 }
//             })
//         }
//            const values = {
//             products: state.products,
//             total: state.total,
//             addToCart
//            }
//         return <ShopContext.Provider value = {values}>
//             {children}
//         </ShopContext.Provider>
// }

// const useShop = ()=>{
//     const  context = useContext(ShopContext)
//   if(context === undefined){
//     throw new Error("context must be use inside");
//   }
//    return context

// }
// export default useShop;

