// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './CSS/NavBar.css';

function NavBar({ onTrabajosPendientes, onTrabajosFinalizados, onIniciarSesion }) {
  return (
    <div className="navbar">
      <div className="title">UTALLERCITO</div>
      <div className="centered-buttons">
        <button className="orange-button" onClick={onTrabajosPendientes}>
          Trabajos Pendientes
        </button>
        <button className="orange-button" onClick={onTrabajosFinalizados}>
          Trabajos Finalizados
        </button>
      </div>
    </div>
  );
}

export default NavBar;
