import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src="../img/logo-png.png" alt="Logo Match & Glam" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/news" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Novedades
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
