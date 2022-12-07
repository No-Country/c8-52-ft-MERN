import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className='headera'>
              <div className='headerlogo'>
              </div>
      <div className='containerheader'>


      
      <div className='containlinks'>
        <NavLink to="/inicio" className="blanco">
          <button>HOME</button>
        </NavLink>

        <NavLink to="/informacion/Habitaciones" className="blanco" >
        <button>HABITACIONES</button>
        </NavLink>

        <NavLink to="./tarifas" className="blanco">
          <button>TARIFAS</button>
        </NavLink>

        <NavLink to="./misReservas" className="blanco">
          <button> MIS RESERVAS</button>
        </NavLink>

        {/* <NavLink to="/loginIciarSeccion" className="blanco">
          <button>INICIAR SESION</button>
        </NavLink> */}

        {/* <NavLink to="./contactaConNosotros" className="blanco">
          <button>CONTACTOS</button>
        </NavLink> */}
      </div>

      </div>
    </div>
  )
}

export default Header
