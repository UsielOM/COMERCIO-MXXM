
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import Foter from "./components/Foter/Foter";
import Jumbotron from './components/JumboTrons/Jumbotron';
import ButtonFloat from "./components/ButtonFloat/ButtonFloat";
import  { useState } from 'react';
import './App.css';






function App () {
  const [datosRecibidos, setDatosRecibidos] = useState(null);
  const manejarDatosDesdeHijo = (datos) => {
    // Aquí puedes manejar los datos recibidos, por ejemplo:
    setDatosRecibidos(datos);

  };

  return (
    <>
    <NavBar enviarDatosAlPadre={manejarDatosDesdeHijo}></NavBar>
    <header className='pading-jumbo'>
      <Jumbotron ></Jumbotron>
    </header>
    <Cards catalogoSeccion= {datosRecibidos}></Cards>
    <ButtonFloat></ButtonFloat>
    <Foter></Foter>
      </>
);
}

export default App;