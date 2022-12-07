import React from 'react'
import "./Standar.css"
import habitacion4 from "../../../../assets/images/habitacion4.jpg"
import habitacion4_1 from "../../../../assets/images/habitacion4_1.jpg"
import habitacion4_2 from "../../../../assets/images/habitacion4_2.jpg"



const Standar = () => {
  return (

       <div className='containtinfo'>
      <div className='containthabit'>
      <h2>HABITACIÓN STANDARD</h2>

      <div className='infohabitacion'>

        <div className='carei'>
          <img id='cardhabit' src={habitacion4} alt="" />
        </div>

        <div className='detallehabitacion'>
          <hr />
          <h3>Standard</h3>
          <br />
          <p>Luminosa habitación con vista a los espacios verdes del Hotel. La habitación cuenta con 1 cama doble o 2 camas individuales, cuarto con ducha y bañera separada.
          </p>
          <br />
          <ul>
            <li>Ambiente climatizado</li>
            <li>Wifi</li>
            <li>TV</li>
            <li>Teléfono</li>
            <li>Frigobar</li>
          </ul>
          <hr />
        </div>
      </div>
      <div className='pothosinfo'>
      <div className='carei2'>
          <img id='cardhabit' src={habitacion4_1} alt="" />
        </div>   
      <div className='carei2'>
          <img id='cardhabit' src={habitacion4_2} alt="" />
        </div>   
      </div>
        
    </div>
    
    </div>
   
  )
}

export default Standar;
