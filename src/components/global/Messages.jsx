import React from 'react'
import {useSelector} from 'react-redux'
import style from './message.module.css'

function Messages() {
    
const {Icon,msg,color,show}  = useSelector(state=> state.message)

let stylesIsert = {
        backgroundColor:color,
    }

  return (
    <>
        {show?(<div className={style.msg} style={stylesIsert}>
        <p style={{display:"flex", gap:"10px",color:"#fff"}}>
            {Icon&&<Icon style={{color:"#fff"}} /> }
            {msg}
        </p>
    </div>):(null)}
    </>
    
  )
}


export default Messages