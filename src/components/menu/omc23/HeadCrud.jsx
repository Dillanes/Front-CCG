import React from 'react'
import style from './headcrud.module.css'
import logo from '../../../static/constroLogo.jpg'
import image from '../../../static/imgConst.jpg'
function HeadCrud({registro}) {
  return (
    <div className={style.container}>
        <div className={style.containerLog}>
            <img className={style.logo} src={logo}></img>
        </div>
        <div className={style.containerP}>
            <strong>Pruduto:</strong>
            <br></br>
                {registro?.Description}
            </div>
        <div className={style.containerC}>
            <strong>Código Omniclass 23:</strong>
            <br></br>
            {registro?.omniclass}
        </div>

        <div className={style.containerImg}>
            <img className={style.imagen} src={image}>
            </img>
        </div>
    </div>
  )
}

export default HeadCrud