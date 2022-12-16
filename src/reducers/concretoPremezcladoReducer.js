import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    concretoPremezclado:null,

} 

const concretoPremezcladoSlice = createSlice({
    name:"concretopremezclado",
    initialState: initialState,
    reducers:{
        getConcretosPremez:(state,actions)=> {
                state.concretoPremezclado = actions.payload
        
        },
        
    }})


export const {getConcretosPremez,addCompras} = concretoPremezcladoSlice.actions;

export default concretoPremezcladoSlice.reducer;