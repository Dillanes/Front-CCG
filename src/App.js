import Login from "./pages/Login";
import NavRoutes from "./routes/NavRoutes";
import Header from "./components/global/Header";
import style from './app.module.css'
import {useSelector} from 'react-redux'
import { BrowserRouter } from "react-router-dom";

function App() {

  const {authToken} = useSelector(state=> state.auth)
  console.log(authToken);
  return (
    <div className={style.container}>
      <BrowserRouter>
      <Header />
      {authToken?<NavRoutes/>:<Login/> }
      </BrowserRouter>
    </div>
  );
}

export default App;
