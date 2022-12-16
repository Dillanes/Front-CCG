

import {colorError,colorSuccess,colorWarning} from '../config/colorMesssage'
import {ErrorIcon,SuccessIcon,Warning} from '../config/iconMessage' 

/**
 * Crea el mensaje
 * @param {Object} data Resive la respuesta del llamado a la API
 * @returns 
 */
const createMessage = (data)=>{

    console.log('DETAIL data is undefine',data)

    const detail = data.data.detail[0]
    
    console.log('DETAIL',data)

    let Message = {
        Icon:null,
        msg:detail.msg,
        color:"",
        show:true
    }

    console.log('ESTATUS',data.status);
    if(data.status >= 400 && data.status !== 404){
        Message.color = colorError
        Message.Icon = ErrorIcon

    }

    if(data.status === 404){
        Message.color = colorWarning
        Message.Icon = Warning

    }


    if(data.status >= 200 && data.status < 300){
        Message.color = colorSuccess
        Message.Icon = SuccessIcon
    }




    console.log('MESSAGE',Message);
    return Message;


}



/**
 * Envia el Menaje para mostrar en la pantalla
 * @param {Object} data Resive la respuesta del llamado a la API 
 * @return {Object} Retorna el mensaje creado
 */


export const CustomMessage = (data)=>{
    
     const msgResult = createMessage(data)

     console.log(msgResult)
     return msgResult
}