import React from 'react'
import "./ExitoStandard.css"
import correcto from "../../../../assets/images/correcto.svg"
import { NavLink } from 'react-router-dom';

const ExitoStandard = () => {
  return (
    <div>
    <h2 id='titulo-creacion-exitosa'>¡¡EXCELENTE!!</h2>
    <div className='cont-creacion-exitosa'>
    <div className='cont-creacion-dimension'>
    
      <img id='logoexitoso' src={correcto} alt="" />
      <h3>CUENTA CREADA EXITOSAMENTE</h3><br />
            <NavLink to="/HotelMifife/zona/pagos/Standard">
            <input className='placform1' type="submit"  value="CONTINUAR" />
            </NavLink>
          
    </div>
  </div>
  </div>
  )
}

export default ExitoStandard;
