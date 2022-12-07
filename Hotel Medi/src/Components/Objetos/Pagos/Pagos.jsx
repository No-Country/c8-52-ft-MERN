import React from 'react'
import "./Pagos.css"
import habitacion3 from "../../../assets/images/habitacion3.jpg"
import { Link } from 'react-router-dom'

const Pagos = () => {
  return (
    <div>
      <h2 id='zonapagos'>MEDIOS DE PAGO</h2>
      <div className="cont-zona-pagos">
        <div className="cont-zona-sub">
          <input className='input-pagos' type="text" placeholder='Name' />
          <input className='input-pagos' type="text" placeholder='DNI' />
          <input className='input-pagos' type="text" placeholder='Email adress' />
          <input className='input-pagos' type="text" placeholder='Phone' />
          <div className='texto-pagos'>
          <p id='introduce-datos'>Introduce datos bancarios</p>
          <img id='zona-pagos-img' src="data:image/png;base64,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" alt="" />
          </div>
          <input className='input-pagos' type="text" placeholder='Card number' />
          <div>
            <input className='input-pagos2' type="text" value="Account holder name" />
            <input className='input-pagos3' type="text" value="Expiration" /> 
          </div>
          <input className='input-pagos4' type="submit" value="Siguiente: tu banco" />
        </div>




        <div className="cont-zona-sub2">

        <div className="cont-zona-sub3">
          <div className="cont-zona-sub3-m">
          <h5>Entrada</h5>
          <p>Vie, 09 Dic 2022</p><br />
          <h5>Sálida</h5>
          <p>Vie, 19 Dic 2022</p><br />
          <h4>Total de la Reserva</h4>
          <h4><strong>ARS 375.000</strong></h4>
          <p><strong>(Impuestos Incluidos)</strong></p>
          <div className="cont-zona-sub4" >
          <img id='pagos-img' src={habitacion3} alt="" />
          <div className="spanepagos">
          <p>1 Hab. de tipo: </p>
          <p>Suite</p>
          <p>2 Adultos</p>
          <p>Parqueadero incluido</p>
          </div>
          </div>
          </div>      
        </div>
        <input className='input-pagos5' type="submit" value="CONFIRMAR PAGO" />
        </div>
      </div>
    </div>
  )
}

export default Pagos
