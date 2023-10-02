import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:'noitems',
    initialState:0,
    reducers:{
        AddItems:(state, action)=>{
            return state += action.payload.quantity
        },
        RemoveItems:(state, action)=>{
            if(state<1){
                return state
            }
            return state -=1
        },
        RemoveAll:(state,action)=>{
            return state -= action.payload.quantity
        }
    }
})


export const { AddItems,RemoveItems,RemoveAll } = CartSlice.actions;
export default CartSlice.reducer;