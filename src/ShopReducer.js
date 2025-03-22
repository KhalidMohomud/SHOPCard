// import Products from "./components/Products";

export const intialState = {
products: [],
total: 0
};

const ShopReducer = (state , action) => {

 const {type , payload} = action;

 switch (type){
    case "ADD_TO_CART":
        return {
            ...state,
            products:payload.products,
        };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                products:payload.products,
            };

        default:
        throw  new console.error("UNknows redures");
        

 }


};

export default ShopReducer