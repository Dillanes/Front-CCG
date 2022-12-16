import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    omcnivel1:null,
    omcnivel2:null,
    omcnivel3:null,
    omcnivel4:null,
    omcnivel5:null,
    omcnivel6:null,
    omcnivel7:null,
    registroSelect:null

} 

const omc23LevelsSlice = createSlice({
    name:"omc23Levels",
    initialState: initialState,
    reducers:{

        getAllLevel1:(state,actions)=> {
                state.omcnivel1 = actions.payload
        },
        getAllLevel2:(state,actions)=> {
            state.omcnivel2 = actions.payload
        },
        getAllLevel3:(state,actions)=> {
            state.omcnivel3 = actions.payload
        },   
        getAllLevel4:(state,actions)=> {
            state.omcnivel4 = actions.payload
        },
        getAllLevel5:(state,actions)=> {
            state.omcnivel5 = actions.payload
        },
        getAllLevel6:(state,actions)=> {
            state.omcnivel6 = actions.payload
        },
        getAllLevel7:(state,actions)=> {
            state.omcnivel7 = actions.payload
        },
        setRegister:(state,actions)=>{
            state.registroSelect = actions.payload
        }
        
    }
})


export const {getAllLevel1,
                getAllLevel2,
                getAllLevel3,
                getAllLevel4,
                getAllLevel5,
                getAllLevel6,
                getAllLevel7,setRegister} = omc23LevelsSlice.actions;

export default omc23LevelsSlice.reducer;