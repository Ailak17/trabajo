import NavBarE from './Components/NavBar/NavBarE';
import './App.css';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import SobreMi from './Paginas/SobreMi.js';
import Contacto from './Paginas/Contacto.js';
import {Aprendizaje} from "./Paginas/Aprendizaje"


function App() {
  

  return (
    <BrowserRouter>
    <NavBarE/>
      <Routes>
       <Route path = "/SobreMi" element = {<SobreMi/> } />
       <Route path = "/Contacto" element = {<Contacto/> }/>
       <Route path = "/Aprendizaje" element = {<Aprendizaje/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
