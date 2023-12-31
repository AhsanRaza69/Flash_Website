import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../type";

interface storeState {
    ProductData : Products[]
    userInfo : null | string
   
}
const initialstate:storeState={
    ProductData:[],
    userInfo:null,
   
}

export const ShopSlice = createSlice({
    name:'Shop',
    initialState: initialstate,
    reducers:{
        addToCart:(state,action)=>{
           console.log("added")
           state.userInfo= "Sd"
        }    
    }
})

export const {addToCart} = ShopSlice.actions
export default ShopSlice.reducer