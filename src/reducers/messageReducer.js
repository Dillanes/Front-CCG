import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Icon:null,
    msg:'',
    color:'',
    show:false
}

const messageSlice = createSlice({
    name:"Messages",
    initialState:initialState,
    reducers:{
        setMessage: (state,actions)=>{
            state.color = actions.payload.color
            state.msg = actions.payload.msg
            state.Icon = actions.payload.Icon
            state.show = actions.payload.show
        },

        resetMessage:(state)=>{
            state.color = ''
            state.msg = ''
            state.Icon = null
            state.show = false
        }
    }
})


export const {setMessage,resetMessage} = messageSlice.actions
export default messageSlice.reducer