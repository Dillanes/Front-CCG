import React,{useState,useEffect} from 'react'
import {GrAdd} from 'react-icons/gr'
import style from './formularioaddconcreto.module.css'
import {AiOutlineLine} from 'react-icons/ai'
import {useForm} from 'react-hook-form'
import {setApiEdadResistencia,setApiModuloElasticidad,setApiResistenciaCompresion} from '../../../actions/concretoActios'
import {useDispatch,useSelector} from 'react-redux'
import { config } from '../../../config/configApis'
import {registerConcretoPremezclado} from '../../../actions/concretoActions'


function FormularioAddConcreto() {

const {register,reset,formState:{errors},handleSubmit,watch} = useForm()
const [showForm, setshowForm] = useState(false)
const dispatch = useDispatch()
const  {authToken} = useSelector(state => state.auth)
const  {resistenciaCompresion,moduloElasticidad,edadResistencia} = useSelector(state => state.concreto)

const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');



    const getApis = [setApiEdadResistencia,setApiModuloElasticidad,setApiResistenciaCompresion]
 
    const setData = (apis)=>{
        for (let item of apis)
        dispatch(item(config(authToken.access_token)))

    }

    useEffect(() => {
        setData(getApis)
    }, [])
    
  const [rc, setRc] = useState()
  const [md, setMd] = useState()
  const [ed, setEd] = useState()


  const selectItem = ({target})=>{
        if (target.value === 'defautl') {
            return
        }

    switch (target.id) {
        case 'RC':
            setRc(resistenciaCompresion.find(item => item._id === target.value))
            break;
        case 'ER':
            setEd(edadResistencia.find(item => item._id === target.value))
            break;
        case 'MD':
            setMd(moduloElasticidad.find(item => item._id === target.value))
            break;
        default:
            break;
    }
  }

  const onSubmit = (data,e)=>{
    console.log(e)
    console.log(data)

    data.codigoCyC = e.target.codigoCyC.value
    data.desCorta = e.target.desCorta.value

    for (let item of Object.keys(data)){
            if (data[item] === null){
                alert('Todos los campos son requeridos')
                return
            } 
    }

    dispatch(registerConcretoPremezclado(config(authToken.access_token),data))

    console.log('CONFIRM',data);

}


  return (                                                                                                                  
    <div>
        <div className={showForm?style.btnBack:style.btnAdd} onClick={()=>{setshowForm(!showForm);reset()}} >
            {showForm? <AiOutlineLine/>:<GrAdd style={{color:"#ffffff",fontSize:"20px"}}/>}
        </div>
        
        {showForm&&(
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.formHead}>
                    Propiedades Físico-Mecánicas del Concreto
                </div>
                <div className={style.selectForm}>
                    <label>Sistema de Unidades:</label>
                    <select {...register('unidadMedida',{required:true})}>
                        <option selected value='undefined'>Seleccionar Unidad de Medida...</option>
                        <option value='kgcm2'>Kg/cm2</option>
                        <option value='MPa'>MPa</option>
                        <option value='PSI'>PSI</option>
                    </select>
                </div>


            {watch('unidadMedida') === 'undefined' || typeof watch('unidadMedida') === 'undefined' ? null:
            <> 
                <hr></hr>
                <div className={style.selectForm}>
                    <label>Resistencia a la compresión:</label>
                    <select {...register('fk_resitenciaCompresion',{required:true})} id='RC' onChange={(e)=>selectItem(e)}>
                        <option value='defautl' selected>Seleccionar Resistencia compresión...</option>
                        {resistenciaCompresion&&resistenciaCompresion.map(item=>(
                            <option value={item._id}> {`${item[watch('unidadMedida')]} ${watch('unidadMedida')}`}</option>
                        ))}
                    </select>
                </div>

                <div className={style.InputForm} > 
                    <label>Tipo de Resistencia:</label>
                    <input  readOnly disabled value={rc?.tipoResistencia} />
                    <div style={{color:"#999"}}>Acorde con ACI 363R-92 Y ACI 211.1-91.</div>
                </div>


                <hr></hr>
                <div className={style.selectForm}>
                    <label>Modulo de Elásticidad:</label>
                    <select {...register('fk_moduloElasticidad',{required:true})} onChange={(e)=>selectItem(e)} id='MD'>
                        <option selected value='default'>Seleccionar Modulo de Elásticidad..</option>
                        {moduloElasticidad&&moduloElasticidad.map(item=>(
                            <option value={item._id}> {`${item[watch('unidadMedida')]} ${watch('unidadMedida')}`}</option>
                        ))}
                    </select>
                </div>
                <hr></hr>



                <div className={style.selectForm}>
                    <label>Edad Resistencia:</label>
                    <select {...register('fk_edadResistencia',{required:true})} onChange={(e)=>selectItem(e)} id='ER'>
                        <option selected value='default'>Seleccionar Edad Resistencia..</option>
                        {edadResistencia&&edadResistencia.map(item=>(
                            <option value={item._id}> {`${item.dias} dias`}</option>
                        ))}
                    </select>
                </div>
                                                                                                   
                <div className={style.InputForm} > 
                    <label>Descripción:</label>
                    <input  readOnly disabled value={ed?.descripcion}  />
                </div>
                <hr></hr>

                <div className={style.InputForm} > 
                    <label>Código C&C:</label>
                    <input  readOnly disabled  id='codigoCyC' value={`23-133113-${genRanHex(5)}`}  {...register('codigoCyC')} />
                </div>

                <div className={style.textareaForm}>
                    <label>Descripción Corta</label>
                    <textarea className="form-control" id='desCorta' {...register('desCorta')} style={{height:"100px"}} value={ rc &&  md &&`Concreto Estructural Premezclado de ${rc?.tipoResistencia} a la Compresión a los ${ed?.dias} dias de ${rc[watch('unidadMedida')]} con Modulo de Elásticidad de ${md[watch('unidadMedida')]} ${watch('unidadMedida')}`} disabled readOnly ></textarea>                     
                 </div>
            </>}

            <input type='submit' value='Registrar' className='buttonRegister'/>
            </form>
        )}
        

    </div>
  )
}

export default FormularioAddConcreto