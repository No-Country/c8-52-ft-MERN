import React from 'react'
import "./Suite.css"
import habitacion3 from "../../../../assets/images/habitacion3.jpg"
import habitacion3_1 from "../../../../assets/images/habitacion3_1.jpg"
import habitacion3_2 from "../../../../assets/images/habitacion3_2.jpg"
import habitacion3_3 from "../../../../assets/images/habitacion3_3.jpg"

const Suite = () => {
  return (

    <div>
    <div className='containtinfo'>
    <div className='containthabit'>
    <h2>HABITACIÓN SUITE</h2>

    <div className='infohabitacion'>

      <div className='carei'>
        <img id='cardhabit' src={habitacion3} alt="" />
      </div>

      <div className='detallehabitacion'>
        <hr />
        <h3>Suite</h3>
        <br />
        <p>
        Estas exquisitas y exclusivas suites ofrecen amplias vistas panorámicas al mar y con instalaciones de la más alta calidad para garantizar la máxima comodidad. Cada Suite cuenta con una cama tamaño queen o dos camas individuales; baño de mármol en suite; y un gran salón independiente con sala de estar, sofá cama y baño privado.
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
        <img id='cardhabit' src={habitacion3_1} alt="" />
      </div>   
    <div className='carei2'>
        <img id='cardhabit' src={habitacion3_2} alt="" />
      </div>   
    <div className='carei2'>
        <img id='cardhabit' src={habitacion3_3} alt="" />
      </div> 
    </div>
      
  </div>
  
  </div>
  </div>
  )
}

export default Suite

