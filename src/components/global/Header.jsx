import React from 'react'
import imgHeader from '../../static/header.png'
import style from './header.module.css'
import {BiExit} from 'react-icons/bi'
import {AiFillShopping} from 'react-icons/ai'
import {useSelector} from 'react-redux'
import { Logout } from '../../reducers/authReducer'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Header() {
  const {authToken} = useSelector(state => state.auth)
  const {carrito} = useSelector(state => state.carrito)

  const dispatch = useDispatch()
  let navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <header className={style.container}>
      {authToken&&<div className={style.navBar}><div className={style.containerIcon}>Salir <BiExit style={{cursor:"pointer"}} onClick={(e)=>{handleClick();dispatch(Logout())}}/> | 
      <div style={{position:"relative"}}>Compras <AiFillShopping style={{cursor:"pointer"}}/> {carrito.length>0&&<div style={{position:"absolute",width:'20px',fontWeight:'800',fontFamily:"monospace", top:'-5px',right:"-5px",height:"20px",backgroundColor:"#c22",color:"#fff",borderRadius:"50%",fontSize:"10px",display:"grid",placeContent:"center"}}>{carrito.length}</div>}</div> </div></div>}
        <img className={style.imgHead} src={imgHeader} alt='fongo.png'></img>
    </header>
  )
}

export default Header