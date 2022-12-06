import React from 'react'
import "./Premium.css"
import habitacion2 from "../../../../assets/images/habitacion2.jpg"
import habitacion2_1 from "../../../../assets/images/habitacion2_1.jpg"
import habitacion2_2 from "../../../../assets/images/habitacion2_2.jpg"

const Premium = () => {
  return (
    <div>
      <div className='containtinfo'>
      <div className='containthabit'>
      <h2>HABITACION PREMIUM</h2>

      <div className='infohabitacion'>

        <div className='carei'>
          <img id='cardhabit' src={habitacion2} alt="" />
        </div>

        <div className='detallehabitacion'>
          <hr />
          <h3>Premium</h3>
          <br />
          <p>Amplias habitaciones sobriamente decoradas, algunas de ellas con vistas privilegiadas hacia la playa. Con una elegancia y acabados refinados, con camas tamaño queen o twin, con zona de estar con sofá cama y un baño privado con ducha y bañera separada.
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
      <div className='pothosinfo'>
      <div className='carei2'>
          <img id='cardhabit' src={habitacion2_1} alt="" />
        </div>   
      <div className='carei2'>
          <img id='cardhabit' src={habitacion2_2} alt="" />
        </div>   
      </div>
        
    </div>
    
    </div>
    </div>
  )
}

export default Premium
