import React from 'react'
import style from './selectlevel.module.css'
function SelectLevel({data,tittle,id='default',selectLevel}) {

  return (
    <>{data&&<div className={style.container}>
        <div className='secundary-levels'>{tittle}:</div>
        <select  name={id} onChange={selectLevel}>
        <option select value='undefine'>Seleccionar...</option >
        {data&&data.map(item=>(
            <option  key = {item._id} >{item.Description}</option >
        ))
        }
        </select>
    </div>}
    </>
    

  )
}

export default SelectLevel