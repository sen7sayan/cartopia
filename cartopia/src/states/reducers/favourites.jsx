import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name:'favourite',
    initialState:[],
    reducers:{
        AddFavourite:(state, action)=>{
            return [...state, action.payload]
        },
        RemoveFavourite:(state, action)=>{
            if(state<1){
                return state
            }
        }
    }
})


export const { AddItems,RemoveItems } = ProductSlice.actions;
export default ProductSlice.reducer;