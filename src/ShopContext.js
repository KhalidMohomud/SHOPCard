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
//         products: updatedProducts,  // Fix the key to lowercase 'products'
//       }
//     });
//   };

//   const values = {
//     products: state.products,
//     total: state.total,
//     addToCart
//   };

//   return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
// };

// const useShop = () => {
//   const context = useContext(ShopContext);
//   if (context === undefined) {
//     throw new Error("useShop must be used within a ShopProvider");
//   }
//   return context;
// };

// export default useShop;










import  {  useReducer,useContext, createContext} from "react";
import ShopReducer, {intialState } from "./ShopReducer";






const ShopContext = createContext(intialState);

 export const ShopProvider  = ({children}) =>{
    

        const [state , dispatch]   = useReducer(ShopReducer , intialState);

   const addToCart    =  (product) =>{
            const updateProduct  =  state.products.cocat(product);

            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    Products: updateProduct
                }
            })
        }
           const values = {
            products: state.products,
            total: state.total,
            addToCart
           }
        return <ShopContext.Provider value = {values}>
            {children}
        </ShopContext.Provider>
}

const useShop = ()=>{
    const  context = useContext(ShopContext)
  if(context === undefined){
    throw new Error("context must be use inside");
  }
   return context

}
export default useShop;

