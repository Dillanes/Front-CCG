import {setEdadResistencia,setModuloElasticidad,setResistenciaCompresion} from '../reducers/concretoReducer'
import { BASEURL } from '../config/configApis'
import axios from 'axios'


export const setApiEdadResistencia = (config) => (dispatch)=>{
    axios.get(`${BASEURL}edadResistencia/`,config)
    .then(res =>{
        dispatch(setEdadResistencia(res?.data?.detail[0].data))
    })
    .catch(err=>console.log(err))
}


export const setApiModuloElasticidad = (config) => (dispatch)=>{
    axios.get(`${BASEURL}moduloElasticidad/`,config)
    .then(res =>{
        dispatch(setModuloElasticidad(res?.data?.detail[0].data))
    })
    .catch(err=>console.log(err))
}


export const setApiResistenciaCompresion = (config) => (dispatch)=>{
    axios.get(`${BASEURL}resistenciaCompresion/`,config)
    .then(res =>{
        dispatch(setResistenciaCompresion(res?.data?.detail[0].data))
    })
    .catch(err=>console.log(err))
}