import React from 'react'
import habitacion3_1 from "../../../assets/images/habitacion3_1.jpg"
import habitacion2_1 from "../../../assets/images/habitacion2_1.jpg"
import habitacion4 from "../../../assets/images/habitacion4.jpg"
import "./Tarifas.css"
import { Link } from 'react-router-dom'

const Tarifas = () => {
  return (
    <div>
      <h2 className='cntrar'>TARIFAS</h2>
    <div className='containtarifas'>
      
      <div className='temporada'>
        <h3 className='cntrar'>NOVIEMBRE - DICIEMBRE 2022</h3>
        <p className='cntrar'>VIGENTES DESDE EL 01/11/2022 AL 22/12/2022 "domingos a jueves; viernes y sábados" son <strong>REGULARES:</strong> no válidas para feriados, fines de semana largo y días especiales 
        </p>
      </div>
    </div>
    <div className='contienecar'>
    <div className='cardprecios'>
      <img className='imgtarifas' src={habitacion2_1} alt="" />
      <span className='precioss'>
      <h4>Standard</h4>
      <p>Domingos a Jueves 21.900</p>
      <p>Viernes y Sábado 24.500</p>
      </span>
      <Link  to="/confirmacionDeReservaHabitacionStandar">
      <button className='btnconf' >RESERVAR</button>
      </Link>
    </div>
    <div className='cardprecios'>
      <img className='imgtarifas' src={habitacion3_1} alt="" />
      <span className='precioss'>
      <h4>Premium</h4>
      <p>Domingos a Jueves 25.400</p>
      <p>Viernes y Sábado 28.500</p>
      </span>
      <Link  to="/confirmacionDeReservaHabitacionStandar">
      <button className='btnconf' >RESERVAR</button>
      </Link>
    </div>
    <div className='cardprecios'>
      <img className='imgtarifas' src={habitacion4} alt="" />
      <span className='precioss'>
      <h4>Suite</h4>
      <p>Domingos a Jueves 34.000</p>
      <p>Viernes y Sábado 37.000</p>
      </span>
      <Link  to="/confirmacionDeReservaHabitacionStandar">
      <button className='btnconf' >RESERVAR</button>
      </Link>
    </div>
    </div>

    </div> 
  )
}

export default Tarifas;
