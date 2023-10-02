import { configureStore } from "@reduxjs/toolkit";
import totalCart from '../states/reducers/Storeitems';
import productDeatils from '../states/reducers/productDetails'
import totalValue from "../states/reducers/total";
export default configureStore({
    reducer:{

        cartItems: totalCart,
        itemDetails: productDeatils,
        totalAmount: totalValue,
        
    }
})