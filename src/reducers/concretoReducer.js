import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resistenciaCompresion:null,
    moduloElasticidad:null,
    edadResistencia:null,

}

const concretoSlice = createSlice({
    name:"concreto",
    initialState:initialState,
    reducers:{
        setResistenciaCompresion:(state,actions)=>{
            state.resistenciaCompresion = actions.payload
        },
        setModuloElasticidad:(state,actions)=>{
            state.moduloElasticidad = actions.payload

        },
        setEdadResistencia:(state,actions)=>{
            state.edadResistencia = actions.payload
        }

    }
})



export const {setEdadResistencia,setModuloElasticidad,setResistenciaCompresion} = concretoSlice.actions;

export default concretoSlice.reducer;

