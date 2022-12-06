import React from 'react'
import "./CuentCreaExistosamente.css"
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineEnter } from "react-icons/ai";
import user from "../../../../assets/images/user.svg"
import { NavLink } from 'react-router-dom';

const CuentCreaExistosamente = () => {
  return (
    <div>
    <h2 id='titulo-creacion-exitosa'>¡¡EXELENTE!!</h2>
    <div className='cont-creacion-exitosa'>
    <div className='cont-creacion-dimension'>
    
      <div className='containtformx'>
      <img id='logoiniciar1' src={user} alt="" />
        <form className='formcrear' action="">
          <section>
            <NavLink to="/hotelMidife/MiCuenta/Miguel-Quintero">
            <input className='placform1x' type="submit"  value="Iniciar Sesion" />
            </NavLink>
          </section>
          
        </form>
      </div>  
    </div>
  </div>
  </div>
  )
}

export default CuentCreaExistosamente;
