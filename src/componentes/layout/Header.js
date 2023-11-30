import React from 'react';
import LogoSalonFiestablanco from '../../imagen/LogoSalonFiestablanco.png';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo'>
        <img src={ LogoSalonFiestablanco } alt= 'Salón de Fiestas logo ' />
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? "activo" : undefined)}>Home</NavLink></li>
          <li><NavLink to="/Galeria" className={({ isActive }) => (isActive ? "activo" : undefined)}>Galeria</NavLink></li>
          <li><NavLink to="/servicios" className={({ isActive }) => (isActive ? "activo" : undefined)}>Servicios</NavLink></li>
          <li><NavLink to="/novedades" className={({ isActive }) => (isActive ? "activo" : undefined)}>Novedades</NavLink></li>
          <li><NavLink to="/contacto" className={({ isActive }) => (isActive ? "activo" : undefined)}>Contacto</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;