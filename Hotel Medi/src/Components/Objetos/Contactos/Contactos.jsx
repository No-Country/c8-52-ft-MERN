import React from 'react'
import "./Contactos.css"
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiFillPhone, AiFillFacebook } from "react-icons/ai";

const Contactos = () => {
  return (
    <div>
      <div className='containtinfo'>
      <div className='containthabit'>
      <h2>CONTACTA CON NOSOTROS</h2>

      <div className='infohabitacion'>

      

        <div className='detallehabitacion'>
          <hr />
          <div>
      <div>
        <h3>Contacto</h3>
        
        <p><i className='habicons'><GoLocation /></i>  Paseo Di Trivi 2712, Malaga, España</p>
        
        <p><i className='habicons'><AiOutlineMail /></i> Info@hotelmidife.com.co</p>
        
        <p><i className='habicons'><AiFillPhone /></i> 02291 420358 ó 02291420293 </p>
        
        <p> <i className='habicons'><AiFillFacebook /></i> <strong>Hotel Midife</strong></p>
      </div>
    </div>
          <hr />
        </div>
      </div>
     
        
    </div>
    
    </div>
    </div>







    
  )
}

export default Contactos;
