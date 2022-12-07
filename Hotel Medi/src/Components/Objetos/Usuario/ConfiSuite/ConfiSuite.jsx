import React from 'react'
// import habitacion3_1 from "../../../../assets/images/habitacion3_1.jpg"
// import habitacion2_1 from "../../../../assets/images/habitacion2_1.jpg"
// import habitacion4 from "../../../../assets/images/habitacion4.jpg"
import "./ConfiSuite.css"
import { Link } from 'react-router-dom'

const ConfiSuite = () => {
  return (
    <div>
      <h2 className='centrar'>CONFIRMACIÓN DE RESERVA</h2>
    <div className='containtarifas'>
      
      <div className='temporada'>
        <h3 className='centrar' id='colore'>¡¡Excelente Elección!! Habitación Suite</h3>
        <p> Gracias por preferir al <strong> Hotel Midife</strong>, la reserva se encuentra en proceso de confirmación,
        por favor verificar que los datos de la habitación sean los que has seleccionado. Seguidamente oprimir en realizar pago.
        </p>
      </div>
    </div>
    
    <div className='contienecar'>
    
    <div className='cardprecioss'>
      <div className='sub-cardprecioss'>
      <h1 id='nota'>Nota:</h1>
      <span>
        <p>
          <i>
          En caso que se haya realizado el pago y desee realizar la cancelación  de la reserva, este proceso debe realizarse mínimo con dos días de anticipación. Y el dinero sera retornado, de no ser asi, la habitación seguira en estado de reservado y no habrá retorno de dinero.
          </i>
        </p>
        <p>
          <i>
          Si desea dejar la habitación antes del tiempo que ya reservo, el precio seguira siendo el mismo.
          </i>

        </p>
        <p>
          <i>Si la reserva es con mascotas, puede transitar libremente con ellas por todas nuestras instalaciones excepto en las siguientes zonas:</i>

          <ul>
            <li>Restaurante y/o salón de comidas</li>
            <li>Piscinas</li>
          </ul>
        </p>
      </span>
      <span className='precioss'>
      <h4>TAMBIÉN</h4>
      <ul>
        <li>
        Cada habitación incluye garaje (parqueadero) para 1 vehículo o dos motos
        </li>
        <li>
        Contamos con un seguro de vida que hace respaldo a cada persona que se <strong>encuentre</strong> en nuestras instalaciones y cuente con una reserva en el hotel Midife
        </li>
      </ul>
      

      </span>

      </div>

    </div>

    <div className='cardprecios'>
      <span>
        <h3></h3>
      </span>
      <span className='precioss'>
      <h4>La Reserva en proceso de confirmación es la siguiente:</h4><br />
      <p>Reserva desde el <strong> 09/12/2022</strong></p>
      <p>Reserva Hasta el <strong> 19/12/2022</strong></p><br />
      <p>Adultos: 2</p>
      <p>Mascotas: Perro</p><br />
      <p>Precio: $ 375.100 ARS </p>


      </span>
      <Link to="/loginIciarSeccion">
      <button className='btnconf' >CONFIRMAR</button>
      </Link>
    </div>
    </div>
    </div> 
  )
}

export default ConfiSuite;
