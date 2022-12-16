import {BASEURL} from '../config/configApis'
import {Login} from '../reducers/authReducer'
import axios from 'axios'
import { dispatchMessage } from '../utils/dispatchMessage'


export const LoginUser = (data)=> (dispatch) =>{
    axios.post(`${BASEURL}login`,data)
    .then( res => {
        window.localStorage.setItem('authToken',JSON.stringify(res?.data?.detail[0].data))
        dispatch( Login(res?.data?.detail[0].data))}) 
    .catch(err => {
            dispatchMessage(dispatch,err.response)
        })
}