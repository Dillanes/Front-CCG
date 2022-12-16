import { Route,Routes } from 'react-router-dom'
import Omc23Levels from '../components/menu/omc23/Omc23Levels'
import Omc23Crud from '../components/menu/omc23/Omc23Crud'
function NavRoutes() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Omc23Levels/>}/>
      <Route path='/registroOmc23' element={<Omc23Crud/>}></Route>
      <Route path='/settings' element={<div>HOLA MUCHO GUSTO SETTINGS</div>}/>   
    </Routes>
    <br>
    </br>
    <br></br>
    <br></br>
    </>

  )
}

export default NavRoutes