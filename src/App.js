import "./App.css";
import Main from "./components/Main";
import Episodios from "./components/Episodios";
import Ubicaciones from "./components/Ubicaciones";
import Personajes from "./components/Personajes";
import Navbar from "./components/Navbar";
import DetallePersonaje from "./components/DetallePersonaje";
import ErrorNoEncontrado from "./components/ErrorNoEncontrado";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useState } from "react";

const App = () => {
  const [isEminent, setIsEminent] = useState(false);

  const handleChange = (e) => {
    setIsEminent(e.target.checked); //si el input tiene un check puesto, va a ser true.
  }; //si no lo tiene, va a guardar en el estado false.

  const usuario = {
    nombre: "Yanina",
    apellido: "Bucca",
    edad: 22,
    isEminent: isEminent,
  };

  return (
    /* //UserContext tiene que englobar todos los componentes menos routes */
    <BrowserRouter>
      <UserContext.Provider value={usuario}>
        <label>Convertirme en eminent</label>
        <input type="checkbox" checked={isEminent} onChange={handleChange} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route
            path="/personajes/:idPersonaje"
            element={<DetallePersonaje />}
          />
          <Route path="/episodios" element={<Episodios />} />
          <Route path="/ubicaciones" element={<Ubicaciones />} />
          <Route path="*" element={<ErrorNoEncontrado />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
