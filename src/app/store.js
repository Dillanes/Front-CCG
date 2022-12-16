import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../reducers/messageReducer";
import authReducer from "../reducers/authReducer";
import omc23LevelsReducer from "../reducers/omc23LevelsReducer";
import concretoPremezcladoReducer from "../reducers/concretoPremezcladoReducer";
import carritoCompras from "../reducers/carritoCompras";
import concretoReducer from "../reducers/concretoReducer";

const store = configureStore({
    reducer:{
        message: messageReducer,
        auth: authReducer,
        omc23Leves: omc23LevelsReducer,
        concretoPremezclado:concretoPremezcladoReducer,
        carrito: carritoCompras,
        concreto:concretoReducer
    }
}) 


export default store