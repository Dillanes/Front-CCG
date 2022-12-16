import Login from "./pages/Login";
import NavRoutes from "./routes/NavRoutes";
import Header from "./components/global/Header";
import {useSelector} from 'react-redux'
import { BrowserRouter } from "react-router-dom";

function App() {

  const {authToken} = useSelector(state=> state.auth)
  console.log(authToken);
  return (
    <div>
      <BrowserRouter>
      <Header />
      {authToken?<NavRoutes/>:<Login/> }
      </BrowserRouter>
    </div>
  );
}

export default App;
