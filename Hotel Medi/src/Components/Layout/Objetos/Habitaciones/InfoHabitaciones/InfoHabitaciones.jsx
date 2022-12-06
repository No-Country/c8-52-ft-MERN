import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import habitacion2 from "../../../../assets/images/habitacion2.jpg"
import habitacion3 from "../../../../assets/images/habitacion3.jpg"
import habitacion4 from "../../../../assets/images/habitacion4.jpg"
import "./InfoHabitaciones.css"

const InfoHabitaciones = () => {
  return (
    
    
<div className='containthabit'>
      <h2>NUESTRAS HABITACIONES</h2>

      <Link to="/informacion/Habitacion/Standar" className="blanco">
      <div className='infohabitacion'>

        <div className='carei'>
          <img id='cardhabit' src={habitacion4} alt="" />
        </div>

        <div className='detallehabitacion'>
          <hr />
          <h3>Standard</h3>
          <br />
          <p>Luminosa Habitacion con vista a los espacios verdes del Hotel. La habitacione cuenta con 1 cama doble o 2 camas individuales, cuarto con ducha y bañera separada 
          </p>
          <br />
          <ul>
            <li>Ambiente climatizado</li>
            <li>Wifi</li>
            <li>TV</li>
            <li>Telefono</li>
            <li>FrigoBar</li>
          </ul>
          <hr />
        </div>
      </div>
      </Link>

      <Link to="/informacion/Habitacion/Premium" className="blanco">
      <div className='infohabitacion'>

<div className='carei'>
  <img id='cardhabit' src={habitacion2} alt="" />
</div>
  
<div className='detallehabitacion'>
  <hr />
  <h3>PREMIUM</h3>
  <br />
  <p>Amplias habitaciones sobriamente decoradas, algunas de ellas con vistas privilegiadas hacia la playa. Con una
    elegancia y acabados refinados, con camas tamaño queen o twin, con zona de estar con sofá cama y un baño privado con ducha y bañera separada.
  </p>
  <br />
  <ul>
    <li>Ambiente climatizado</li>
    <li>Wifi</li>
    <li>TV</li>
    <li>Telefono</li>
    <li>FrigoBar</li>
  </ul>
  <hr />
</div>
</div>

      </Link>


      <Link to="/informacion/Habitacion/Suite" className="blanco">
      <div className='infohabitacion'>

<div className='carei'>
  <img id='cardhabit' src={habitacion3} alt="" />
</div>

<div className='detallehabitacion'>
  <hr />
  <h3>SUITE</h3>
  <br />
  <p>Estas exquisitas y exclusivas suites ofrecen amplias vistas panorámicas al mar y con instalaciones de la más alta calidad para garantizar la máxima comodidad. Cada Suite cuenta con una cama tamaño queen o dos camas individuales; baño de mármol en suite; y un gran salón independiente con sala de estar, sofá cama y baño privado. 
  </p>
  <br />
  <ul>
    <li>Ambiente climatizado</li>
    <li>Wifi</li>
    <li>TV</li>
    <li>Telefono</li>
    <li>FrigoBar</li>
  </ul>
  <hr />
</div>
</div>
      </Link>


    </div>
    
    
  )
}

export default InfoHabitaciones;