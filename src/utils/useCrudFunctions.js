// import axios from "axios";
// import { BASEURL,config } from "../config/configApis";
// import {CustomMessage} from '../utils/CustomMessage'
// import {resetMessage,setMessage} from '../reducers/messageReducer'



//     export const getAction = (url,id,dispatch,ActionF)=>{
//         if(this.id){
//             axios.get(`${BASEURL}${this.url}/${this.id}/`,config)
//             .then(res=>{
//                 return res
//             })
//             .catch(err => {
//                 dispatch(setMessage(CustomMessage(err.response)))
//                 setTimeout(() => {
//                     dispatch(resetMessage())
//                 }, 5000)
//             })
//         }  

//         axios.get(`${BASEURL}${this.url}/`,config)
//             .then(res=>{
//                 return res
//             })
//             .catch(err => {
//                 dispatch(setMessage(CustomMessage(err.response)))
//                 setTimeout(() => {
//                     dispatch(resetMessage())
//                 }, 5000)
//             })

//     }


//     export const postAction = async(url,body)=>{
    
//         axios.get(`${BASEURL}${url}`,body)
//         .then(res=>{
//             console.log('dsfdsfdsf',res)
//             return res
//         })
//         .catch(err => {
//             console.log('ERROR DEL CRUD FUNCTION',err)
//             console.log('fdsafdf',err)
//             return err
//             dispatch(setMessage(CustomMessage(err.response)))
//             setTimeout(() => {
//                 dispatch(resetMessage())
//             }, 5000)
//         })
//     }


//    export const putAction =  (url,id,body,dispatch)=>{
//         axios.get(`${BASEURL}${this.url}/${this.id}/`,this.body,config)
//         .then(res=>{
//             return res
//         })
//         .catch(err => {
//             dispatch(setMessage(CustomMessage(err.response)))
//             setTimeout(() => {
//                 dispatch(resetMessage())
//             }, 5000)
//         })
//     }


//     export const deleteAction = (url,id,dispatch)=>{
//         axios.get(`${BASEURL}${this.url}/${this.id}/`,config)
//         .then(res=>{
//             return res
//         })
//         .catch(err => {
//             dispatch(setMessage(CustomMessage(err.response)))
//             setTimeout(() => {
//                 dispatch(resetMessage())
//             }, 5000)
//         })
//     }

