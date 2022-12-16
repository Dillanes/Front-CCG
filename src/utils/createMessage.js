

/**
 * 
 * @param {Number} state Recive un codigo de estado HTTP 
 * @param {string} msg  Mensaje ha mostrar
 * @returns  Mensaje creado
 */
export const createMessage = (status=200,msg = "Correcto")=>{
    const response = {
        status,
        data:{
            detail:[
                {
                    msg
                }
            ]
        }
    }


    return response
}