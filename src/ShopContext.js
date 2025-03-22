
import { createContext, useContext, useReducer } from "react";
import ShopReducer, {intialState  } from "./ShopReducer"; // Fixed typo for initialState


// Create context
const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShopReducer, intialState); // Fixed typo for initialState

  const addToCart = (product) => {
  
    const updatedProducts = state.products.concat(product); // Adds the product to the cart
    CalcuteTotal (updatedProducts)
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProducts,  
      },
    });
  };

  const deleteFromCart = (product) => { // Renamed deleteTOCart to deleteFromCart for consistency
    
    const updatedProducts = state.products.filter(p => p.id !== product.id); // Filter out the product
     CalcuteTotal(updatedProducts);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedProducts, // Dispatch the updated products array
      },
    });
  };
        const CalcuteTotal  = (products)=> {
            let total = 0;
            products.forEach(pro => {
                 total += pro.price;
            });

            dispatch({
                type: "Calcute_price",
                payload: total
            });
              
        };

  const values = {
    products: state.products,
    total: state.total,
    addToCart,
    deleteFromCart, 
    CalcuteTotal
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






