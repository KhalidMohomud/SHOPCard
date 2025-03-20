import Products from "./components/Products";

export const IntialState = {
Product: [],
Total: 0
};





const ShopReducer = (state , action) => {

 const {type , payload} = action;

 switch (type){
    case "ADD_TO_CART":
        return {
            ...state,
            Products:payload.Products,
        };

        default:
        throw  new console.error("UNknows redures");
        

 }


};

export default ShopReducer