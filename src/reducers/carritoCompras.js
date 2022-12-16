import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    carrito:[]
}


const carritoSlice = createSlice({
    name:"carrito",
    initialState: initialState,
    reducers:{
        addItem:(state,actions)=>{
            state.carrito = [...state.carrito,actions.payload]
        },

        deleteItem:(state,actions)=>{
            state.carrito = state.carrito.filter(item=>item._id !== actions.payload)
        },

        deleteAll:(state)=>{
            state.carrito = []
        }
    }
})


export const {addItem,deleteAll,deleteItem} = carritoSlice.actions;

export default carritoSlice.reducer;