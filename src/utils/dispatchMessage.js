import {CustomMessage} from '../utils/CustomMessage'
import {resetMessage,setMessage} from '../reducers/messageReducer'

/**
 * 
 * @param {Function} dispatch Dispenzador de reduxToolKit 
 * @param {*} response res. respones || err.response (resultado del llamado a la api)
 */
export const dispatchMessage  = (dispatch,response)=>{
    dispatch(setMessage(CustomMessage(response)))
    setTimeout(() => {
        dispatch(resetMessage())
    }, 6000)
}
