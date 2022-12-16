import React from 'react'
import logo from '../../static/logoG.png'
import style from './info.module.css'

function Info() {
  return (
    <div className={style.containerInfo}>
        <div className={style.textInfo}>Una Iniciativa de:</div>
        <img className={style.logoInfo} src={logo} alt='ImgLogo.png'/>
    </div>
  )
}

export default Info