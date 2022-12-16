import { createSlice } from "@reduxjs/toolkit"


export const  initialState = {
    authToken: window.localStorage.getItem('authToken') !== "undefine" ? JSON.parse(window.localStorage.getItem('authToken')) : null
}


const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        Login:(state,actions)=>{
            state.authToken = actions.payload
        },

        Logout:(state)=>{
            state.authToken = null
            window.localStorage.removeItem('authToken')
        },
        
        exportState:(state)=>{
            return state.authToken
        }
    }
})

// export const selectTodos = state => state.authToken 

// console.log(selectTodos);

export const {Login,Logout,exportState} = authSlice.actions;
export default authSlice.reducer;