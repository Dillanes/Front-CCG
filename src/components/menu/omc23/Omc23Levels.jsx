import React,{useEffect,useState} from 'react'
import style from './omc23levels.module.css'
import SelectLevel from '../SelectLevel'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { setRegister } from '../../../reducers/omc23LevelsReducer'
import {getLevele1,
        getLevele2,
        getLevele3,
        getLevele4,
        getLevele5,
        getLevele6,
        getLevele7} from '../../../actions/omc23LevelsActions'
// import { setConcretoPremezclado } from '../../../actions/concretoActions'
import {config} from '../../../config/configApis'

function Omc23Levels() {

    const  dispatch = useDispatch()

    const {omcnivel1,
            omcnivel2,
            omcnivel3,
            omcnivel4,
            omcnivel5,
            omcnivel6,
            omcnivel7} = useSelector(state => state.omc23Leves)


    const {authToken} = useSelector(state => state.auth)

    const  getData = [getLevele1,
        getLevele2,
        getLevele3,
        getLevele4,
        getLevele5,
        getLevele6,
        getLevele7]

    const [omc23N2, setomc23N2] = useState(null)
    const [omc23N3, setomc23N3] = useState(null)
    const [omc23N4, setomc23N4] = useState(null)
    const [omc23N5, setomc23N5] = useState(null)
    const [omc23N6, setomc23N6] = useState(null)
    const [omc23N7, setomc23N7] = useState(null)
    const [showBtn, setshowBtn] = useState(false)



const  selectLevel = (event)=>{
    console.log(event.target.value)
    if(event.target.value === 'undefine'){
        setshowBtn(false)
    }

    switch (event.target.name) {
        case '1':
                if(event.target.value === 'undefine'){
                    setomc23N2(null)
                    setomc23N3(null)
                    setomc23N4(null)
                    setomc23N5(null)
                    setomc23N6(null)
                    setomc23N7(null)
                    return
                }
                const item = omcnivel1.find(item => item.Description === event.target.value)

                const strCodigo =  item.codigoOmniclass.slice(0,2)
                setomc23N2(omcnivel2.filter(item => item.CodigoOmniclass.includes(strCodigo)))
                setomc23N3(null)
                setomc23N4(null)
                setomc23N5(null)
                setomc23N6(null)
                setomc23N7(null)
            break;

        case '2':
            if(event.target.value === 'undefine'){
                setomc23N3(null)
                setomc23N4(null)
                setomc23N5(null)
                setomc23N6(null)
                setomc23N7(null)
                setshowBtn(false)
                return
            }

                setomc23N4(null)
                setomc23N5(null)
                setomc23N6(null)
                setomc23N7(null)

            const item2 = omcnivel2.find(item => item.Description === event.target.value) 
            dispatch(setRegister(item2))

            const strCodigo2 =  item2.CodigoOmniclass.slice(0,4)
            let data2 = omcnivel3.filter(item => item.CodigoOmniclass.includes(strCodigo2))
            if(data2.length !== 0){
                setomc23N3(data2)  
                setshowBtn(false)
            }else{
                setshowBtn(true)
                setomc23N3(null)
                setomc23N4(null)
                setomc23N5(null)
                setomc23N6(null)
                setomc23N7(null)
            }
            

            break;

        case '3':
            if(event.target.value === 'undefine'){
                setomc23N4(null)
                setomc23N5(null)
                setomc23N6(null)
                setomc23N7(null)
                setshowBtn(false)
                return
            }

                setomc23N5(null)
                setomc23N6(null)
                setomc23N7(null)


            const item3 = omcnivel3.find(item => item.Description === event.target.value) 
            dispatch(setRegister(item3))
            console.log(item3)
            const strCodigo3 =  item3.CodigoOmniclass.slice(0,6)
            let data3 = omcnivel4.filter(item => item.CodigoOmniclass.includes(strCodigo3))
            
            if(data3.length !== 0){
                setomc23N4(data3)  
                setshowBtn(false)
            }else{
                setshowBtn(true)
                setomc23N4(null)
                setomc23N5(null)
                setomc23N6(null)
                setomc23N7(null)
            }

            break;

        case '4':
            if(event.target.value === 'undefine'){
                setomc23N5(null)
                setomc23N6(null)
                setomc23N7(null)
                setshowBtn(false)
                return
            }

                setomc23N6(null)
                setomc23N7(null)

            const item4 = omcnivel4.find(item => item.Description === event.target.value) 
            dispatch(setRegister(item4))
            const strCodigo4 =  item4.CodigoOmniclass.slice(0,8)
            let data4 = omcnivel5.filter(item => item.CodigoOmniclass.includes(strCodigo4))
            if(data4.length !== 0){
                setomc23N5(data4)  
                setshowBtn(false)
            }else{
                setshowBtn(true)
                setomc23N5(null)
                setomc23N6(null)
                setomc23N7(null)
            }
            break;

        case '5':
            if(event.target.value === 'undefine'){
                setomc23N6(null)
                setomc23N7(null)
                setshowBtn(false)
                return
            }

                setomc23N7(null)

            const item5 = omcnivel5.find(item => item.Description === event.target.value) 
            dispatch(setRegister(item5))
            // console.log(item5)
            const strCodigo5 =  item5.CodigoOmniclass.slice(0,10)
            let data5 = omcnivel6.filter(item => item.CodigoOmniclass.includes(strCodigo5))
            if(data5.length !== 0){
                setomc23N6(data5)  
                setshowBtn(false)
            }else{
                setshowBtn(true)
                setomc23N6(null)
                setomc23N7(null)
            }
            break;

        case '6':
            if(event.target.value === 'undefine'){
                setomc23N7(null)
                setshowBtn(false)
                return
            }

            const item6 = omcnivel6.find(item => item.Description === event.target.value) 
    
            dispatch(setRegister(item6))
            const strCodigo6 =  item6.CodigoOmniclass.slice(0,10)
            let data6 = omcnivel7.filter(item => item.CodigoOmniclass.includes(strCodigo6))
            if(data6.length !== 0){
                setomc23N7(data6)  
                setshowBtn(false)
            }else{
                setshowBtn(true)
                setomc23N7(null)
            }
            break;

        case '7':
            if (event.target.value === 'undefine') {
                setshowBtn(false)
                return
            }

            const item7 = omcnivel7.find(item => item.Description === event.target.value) 
            dispatch(setRegister(item7))
            setshowBtn(true)
            break;
    
        default:
            break;
    }
    
}

const getAllData = (data)=>{
    for(let item of data){
        dispatch(item(config(authToken.access_token)))
    }
}

useEffect(() => {
        getAllData(getData) 

}, [])

  return (
    <div className={style.container}>
        <p className='tittle-levels'>Seleccionar por Categoría del Producto:</p>
        <p className='subtitle-levels'>Acorde a la Norma Omniclass 23</p>
        <div>

            <SelectLevel 
                tittle='Nivel 1' 
                data={omcnivel1} 
                id='1'
                selectLevel = {selectLevel}/>

            <SelectLevel 
                tittle='Nivel 2' 
                data={omc23N2} 
                id='2'
                selectLevel = {selectLevel}/>

            <SelectLevel 
                tittle='Nivel 3' 
                data={omc23N3} 
                id='3'
                selectLevel = {selectLevel}/>

            <SelectLevel    
                tittle='Nivel 4' 
                data={omc23N4} 
                id='4'
                selectLevel = {selectLevel}/>

            <SelectLevel 
                tittle='Nivel 5' 
                data={omc23N5} 
                id='5'
                selectLevel = {selectLevel}/>

            <SelectLevel 
                tittle='Nivel 6' 
                data={omc23N6} 
                id='6'
                selectLevel = {selectLevel}/>

            <SelectLevel 
                tittle='Nivel 7' 
                data={omc23N7} 
                id='7'/>

            {showBtn&& <div style={{width:"100px",height:"30px",display:"grid",placeContent:"center",backgroundColor:"#484",color:"#fff",borderRadius:"5px"}}><Link style={{color:"#fff",textDecoration:"none"}}  to='/registroOmc23' >Registrar</Link></div>}

        </div>

    </div>
    )
}

export default Omc23Levels