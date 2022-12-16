import axios from "axios"
import { BASEURL } from "../config/configApis"
import { getConcretosPremez,addCompras } from "../reducers/concretoPremezcladoReducer"

import { dispatchMessage } from '../utils/dispatchMessage'


export const setConcretoPremezclado = (config)=> (dispatch)=>{
    axios.get(`${BASEURL}concretoPremezclado`,config)
    .then(res=>{
        dispatch(getConcretosPremez(res?.data?.detail[0].data))
    })
    .catch(err=>console.log(err))
}



export const registerConcretoPremezclado = (config,data)=> (dispatch)=>{
    console.log('CONFIG ', config);
    axios.get(`${BASEURL}concretoPremezclado`,data,config)
    .then(res=>{
        dispatchMessage(dispatch,res)
        setTimeout(() => {
            dispatch(setConcretoPremezclado())
        }, 1000);
    })
    .catch(err=>{
        console.log(err);
        dispatchMessage(dispatch,err.response)})
}



export const deleteConcretoPremezclado = (config,id)=>(dispatch)=>{
    if(!window.confirm('Quieres eliminar este registro?')){
        return
    }

    axios.delete(`${BASEURL}concretoPremezclado/${id}`,config)
    .then(res=>{
        console.log(res);
        dispatchMessage(dispatch,res)
        setTimeout(() => {
            dispatch(setConcretoPremezclado())
        }, 1000);
    })
    .catch(err=>{
        console.log(err);
        dispatchMessage(dispatch,err.response)})
}

