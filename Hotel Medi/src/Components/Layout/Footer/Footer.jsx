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
      <div className='social'>
        <i className='redes'><AiFillFacebook /></i>
        <i className='redes'><AiFillTwitterCircle /></i>
        <i className='redes'><AiFillInstagram /></i>
        <i className='redes'><FaTiktok /></i>
      </div>



          
      <div className='datosfooter'>
        <h3>Contacta con nosotros</h3>
        <p><i className='habicons'><GoLocation /></i>  Paseo Di Trivi 2712, Malaga, España</p>
        <p><i className='habicons'><AiOutlineMail /></i> Info@hotelmidife.com.co</p>
        <p><i className='habicons'><AiFillPhone /></i> 02291 420358 ó 02291420293 </p>
        
      </div>
    
    </div>
  )
}

export default Footer;
