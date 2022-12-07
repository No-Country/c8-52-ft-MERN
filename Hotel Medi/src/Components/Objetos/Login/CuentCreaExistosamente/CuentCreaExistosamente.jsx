import React from 'react'
import "./CuentCreaExistosamente.css"
import user from "../../../../assets/images/user.svg"
import { NavLink } from 'react-router-dom';

const CuentCreaExistosamente = () => {
  return (
    <div>
    <h2 id='titulo-creacion-exitosa'>¡¡EXCELENTE!!</h2>
    <div className='cont-creacion-exitosa'>
    <div className='cont-creacion-dimension'>
    
      <img id='logoexitoso' src={user} alt="" />
      <h3>CUENTA CREADA EXITOSAMENTE</h3><br />
            <NavLink to="/HotelMifife/zona/pagos">
            <input className='placform1' type="submit"  value="CONTINUAR" />
            </NavLink>
          
    </div>
  </div>
  </div>
  )
}

export default CuentCreaExistosamente;
