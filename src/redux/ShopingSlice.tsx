import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../type";

interface storeState {
    ProductData : Products[]
    ShopCart:Products[]
    userInfo : null | string
        
   
}
const initialstate:storeState={
    ProductData:[],
    ShopCart:[],
    userInfo:null,
   
}

export const ShopSlice = createSlice({
    name:'Shop',
    initialState: initialstate,
    reducers:{

        getAllData:(state,action)=>{
            state.ProductData = action.payload
        } ,   
        addToCart:(state,action)=>{
            const existingProduct = state.ProductData.find((item:Products)=>item._id === action.payload._id
            )
            if(existingProduct){
                existingProduct.quantity += action.payload.quantity
            }else{
                state.ProductData.push(action.payload)
            }
                  
        } ,   
        delectCart:(state,action)=>{
            state.ProductData = state.ProductData.filter((item:Products)=>item._id !== action.payload)
        },
        increaseQuantity:(state,action)=>{
            const existingProduct = state.ProductData.find((item:Products)=>item._id === action.payload._id)
            existingProduct && existingProduct.quantity++
        },
        decreaceQuantity:(state,action)=>{
            const existingProduct = state.ProductData.find((item:Products)=>item._id === action.payload._id)
            if(existingProduct?.quantity ===1){
                existingProduct.quantity === 1
            }else{
                existingProduct && existingProduct.quantity--
            }
        },
        clearCart:(state)=>{
           state.ProductData = []
        },
    }
})

export const {
    getAllData,
    delectCart,
    addToCart,
    clearCart,
    increaseQuantity,
    decreaceQuantity,
} = ShopSlice.actions
export default ShopSlice.reducer