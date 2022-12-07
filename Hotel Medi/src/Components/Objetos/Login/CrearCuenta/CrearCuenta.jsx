import React from 'react'
import "./CrearCuenta.css"
import user from "../../../../assets/images/user.svg"
import { AiFillFacebook, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const IniciarSeccion = () => {
  return (
    <div>
      <h2 id='crearcuenta'>DEBES ESTAR LOGEADO</h2>
      
      <div className='containtiniciarcrearcuenta'>
      
      <div className='dimension12'>
      
        <div className='containtform'>
          
          <form action="">
          <img id='logocrear' src={user} alt="" />
            <section>
              <input className='placeform' type="text" placeholder='Name' />
              <input className='placeform' type="text" placeholder='Last Name' /><br />
              <input className='placeform' value='Date of birth' />
            
              <input className='placeform' type="date" />
              <span className='placeform'><br />
                
                <input className='placeform' value="Sex" />
                <select className='placeform' name="" id="">
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">No Binary</option>
                </select>
              </span><br />
              <input className='placeform' type="text" placeholder='Email address' />
              <input className='placeform' type="text" placeholder='Confirm Email address' /><br />
              <input className='placeform' type="password"  placeholder='Password'/>
              <input className='placeform' type="password"  placeholder='Confirm Password'/>
            </section>
            <section id='iniciars'>
              <NavLink to="/HootelMifife/CuentCreaExistosamente">
            <input  id='crearenviar' type="submit" value="Crear Cuenta" />
            </NavLink>
            </section>
          
          </form>
        </div>  
      </div>
      {/* <img src="https://www.videojuegosydesarrollo.com/wp-content/uploads/2020/01/login-blue-tones.jpg" width={"inider"} alt="" /> */}
    </div>

    </div>
    
  )
}

export default IniciarSeccion;
