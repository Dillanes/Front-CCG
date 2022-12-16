import {addItem,deleteAll,deleteItem} from '../reducers/carritoCompras'
import { createMessage } from '../utils/createMessage'
import { dispatchMessage } from '../utils/dispatchMessage'


export const agregarItem = (data)=> (dispatch)=>{
    if(!window.confirm('Deseas agregar este producto al carrito?')){
        return
    }
    dispatch(addItem(data))
    setTimeout(() => {
        dispatchMessage(dispatch,createMessage(201,'Producto Agregado al Carrito'))
    }, 1000);

}