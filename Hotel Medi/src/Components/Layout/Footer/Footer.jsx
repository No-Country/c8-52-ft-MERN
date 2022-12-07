import React from 'react'
import "./Footer.css"
import { AiFillFacebook, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { GoLocation } from "react-icons/go";


const Footer = () => {
  return (
    <div className="footera">
        <h3 id='contactofooter'>Contacta con nosotros en:</h3>

      <div className='social'>
        <i className='redes'><AiFillFacebook /></i>
        <i className='redes'><AiFillTwitterCircle /></i>
        <i className='redes'><AiFillInstagram /></i>
        <i className='redes'><FaTiktok /></i>
      </div>



          
      <div className='datosfooter'>
        <div className='containt-footer'>
        <p><i className='habicons'><GoLocation /></i>  Paseo Di Trevi 2712, Málaga, España</p>
        <p><i className='habicons'><AiOutlineMail /></i> Info@hotelmidife.com</p>
        <p><i className='habicons'><AiFillPhone /></i> 02291 420358  o  02291420293 </p>
        </div>

        
      </div>
      <i id='Copy'>
      &copy; Diseñado por Diana Duarte Escobar y Realizado por Miguel Ángel Quintero.
      </i>
       
    </div>
  )
}

export default Footer;
