import React from 'react'
import style from './login.module.css'
import Info from '../components/login/Info'
import Form from '../components/login/Form'



function Login() {
  return (
    <div className={style.container} >
        <Info/>
        <Form/>
    </div>
  )
}

export default Login