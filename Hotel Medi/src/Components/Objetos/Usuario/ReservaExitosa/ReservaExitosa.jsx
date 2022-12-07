import React from 'react'
import "./ReservaExitosa.css"
import correcto from "../../../../assets/images/correcto.svg"
import { NavLink } from 'react-router-dom';

const ReservaExitosa = () => {
  return (
    <div>
    <h2 id='titulo-creacion-exitosa'>¡¡EXCELENTE!!</h2>
    <div className='cont-creacion-exitosa'>
    <div className='cont-creacion-dimension'>
    
      <img id='logoexitoso' src={correcto} alt="" />
      <h3>TU RESERVA ES TODO UN EXITO</h3><br />
            <NavLink to="/hotelMidife/MiCuenta/Miguel-Quintero">
            <input className='placform1' type="submit"  value="CONTINUAR" />
            </NavLink>
          
    </div>
  </div>
  </div>
  )
}

export default ReservaExitosa;
