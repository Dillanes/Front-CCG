import React from 'react'
import {useSelector} from "react-redux"
import HeadCrud from './HeadCrud'
import TableCrud from './TableCrud'
import FormularioAddConcreto from './FormularioAddConcreto'


function Omc23Crud() {
  const {registroSelect} = useSelector(state=> state.omc23Leves)
  
  console.log(registroSelect)
  return (
    <div style={{width:"80%",margin:"auto"}}>
      <HeadCrud registro={registroSelect}/>
      <hr></hr>
      <TableCrud/>
      <hr/>
      <FormularioAddConcreto registro={registroSelect}/>

    </div>
  )
}

export default Omc23Crud