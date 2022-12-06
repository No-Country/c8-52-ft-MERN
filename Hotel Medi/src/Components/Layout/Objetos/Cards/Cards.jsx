import React from 'react'
import { MdPets } from "react-icons/md";
import { FiCoffee } from "react-icons/fi";
import { AiOutlineWifi } from "react-icons/ai";
import { BiSlideshow } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import "./Cards.css"
import habitacion2 from "../../../assets/images/habitacion2.jpg"
import habitacion3 from "../../../assets/images/habitacion3.jpg"
import habitacion4 from "../../../assets/images/habitacion4.jpg"
import Formulario from '../Formularios/Formulario';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div>
      <div className='containtcares'>
        <Formulario />

        <Link to="/informacion/Habitacion/Standar" >
        <span className='infocar'>
        <h2>STANDAR</h2>
        <div className='card'>
          <img src={habitacion2} alt="" />
          <i className='habicons'><MdPets /></i>
          <i className='habicons'><FiCoffee /></i>
          <i className='habicons'><AiOutlineWifi /></i>
          <i className='habicons'><BiSlideshow /></i>
          <i className='habicons'><FaBath /></i>
        </div>
        </span>
        </Link>

        <Link to="/informacion/Habitacion/Premium" >
        <span className='infocar'>
        <h2>PREMIUM</h2>
        <div className='card'>
          <img src={habitacion3} alt="" />
          <i className='habicons'><MdPets /></i>
          <i className='habicons'><FiCoffee /></i>
          <i className='habicons'><AiOutlineWifi /></i>
          <i className='habicons'><BiSlideshow /></i>
          <i className='habicons'><FaBath /></i>
        </div>
        </span>
        </Link>

        <Link to="/informacion/Habitacion/Suite" >
        <span className='infocar'>
          <h2>SUITE</h2>
          <div className='card'>
                  <img src={habitacion4} alt="" />
                  <i className='habicons'><MdPets /></i>
                  <i className='habicons'><FiCoffee /></i>
                  <i className='habicons'><AiOutlineWifi /></i>
                  <i className='habicons'><BiSlideshow /></i>
                  <i className='habicons'><FaBath /></i>
                </div>
        </span>
        </Link>






      </div>
    </div>
  )
}

export default Cards;
