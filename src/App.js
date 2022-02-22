
import './App.css';
import Main from "./components/Main"
import Episodios from "./components/Episodios"
import Ubicaciones from "./components/Ubicaciones"
import Personajes from "./components/Personajes"
import Navbar  from './components/Navbar';
import DetallePersonaje from "./components/DetallePersonaje"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/111-Routing/" element={<Main/>}/>
        <Route path="/111-Routing/personajes" element={<Personajes/>}/>
        <Route path="/111-Routing/personajes/:idPersonaje" element={<DetallePersonaje/>}/>
        <Route path="/111-Routing/episodios"  element={<Episodios/>}/>
        <Route path="/111-Routing/ubicaciones" element={<Ubicaciones/>} />
      </Routes>
    </BrowserRouter>

    
  )
}

export default App;
