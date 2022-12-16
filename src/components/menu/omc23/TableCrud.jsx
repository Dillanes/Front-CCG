import React,{useEffect,useState} from 'react'
import style from './tablecrud.module.css'
import {BiAddToQueue} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import  {setConcretoPremezclado,deleteConcretoPremezclado} from '../../../actions/concretoActions'
import { agregarItem } from '../../../actions/carritoActions'
import Messages from '../../global/Messages'
import {config} from '../../../config/configApis'

function TableCrud() {

const  {authToken} = useSelector(state => state.auth)
const  dispatch = useDispatch()

useEffect(() => {
    dispatch(setConcretoPremezclado(config(authToken.access_token)))
}, [])

const {concretoPremezclado} = useSelector(state => state.concretoPremezclado)



const [currentPage, setcurrentPage] = useState(0)
const [noPage, setnoPage] = useState(1)
const [search, setsearch] = useState('')
const ConcretoPremezcladoCopy = concretoPremezclado? [...concretoPremezclado] :[]


const filterConcreto = ()=>{
    if(search.length === 0) return ConcretoPremezcladoCopy?.slice(currentPage,currentPage+5)

    const filter = ConcretoPremezcladoCopy.filter(item => item.desCorta.toLowerCase().trim().includes(search.toLowerCase().trim()) ||item.codigoOmniclass.toLowerCase().trim().includes(search.toLowerCase().trim()) || item.codigoCyC.toLowerCase().trim().includes(search.toLowerCase().trim()) )
    return filter.slice(currentPage, currentPage+5)
}

const FilterSearch = (e)=>{
    setcurrentPage(0)
    setnoPage(1)
    setsearch(e.target.value)
}

const previusPage = ()=>{
    if (currentPage >0) {
        setcurrentPage(currentPage-5)
        setnoPage(noPage-1)
    }
    return
}

const nextPage = ()=>{
    console.log(filterConcreto().length)
    if (currentPage < ConcretoPremezcladoCopy.length-currentPage || filterConcreto().length > currentPage+5) {
        setcurrentPage(currentPage+5)
        setnoPage(noPage+1)
    }

}

  return (
    <div className={style.container}>
        <div>
            <p className={style.tittle}>Lista de Productos:</p>
            <div className={style.containerSearch}>
                Bucar producto:
                <input placeholder='Search...' className={style.barSearch} value={search} onChange={e=>FilterSearch(e)}></input>
            </div>
        </div>
        <Messages/>
        <table className={style.table} border='1'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Omniclass</th>
                    <th>Código</th>
                    <th>Descripción</th>
                    <th>Add</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {concretoPremezclado?filterConcreto().map((item,id)=>(
                <tr key={item.identificador}>
                    <td>{id+1}</td>
                    <td>{item.codigoOmniclass}</td>
                    <td>{item.codigoCyC}</td>
                    <td>{item.desCorta}</td>
                    <td><BiAddToQueue onClick={()=>dispatch(agregarItem(item))} style={{cursor:"pointer",fontSize:'20px',color:"#494"}}/></td>
                    <td><FaEdit style={{cursor:"pointer",fontSize:'20px',color:"#494"}}/></td>
                    <td><AiFillDelete onClick={()=>dispatch(deleteConcretoPremezclado(config(authToken.access_token),item._id))} style={{cursor:"pointer",fontSize:'20px',color:"#c44"}}/></td>
                </tr>)):<span style={{backgroundColor:"#a2ddff",fontSize:"20px",color:"#555"}}>Loading....</span>}
            </tbody>
        </table>
        <div style={{display:"flex",gap:"20px",justifyContent:"center",margin:"20px"}}><button className='buttonRegister' onClick={()=>previusPage()}>Previus</button>Page:{noPage} de {Math.ceil(ConcretoPremezcladoCopy.length/5)}<button className='buttonRegister' onClick={()=>nextPage()}>Next</button></div>


    </div>
  )
}

export default TableCrud