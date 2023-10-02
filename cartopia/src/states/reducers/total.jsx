import { createSlice } from "@reduxjs/toolkit";

export const TotalSlice = createSlice({
    name:'total',
    initialState:0,
    reducers:{
        
        AddTotal:(state, action)=>{
           
            return state += action.payload.amount;
        },
        RemoveTotal:(state, action)=>{
            if(state <= 0 ){
                return 0
            }
            else{
                return state -= action.payload.amount;
            }
            
            
        }
    }
})


export const { AddTotal,RemoveTotal } = TotalSlice.actions;
export default TotalSlice.reducer;