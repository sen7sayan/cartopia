import { createSlice } from "@reduxjs/toolkit";


export const ProductSlice = createSlice({

    name:'product',
    initialState:[],
    reducers:{
        AddProduct:(state, action)=>{
            
            let itemno = -1;
            for(let i=0;i<state.length;i++){
                if(state[i].id === action.payload.id){
                    itemno = i
                }
            }
            if(itemno !== -1){
                state[itemno].quantity += action.payload.quantity; 
            }else{
                state.push(action.payload)
            }
        },
        RemoveProduct:(state, action)=>{
            let temp = -1;
            for(let i=0;i<state.length;i++){
                if(action.payload.id === state[i].id){
                        temp = i;
                }
            }
            if(temp !== -1){
                state.splice(temp,1);
            }
            
        },
        DecProduct:(state, action)=>{
            for(let i=0;i<state.length;i++){
                if(action.payload.id === state[i].id && state[i].quantity>0){
                    state[i].quantity -= 1
                }
            }
            
        }
    }
})


export const { AddProduct,RemoveProduct,DecProduct } = ProductSlice.actions;
export default ProductSlice.reducer;