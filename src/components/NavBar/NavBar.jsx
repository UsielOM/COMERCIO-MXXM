import logo from '../../assets/logo.png';
import  { useState } from 'react';
import React from 'react';

function NavBar( { enviarDatosAlPadre }) {
  const [datosEnHijo, setDatosEnHijo] = useState('');

  const handleClick = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado de navegación
    const clickedItem = event.target.innerText;
    setDatosEnHijo(clickedItem);
    // Llamamos a la función de devolución de llamada con los datos
    enviarDatosAlPadre(clickedItem);
  };



  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark flex-md-row align-items-center  border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand justify-content-center" href="#" >
        <img src={logo} alt="Logo" width="75" height="70" className="d-inline-block align-text-top"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#" >Inicio</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={handleClick}>LEGOS</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#" onClick={handleClick}>TERMOS</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#" onClick={handleClick}>VASOS</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#" onClick={handleClick}>OTROS</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" >Contáctanos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
