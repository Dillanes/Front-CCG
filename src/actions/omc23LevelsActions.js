import axios from "axios";
import { BASEURL} from '../config/configApis'
import {getAllLevel1,
        getAllLevel2,
        getAllLevel3,
        getAllLevel4,
        getAllLevel5,
        getAllLevel6,
        getAllLevel7} from '../reducers/omc23LevelsReducer'
/**
 * 
 * LLamar todos los datos de los distintos niveles de omniclass23
 */



export const getLevele1 = (config) => (dispatch)=> {
    console.log('Este es els estado inicial',config)
    axios.get(`${BASEURL}omniclasNivel1/`,config)
    .then(res =>{
        dispatch(getAllLevel1(res?.data?.detail[0].data))
    })
    .catch(err=>console.log(err))
}

export const getLevele2 = (config) => (dispatch)=> {
    axios.get(`${BASEURL}omniclasNivel2/`,config)
    .then(res =>{
        dispatch(getAllLevel2(res?.data?.detail[0].data))
    })
    .catch(err=>console.log(err))
}

export const getLevele3 = (config) => (dispatch)=> {

    axios.get(`${BASEURL}omniclasNivel3/`,config)
    .then(res =>{
        dispatch(getAllLevel3(res?.data?.detail[0].data))
    })
    .catch(err=>console.log(err))
}

export const getLevele4 = (config) => (dispatch)=> {
    axios.get(`${BASEURL}omniclasNivel4/`,config)
    .then(res =>{
        dispatch(getAllLevel4(res?.data?.detail[0].data))
    })
    .catch(err=>console.log(err))
}


export const getLevele5 = (config) => (dispatch)=> {
    axios.get(`${BASEURL}omniclasNivel5/`,config)
    .then(res =>{
        dispatch(getAllLevel5(res?.data?.detail[0].data))
    })
    .catch(err=>console.log(err))
}

export const getLevele6 = (config) => (dispatch)=> {
    axios.get(`${BASEURL}omniclasNivel6/`,config)
    .then(res =>{
        dispatch(getAllLevel6(res?.data?.detail[0].data))
    })
    .catch(err=>console.log(err))
}


export const getLevele7 = (config) => (dispatch)=> {
    axios.get(`${BASEURL}omniclasNivel7/`,config)
    .then(res =>{
        dispatch(getAllLevel7(res?.data?.detail[0].data))
    })
    .catch(err=>console.log(err))
}



