import React from 'react'
import Messages from '../global/Messages'
import style from './form.module.css'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {LoginUser} from '../../actions/authActions'

function Form() {

  const {handleSubmit,reset,register} = useForm()
 const dispatch = useDispatch()
  const onSubmit = (data)=>{
    dispatch(LoginUser(data))
    reset()
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>

      <div className={style.header}>
        Login:
        <hr></hr>
      </div>

      <Messages/>

      <div >
        <div className={style.containerInput}>
          <label>Usuario:</label>
          <input className={style.input} type='txt' {...register('email',{required:true})} required placeholder='username...'></input>
        </div>
        <div className={style.containerInput}>
          <label>Contraseña:</label>
          <input className={style.input} {...register('password',{required:true})} type='password' required placeholder='password...'></input>
        </div>
      </div>

    <hr/>
      <div className={style.footer}>
        <input type='submit' value='Ingresar' className='buttonSubmit'/>
        <input type='submit' value='Registrarse' className='buttonRegister'/>
      </div>

    </form>
  )
}

export default Form