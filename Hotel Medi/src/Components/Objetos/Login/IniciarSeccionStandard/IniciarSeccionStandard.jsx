import React from 'react'
import "./IniciarSeccionStandard.css"
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineEnter } from "react-icons/ai";
import user from "../../../../assets/images/user.svg"
import { NavLink } from 'react-router-dom';

const IniciarSeccionStandard = () => {
  return (
    <div>
      <h2 id='crearcuenta'>DEBES INICIAR SESIÓN</h2>
      <div className='containtIniciarSeccionStandard'>
      <div className='dimension1'>
      
        <div className='containtform'>
        <img id='logoiniciar1' src={user} alt="" />
          <form action="">
            <section>
              <i className='formicons'><BsFillPersonFill /></i>
              <input className='placform1' type="text" placeholder='Email adress' /><br />
              <i className='formicons'><RiLockPasswordFill /></i>
              <input className='placform1' type="password"  placeholder='Password' /><br />
              <i className='formicons'><AiOutlineEnter /></i>
              <NavLink to="/hotelMidife/MiCuenta/Miguel-Quintero">
              <input className='placform1' type="submit"  value="Log in" />
              </NavLink>
            </section>
 
            
            <section id='iniciarlog'>
              <label htmlFor="">Remenber password</label>
              <input type="checkbox" /><br />
              <NavLink to="/crearCuenta/Premium" className="blanco">
              <p>Create Account</p>
              </NavLink>
            </section>
            
          </form>
        </div>  
      </div>
    </div>
    </div>
    
  )
}

export default IniciarSeccionStandard;
